"use client";

import { motion } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER } from "@/lib/animations";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video — 16:9 ratio, full-width */}
      <div className="w-full aspect-video relative min-h-[400px]">
        <video
          src="/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Layered gradient overlay: top darkens for navbar, bottom darkens for CTA */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label */}
          <motion.span
            variants={FADE_UP}
            className="inline-block border border-white/40 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm bg-white/10"
          >
            Eco-Friendly Pet Essentials
          </motion.span>

          <motion.h1
            variants={FADE_UP}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.1] max-w-4xl"
          >
            Good for Your Pet.
            <br />
            <span className="text-secondary italic font-light">Better for the Planet.</span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            className="mt-6 text-white/75 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed"
          >
            Everyday pet products made from compostable, plant-based materials
            — without compromising on quality.
          </motion.p>

          <motion.div variants={FADE_UP} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#product"
              className="inline-block bg-secondary text-primary font-semibold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg"
              aria-label="Explore Planet Pelty products"
            >
              Shop Now
            </Link>
            <Link
              href="#about"
              className="inline-block text-white/90 font-medium px-6 py-4 rounded-full text-sm tracking-wide border border-white/30 hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Learn about Planet Pelty"
            >
              Our Story →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
