"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL } from "@/lib/config";

export default function Footer() {
    const pathname = usePathname();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname !== "/") return;
        e.preventDefault();
        const id = href.replace(/^\/?#/, "").replace(/^.*#/, "");
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
    };
    return (
        <footer className="relative bg-[#2a7dc9] text-white pt-24 md:pt-32 overflow-hidden">

            {/* Wave Transition */}
            <div className="absolute top-0 left-0 w-full leading-none overflow-hidden rotate-180 -translate-y-px z-10">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full block h-[60px] md:h-[120px]"
                >
                    <path d="M0 120L1440 120L1440 0C1440 0 1320 80 1080 80C840 80 720 0 480 0C240 0 120 80 0 80L0 120Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-6 md:py-10 mt-0 md:mt-16 md:pb-4">

                {/* Logo */}
                <div className="relative mb-5 md:mb-8 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[560px] aspect-[563/108]">
                        <Image
                            src="/footer-logo.svg"
                            alt="Planet Petly"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Dashed Separator */}
                <div className="w-full h-px border-t border-dashed border-white/20 mb-4 md:mb-12" />

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-10 items-start">

                    {/* Left: Connect With Us */}
                    <div className="lg:col-span-4 space-y-2 md:space-y-6">
                        <h4 className="text-sm md:text-xl font-black font-outfit uppercase tracking-tight">Connect With Us</h4>
                        <div className="flex flex-col gap-2 md:gap-4 text-white/60 font-medium text-sm md:text-base">
                            <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition-colors group">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                {SUPPORT_EMAIL}
                            </a>
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition-colors group">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" /></svg>
                                </span>
                                Instagram
                            </a>
                            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition-colors group">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </span>
                                Facebook
                            </a>
                            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition-colors group">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.32c7.87 33.32 31.27 60.33 62.11 70.93a121.18 121.18 0 0 0 58.8 0V209.91z" /></svg>
                                </span>
                                TikTok
                            </a>
                        </div>
                    </div>

                    {/* Center: Business Info */}
                    <div className="lg:col-span-4 space-y-2 md:space-y-5">
                        <div className="md:hidden w-full h-px border-t border-dashed border-white/20 mb-4" />
                        <h4 className="text-sm md:text-xl font-black font-outfit uppercase tracking-tight">Business Info</h4>
                        <div className="flex flex-col gap-2 md:gap-3 text-white/60 font-medium text-sm md:text-base">
                            {/* Address with pin icon */}
                            <div className="flex items-start gap-2 md:gap-3">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <address className="not-italic leading-relaxed text-xs md:text-sm">
                                    <span className="block font-bold text-white/80 text-sm md:text-base not-italic">ADRARECOM LLC</span>
                                    30 N Gould St Ste R<br />
                                    Sheridan, WY 82801<br />
                                    United States
                                </address>
                            </div>
                            {/* Disclaimer note */}
                            <p className="text-white/35 text-md leading-relaxed border-l-2 border-white/20 pl-3 ml-1 mt-1">
                                This is our registered business address and is <strong className="text-white/50">not</strong> a retail store, warehouse, or customer-return facility. Please contact us before sending any product or correspondence.
                            </p>
                        </div>
                    </div>

                    {/* Right: Quick Links */}
                    <div className="lg:col-span-4 w-full">
                        <div className="md:hidden w-full h-px border-t border-dashed border-white/20 mb-4" />
                        <h4 className="text-sm md:text-xl font-black flex lg:justify-end font-outfit uppercase tracking-tight mb-2 md:mb-6">Quick Links</h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 lg:items-end md:flex-col md:gap-x-0 md:gap-y-3">
                            {[
                                { label: "Home", href: "/#hero" },
                                { label: "Products", href: "/#products" },
                                { label: "About Us", href: "/#about" },
                                { label: "FAQ", href: "/#faq" },
                                { label: "Contact Us", href: "/#contact" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e as React.MouseEvent<HTMLAnchorElement>, link.href)}
                                    className="text-xs md:text-sm font-semibold font-outfit uppercase tracking-wide text-white hover:!text-yellow-400 opacity-70 hover:opacity-100 transition-all duration-200 inline-block"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Legal */}
                <div className="mt-4 md:mt-12 pt-4 md:pt-8 pb-2 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-center md:text-left">
                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} Planet Petly. All Rights Reserved. Crafted with love for pets.
                    </p>
                    <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-widest">
                        A brand of ADRARECOM LLC &mdash; Wyoming LLC
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/3 pointer-events-none" />
        </footer>
    );
}
