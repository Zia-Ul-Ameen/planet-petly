"use client";

import Link from "next/link";

// const PERKS = [
//     {
//         title: "Tier Pricing",
//         desc: "Competitive wholesale rates tailored to your order volume.",
//         icon: (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
//             </svg>
//         ),
//     },
//     {
//         title: "Priority Inventory",
//         desc: "First allocation when stock becomes available at launch.",
//         icon: (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
//             </svg>
//         ),
//     },
//     {
//         title: "Early Access",
//         desc: "Partner before public launch for maximum advantage.",
//         icon: (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
//             </svg>
//         ),
//     },
//     {
//         title: "Dedicated Support",
//         desc: "A direct line to our distribution team, always.",
//         icon: (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//             </svg>
//         ),
//     },
// ];

const WHO = ["Retail Stores", "Amazon Sellers", "Distributors", "Pet Retailers", "Home Goods"];

export default function WholesaleSection() {
    return (
        <section id="wholesale" className="py-24 px-6 bg-primary">
            <div className="max-w-[1280px] mx-auto">

                {/* Header */}
                <div className="mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-widest uppercase mb-5">
                        Wholesale &amp; Distribution
                    </span>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight font-outfit text-white max-w-xl">
                            Partner with us before we launch.
                        </h2>
                        <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm lg:text-right">
                            We&apos;re connecting with distributors, retailers and Amazon sellers ahead of our Kickstarter campaign.
                        </p>
                    </div>
                </div>

                {/* Perks grid */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {PERKS.map((p) => (
                        <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-secondary">
                                {p.icon}
                            </div>
                            <h4 className="font-bold text-white text-sm">{p.title}</h4>
                            <p className="text-xs text-white/50 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div> */}

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Who Should Apply</p>
                        <div className="flex flex-wrap gap-2">
                            {WHO.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-3 shrink-0">
                        <a href="mailto:admin@adrarecom.com" className="text-sm text-secondary font-semibold hover:underline underline-offset-4">
                            admin@adrarecom.com
                        </a>
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all text-sm tracking-widest uppercase shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
