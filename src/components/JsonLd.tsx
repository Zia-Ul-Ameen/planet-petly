import React from 'react';

export default function JsonLd() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Planet Petly",
        "url": "https://planetpetly.com",
        "logo": "https://planetpetly.com/logo.svg",
        "sameAs": [
            "https://www.instagram.com/planetpetly"
        ],
        "description": "Eco-friendly pet products including compostable poop bags and leak-proof holders."
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
