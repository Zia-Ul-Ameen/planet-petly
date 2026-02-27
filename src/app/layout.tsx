import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Planet Pelty | Eco-Friendly Pet Products",
  description:
    "Planet Pelty creates sustainable, eco-friendly pet products for conscious pet owners. Explore our compostable poop bags and more.",
  keywords: ["eco-friendly pet products", "compostable poop bags", "sustainable pets", "planet pelty"],
  openGraph: {
    title: "Planet Pelty | Eco-Friendly Pet Products",
    description:
      "Sustainable, eco-friendly pet products for conscious pet owners.",
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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
