import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planetpetly.com"),
  title: "Wall Mounted Pet Waste Bag Holder",
  description:
    "Never search for poop bags again. Organized holder tray with dispenser and 150 compostable bags for easy, mess-free dog walks.",
  keywords: [
    "eco-friendly pet products",
    "compostable poop bags",
    "sustainable pet care",
    "planet petly",
    "leak-proof poop bag holder",
    "biodegradable pet waste bags",
    "premium pet accessories"
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg?v=2",
    apple: "/favicon.svg?v=2",
  },
  openGraph: {
    title: "Wall Mounted Pet Waste Bag Holder",
    description:
      "Never search for poop bags again. Organized holder tray with dispenser and 150 compostable bags for easy, mess-free dog walks.",
    url: "https://planetpetly.com",
    siteName: "Planet Petly",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta-share.png",
        width: 1200,
        height: 630,
        alt: "Planet Petly - Premium Sustainable Pet Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall Mounted Pet Waste Bag Holder",
    description: "Never search for poop bags again. Organized holder tray with dispenser and 150 compostable bags for easy, mess-free dog walks.",
    images: ["/meta-share.png"],
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
        <LanguageProvider>
          <JsonLd />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
