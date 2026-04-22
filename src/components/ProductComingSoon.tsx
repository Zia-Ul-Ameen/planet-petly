'use client';

import Image from 'next/image';

const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Wall-Mounted Multi Roll Poop Bag Dispenser - V1',
    image: '/product-1.jpeg',
    featured: false,
  },
    {
    id: 'product-2',
    name: 'Biodegradable Bag Roll',
    image: '/product-2.jpeg',
    featured: true,
  },
  {
    id: 'product-3',
    name: 'Wall-Mounted Multi Roll Poop Bag Dispenser - V2',
    image: '/product-3.jpg',
    featured: false,
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-14 items-end">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className={`group bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 ring-1 ring-[#2a7dc9]/20 transition-all duration-300 ${
                p.featured
                  ? 'sm:-translate-y-10 shadow-md hover:shadow-xl shadow-[#2a7dc9]/15 hover:-translate-y-12'
                  : 'shadow-md hover:-translate-y-3 hover:shadow-xl hover:shadow-[#2a7dc9]/15'
              }`}
            >
              <div className="px-5 py-3">
                <h3
                  className="text-lg font-black text-[#1a3a2a]"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {p.name}
                </h3>
              </div>
              <div className="relative mx-4 mb-4 rounded-xl overflow-hidden bg-gray-50 aspect-square">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-brand-amber text-brand-navy text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
