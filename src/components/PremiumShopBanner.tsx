"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PremiumShopBanner() {
    const { t } = useLanguage();
    return (
        <section className="relative w-full bg-[#FFF5E6] py-20 md:py-24 overflow-hidden">
            {/* Scalloped Top Border — Responsive wave count */}
            <div className="absolute top-0 left-0 w-full h-8 z-10 overflow-hidden">
                {/* Desktop Version (12 waves) */}
                <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-full h-full rotate-180" preserveAspectRatio="none">
                    <path
                        d="M0 32C60 32 60 0 120 0C180 0 180 32 240 32C300 32 300 0 360 0C420 0 420 32 480 32C540 32 540 0 600 0C660 0 660 32 720 32C780 32 780 0 840 0C900 0 900 32 960 32C1020 32 1020 0 1080 0C1140 0 1140 32 1200 32C1260 32 1260 0 1320 0C1380 0 1380 32 1440 32V32H0V32Z"
                        fill="white"
                    />
                </svg>
                {/* Mobile Version (6 waves for cleaner look) */}
                <svg viewBox="0 0 720 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden w-full h-full rotate-180" preserveAspectRatio="none">
                    <path
                        d="M0 32C60 32 60 0 120 0C180 0 180 32 240 32C300 32 300 0 360 0C420 0 420 32 480 32C540 32 540 0 600 0C660 0 660 32 720 32V32H0V32Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* Content Area */}
            <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-[#1a3a2a] leading-tight md:leading-snug tracking-tight font-outfit uppercase">
                    {t("premium_shop_banner.text")}
                </h2>
            </div>

            {/* Scalloped Bottom Border — Responsive wave count */}
            <div className="absolute bottom-0 left-0 w-full h-8 z-10 overflow-hidden">
                {/* Desktop Version (12 waves) */}
                <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0 32C60 32 60 0 120 0C180 0 180 32 240 32C300 32 300 0 360 0C420 0 420 32 480 32C540 32 540 0 600 0C660 0 660 32 720 32C780 32 780 0 840 0C900 0 900 32 960 32C1020 32 1020 0 1080 0C1140 0 1140 32 1200 32C1260 32 1260 0 1320 0C1380 0 1380 32 1440 32V32H0V32Z"
                        fill="white"
                    />
                </svg>
                {/* Mobile Version (6 waves) */}
                <svg viewBox="0 0 720 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0 32C60 32 60 0 120 0C180 0 180 32 240 32C300 32 300 0 360 0C420 0 420 32 480 32C540 32 540 0 600 0C660 0 660 32 720 32V32H0V32Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
