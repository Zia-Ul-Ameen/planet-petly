import React from 'react';

export default function JsonLd() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Planet Petly",
        "alternateName": "Petly",
        "url": "https://planetpetly.com",
        "logo": "https://planetpetly.com/logo.svg",
        "image": "https://planetpetly.com/overview-1.jpeg",
        "sameAs": [
            "https://www.instagram.com/planetpetly",
            "https://www.facebook.com/profile.php?id=61583994294451",
            "https://www.tiktok.com/@planetpetly.com?_r=1&_t=ZS-94UFqTFHEAS",
            "https://youtube.com/@planetpetly?si=6LDDjMGo3So84ti8"
        ],
        "description": "Planet Petly is a premium pet brand dedicated to high-performance, eco-friendly pet essentials. We specialize in sustainable waste bags, holders, and innovative pet care solutions.",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "customercare@adrarecom.com",
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
            "url": "https://planetpetly.com",
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
