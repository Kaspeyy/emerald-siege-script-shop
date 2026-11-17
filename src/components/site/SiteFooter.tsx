import { DISCORD_URL } from "@/lib/products";
import { SnakeMark } from "./SnakeMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <SnakeMark className="h-6 w-6 text-primary" />
          <span className="font-wide font-extrabold uppercase text-foreground">Shyy Market</span>
        </div>
        <p>Not affiliated with Ubisoft. Use scripts at your own risk.</p>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
          Discord
        </a>
      </div>
    </footer>
  );
}
