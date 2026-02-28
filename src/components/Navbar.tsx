"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "Wholesale", href: "#wholesale" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Approximate navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMenuOpen(false);
        window.history.pushState(null, "", href);
    };

    const navBg = scrolled
        ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/5"
        : "bg-transparent";

    const textColor = scrolled ? "text-secondary" : "text-black";
    const logoFilter = scrolled ? "brightness-0 invert" : "";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBg}`}
        >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20 lg:h-[88px]">

                    {/* Left: Logo */}
                    <Link
                        href="#hero"
                        onClick={(e) => scrollToSection(e, "#hero")}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/logo.svg"
                            alt="ADRARECOM Logo"
                            width={170}
                            height={44}
                            priority
                            className={`transition-all duration-300 ${logoFilter}`}
                        />
                    </Link>

                    {/* Center: Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${textColor} hover:opacity-100 opacity-80 hover:bg-black/5`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className={`px-5 py-2.5 text-sm font-semibold tracking-wide rounded-full border-2 transition-all duration-300
                ${scrolled
                                    ? "border-secondary text-secondary hover:bg-secondary hover:text-primary"
                                    : "border-primary text-primary hover:bg-primary hover:text-white"
                                }`}
                        >
                            Notify Me
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className={`md:hidden flex flex-col gap-1.5 p-2 rounded-md ${textColor} hover:opacity-80 focus:outline-none`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className={`md:hidden border-t px-6 pb-6 pt-4 shadow-xl transition-colors duration-300 ${scrolled ? "bg-primary border-white/5" : "bg-white border-black/5"
                    }`}>
                    <nav>
                        <ul className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className={`block text-base font-medium py-3 border-b last:border-0 transition-colors ${scrolled
                                            ? "text-secondary hover:text-white border-white/5"
                                            : "text-primary/80 hover:text-primary border-black/5"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
