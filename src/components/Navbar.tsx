"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Overview", href: "#overview" },
    { label: "Product", href: "#product" },
    { label: "About", href: "#about" },
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

    // Close mobile menu on nav link click
    const handleNavClick = () => setMenuOpen(false);

    const navBg = scrolled
        ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10"
        : "bg-transparent";

    const textColor = scrolled ? "text-white" : "text-white";
    const logoFilter = scrolled ? "brightness-0 invert" : "brightness-0 invert";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBg}`}
            role="banner"
        >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20 lg:h-[88px]">

                    {/* Left: Logo */}
                    <Link
                        href="/"
                        aria-label="Planet Pelty Home"
                        className="flex-shrink-0 flex items-center gap-2"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Planet Pelty"
                            width={170}
                            height={44}
                            priority
                            className={`hidden md:block transition-all duration-300 ${logoFilter}`}
                        />
                        <Image
                            src="/logo.svg"
                            alt="Planet Pelty"
                            width={130}
                            height={34}
                            priority
                            className={`md:hidden transition-all duration-300 ${logoFilter}`}
                        />
                    </Link>

                    {/* Center: Desktop Navigation Links */}
                    <nav
                        className="hidden md:flex items-center gap-1"
                        aria-label="Primary navigation"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-200
                  ${textColor} hover:opacity-100 opacity-80 hover:bg-white/10`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA + Mobile burger */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="#waitlist"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                            aria-label="Join Planet Pelty waitlist"
                        >
                            Join Waitlist
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-md ${textColor} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white`}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <span
                                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                            />
                            <span
                                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-primary/98 backdrop-blur-sm border-t border-white/10 px-6 pb-6 pt-4">
                    <nav aria-label="Mobile navigation">
                        <ul className="flex flex-col gap-1" role="list">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className="block text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10 last:border-0 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link
                                    href="#waitlist"
                                    onClick={handleNavClick}
                                    className="block text-center w-full px-5 py-3 text-sm font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    Join Waitlist
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
