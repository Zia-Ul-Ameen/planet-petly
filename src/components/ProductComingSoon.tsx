"use client";

import Image from "next/image";

const COMING_SOON_PRODUCTS = [
    {
        id: "product-1",
        name: "Luxe Pet Harness",
        description: "Innovative ergonomic design for maximum comfort and control during walks.",
        image: "/overview-1.jpeg"
    },
    {
        id: "product-2",
        name: "Smart Ceramic Bowl",
        description: "Modern anti-slip ceramic bowl with an oak wood stand for a stylish home.",
        image: "/overview-2.jpeg"
    }
];

export default function ProductComingSoon() {
    return (
        <section id="products" className="py-24 bg-white px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a3a2a] leading-tight font-outfit uppercase">
                            Explore our <br />
                            <span className="text-[#2a7dc9]">Product</span>
                        </h2>
                        <p className="mt-6 text-gray-500 text-lg">
                            Explore our upcoming products to find high-quality, innovative solutions designed to meet your pet's needs.
                        </p>
                    </div>
                </div>

                {/* Product Grid — 4 Columns for smaller cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {COMING_SOON_PRODUCTS.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 shadow-md hover:shadow-lg">
                            {/* Product Image Area — Compact Square */}
                            <div className="relative aspect-square w-full overflow-hidden bg-white">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Coming Soon Overlay — Smaller Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[#ffce00] text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-2 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-extrabold text-[#1a3a2a] mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
