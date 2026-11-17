import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import foggyField from "@/assets/foggy-field.jpg";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StatusBadge } from "@/components/site/StatusBadge";
import { ProductCard } from "@/components/site/ProductCard";
import { DISCORD_URL, formatPrice, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.product.name} — Shyy Market` : "Script — Shyy Market";
    const description = loaderData?.product.description ?? "Rainbow Six Siege script by Shyy Market.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1 className="text-3xl uppercase text-foreground">Script not found</h1>
      <Button asChild variant="tacticalOutline">
        <Link to="/">Back to store</Link>
      </Button>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden pt-16">
        <img
          src={foggyField}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-bottom-fade" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Link to="/" hash="scripts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All scripts
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{product.category}</span>
              <StatusBadge status={product.status} />
            </div>
            <h1 className="mt-4 text-5xl uppercase text-foreground md:text-7xl">{product.name}</h1>
            <p className="mt-4 text-xl text-primary">{product.tagline}</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{product.description}</p>
          </div>

          <aside className="clip-corner self-start border border-primary/40 bg-card/80 p-8 shadow-card backdrop-blur">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Lifetime access</span>
            <p className="mt-2 font-wide text-5xl font-extrabold text-primary">{formatPrice(product.price)}</p>
            <ul className="mt-8 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Button asChild variant="tactical" size="xl" className="mt-8 w-full">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">Buy via Discord</a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Open a ticket and we'll deliver instantly.</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl uppercase text-foreground">More scripts</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
