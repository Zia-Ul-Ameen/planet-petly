"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section
            id="hero"
            className="relative w-full aspect-[1/1] md:aspect-[16/9] mt-[74px] overflow-hidden flex flex-col"
            aria-label="Hero section"
        >
            {/* Screen-reader heading */}
            <h1 className="sr-only">{t("hero.sr_heading")}</h1>

            {/* Poster Image — loads instantly as priority resource */}
            <Image
                src="/make-life-easy.jpeg"
                alt=""
                fill
                priority
                className="absolute inset-0 object-cover"
                aria-hidden="true"
            />

            {/* Background Video - Desktop */}
            <video
                src="/heroVideoDesktop.mp4"
                poster="/make-life-easy.jpeg"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
                aria-hidden="true"
            />

            {/* Background Video - Mobile */}
            <video
                src="/heroVideoMobile.mp4"
                poster="/make-life-easy.jpeg"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover block md:hidden"
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
