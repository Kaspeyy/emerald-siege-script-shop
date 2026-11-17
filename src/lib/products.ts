export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: "Utility" | "Overlay" | "Bundle";
  status: "Live" | "Updating" | "New";
  features: string[];
};

// Placeholder link: replace with the store's real Discord invite.
export const DISCORD_URL = "https://discord.gg/";

// Sample catalog: replace names, prices and descriptions with the real scripts.
export const products: Product[] = [
  {
    id: "fog-overlay",
    name: "Fog Overlay",
    tagline: "Clean, customizable crosshair overlay",
    description:
      "A lightweight crosshair overlay with dozens of styles, colors and sizes. Zero FPS impact.",
    price: 6.99,
    category: "Overlay",
    status: "New",
    features: ["40+ crosshair styles", "Custom colors", "Zero FPS impact", "Borderless & fullscreen"],
  },
  {
    id: "sens-calibrator",
    name: "Sens Calibrator",
    tagline: "Dial in your perfect sensitivity",
    description:
      "Converts and calibrates your sensitivity across scopes so every zoom feels the same.",
    price: 4.99,
    category: "Utility",
    status: "Updating",
    features: ["Scope-matched sens", "Import from other games", "Presets per scope", "Simple setup"],
  },
  {
    id: "shyy-bundle",
    name: "Shyy Bundle",
    tagline: "Every tool. One price.",
    description:
      "Get Fog Overlay, Sens Calibrator and Ranked Toolkit together with priority support.",
    price: 29.99,
    category: "Bundle",
    status: "Live",
    features: ["All 3 tools", "Priority support", "Early access to new drops", "Lifetime updates"],
  },
  {
    id: "ranked-toolkit",
    name: "Ranked Toolkit",
    tagline: "Stats tracker & match reminders",
    description:
      "Track your K/D, win rate and operator picks across sessions, with between-round reminders.",
    price: 7.99,
    category: "Utility",
    status: "New",
    features: ["Session stats", "Operator win rates", "Round reminders", "Export to CSV"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
