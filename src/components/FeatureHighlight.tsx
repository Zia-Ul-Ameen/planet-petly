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
    "COMING SOON",
    "REGISTER YOUR EMAIL",
    "GET NOTIFIED AT LAUNCH",
    "NO MARKETING EMAILS"
];

const FEATURES = [
    {
        title: "Eco-Friendly Bags",
        description: "Biodegradable and leak-proof poop bags.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#2a7dc9">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        )
    },
    {
        title: "Handy Dispensers",
        description: "Easy access to bags when you need them.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6H6c-1.1 0-2 .9-2 2v11c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V8c0-1.1-.9-2-2-2z" fill="#2a7dc9" />
                <path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="#2a7dc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="9" y="11" width="6" height="7" rx="1.5" fill="white" />
                <path d="M12 11v7" stroke="#e0e0e0" strokeWidth="1" />
            </svg>
        )
    }
];

export default function FeatureHighlight() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[#2a7dc9]/5 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700 opacity-50" />
                        <div className="relative lg:block hidden rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/build-for.png"
                                alt="Maintain Your Dog Healthier"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover aspect-video lg:aspect-square transition-transform duration-700 group-hover:scale-101"
                            />
                        </div>
                        <div className="relative lg:hidden rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/overview-1.png"
                                alt="Maintain Your Dog Healthier"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover lg:aspect-square transition-transform duration-700 group-hover:scale-101"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-10">
                        <div className="flex flex-col gap-4">
                            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#2a7dc9]/5 text-[#2a7dc9] text-[10px] font-black tracking-widest uppercase border border-[#2a7dc9]/10">
                                Designed for Convenience
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-outfit uppercase">
                                <span className="text-[#1a3a2a]">BUILT FOR</span> <br />
                                <span className="text-[#2a7dc9]">EVERYDAY LIFE.</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                                Make your dog walks cleaner with biodegradable poop
                                bags and convenient dispensers.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {FEATURES.map((feature, index) => (
                                <div key={index} className="flex gap-5 items-start">
                                    <div className="flex-shrink-0 w-14 h-14 bg-[#2a7dc9]/8 rounded-2xl flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-xl font-bold text-[#1a3a2a]">{feature.title}</h4>
                                        <p className="text-gray-500 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-12 z-10 -mb-px">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto translate-y-px">
                    <path
                        d="M0 48H1440V12C1440 12 1380 0 1320 0C1260 0 1200 12 1200 12C1200 12 1140 24 1080 24C1020 24 960 12 960 12C960 12 900 0 840 0C780 0 720 12 720 12C720 12 660 24 600 24C540 24 480 12 480 12C480 12 420 0 360 0C300 0 240 12 240 12C240 12 180 24 120 24C60 24 0 12 0 12V48Z"
                        fill="#2a7dc9"
                    />
                </svg>
            </div>

            <div className="w-full bg-[#2a7dc9] py-8 md:py-12 overflow-hidden whitespace-nowrap">
                <div className="flex w-fit animate-marquee">
                    {[1, 2].map((set) => (
                        <div key={`set-${set}`} className="flex items-center gap-8 md:gap-12 text-white px-4 md:px-6 shrink-0">
                            {[1, 2, 3].map((group) => (
                                <div key={`group-${group}`} className="flex items-center gap-8 md:gap-12 font-bold text-base md:text-xl uppercase font-outfit shrink-0">
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
