import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Planet Pelty | Eco-Friendly Pet Products",
  description:
    "Never search for waste bags again. Our poop bag holder with included rolls and built-in dispenser keeps bags easily accessible on every walk. Lightweight, durable, and easy to attach to any leash for clean, hassle-free pet outings.",
  keywords: ["eco-friendly pet products", "compostable poop bags", "sustainable pets", "planet pelty", "leak-proof poop bag holder"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Poop Bag Holder with Rolls & Dispenser – Portable, Leak-Proof Dog Waste Bag Holder",
    description:
      "Never search for waste bags again. Our poop bag holder with included rolls and built-in dispenser keeps bags easily accessible on every walk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
