"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="relative bg-[#2a7dc9] text-white pt-24 md:pt-32 overflow-hidden">

            {/* Massive Creative Wave Transition */}
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

            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 md:pb-6">

                {/* Massive Creative Branding Area */}
                <div className="relative mb-16 md:mb-26 flex flex-col items-center md:items-start gap-8 md:gap-0">
                    <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[560px] aspect-[563/108]">
                        <Image
                            src="/footer-logo.svg"
                            alt="Planet Petly"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Legal Links: Stacks on mobile, floats on desktop */}
                    {/* <div className="flex flex-col sm:flex-row items-center gap-6 md:absolute md:bottom-2 md:right-0">
                        <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Terms & Conditions</Link>
                    </div> */}
                </div>

                {/* Dashed Separator */}
                <div className="w-full h-px border-t border-dashed border-white/20 mb-12" />

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-xl font-black font-outfit uppercase tracking-tight">{t("footer.connect_title")}</h4>
                        <div className="space-y-4 text-white/60 font-medium">
                            <div className="flex flex-col gap-4">
                                <a href="mailto:customercare@adrarecom.com" className="flex items-center gap-3 hover:text-yellow-400 transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </span>
                                    customercare@adrarecom.com
                                </a>
                                <a href="https://www.instagram.com/planetpetly" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-yellow-400 transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" /></svg>
                                    </span>
                                    {t("footer.instagram")}
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61583994294451" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-yellow-400 transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </span>
                                    {t("footer.facebook")}
                                </a>
                                <a href="https://www.tiktok.com/@planetpetly.com?_r=1&_t=ZS-94UFqTFHEAS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-yellow-400 transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.32c7.87 33.32 31.27 60.33 62.11 70.93a121.18 121.18 0 0 0 58.8 0V209.91z" /></svg>
                                    </span>
                                    {t("footer.tiktok")}
                                </a>
                                <a href="https://youtube.com/@planetpetly?si=6LDDjMGo3So84ti8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-yellow-400 transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#2a7dc9] transition-all">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </span>
                                    {t("footer.youtube")}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Navigation */}
                    <div className="lg:col-span-8 w-full">
                        {/* Dashed Separator for Mobile View */}
                        <div className="md:hidden w-full h-px border-t border-dashed border-white/20 mb-12" />

                        <div className="flex flex-wrap gap-x-12 gap-y-8 md:gap-x-20">
                            {[
                                { labelKey: "nav.home", href: "#hero" },
                                { labelKey: "nav.about", href: "#about" },
                                { labelKey: "nav.products", href: "#products" },
                                { labelKey: "nav.contact", href: "#contact" }
                            ].map((link) => (
                                <Link
                                    key={link.labelKey}
                                    href={link.href}
                                    className="text-xl md:text-2xl font-black font-outfit uppercase tracking-tight text-white/90 hover:text-yellow-400 transition-colors"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Legal */}
                <div className="mt-18 pt-10 pb-2 border-t border-white/10 text-center md:text-left">
                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>

            {/* Background Decorative Accent */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/3" />
        </footer>
    );
}
