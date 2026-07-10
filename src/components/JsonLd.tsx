import React from 'react';
import { SITE_URL, SUPPORT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL } from '@/lib/config';

export default function JsonLd() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Planet Petly",
        "alternateName": "Petly",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.svg`,
        "image": `${SITE_URL}/overview-1.jpeg`,
        "sameAs": [
            INSTAGRAM_URL,
            FACEBOOK_URL,
            TIKTOK_URL
        ],
        "description": "Planet Petly is a premium pet brand dedicated to high-performance, eco-friendly pet essentials. We specialize in sustainable waste bags, holders, and innovative pet care solutions.",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": SUPPORT_EMAIL,
            "contactType": "customer support"
        }
    };

    const productData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Planet Petly Poop Bag Holder",
        "description": "Never search for waste bags again. Our poop bag holder with included rolls and built-in dispenser keeps bags easily accessible on every walk.",
        "brand": {
            "@type": "Brand",
            "name": "Planet Petly"
        },
        "offers": {
            "@type": "Offer",
            "url": SITE_URL,
            "priceCurrency": "USD",
            "availability": "https://schema.org/PreOrder"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
            />
        </>
    );
}
