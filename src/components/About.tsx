import Image from "next/image";

export default function About() {
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
                                THE STORY BEHIND <br />
                                <span className="text-yellow-400 underline decoration-white/20 underline-offset-8 tracking-tighter">PLANET PETLY</span>
                            </h2>

                            <div className="space-y-3.5 text-white text-base sm:text-[17px] leading-snug max-w-2xl font-medium">
                                <p>Every dog owner knows the moment.</p>
                                <p className="text-white/90">
                                    You're ready to head out for a walk—shoes on, leash in hand—and suddenly
                                    you're searching for waste bags. Under the sink. In a drawer. By the door.
                                    Sometimes they're gone when you need them most.
                                </p>
                                <p className="text-white/90 font-semibold">
                                    <span className="text-white font-black">At Planet Petly</span>, we believe pet care should be simple, organized, and always
                                    ready when you are.
                                </p>
                                <p className="text-white/90">
                                    That's why we designed a smarter solution—a clean, reliable bag system
                                    with a convenient dispenser you can keep by the door or grab instantly.
                                </p>
                                <p className="text-yellow-400 font-black text-lg sm:text-xl">Just grab the dispenser and go.</p>
                                <p className="text-white/70 italic text-sm leading-tight max-w-lg">
                                    Because great pet products shouldn't just exist — they should fit
                                    naturally into everyday life with your dog.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Feature Boxes */}
                        {/* Bottom Feature Boxes */}
                        <div className="flex flex-wrap gap-3 max-w-4xl">
                            {[
                                "Always Ready for Walk Time",
                                "Reliable Everyday Pet Essentials",
                                "Smart, Convenient Dispenser Design"
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
