"use client";

import { useState, useEffect } from "react";

import { useLanguage } from "@/lib/LanguageContext";

// REVIEWS updated in component to use t()

export default function Reviews() {
    const { t } = useLanguage();
    const reviewItems = t("reviews.items") as { name: string; message: string }[];
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(6); // 2 rows * 3 columns
            } else if (window.innerWidth >= 640) {
                setItemsPerPage(4); // 2 rows * 2 columns
            } else {
                setItemsPerPage(2); // 2 rows * 1 column
            }
            setCurrentPage(0); // Reset to first page on resize
        };

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const ACCENTS = [
        { accent: "from-blue-50 to-sky-50", border: "border-blue-100" },
        { accent: "from-violet-50 to-purple-50", border: "border-violet-100" },
        { accent: "from-rose-50 to-pink-50", border: "border-rose-100" },
        { accent: "from-amber-50 to-yellow-50", border: "border-amber-100" },
        { accent: "from-teal-50 to-emerald-50", border: "border-teal-100" },
        { accent: "from-blue-50 to-indigo-50", border: "border-indigo-100" },
        { accent: "from-rose-50 to-orange-50", border: "border-rose-100" },
        { accent: "from-blue-50 to-cyan-50", border: "border-blue-100" },
        { accent: "from-emerald-50 to-green-50", border: "border-emerald-100" },
        { accent: "from-amber-50 to-orange-50", border: "border-amber-100" },
        { accent: "from-violet-50 to-fuschia-50", border: "border-violet-100" },
        { accent: "from-sky-50 to-blue-50", border: "border-sky-100" }
    ];

    const REVIEWS = reviewItems.map((item, idx) => ({
        id: idx + 1,
        ...item,
        ...ACCENTS[idx % ACCENTS.length]
    }));

    return (
        <section id="reviews" className="relative py-20 md:py-24 px-6 bg-[#f0f4ff] overflow-hidden">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-300/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-200/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center w-full mx-auto mb-8">
                    <h2 className="text-4xl w-fit mx-auto flex flex-col items-center md:text-6xl font-black text-[#1a3a2a] font-outfit mb-4 leading-[1.1] tracking-tight text-center">
                        {t("reviews.title_start")}{" "}
                        <span className="relative w-fit">
                            <span className="relative z-10 text-[#2a73c1]">{t("reviews.title_highlight")}</span>
                            <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                        {t("reviews.description")}
                        <span className="italic"> {t("reviews.description_italic")}</span>
                    </p>
                </div>

                {/* Review Grid — Minimalist Message-First Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {REVIEWS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((review) => (
                        <div
                            key={review.id}
                            className="flex flex-col gap-4 group"
                        >
                            {/* Message Bubble */}
                            <div className={`
                                relative p-4 rounded-3xl
                                bg-white border border-gray-100
                                filter drop-shadow-sm group-hover:drop-shadow-md
                                transition-all duration-500
                                flex-grow
                            `}>
                                <div className="text-gray-700 text-base md:text-[17px] leading-relaxed font-medium italic">
                                    &quot;{review.message}&quot;
                                </div>

                                {/* Speech Bubble Arrow */}
                                <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45 group-hover:border-blue-100 transition-all duration-500" />
                            </div>

                            {/* Reviewer Section */}
                            <div className="flex items-center gap-3 px-2">
                                <div className={`
                                    w-10 h-10 rounded-full shrink-0 shadow-sm border-2 border-white ring-1 ring-gray-100
                                    bg-gradient-to-br ${review.accent}
                                    flex items-center justify-center
                                `}>
                                    <span className="text-[#1a3a2a] font-bold text-xs uppercase tracking-tighter">
                                        {review.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <span className="font-medium text-[#1a3a2a] text-sm block capitalize tracking-tight">
                                        {review.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-6 mb-12">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        disabled={currentPage === 0}
                        className={`
                            group flex items-center justify-center w-12 h-12 rounded-full border-2 
                            transition-all duration-300
                            ${currentPage === 0
                                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                : "border-[#2a73c1] text-[#2a73c1] hover:bg-[#2a73c1] hover:text-white cursor-pointer active:scale-90"
                            }
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: Math.ceil(REVIEWS.length / itemsPerPage) }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === idx ? "bg-[#2a73c1] w-6" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(Math.ceil(REVIEWS.length / itemsPerPage) - 1, prev + 1))}
                        disabled={currentPage >= Math.ceil(REVIEWS.length / itemsPerPage) - 1}
                        className={`
                            group flex items-center justify-center w-12 h-12 rounded-full border-2 
                            transition-all duration-300
                            ${currentPage >= Math.ceil(REVIEWS.length / itemsPerPage) - 1
                                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                : "border-[#2a73c1] text-[#2a73c1] hover:bg-[#2a73c1] hover:text-white cursor-pointer active:scale-90"
                            }
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
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
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="relative group overflow-hidden bg-[#FFD700] hover:bg-[#FFC400] text-[#1a3a2a] px-10 py-5 rounded-full text-base font-black transition-all duration-300 shadow-xl shadow-yellow-900/10 hover:-translate-y-1 active:scale-95 whitespace-nowrap z-10 tracking-wide cursor-pointer"
                    >
                        <span className="relative z-10">{t("reviews.cta_btn")}</span>
                        <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
                    </button>
                </div>

            </div>
        </section>
    );
}
