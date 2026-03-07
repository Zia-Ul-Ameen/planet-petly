"use client";

import { useState } from "react";
import Image from "next/image";

const REVIEWS_DATA = [
    {
        name: "Cameron Williamson",
        title: "Pet Parent",
        quote: "I have been using Planet Petly's animal protein collection for three to four months and I am very impressed with the final results. My dog's coat is shinier and his energy levels are better than ever. I highly recommend it to anyone looking for high-quality, sustainable pet food!",
        avatar: "/overview-1.jpeg" // Reusing available assets
    },
    {
        name: "Arlene McCoy",
        title: "Dog Trainer",
        quote: "As a professional trainer, I see many pets with digestive issues. Since switching my clients to Planet Petly's nutritional formulas, the improvement in their overall health and focus has been remarkable. It's truly a game-changer for the industry.",
        avatar: "/overview-2.jpeg"
    },
    {
        name: "Theresa Webb",
        title: "Veterinarian",
        quote: "Planet Petly stands out because of their transparency and commitment to real, whole animal protein. It's rare to find a brand that balances eco-responsibility with such high nutritional standards. My pets love it, and I feel good about recommending it.",
        avatar: "/overview-3.jpeg"
    }
];

export default function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
    };

    const activeReview = REVIEWS_DATA[activeIndex];

    return (
        <section id="reviews" className="py-24 lg:py-32 px-6 bg-[#f9f9f9] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#1a3a2a] leading-[1.2] font-outfit capitalize tracking-normal mb-8">
                        <span className="text-[#2a7dc9]">WE Make Shopping Easy,</span> We Are Ready To Help Your Dog Maintain A Healthier.
                    </h2>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[#1a3a2a] font-bold text-base font-outfit shrink-0 uppercase tracking-widest">What They Say?</span>
                            <div className="w-full h-px border-t border-dashed border-gray-300" />
                        </div>
                    </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* User Info */}
                    <div className="lg:col-span-4 flex items-center gap-6">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src={activeReview.avatar}
                                alt={activeReview.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg md:text-xl font-black text-[#1a3a2a] font-outfit uppercase tracking-tight">
                                {activeReview.name}
                            </h4>
                            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                                {activeReview.title}
                            </span>
                        </div>
                    </div>

                    {/* Quote and Navigation */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed italic">
                            &ldquo; {activeReview.quote} &rdquo;
                        </blockquote>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prevReview}
                                className="w-14 h-11 md:w-16 md:h-12 flex items-center justify-center rounded-full border border-[#2176c1] text-[#2a7dc9] hover:bg-white transition-all duration-300 group cursor-pointer"
                                aria-label="Previous review"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-20 h-11 md:w-24 md:h-12 flex items-center justify-center rounded-full bg-[#2176c1] text-white hover:bg-[#1a3a2a] transition-all duration-300 shadow-lg shadow-blue-500/20 cursor-pointer"
                                aria-label="Next review"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
