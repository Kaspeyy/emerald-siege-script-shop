import { createFileRoute } from "@tanstack/react-router";
import { Download, Headphones, RefreshCw, ShieldCheck } from "lucide-react";
import foggyField from "@/assets/foggy-field.jpg";
import banner from "@/assets/shyy-market-banner.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { DISCORD_URL, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyy Market — Rainbow Six Siege Scripts" },
      {
        name: "description",
        content: "Handmade Rainbow Six Siege scripts: recoil control, overlays, macros and more.",
      },
      { property: "og:title", content: "Shyy Market — Rainbow Six Siege Scripts" },
      {
        property: "og:description",
        content: "Handmade Rainbow Six Siege scripts: recoil control, overlays, macros and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: Download, title: "Instant delivery", text: "Get your script and setup guide right after purchase." },
  { icon: RefreshCw, title: "Lifetime updates", text: "Every season patch, we update. You never pay twice." },
  { icon: ShieldCheck, title: "Built by players", text: "Made and tested by a Champion-ranked player." },
  { icon: Headphones, title: "Discord support", text: "Real help from the dev, usually within the hour." },
];

const faqs = [
  { q: "How do I get my script after buying?", a: "You'll get a download link and a setup guide straight away, plus a role in our Discord." },
  { q: "Do scripts work after game updates?", a: "Yes. Every script gets free updates for life, usually within 24 hours of a patch." },
  { q: "Which payment methods do you accept?", a: "Open a ticket in our Discord and we'll sort out payment with you directly." },
  { q: "Can I get a refund?", a: "If a script doesn't work on your setup and we can't fix it, we'll refund you." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
        <img
          src={foggyField}
          alt=""
          width={1920}
          height={1088}
          className="fog-drift absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 bg-bottom-fade" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-primary/40 bg-background/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              Rainbow Six Siege · Y11 ready
            </span>
            <h1 className="mt-6 text-6xl uppercase leading-[0.9] text-foreground md:text-8xl">
              Shyy
              <br />
              <span className="text-gradient-primary text-glow">Market</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Handmade R6 scripts for players who want an edge. Recoil control, overlays and
              macros — quietly tuned, constantly updated.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="tactical" size="xl">
                <a href="#scripts">Browse scripts</a>
              </Button>
              <Button asChild variant="tacticalOutline" size="xl">
                <a href={DISCORD_URL} target="_blank" rel="noreferrer">Join the Discord</a>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6">
              {[
                ["2.4k+", "Players"],
                ["6", "Scripts"],
                ["24h", "Patch updates"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-wide text-2xl font-extrabold text-foreground">{v}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="scripts" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// The arsenal</p>
            <h2 className="mt-3 text-4xl uppercase text-foreground md:text-5xl">Scripts</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One-time payment, lifetime access. Pick a single script or grab the bundle.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Perks */}
      <section id="why" className="scroll-mt-20 border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-lg uppercase text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner + FAQ */}
      <section id="faq" className="mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// Questions</p>
          <h2 className="mt-3 text-4xl uppercase text-foreground md:text-5xl">FAQ</h2>
          <img
            src={banner.url}
            alt="Shyy Market"
            width={600}
            height={240}
            loading="lazy"
            className="clip-corner mt-10 w-full border border-border shadow-card"
          />
        </div>
        <Accordion type="single" collapsible className="self-end">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <SiteFooter />
    </div>
  );
}
