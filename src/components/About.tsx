import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative pt-16 md:pt-24 px-6 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2a7dc9]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-amber/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Left: Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="flex flex-col gap-4">
                            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#2a7dc9]/8 text-[#2a7dc9] text-[10px] font-black tracking-widest uppercase border border-[#2a7dc9]/15">
                                Our Story
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] font-outfit text-brand-navy uppercase tracking-tighter">
                                THE STORY BEHIND <br />
                                <span className="text-[#2a7dc9]">PLANET PETLY</span>
                            </h2>
                            <p className="text-brand-navy/70 text-base sm:text-lg leading-relaxed max-w-lg">
                                We designed a smarter solution — a reliable bag system with a convenient dispenser you can keep by the door or grab instantly.
                            </p>
                            <p className="text-[#2a7dc9] font-black text-lg sm:text-xl">Just grab the dispenser and go.</p>
                        </div>

                        <div className="flex flex-wrap gap-3 max-w-4xl">
                            {[
                                "Always Ready for Walk Time",
                                "Reliable Everyday Pet Essentials",
                                "Smart, Convenient Dispenser Design"
                            ].map((text, idx) => (
                                <div key={idx} className="w-fit p-4 bg-white/60 rounded-2xl border border-[#2a7dc9]/10 shadow-sm flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#2a7dc9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-brand-navy font-bold text-[13px] tracking-tight">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative group order-1 lg:order-2 w-full">
                        <div className="absolute -inset-4 bg-[#2a7dc9]/5 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700 opacity-50" />
                        <div className="relative rounded-[32px] overflow-hidden border border-[#2a7dc9]/10 shadow-2xl lg:aspect-square">
                            {/* Mobile Image */}
                            <Image
                                src="/images/overview-2.png"
                                alt="Planet Petly Mobile Vision"
                                width={1200}
                                height={800}
                                className="w-full h-auto block lg:hidden object-cover transition-transform duration-700 group-hover:scale-101"
                                priority
                            />
                            {/* Desktop Image */}
                            <div className="hidden lg:block relative w-full h-full">
                                <Image
                                    src="/images/story-behind.png"
                                    alt="Planet Petly Vision"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-101"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
