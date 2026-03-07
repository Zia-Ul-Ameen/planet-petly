"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FAQ_DATA = [
    {
        question: "What products does Planet Petly offer?",
        answer: "We offer a range of eco-friendly pet essentials, starting with our premium biodegradable waste bags and durable dispensers. We're constantly expanding our lineup to include sustainable toys, nutrition-focused food, and innovative home organizers.",
    },
    {
        question: "Are your products truly eco-friendly?",
        answer: "Yes! At Planet Petly, we avoid 'greenwashing.' Our waste bags are certified compostable or biodegradable where it matters most, and we prioritize recycled materials in our packaging and hard-goods production.",
    },
    {
        question: "When will the full product line be available?",
        answer: "We are currently preparing for our official launch via Kickstarter! By signing up for our 'Notify Me' list, you'll be the first to know about our early-bird specials and exact launch dates.",
    },
    {
        question: "Do you offer wholesale opportunities?",
        answer: "Absolutely. We are currently connecting with retail stores, Amazon sellers, and distributors ahead of our launch. Please check our Wholesale section or contact us directly at admin@planetpetly.com.",
    },
    {
        question: "How can I stay updated on Planet Petly?",
        answer: "The best way is to join our mailing list! You can also follow our journey on social media to see behind-the-scenes updates of our product development and sustainability efforts.",
    },
];

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

                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-[#ffce00] text-[#1a3a2a] font-black text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl hover:shadow-yellow-200 hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 font-outfit">Contact Us</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

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
                        {FAQ_DATA.map((item, index) => (
                            <FAQItem key={index} {...item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
