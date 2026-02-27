"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";

const OVERVIEW_ITEMS = [
    {
        src: "/overview-1.jpeg",
        alt: "Happy dog running on a nature trail",
        headline: "Nature-First Design",
        description: "Products crafted to coexist with the natural world.",
    },
    {
        src: "/overview-2.jpeg",
        alt: "Eco-friendly pet product ingredients",
        headline: "Clean Ingredients",
        description: "No harsh chemicals — ever.",
    },
    {
        src: "/overview-3.jpeg",
        alt: "Sustainable packaging for pet products",
        headline: "Zero-Waste Packaging",
        description: "Packaging that leaves no trace behind.",
    },
    {
        src: "/overview-4.jpeg",
        alt: "Pet owner and dog on an outdoor adventure",
        headline: "Adventure Ready",
        description: "Built for every walk, hike, and park visit.",
    },
] as const;

function OverviewCard({
    src,
    alt,
    headline,
    description,
}: (typeof OVERVIEW_ITEMS)[number]) {
    return (
        <motion.article
            variants={STAGGER_ITEM}
            className="group relative overflow-hidden rounded-2xl cursor-default"
            aria-label={headline}
        >
            {/* 16:9 ratio */}
            <div className="aspect-video w-full overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={960}
                    height={540}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h3 className="text-white font-semibold text-lg leading-tight">
                    {headline}
                </h3>
                <p className="text-white/75 text-sm mt-1">{description}</p>
            </div>
        </motion.article>
    );
}

export default function Overview() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="overview"
            className="py-20 lg:py-28 px-6"
            aria-label="Product overview"
        >
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/50 mb-3">
                        Why Planet Pelty
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
                        Built on four pillars
                    </h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
                >
                    {OVERVIEW_ITEMS.map((item) => (
                        <OverviewCard key={item.src} {...item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
