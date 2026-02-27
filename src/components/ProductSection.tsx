"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
    {
        icon: "🌱",
        label: "Compostable",
        detail: "Certified home & industrial compostable.",
    },
    {
        icon: "💧",
        label: "Leak-proof",
        detail: "Reinforced seams, no spills guaranteed.",
    },
    {
        icon: "✂️",
        label: "Easy-tear",
        detail: "Perforated rolls for quick, one-hand tear.",
    },
    {
        icon: "🎒",
        label: "Travel Friendly",
        detail: "Compact roll fits any dispenser or bag.",
    },
] as const;

export default function ProductSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="product"
            className="py-20 lg:py-28"
            style={{ background: "linear-gradient(135deg, #f8f6f2 0%, #eee9e0 100%)" }}
            aria-label="Product highlight"
        >
            <div
                ref={ref}
                className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            >
                {/* Product image — 16:9 */}
                <motion.div
                    className="w-full lg:w-1/2 flex-shrink-0"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={FADE_UP}
                >
                    <div className="aspect-video overflow-hidden rounded-3xl shadow-xl">
                        <Image
                            src="/overview-3.jpeg"
                            alt="Planet Pelty compostable poop bags, shown outdoors"
                            width={960}
                            height={540}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Small trust badge */}
                    <div className="mt-4 flex items-center gap-2 text-primary/60 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                        Certified compostable · Plant-based materials
                    </div>
                </motion.div>

                {/* Product details */}
                <motion.div
                    className="w-full lg:w-1/2"
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span
                        variants={STAGGER_ITEM}
                        className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/50 mb-4"
                    >
                        Our Product
                    </motion.span>

                    <motion.h2
                        variants={STAGGER_ITEM}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight"
                    >
                        The Eco Poop Bag
                    </motion.h2>

                    <motion.p
                        variants={STAGGER_ITEM}
                        className="mt-5 text-primary/65 text-base sm:text-lg leading-relaxed"
                    >
                        Finally, a poop bag that works as hard as you do — and then
                        disappears. Made from plant-based materials, our bags break down
                        naturally without leaving microplastics behind.
                    </motion.p>

                    {/* Benefits */}
                    <motion.ul
                        variants={STAGGER_CONTAINER}
                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
                        role="list"
                        aria-label="Product benefits"
                    >
                        {BENEFITS.map((benefit) => (
                            <motion.li
                                key={benefit.label}
                                variants={STAGGER_ITEM}
                                className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-secondary/50 shadow-sm"
                            >
                                <span className="text-xl leading-none mt-0.5" aria-hidden="true">
                                    {benefit.icon}
                                </span>
                                <div>
                                    <p className="font-semibold text-primary text-sm">
                                        {benefit.label}
                                    </p>
                                    <p className="text-primary/55 text-xs mt-0.5">
                                        {benefit.detail}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div variants={STAGGER_ITEM} className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#waitlist"
                            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label="Join waitlist for Planet Pelty poop bags"
                        >
                            Join the Waitlist
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
