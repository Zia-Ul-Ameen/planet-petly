"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function BrandingBanner() {
    const { t } = useLanguage();
    return (
        <section className="relative w-full py-8 md:h-[200px] bg-[#2a7dc9] -mt-10 md:-mt-14 z-20">
            {/* Top Wave (joins with Video Hero) - More pronounced */}
            <div className="absolute top-0 left-0 w-full -translate-y-[98%] z-0 leading-none" aria-hidden="true">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full block h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,30 1440,60 L1440,120 L0,120 Z"
                        fill="#2a7dc9"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-5 lg:px-2 relative z-10 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center h-full">
                    {/* Left Column — Branding Message */}
                    <div className="flex flex-col justify-center gap-1 md:gap-2 -mt-4 md:-mt-12 text-center md:text-left order-1">
                        <span className="text-white/70 text-lg md:text-2xl font-medium tracking-tight">
                            {t("branding_banner.sub_title")}
                        </span>
                        <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-none tracking-tighter uppercase font-outfit">
                            {t("branding_banner.title_start")} <span className="text-yellow-400">{t("branding_banner.title_highlight")}</span>
                        </h3>
                    </div>

                    {/* Right Column — Product Image (BIG & Overlapping) */}
                    <div className="relative flex items-center justify-center md:justify-end h-full order-2">
                        <div className="relative w-[260px] pt-12 sm:pt-0 sm:w-[300px] md:w-[480px] lg:w-[450px] -mt-16 md:-mt-80 z-30">
                            {/* Glow behind product */}
                            <div className="absolute inset-10 md:inset-20 bg-yellow-400/10 blur-2xl md:blur-3xl rounded-full" />

                            <div className="relative">
                                <Image
                                    src="/product-image-1.avif"
                                    alt="Planet Petly Premium Pet Food"
                                    width={400}
                                    height={500}
                                    priority
                                    className="h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] mx-auto md:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
