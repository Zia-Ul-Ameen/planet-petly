"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const NAV_LINKS_KEYS = [
    { labelKey: "nav.home", href: "#hero" },
    { labelKey: "nav.products", href: "#products" },
    { labelKey: "nav.about", href: "#about" },
    { labelKey: "nav.contact", href: "#contact" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div className="flex flex-col gap-[5px] w-6">
            <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""
                    }`}
            />
            <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : ""
                    }`}
            />
            <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
            />
        </div>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 100; // account for navbar + wave
            const top =
                element.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setMenuOpen(false);
        window.history.pushState(null, "", href);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* ── Blue Glass bar ── */}
            <div className="bg-[#2a7dc9] backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto px-5 lg:px-10">
                    <div className="flex items-center justify-between pt-6 pb-2">

                        {/* Logo */}
                        <Link
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "#hero")}
                            aria-label="Planet Petly home"
                            className="flex-shrink-0"
                        >
                            <Image
                                src="/logo.svg"
                                alt="Planet Petly"
                                width={180}
                                height={40}
                                priority
                                className="brightness-0 invert w-[140px] md:w-[180px] h-auto"
                            />
                        </Link>

                        {/* Desktop nav links */}
                        <nav
                            className="hidden md:flex items-center gap-2"
                            aria-label="Primary navigation"
                        >
                            {NAV_LINKS_KEYS.map((link) => (
                                <Link
                                    key={link.labelKey}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded-full transition-all duration-200 hover:bg-white/15"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </nav>

                        {/* Right: Cart + mobile hamburger */}
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block">
                                <Link
                                    href="#contact"
                                    onClick={(e) => scrollToSection(e, "#contact")}
                                    className={`px-5 py-2.5 text-sm font-extrabold tracking-wide rounded-full border-2 transition-all duration-300 border-white text-white hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#2a7dc9]`}
                                >
                                    {t("nav.notify_me")}
                                </Link>
                            </div>

                            {/* Language Switcher */}
                            <div className="flex items-center gap-2">
                                <select
                                    value={locale}
                                    onChange={(e) => setLocale(e.target.value as "en" | "es" | "fr" | "tr")}
                                    className="bg-white/10 text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 cursor-pointer appearance-none transition-all duration-200 text-center"
                                    style={{
                                        width: locale === 'en' ? '65px' : locale === 'es' ? '69px' : locale === 'fr' ? '73px' : '62px'
                                    }}
                                >
                                    <option value="en" className="bg-[#2a7dc9] text-white">English</option>
                                    <option value="es" className="bg-[#2a7dc9] text-white">Español</option>
                                    <option value="fr" className="bg-[#2a7dc9] text-white">Français</option>
                                    <option value="tr" className="bg-[#2a7dc9] text-white">Türkçe</option>
                                </select>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition-colors cursor-pointer"
                                onClick={() => setMenuOpen((p) => !p)}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={menuOpen}
                            >
                                <HamburgerIcon open={menuOpen} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <nav className="px-5 pb-5 pt-2 mt-2 border-t border-white/20">
                        <ul className="flex flex-col gap-1">
                            {NAV_LINKS_KEYS.map((link) => (
                                <li key={link.labelKey}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="block text-base font-semibold text-white/90 py-3 border-b border-white/10 last:border-0 hover:text-white transition-colors"
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-6">
                                <Link
                                    href="#contact"
                                    onClick={(e) => scrollToSection(e, "#contact")}
                                    className="block w-full px-5 py-3 text-sm font-extrabold tracking-widest rounded-full border-2 border-white text-white text-center transition-all duration-300 active:bg-yellow-400 active:text-[#2a7dc9] active:border-yellow-400 uppercase"
                                >
                                    {t("nav.notify_me")}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* ── Flipped Blue Glass Cloud Pattern ── */}
            <div className="relative w-full overflow-hidden leading-none px-[-1px]" aria-hidden="true">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full block h-[25px] md:h-[60px] lg:h-auto"
                >
                    {/* Simplified 3-wave path for mobile */}
                    <path
                        d="
                        M0 0
                        L1440 0
                        L1440 40
                        C1350 75 1260 5 1170 40
                        C1080 75 990 5 900 40
                        C810 75 720 5 630 40
                        C540 75 450 5 360 40
                        C270 75 180 5 90 40
                        C45 65 20 55 0 40
                        Z
                        "
                        fill="#2a7dc9"
                        className="md:hidden"
                    />
                    {/* Intricate multi-ripple path for desktop */}
                    <path
                        d="
                        M0 0
                        L1440 0
                        L1440 40
                        C1415 50 1390 49 1365 40
                        C1340 31 1310 32 1285 41
                        C1260 51 1230 50 1200 41
                        C1170 32 1140 31 1110 40
                        C1080 49 1050 51 1020 41
                        C990 31 960 32 930 40
                        C900 49 870 51 840 41
                        C810 32 780 31 750 40
                        C720 49 690 50 660 41
                        C630 32 600 30 570 40
                        C540 50 510 52 480 41
                        C450 32 420 31 390 40
                        C360 50 330 51 300 41
                        C270 32 240 30 210 40
                        C180 49 150 51 120 41
                        C90 32 60 31 30 40
                        C15 44 8 42 0 40
                        Z
                        "
                        fill="#2a7dc9"
                        className="hidden md:block"
                    />
                </svg>
            </div>
        </header>
    );
}
