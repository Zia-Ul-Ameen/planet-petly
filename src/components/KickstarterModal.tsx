"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const KICKSTARTER_URL = "https://www.kickstarter.com/projects/planetpetly/planetpetly-wall-mounted-multi-roll-poop-bag-dispenser?ref=profile_created&category_id=28";

export default function KickstarterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
            setTimeout(() => setIsVisible(true), 10);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Backdrop */}
            <div onClick={close} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className={`relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-[0_40px_80px_-10px_rgba(0,0,0,0.25)] transform transition-all duration-300 ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-6"}`}
            >
                {/* Close */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-500 hover:bg-gray-100 transition-colors z-50 cursor-pointer shadow-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-52 sm:h-60 bg-[#2a7dc9]/10">
                    <Image
                        src="/kickstarter.jpeg"
                        alt="PlanetPetly on Kickstarter"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#05ce78] text-white text-[11px] font-black tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live on Kickstarter
                    </span>
                </div>

                {/* Content */}
                <div className="px-6 pt-5 pb-7">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1a3a2a] leading-tight font-outfit mb-2">
                        🌿 We&apos;re Live on Kickstarter!
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                        Be one of the first to own PlanetPetly — the world&apos;s first wall-mounted biodegradable dog bag dispenser. <span className="font-semibold text-[#1a3a2a]">Early bird pricing ends soon.</span>
                    </p>

                    <a
                        href={KICKSTARTER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#2a7dc9] text-white font-extrabold text-sm tracking-wide rounded-full shadow-lg shadow-[#2a7dc9]/25 hover:bg-[#2176c1] hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Back Us on Kickstarter
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <p className="text-center text-gray-400 text-xs font-medium mt-3">
                        Join 100+ dog owners making walks cleaner &amp; greener
                    </p>
                </div>
            </div>
        </div>
    );
}
