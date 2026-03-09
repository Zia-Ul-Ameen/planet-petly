"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    return (
        <section id="about" className="relative py-24 md:py-32 px-6 bg-[#2a7dc9] overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-300/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-blue-400/20 blur-[100px] -rotate-45 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left: Content Card */}
                    <div className="flex flex-col gap-8 md:gap-10">
                        {/* Title Section */}
                        <div className="flex flex-col items-start gap-2">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] font-outfit text-white tracking-tight flex flex-col items-start">
                                <span className="text-white/90 text-2xl sm:text-3xl lg:text-4xl block">{t("about.title")}</span>
                                <span className="text-yellow-400 relative inline-block">
                                    <span className="relative z-10 text-5xl sm:text-6xl lg:text-[72px] tracking-tighter leading-none drop-shadow-md">{t("about.brand")}</span>
                                    <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-200/20 -rotate-1 rounded pointer-events-none" />
                                </span>
                            </h2>
                        </div>

                        {/* Text Content block */}
                        <div className="flex flex-col gap-8 relative">
                            {/* Decorative line on the left */}
                            <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent rounded-full opacity-90" />

                            <div className="pl-6 md:pl-8 flex flex-col gap-7">
                                {/* The "Story/Problem" block */}
                                <div className="space-y-2">
                                    <p className="text-yellow-100 font-bold text-xl sm:text-2xl leading-snug drop-shadow-sm">
                                        {t("about.p1")}
                                    </p>
                                    <p className="text-white/85 text-base sm:text-[17px] leading-relaxed font-medium max-w-lg">
                                        {t("about.p2")}
                                    </p>
                                </div>

                                {/* The "Solution" block */}
                                <div className="space-y-3">
                                    <p className="text-white text-xl sm:text-2xl font-black leading-snug tracking-tight">
                                        {t("about.p3")}
                                    </p>
                                    <p className="text-white/90 text-base sm:text-[17px] leading-relaxed font-medium max-w-xl">
                                        {t("about.p4")}
                                    </p>
                                </div>

                                {/* The "Takeaway" block */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-md mt-2 shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <p className="text-yellow-400 font-black text-xl sm:text-2xl tracking-wide uppercase mb-1.5">
                                            {t("about.p5")}
                                        </p>
                                        <p className="text-white font-semibold text-base sm:text-lg">
                                            {t("about.p6")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                t("about.feature1"),
                                t("about.feature2"),
                                t("about.feature3")
                            ].map((text, idx) => (
                                <div key={idx} className="group relative flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default">
                                    {/* Shimmer effect inside pills */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />
                                    <div className="relative z-10 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-inner">
                                        <svg className="w-3.5 h-3.5 text-[#1a3a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="relative z-10 text-white font-bold text-[14px] tracking-wide">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Premium Visual */}
                    <div className="relative group hidden lg:block">
                        <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-2xl aspect-[4/5] lg:aspect-square">
                            <Image
                                src="/about-us.jpeg"
                                alt="Planet Petly Vision"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
