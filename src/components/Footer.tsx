"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_NAV = [
    { label: "Home", href: "#hero" },
    { label: "Kickstarter", href: "#kickstarter" },
    { label: "Wholesale", href: "#wholesale" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white border-t border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="#hero">
                            <Image
                                src="/logo.svg"
                                alt="ADRARECOM Logo"
                                width={170}
                                height={44}
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            ADRARECOM LLC is dedicated to practical home organization and
                            environmentally responsible pet essentials.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-secondary">Quick Links</h4>
                        <nav>
                            <ul className="flex flex-col gap-3">
                                {FOOTER_NAV.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-secondary">Connect</h4>
                        <div className="flex flex-col gap-3 text-sm text-white/60">
                            <p>Email: <a href="mailto:customercare@adrarecom.com" className="hover:text-white transition-colors">customercare@adrarecom.com</a></p>
                            <p>Business: <a href="mailto:admin@adrarecom.com" className="hover:text-white transition-colors">admin@adrarecom.com</a></p>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-6 lg:items-end">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-secondary">ADRARECOM LLC</h4>
                        <p className="text-xs text-white/40 leading-relaxed lg:text-right italic">
                            Designed with functionality, durability, and sustainability in mind.
                            Built for modern homes and responsible pet owners.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>© {currentYear} ADRARECOM LLC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
