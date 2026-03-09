"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

// REVIEWS updated in component to use t()

export default function Reviews() {
    const { t } = useLanguage();
    const reviewItems = t("reviews.items") as { name: string; message: string }[];

    const REVIEWS = [
        {
            id: 1,
            name: reviewItems[0].name,
            verified: true,
            avatar: "/overview-1.jpeg",
            message: reviewItems[0].message,
            accent: "from-blue-50 to-sky-50",
            border: "border-blue-100"
        },
        {
            id: 2,
            name: reviewItems[1].name,
            handle: "Lead",
            verified: true,
            avatar: "/overview-2.jpeg",
            message: reviewItems[1].message,
            accent: "from-violet-50 to-purple-50",
            border: "border-violet-100"
        },
        {
            id: 3,
            name: reviewItems[2].name,
            avatar: "/overview-3.jpeg",
            message: reviewItems[2].message,
            accent: "from-rose-50 to-pink-50",
            border: "border-rose-100"
        },
        {
            id: 4,
            name: reviewItems[3].name,
            verified: true,
            avatar: "/overview-4.jpeg",
            message: reviewItems[3].message,
            accent: "from-amber-50 to-yellow-50",
            border: "border-amber-100"
        },
        {
            id: 5,
            name: reviewItems[4].name,
            avatar: "/overview-2.jpeg",
            message: reviewItems[4].message,
            accent: "from-teal-50 to-emerald-50",
            border: "border-teal-100"
        },
        {
            id: 6,
            name: reviewItems[5].name,
            handle: "🐾",
            avatar: "/product-1.jpeg",
            message: reviewItems[5].message,
            accent: "from-blue-50 to-indigo-50",
            border: "border-indigo-100"
        }
    ];

    return (
        <section id="reviews" className="relative py-28 px-6 bg-[#f0f4ff] overflow-hidden">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-300/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-200/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#2a73c1] text-xs font-black tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#2a73c1] animate-pulse" />
                        {t("reviews.badge")}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1a3a2a] font-outfit mb-6 leading-[1.1] tracking-tight">
                        {t("reviews.title_start")}{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#2a73c1]">{t("reviews.title_highlight")}</span>
                            <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                        {t("reviews.description")}
                        <span className="italic"> {t("reviews.description_italic")}</span>
                    </p>
                </div>

                {/* Review Grid — Masonry */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance] mb-20">
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className={`
                                break-inside-avoid mb-6 group relative
                                bg-gradient-to-br ${review.accent}
                                rounded-[28px] p-6 border ${review.border}
                                shadow-sm hover:shadow-xl hover:shadow-blue-100/50
                                transition-all duration-500 hover:-translate-y-1.5
                                backdrop-blur-sm
                            `}
                        >
                            {/* Quote Icon */}
                            <div className="text-5xl font-serif text-blue-200/80 leading-none mb-2 select-none">"</div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-medium mb-6">
                                {review.message}
                            </p>

                            {/* Reviewer Footer */}
                            <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow-md">
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="font-bold text-[#1a3a2a] text-sm leading-none">{review.name}</span>
                                        {review.verified && (
                                            <svg className="w-[14px] h-[14px] text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {review.handle && (
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                {review.handle}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium mt-0.5 block">{t("reviews.supporter")}</span>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Footer Strip */}
                <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-white/80 shadow-xl shadow-blue-100/30 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100/60 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

                    <div className="text-center md:text-left relative z-10">
                        <p className="text-[#1a3a2a] font-black text-2xl md:text-3xl font-outfit mb-2 tracking-tight">
                            {t("reviews.cta_title")}
                        </p>
                        <p className="text-gray-500 font-medium text-base">
                            {t("reviews.cta_description")}
                        </p>
                    </div>
                    <button className="relative group overflow-hidden bg-[#1f6b64] hover:bg-[#154a45] text-white px-10 py-5 rounded-full text-base font-black transition-all duration-300 shadow-xl shadow-teal-900/20 hover:-translate-y-1 active:scale-95 whitespace-nowrap z-10 tracking-wide">
                        <span className="relative z-10">{t("reviews.cta_btn")}</span>
                        <div className="absolute inset-0 w-1/4 h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
                    </button>
                </div>

            </div>
        </section>
    );
}
