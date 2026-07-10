'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Star, ShieldCheck } from 'lucide-react';
import { KICKSTARTER_URL, YOUTUBE_URL } from '@/lib/config';

const heroImages = [
  {
    src: '/images/hero-1.png',
    alt: 'Man with golden retriever using Planet Petly wall-mounted dispenser',
  },
  {
    src: '/images/hero-2.png',
    alt: 'Planet Petly wall-mounted poop bag dispenser',
  },
  {
    src: '/images/product-a3.jpg',
    alt: 'Planet Petly eco-friendly biodegradable poop bags',
  },
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const currentImage = heroImages[currentIndex];

  return (
    <section id="hero" className="relative overflow-hidden bg-white">

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        style={{ paddingTop: 'calc(var(--nav-height, 124px))' }}
      >

        {/* ── Two-column hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 md:py-16 lg:py-20">

          {/* LEFT — content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:pr-6">

            <div
              className="relative mb-2 md:mb-6 -mx-4 sm:-mx-6"
              style={{ animation: 'fadeUp 0.55s ease-out 0.15s both' }}
            >
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-32px -24px',
                  backgroundImage:
                    'linear-gradient(#d1d5db50 1px, transparent 1px), linear-gradient(90deg, #d1d5db50 1px, transparent 1px)',
                  backgroundSize: '120px 120px',
                  transform: 'rotate(-1.8deg)',
                  transformOrigin: 'left center',
                  borderRadius: '6px',
                }}
              />
              <h1
                className="relative px-4 sm:px-6 pb-3"
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                }}
              >
                <span className="block text-[clamp(2.4rem,6vw,4.5rem)] text-[#1a3a2a]">
                  Clean Walks.
                </span>
                <span className="block text-[clamp(2.4rem,6vw,4.5rem)] text-[#2a7dc9]">
                  Happy Planet.
                </span>
                <span className="block text-[clamp(2.4rem,6vw,4.5rem)] text-[#1a3a2a]">
                  Proud Owner.
                </span>
              </h1>
            </div>

            <p
              className="text-sm sm:text-base text-brand-gray leading-relaxed mb-7 max-w-sm"
              style={{ animation: 'fadeUp 0.55s ease-out 0.28s both' }}
            >
              Premium leak-proof poop bags &amp; sleek wall-mounted dispensers —
              because responsible dog ownership should also look good.
            </p>

            <div
              className="flex flex-col gap-3 mb-6"
              style={{ animation: 'fadeUp 0.55s ease-out 0.36s both' }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#2a7dc9] hover:bg-[#2176c1] text-white font-extrabold text-sm sm:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-[#2a7dc9]/25 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  See How It Works
                  <span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center">
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
                <a
                  href={KICKSTARTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border-2 border-[#2a7dc9] text-[#2a7dc9] font-extrabold text-sm sm:text-base hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Back Us on Kickstarter 🌿
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#1a3a2a]/50 font-medium">
                Funded by dog lovers. Built for the planet.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-gray-100"
              style={{ animation: 'fadeUp 0.55s ease-out 0.44s both' }}
            >
              {[
                { icon: Leaf, label: 'Eco-Certified', color: 'text-[#2a7dc9]' },
                { icon: ShieldCheck, label: 'Leak-Proof', color: 'text-[#2a7dc9]' },
                { icon: Star, label: 'Durable Bags', color: 'text-[#2a7dc9]' },
              ].map(({ icon: Icon, label, color }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1a3a2a]/60">
                  <Icon size={13} className={`${color} flex-shrink-0`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — slideshow */}
          <div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end mb-10"
            style={{ animation: 'slideInRight 0.7s ease-out 0.3s both' }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[560px] mx-6 lg:mx-0">

              <div className="absolute inset-4 rounded-[3rem] bg-[#2a7dc9]/10 blur-2xl pointer-events-none" />
              <div className="absolute inset-[-14px] rounded-[3rem] border-2 border-[#2a7dc9]/10 pointer-events-none" />
              <div className="absolute inset-[-30px] rounded-[4rem] border border-[#2a7dc9]/5 pointer-events-none" />

              <div
                className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#2a7dc9]/20"
                style={{ height: 'clamp(320px, 50vw, 560px)' }}
              >
                {heroImages.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top absolute inset-0"
                    style={{
                      opacity: i === currentIndex ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                      zIndex: i === currentIndex ? 1 : 0,
                    }}
                    priority={i === 0}
                    quality={95}
                  />
                ))}

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a3a2a]/20 to-transparent z-10" />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {heroImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)} aria-label={`Slide ${i + 1}`}>
                      <span className={`block rounded-full transition-all duration-300 ${i === currentIndex ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`} />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
