"use client";

import Image from "next/image";

const OVERVIEW_ITEMS = [
    {
        src: "/overview-1.jpeg",
        alt: "Functionality driven design",
    },
    {
        src: "/overview-2.jpeg",
        alt: "Durable and long lasting materials",
    },
    {
        src: "/overview-3.jpeg",
        alt: "Sustainable and eco-friendly standards",
    },
    {
        src: "/overview-4.jpeg",
        alt: "Simple and intuitive organization",
    },
] as const;

function OverviewCard({
    src,
    alt,
}: (typeof OVERVIEW_ITEMS)[number]) {
    return (
        <article
            className="group relative overflow-hidden rounded-xl cursor-default"
            aria-label={alt}
        >
            <div className="aspect-[16/12] w-full overflow-hidden rounded-xl">
                <Image
                    src={src}
                    alt={alt}
                    width={960}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            </div>
        </article>
    );
}

export default function Overview() {
    return (
        <section
            id="overview"
            className="pb-24 pt-16 px-6 bg-white"
            aria-label="Features overview"
        >
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                        Designed for Convenience                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary font-outfit">
                        Built for Everyday Life.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                    {OVERVIEW_ITEMS.map((item) => (
                        <OverviewCard key={item.src} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
