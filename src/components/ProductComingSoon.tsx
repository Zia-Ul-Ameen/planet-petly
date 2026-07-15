'use client';

import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'certified-compostable-pet-waste-bags',
    name: 'Certified Compostable Pet Waste Bags',
    image: '/images/product-b1.png',
    featured: false,
  },
  {
    id: 'wall-mounted-multi-roll-poop-bag-dispenser',
    name: 'Wall-Mounted Multi Roll Poop Bag Dispenser',
    image: '/images/product-a1.png',
    featured: true,
  },
];

export default function ProductComingSoon() {
  return (
    <section id="products" className="py-20 pb-10 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-20">
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-none uppercase tracking-tight"
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              WebkitTextStroke: '1.5px rgba(42,125,201,0.4)',
              color: 'transparent',
            }}
          >
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-14 items-end max-w-3xl mx-auto">
          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className={`bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 ring-1 ring-[#2a7dc9]/20 transition-all duration-300 cursor-pointer ${p.featured
                  ? 'sm:-translate-y-10 shadow-md hover:shadow-xl shadow-[#2a7dc9]/15 hover:-translate-y-12'
                  : 'shadow-md hover:-translate-y-3 hover:shadow-xl hover:shadow-[#2a7dc9]/15'
                }`}
            >
              <div className="px-5 py-3">
                <h3
                  className="text-lg font-black text-[#1a3a2a]"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {p.name}  - <span className="bg-brand-amber/70 text-brand-navy text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                    Coming Soon
                  </span>
                </h3>
              </div>
              <div className="relative mx-4 mb-4 rounded-xl overflow-hidden bg-gray-50 aspect-square">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                  quality={90}
                />
                {/* View Details overlay */}
                <div className="absolute inset-0 bg-[#1a3a2a]/0 group-hover:bg-[#1a3a2a]/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white text-[#1a3a2a] text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
