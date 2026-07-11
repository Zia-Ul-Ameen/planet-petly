'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Leaf, Shield, Heart, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const OVERVIEW_IMAGES = [
  { src: '/images/overview-1.png', alt: 'Product overview 1' },
  { src: '/images/overview-2.png', alt: 'Product overview 2' },
  { src: '/images/overview-3.PNG', alt: 'Product overview 3' },
  { src: '/images/overview-5.png', alt: 'Product overview 5' },
  { src: '/images/overview-6.png', alt: 'Product overview 6' },
];

const PRODUCT_FAQ: Record<string, { question: string; answer: string }[]> = {
  'product-b': [
    { question: 'How many bags are included in one refill box?', answer: 'Each PlanetPetly refill box includes 16 rolls, with 15 bags per roll, for a total of 240 bags.' },
    { question: 'What size are the refill rolls?', answer: 'Each roll is approximately 6 cm / 2.4 in long and 3 cm / 1.2 in diameter, designed to fit most standard dog poop bag dispensers.' },
    { question: 'Do these refill rolls fit the PlanetPetly Wall-Mounted Organizer?', answer: 'Yes. PlanetPetly refill rolls are designed to fit perfectly inside the PlanetPetly Wall-Mounted Poop Bag Organizer.' },
    { question: 'Are the bags compostable?', answer: 'Yes. PlanetPetly bags are certified compostable and made with plant-based materials for responsible everyday cleanups.' },
    { question: 'Are the bags leak-resistant?', answer: 'Yes. The bags are designed to be extra thick and leak-resistant for safe and clean pet waste pickup.' },
    { question: 'Are the bags easy to open and tear?', answer: 'Yes. Each bag is designed with easy-tear perforations and an easy-open feel for quick use during walks.' },
    { question: 'Can I use these bags for cat litter?', answer: 'Yes. They can be used for dog waste, cat litter cleanups, and other small pet waste needs.' },
  ],
  'product-a': [
    { question: 'What is the PlanetPetly Wall-Mounted Poop Bag Organizer?', answer: 'PlanetPetly is a wall-mounted organizer designed to keep poop bags, refills, your portable dispenser, and leash in one clean place near the door, so you are always ready before every walk.' },
    { question: 'How many rolls can it hold?', answer: 'The organizer can hold up to 15 bag rolls inside, with one roll ready at the bottom pull slot for quick access.' },
    { question: 'Can I install it without drilling?', answer: 'Yes. PlanetPetly includes both 3M adhesive pads and screws, so you can choose the mounting method that works best for your wall.' },
    { question: 'Does it come with a portable dispenser?', answer: 'Yes. The kit includes a portable green dispenser that can hang on the side hook and be taken with you during walks.' },
    { question: 'Does it fit standard poop bag rolls?', answer: 'Yes. PlanetPetly is designed to fit most standard-size dog poop bag rolls, including PlanetPetly compostable refill rolls.' },
    { question: 'Are the included bags compostable?', answer: 'Yes. The included pet waste bags are certified compostable and made for everyday cleanups.' },
  ],
};

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  images: string[];
  badge: string;
  color: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  const accentColor = product.color;

  return (
    <div className="min-h-screen bg-[#f8f5f0]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
      {/* Homepage Navbar */}
      <Navbar />

      {/* Product Detail Section — padded down past the fixed navbar */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20"
        style={{ paddingTop: 'calc(var(--nav-height, 124px) + 1.2rem)' }}
      >
        {/* Back to products with icon */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm font-black pb-3 text-[#1a3a2a]/70 hover:text-[#1a3a2a] transition-colors group mb-1 self-start"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Products</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl aspect-square border-[0.5]" 
            style={{ borderColor: accentColor }}>
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover object-center transition-all duration-500"
                quality={90}
                priority
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1.5 thin-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${activeImage === i
                        ? 'shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                    style={activeImage === i ? { borderColor: accentColor } : {}}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover object-center"
                      quality={75}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black leading-tight text-[#1a3a2a]">
                {product.name}
              </h1>
              <p className="mt-2 text-base font-medium text-gray-500">{product.tagline}</p>
            </div>

            {/* Price */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
            >
              <span className="text-2xl font-black" style={{ color: accentColor }}>
                {product.price}
              </span>
              <span className="text-sm font-semibold text-gray-400">— Join the waitlist below</span>
            </div>

            {/* Description */}
            <p className="text-[15px] text-gray-600 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-black text-[#1a3a2a] uppercase tracking-widest">Key Features</h3>
              <ul className="flex flex-col gap-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: `${accentColor}18` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-black text-white text-sm tracking-wide shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: accentColor }}
              >
                Notify Me When Available
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-100">
              {[
                { icon: <Leaf size={18} />, label: 'Eco-Friendly' },
                { icon: <Shield size={18} />, label: 'Quality Assured' },
                { icon: <Heart size={18} />, label: '100% Pet Safe' },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-white border border-gray-100">
                  <span style={{ color: accentColor }}>{badge.icon}</span>
                  <span className="text-[11px] font-black text-gray-500 uppercase tracking-wider">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Images — stacked one after another, using full image height */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-black leading-none uppercase tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                WebkitTextStroke: '1.5px rgba(42,125,201,0.4)',
                color: 'transparent',
              }}
            >
              See It In Action
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              Discover how Planet Petly products fit seamlessly into your everyday routine.
            </p>
          </div>

          {/* Stacked images with native aspect ratio */}
          <div className="flex flex-col gap-6">
            {(product.id === 'product-b'
              ? OVERVIEW_IMAGES.filter(img => img.src.includes('overview-5') || img.src.includes('overview-6'))
              : OVERVIEW_IMAGES
            ).map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-2xl border border-gray-100 shadow-sm"
                quality={85}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ from homepage */}
      <FAQ items={PRODUCT_FAQ[product.id]} />

      {/* Contact Form from homepage */}
      <Contact />

      {/* Footer from homepage */}
      <Footer />
    </div>
  );
}
