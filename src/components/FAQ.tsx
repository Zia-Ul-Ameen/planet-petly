"use client";

import { useState } from "react";
import Image from "next/image";

const FAQ_DATA = [
    {
        question: "What is PlanetPetly?",
        answer: "PlanetPetly creates practical pet-care products designed to make everyday routines cleaner, easier, and more organized for pet parents.",
    },
    {
        question: "What comes with the PlanetPetly wall-mounted poop bag station?",
        answer: "The complete set includes the wall-mounted organizer, a portable dispenser, removable side hooks, mounting screws and wall plugs, adhesive pads, and 10 rolls containing 150 poop bags.",
    },
    {
        question: "How many poop bag rolls can the organizer hold?",
        answer: "The organizer can store up to 15 standard-size poop bag rolls, helping you keep refills ready near your door.",
    },
    {
        question: "Does it fit standard poop bag rolls?",
        answer: "Yes. PlanetPetly is designed to fit most standard dog poop bag rolls measuring approximately 6 cm in length and 3 cm in diameter.",
    },
    {
        question: "Can I install it without drilling?",
        answer: "Yes. You can install it using the included adhesive pads on suitable smooth surfaces or use the included screws and wall plugs for a more secure installation.",
    },
    {
        question: "Are the PlanetPetly poop bags compostable?",
        answer: "Yes. Our bags are made using PBAT and PLA-based materials and are certified compostable according to applicable compostability standards. Always follow your local composting and waste-disposal guidelines.",
    },
    {
        question: "Where do you ship?",
        answer: "Shipping availability, delivery times, and charges depend on your location. The available shipping options will be shown during checkout.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group bg-white rounded-2xl border transition-all duration-300 ${isOpen ? "border-[#2a7dc9] shadow-lg shadow-green-800/5 scale-[1.01]" : "border-gray-100 hover:border-gray-200"
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

interface FAQEntry { question: string; answer: string; }

export default function FAQ({ items }: { items?: FAQEntry[] }) {
    const data = items ?? FAQ_DATA;
    return (
        <section id="faq" className="py-24 lg:pt-32 pb-10 px-6 bg-[#fbfaf7] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* Left Column: Branding/Intro */}
                    <div className="lg:col-span-5 flex flex-col items-start gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl md:text-6xl font-black text-[#1a3a2a] leading-[1.1] font-outfit uppercase tracking-tighter">
                                Frequently Asked <br />
                                <span className="text-[#2a7dc9]">Questions</span>
                            </h2>
                        </div>

                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
                            Find answers to common questions about our products, shipping, and sustainable mission. Need more help? Contact us anytime!
                        </p>

                        <button
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="inline-flex items-center px-8 py-4 bg-[#2a7dc9] text-white font-extrabold text-sm tracking-wide rounded-full shadow-lg shadow-[#2a7dc9]/25 hover:bg-[#2176c1] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                            Contact Us
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
                        {data.map((item, index) => (
                            <FAQItem key={index} {...item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
