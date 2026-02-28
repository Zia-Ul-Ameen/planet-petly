"use client";

const VALUES = [
    {
        title: "Built to Last",
        body: "We only use materials built for everyday, long-term use.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Eco Responsible",
        body: "Certified biodegradable where it matters — no greenwashing.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    },
    {
        title: "Practical First",
        body: "Design decisions are driven by function, not just aesthetics.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.65-4.652l3.139-3.14a2.25 2.25 0 013.182 3.182l-3.139 3.14m-5.65-4.652l-5.654-4.654a2.548 2.548 0 10-3.586 3.586l5.653 4.655" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-secondary/10">
            <div className="max-w-[1280px] mx-auto">

                {/* Top: label + headline + para side by side on large */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:items-center">
                    <div>
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-5">
                            About ADRARECOM
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight font-outfit text-primary">
                            Durable Design.<br />Sustainable Choice.
                        </h2>
                    </div>
                    <p className="text-primary/60 text-lg sm:text-xl leading-relaxed lg:pt-10">
                        Founded on the belief that everyday products should work better, last longer, and support
                        responsible environmental choices — ADRARECOM builds practical home organizers and
                        eco-friendly pet essentials for everyday living.
                    </p>
                </div>

                {/* Value cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {VALUES.map((v) => (
                        <div
                            key={v.title}
                            className="bg-white rounded-2xl p-7 border border-black/5 flex flex-col gap-4"
                        >
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 text-primary">
                                {v.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-base mb-1">{v.title}</h4>
                                <p className="text-sm text-primary/50 leading-relaxed">{v.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
