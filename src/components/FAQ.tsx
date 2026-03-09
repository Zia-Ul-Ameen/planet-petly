"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

// FAQ_DATA removed, now using t("faq.items")

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group bg-white rounded-2xl border transition-all duration-300 ${isOpen ? "border-[#2a7dc9] shadow-lg shadow-blue-500/5 scale-[1.01]" : "border-gray-100 hover:border-gray-200"
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className={`text-lg md:text-xl font-bold font-outfit transition-colors duration-300 ${isOpen ? "text-[#2a7dc9]" : "text-[#1a3a2a]"
                    }`}>
                    {question}
                </span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isOpen ? "bg-[#2a7dc9] border-[#2a7dc9] text-white rotate-45" : "bg-transparent border-gray-100 text-[#1a3a2a]"
                    }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-500 leading-relaxed text-base md:text-lg">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    const { t } = useLanguage();
    const faqItems = t("faq.items") as { q: string; a: string }[];

    return (
        <section id="faq" className="py-20 md:py-24 px-6 bg-[#fbfaf7] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                    {/* Left Column: Branding/Intro */}
                    <div className="lg:col-span-5 flex flex-col items-start gap-3 md:gap-5">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl w-fit flex flex-col items-start md:text-6xl font-black text-[#1a3a2a] font-outfit leading-[1.1] tracking-tight">
                                {t("faq.title")}{" "}
                                <span className="relative w-fit">
                                    <span className="relative z-10 text-[#2a73c1]">{t("faq.title_highlight")}</span>
                                    <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
                            {t("faq.description")}
                        </p>

                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="group relative mt-1 px-8 py-4 bg-[#ffce00] text-[#1a3a2a] font-black text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-yellow-900/10 hover:-translate-y-1 active:scale-95 overflow-hidden cursor-pointer"
                        >
                            <span className="relative z-10 font-outfit">{t("faq.contact_btn")}</span>
                            <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
                        </button>

                        {/* Decorative Brand Element (Official Favicon) */}
                        <div className="mt-12 hidden lg:block opacity-[0.06]">
                            <Image
                                src="/favicon.svg"
                                alt="Planet Petly Icon"
                                width={120}
                                height={120}
                                className="brightness-0 select-none pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {faqItems.map((item, index) => (
                            <FAQItem key={index} question={item.q} answer={item.a} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
