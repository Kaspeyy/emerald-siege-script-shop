import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { StatusBadge } from "./StatusBadge";

export function ProductCard({ product }: { product: Product }) {
  const featured = product.category === "Bundle";
  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id }}
      className={`group clip-corner relative flex flex-col overflow-hidden border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow ${
        featured ? "border-primary/50" : "border-border"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {product.category}
        </span>
        <StatusBadge status={product.status} />
      </div>
      <h3 className="relative mt-6 text-2xl uppercase text-foreground">{product.name}</h3>
      <p className="relative mt-2 text-muted-foreground">{product.tagline}</p>
      <ul className="relative mt-6 space-y-2 text-sm text-foreground/80">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1 w-3 bg-primary" />
            {f}
          </li>
        ))}
      </ul>
      <div className="relative mt-8 flex items-end justify-between border-t border-border/60 pt-5">
        <div>
          <span className="block font-mono text-xs uppercase text-muted-foreground">Lifetime</span>
          <span className="font-wide text-2xl font-extrabold text-primary">{formatPrice(product.price)}</span>
        </div>
        <span className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
