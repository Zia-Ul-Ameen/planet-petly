"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section
            id="hero"
            className="relative w-full h-[60vh] md:h-auto md:aspect-[16/9] mt-[74px] overflow-hidden flex flex-col"
            aria-label="Hero section"
        >
            {/* Screen-reader heading */}
            <h1 className="sr-only">{t("hero.sr_heading")}</h1>

            {/* Background Video */}
            <video
                src="/heroVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
            />

            {/* Dark Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/30"
                aria-hidden="true"
            />

        </section>
    );
}
