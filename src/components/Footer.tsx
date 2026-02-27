"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
] as const;

const SOCIAL_LINKS = [
    { label: "Instagram", href: "#", icon: "IG" },
    { label: "Twitter / X", href: "#", icon: "X" },
    { label: "TikTok", href: "#", icon: "TK" },
] as const;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-primary text-white"
            aria-label="Site footer"
            role="contentinfo"
        >
            <div className="max-w-container mx-auto px-6 py-16">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Logo */}
                    <Link href="/" aria-label="Planet Pelty Home">
                        <Image
                            src="/logo.svg"
                            alt="Planet Pelty Logo"
                            width={170}
                            height={44}
                            className="brightness-0 invert"
                        />
                    </Link>

                    {/* Tagline */}
                    <p className="text-white/70 text-sm sm:text-base max-w-xs leading-relaxed">
                        Good for your pet. Better for the planet.
                    </p>

                    {/* Social links */}
                    <nav aria-label="Social media links">
                        <ul className="flex items-center gap-4" role="list">
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.label}>
                                    <Link
                                        href={social.href}
                                        aria-label={social.label}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white/70 text-xs font-semibold hover:border-white hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                    >
                                        {social.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Divider */}
                    <div className="w-full border-t border-white/10" />

                    {/* Bottom bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-xs text-white/50">
                        <p>© {currentYear} Planet Pelty. All rights reserved.</p>

                        <nav aria-label="Legal links">
                            <ul className="flex items-center gap-6" role="list">
                                {FOOTER_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
