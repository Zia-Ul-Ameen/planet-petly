"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";

const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [barVisible, setBarVisible] = useState(true);

    useEffect(() => {
        setScrolled(window.scrollY > 20);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 100;
            const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setMenuOpen(false);
        window.history.pushState(null, "", href);
    };

    return (
        <>
            <header className="fixed left-0 right-0 z-50 transition-all duration-300 top-0">
                <AnnouncementBar onDismiss={() => setBarVisible(false)} />

                {/* Main nav bar */}
                <div
                    className={`bg-white/90 backdrop-blur-xl border-b transition-all duration-300 ${
                        scrolled ? "shadow-md border-gray-200" : "shadow-sm border-gray-100"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">

                            {/* Logo */}
                            <Link
                                href="#hero"
                                onClick={(e) => scrollToSection(e, "#hero")}
                                aria-label="Planet Petly home"
                                className="flex-shrink-0 group"
                            >
                                <Image
                                    src="/logo.svg"
                                    alt="Planet Petly"
                                    width={180}
                                    height={40}
                                    priority
                                    className="w-[160px] md:w-[200px] h-auto transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>

                            {/* Desktop nav links */}
                            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="px-4 py-2 text-sm font-semibold text-[#1a3a2a]/80 hover:text-[#2a7dc9] hover:bg-[#2a7dc9]/5 rounded-full transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Right CTA + mobile hamburger */}
                            <div className="flex items-center gap-3">
                                <div className="hidden md:block">
                                    <Link
                                        href="#contact"
                                        onClick={(e) => scrollToSection(e, "#contact")}
                                        className="inline-flex items-center px-5 py-2.5 text-sm font-extrabold tracking-wide rounded-full bg-[#2a7dc9] text-white shadow-lg shadow-[#2a7dc9]/25 hover:bg-[#2176c1] hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Notify Me
                                    </Link>
                                </div>

                                {/* Mobile hamburger */}
                                <button
                                    className="md:hidden p-2 rounded-full text-[#1a3a2a] hover:bg-gray-100 transition-colors cursor-pointer"
                                    onClick={() => setMenuOpen((p) => !p)}
                                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                                    aria-expanded={menuOpen}
                                >
                                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile dropdown */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <nav className="px-4 pb-5 pt-2 border-t border-gray-100">
                            <ul className="flex flex-col gap-1">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="block text-sm font-semibold text-[#1a3a2a]/80 py-3 px-2 border-b border-gray-100 last:border-0 hover:text-[#2a7dc9] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="pt-4">
                                    <Link
                                        href="#contact"
                                        onClick={(e) => scrollToSection(e, "#contact")}
                                        className="block w-full px-5 py-3 text-sm font-extrabold tracking-wide rounded-full bg-[#2a7dc9] text-white text-center transition-all duration-200 hover:bg-[#2176c1]"
                                    >
                                        Notify Me
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
