import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative pt-16 md:py-24 md:pt-28 px-6 bg-[#2a7dc9] overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Left: Content Card */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/10">
                                Our Mission
                            </span>
                            <h2 className="text-4xl sm:text-6xl font-black leading-[1.1] font-outfit text-white uppercase tracking-tighter mb-6">
                                The Story Behind <br />
                                <span className="text-yellow-400 underline decoration-white/20 underline-offset-8">Planet Petly</span>
                            </h2>
                            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl">
                                We believe that pet products should work better, last longer, and support
                                responsible environmental choices. Planet Petly was born to bridge the gap between
                                high-performance design and eco-conscious living.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                <span className="text-yellow-400 font-bold">100%</span>
                                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                <span className="text-yellow-400 font-bold">Eco</span>
                                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">Responsible</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Premium Visual */}
                    <div className="relative group hidden lg:block">
                        <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-2xl aspect-[4/5] lg:aspect-square">
                            <Image
                                src="/overview-1.jpeg"
                                alt="Planet Petly Vision"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Glass overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2a7dc9]/60 to-transparent" />
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-10 -left-10 hidden md:block p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl animate-float">
                            <div className="flex flex-col gap-1">
                                <span className="text-4xl font-black text-white font-outfit">2024</span>
                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest leading-none">Established</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
