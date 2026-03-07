"use client";

import Image from "next/image";

const StarIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 md:w-7 md:h-7 shrink-0 select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M12 0L14.81 9.19L24 12L14.81 14.81L12 24L9.19 14.81L0 12L9.19 9.19L12 0Z" />
    </svg>
);

const MARQUEE_ITEMS = [
    "Good for health",
    "Energetic Playtime",
    "Whole Animal Protein"
];

export default function FeatureHighlight() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Product/Lifestyle Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-50 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700 opacity-50" />
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src="/make-life-easy.jpeg"
                                alt="Maintain Your Dog Healthier"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover aspect-video lg:aspect-[15/16] transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Feature Content */}
                    <div className="flex flex-col gap-8 md:gap-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-outfit uppercase">
                                <span className="text-[#2a7dc9]">Maintain Your</span> <br />
                                <span className="text-[#1a3a2a]">Dog Healthier</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                                Introducing Planet Petly's delectable range of pet food, crafted with love and care for your furry companions.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="flex flex-col gap-6">
                            {/* Feature 1 */}
                            <div className="flex gap-5 items-start">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a7dc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-xl font-bold text-[#1a3a2a]">Digestive Health</h4>
                                    <p className="text-gray-500 text-sm">100% natural enzymes for digestive essential ingredients.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-5 items-start">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a7dc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-xl font-bold text-[#1a3a2a]">Lean, Strong Muscles</h4>
                                    <p className="text-gray-500 text-sm">Pure muscle-building protein with whole animal protein.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="px-10 py-4 bg-[#ffce00] hover:bg-yellow-400 text-[#1a3a2a] font-black text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-200 hover:-translate-y-1">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scalloped Wavy Edge Transition */}
            <div className="relative w-full h-12 z-10 -mb-px">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto translate-y-px">
                    <path
                        d="M0 48H1440V12C1440 12 1380 0 1320 0C1260 0 1200 12 1200 12C1200 12 1140 24 1080 24C1020 24 960 12 960 12C960 12 900 0 840 0C780 0 720 12 720 12C720 12 660 24 600 24C540 24 480 12 480 12C480 12 420 0 360 0C300 0 240 12 240 12C240 12 180 24 120 24C60 24 0 12 0 12V48Z"
                        fill="#ffce00"
                    />
                </svg>
            </div>

            {/* Yellow Marquee Banner */}
            <div className="w-full bg-[#ffce00] py-8 md:py-12 mb-6 overflow-hidden whitespace-nowrap">
                <div className="flex w-fit animate-marquee">
                    {/* Render sets for infinite scrolling */}
                    {[1, 2].map((set) => (
                        <div key={`set-${set}`} className="flex items-center gap-8 md:gap-12 text-[#1a3a2a] px-4 md:px-6 shrink-0">
                            {[1, 2, 3].map((group) => (
                                <div key={`group-${group}`} className="flex items-center gap-8 md:gap-12 font-black text-base md:text-xl tracking-tighter uppercase font-outfit shrink-0">
                                    {MARQUEE_ITEMS.map((text, idx) => (
                                        <div key={idx} className="flex items-center gap-2 md:gap-4 shrink-0">
                                            <StarIcon />
                                            <span className="leading-none">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
