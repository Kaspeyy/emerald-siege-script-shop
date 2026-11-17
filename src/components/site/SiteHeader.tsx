import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DISCORD_URL } from "@/lib/products";
import { SnakeMark } from "./SnakeMark";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <SnakeMark className="h-8 w-8 text-primary" />
          <span className="font-wide text-lg font-extrabold uppercase tracking-tight text-foreground">
            Shyy<span className="text-primary"> Market</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#scripts" className="transition-colors hover:text-primary">Scripts</a>
          <a href="/#why" className="transition-colors hover:text-primary">Why us</a>
          <a href="/#faq" className="transition-colors hover:text-primary">FAQ</a>
        </nav>
        <Button asChild variant="tactical" size="sm">
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">Join Discord</a>
        </Button>
      </div>
    </header>
  );
}
