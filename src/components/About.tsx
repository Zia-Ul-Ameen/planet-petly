"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    return (
        <section id="about" className="relative pt-16 md:pt-24 px-6 bg-[#2a7dc9] overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Left: Content Card */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-4xl mb-4 sm:text-5xl font-black leading-[1] font-outfit text-white uppercase tracking-normal">
                                {t("about.title")} <br />
                                <span className="text-yellow-400 underline decoration-white/20 underline-offset-8 tracking-tighter">{t("about.brand")}</span>
                            </h2>

                            <div className="space-y-3.5 text-white text-base sm:text-[17px] leading-snug max-w-2xl font-medium">
                                <p>{t("about.p1")}</p>
                                <p className="text-white/90">
                                    {t("about.p2")}
                                </p>
                                <p className="text-white/90 font-semibold">
                                    {t("about.p3")}
                                </p>
                                <p className="text-white/90">
                                    {t("about.p4")}
                                </p>
                                <p className="text-yellow-400 font-black text-lg sm:text-xl">{t("about.p5")}</p>
                                <p className="text-white/70 italic text-sm leading-tight max-w-lg">
                                    {t("about.p6")}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Feature Boxes */}
                        {/* Bottom Feature Boxes */}
                        <div className="flex flex-wrap gap-3 max-w-4xl">
                            {[
                                t("about.feature1"),
                                t("about.feature2"),
                                t("about.feature3")
                            ].map((text, idx) => (
                                <div key={idx} className="w-fit p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl flex items-center gap-2">
                                    <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white font-bold text-[13px] tracking-tight">{text}</span>
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
