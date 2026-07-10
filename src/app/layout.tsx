import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import JsonLd from "@/components/JsonLd";
import { SITE_URL, META_PIXEL_ID } from "@/lib/config";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dog Poop Bag Holder Tray & Dispenser | 150 Eco Bags",
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
    title: "Dog Poop Bag Holder Tray & Dispenser | 150 Eco Bags",
    description:
      "Never search for poop bags again. Organized holder tray with dispenser and 150 compostable bags for easy, mess-free dog walks.",
    url: SITE_URL,
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
    title: "Dog Poop Bag Holder Tray & Dispenser | 150 Eco Bags",
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
        <JsonLd />
        {children}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
