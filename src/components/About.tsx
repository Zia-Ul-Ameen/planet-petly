"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";
import Image from "next/image";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="about"
            className="py-20 lg:py-28 px-6"
            aria-label="About Planet Pelty"
        >
            <div
                ref={ref}
                className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
                {/* Text */}
                <motion.div
                    className="w-full lg:w-1/2 order-2 lg:order-1"
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span
                        variants={STAGGER_ITEM}
                        className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/50 mb-4"
                    >
                        Our Story
                    </motion.span>

                    <motion.h2
                        variants={STAGGER_ITEM}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight"
                    >
                        Pets &amp; Planet,
                        <br />
                        <span className="italic font-light text-primary/60">
                            In Harmony.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={STAGGER_ITEM}
                        className="mt-6 text-primary/65 text-base sm:text-lg leading-relaxed"
                    >
                        Planet Pelty was born from a simple belief — loving your pet
                        shouldn&apos;t cost the Earth. We create everyday pet essentials
                        from plant-based, compostable materials that are as kind to the
                        environment as they are effective.
                    </motion.p>

                    <motion.p
                        variants={STAGGER_ITEM}
                        className="mt-4 text-primary/65 text-base sm:text-lg leading-relaxed"
                    >
                        Every product we make is thoughtfully designed, rigorously tested,
                        and certified to biodegrade. Because sustainability isn&apos;t a
                        feature — it&apos;s the foundation of everything we do.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        variants={STAGGER_ITEM}
                        className="mt-8 flex flex-wrap gap-6"
                    >
                        {[
                            { value: "100%", label: "Plant-based" },
                            { value: "0", label: "Microplastics" },
                            { value: "∞", label: "Love for pets" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                <p className="text-xs text-primary/50 mt-0.5 tracking-wide uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image — 16:9 */}
                <motion.div
                    className="w-full lg:w-1/2 order-1 lg:order-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="aspect-video overflow-hidden rounded-3xl shadow-xl">
                        <Image
                            src="/overview-1.jpeg"
                            alt="A dog and its owner enjoying nature – the Planet Pelty way"
                            width={960}
                            height={540}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
