import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planetpetly.com"),
  title: "Planet Petly | Eco-Friendly Pet Products",
  description:
    "Never search for waste bags again. Our poop bag holder with included rolls and built-in dispenser keeps bags easily accessible on every walk. Lightweight, durable, and easy to attach to any leash for clean, hassle-free pet outings.",
  keywords: ["eco-friendly pet products", "compostable poop bags", "sustainable pets", "planet petly", "leak-proof poop bag holder"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Planet Petly | Poop Bag Holder with Rolls & Dispenser",
    description:
      "Never search for waste bags again. Our poop bag holder with included rolls and built-in dispenser keeps bags easily accessible on every walk.",
    url: "https://planetpetly.com",
    siteName: "Planet Petly",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/overview-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Planet Petly - Eco-Friendly Pet Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Petly | Eco-Friendly Pet Products",
    description: "Never search for waste bags again. Lightweight, durable, and sustainable pet essentials.",
    images: ["/overview-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#2e4437",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
