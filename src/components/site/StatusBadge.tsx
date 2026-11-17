import type { Product } from "@/lib/products";

export function StatusBadge({ status }: { status: Product["status"] }) {
  const tone =
    status === "Updating"
      ? "border-chart-4/40 text-chart-4"
      : "border-primary/40 text-primary";
  return (
    <span className={`inline-flex items-center gap-2 border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${tone}`}>
      <span className={`h-1.5 w-1.5 rounded-full animate-pulse-dot ${status === "Updating" ? "bg-chart-4" : "bg-primary"}`} />
      {status}
    </span>
  );
}
