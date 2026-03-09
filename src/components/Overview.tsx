"use client";

import Image from "next/image";
import BackgroundDecoration from "./FloatingDecorations";
import { useLanguage } from "@/lib/LanguageContext";

const OVERVIEW_ITEMS = [
    {
        src: "/overview-1.jpeg",
        alt: "Functionality driven design",
    },
    {
        src: "/overview-2.jpeg",
        alt: "Durable and long lasting materials",
    },
    {
        src: "/overview-3.jpeg",
        alt: "Sustainable and eco-friendly standards",
    },
    {
        src: "/overview-4.jpeg",
        alt: "Simple and intuitive organization",
    },
] as const;



export default function Overview() {
    const { t } = useLanguage();
    return (
        <section
            id="overview"
            className="relative pb-24 pt-20 px-6 bg-white overflow-hidden"
            aria-label="Features overview"
        >
            {/* Background Decorations */}
            <BackgroundDecoration type="paw" className="top-10 left-[5%] w-32 h-32 rotate-[-15deg]" />
            <BackgroundDecoration type="leaf" className="bottom-20 right-[2%] w-40 h-40 rotate-[15deg]" />
            <BackgroundDecoration type="paw" className="top-1/2 right-[10%] w-24 h-24 rotate-[45deg]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a7dc9]/5 text-[#2a7dc9] text-[10px] font-black tracking-widest uppercase mb-6 border border-[#2a7dc9]/10">
                        Designed for Convenience
                    </span>
                    <h2 className="text-4xl w-fit flex flex-col items-start md:text-6xl font-black text-[#1a3a2a] font-outfit mb-3 leading-[1.1] tracking-tight">
                        {t("overview.title_start")}{" "}
                        <span className="relative w-fit">
                            <span className="relative z-10 text-[#2a7dc9]">{t("overview.title_highlight")}</span>
                            <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                        </span>
                    </h2>

                    {/* Dashed Separator */}
                    <div className="w-full h-px border-t border-dashed border-gray-200 mb-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {OVERVIEW_ITEMS.map((item, index) => (
                        <article
                            key={item.src}
                            className="group relative overflow-hidden rounded-[32px] cursor-default bg-gray-50"
                            aria-label={item.alt}
                        >
                            <div className="aspect-[16/11] w-full overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={960}
                                    height={720}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay Label */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border border-white/20">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2a7dc9] block mb-1">Feature 0{index + 1}</span>
                                    <p className="font-bold text-[#1a3a2a] text-sm leading-tight uppercase font-outfit">{item.alt}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
