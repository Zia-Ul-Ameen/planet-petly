import { notFound } from 'next/navigation';
import ProductDetailClient from '@/app/products/[id]/ProductDetailClient';

export type ProductId = 'wall-mounted-multi-roll-poop-bag-dispenser' | 'biodegradable-bag-roll';

export const PRODUCTS: Record<
  ProductId,
  {
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
> = {
  'wall-mounted-multi-roll-poop-bag-dispenser': {
    id: 'product-a',
    name: 'Wall-Mounted Multi Roll Poop Bag Dispenser',
    tagline: 'Hands-free convenience, every single walk.',
    description:
      "Say goodbye to fumbling for poop bags. Our Wall-Mounted Multi Roll Dispenser holds multiple rolls at once — always loaded, always ready. Designed for entryways, garages, or outdoor posts, it keeps your cleanup routine seamless and stress-free. Crafted from durable, weather-resistant materials with a clean modern finish that complements any home.",
    price: 'Coming Soon',
    badge: 'Most Popular',
    color: '#2a7dc9',
    features: [
      'Holds multiple bag rolls simultaneously',
      'Weather-resistant & durable build',
      'Easy wall-mount installation',
      'Compatible with standard bag rolls',
      'Sleek, modern design',
    ],
    images: [
      '/images/product-a1.png',
      '/images/product-a2.jpeg',
      '/images/product-a3.jpg',
      '/images/product-a4.png',
      '/images/product-b2.png',
      '/images/product-b3.png',
      '/images/product-a5.png',
    ],
  },
  'biodegradable-bag-roll': {
    id: 'product-b',
    name: 'Biodegradable Bag Roll',
    tagline: 'Good for your dog. Better for the planet.',
    description:
      "Our Biodegradable Bag Rolls are made from plant-based materials that break down naturally, leaving no lasting footprint. Extra-thick, leak-proof construction means zero mess — while the eco-conscious formula means zero guilt. Each roll is perfectly sized for our dispenser system and available in compostable packaging.",
    price: 'Coming Soon',
    badge: 'Eco Choice',
    color: '#2d6a4f',
    features: [
      '100% plant-based & compostable',
      'Extra-thick leak-proof design',
      'Unscented & pet-safe',
      'Fits standard & our dispenser rolls',
      'Compostable packaging',
    ],
    images: [
      '/images/product-b1.png',
      '/images/product-b2.png',
      '/images/product-b3.png',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((id) => ({ id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS[id as ProductId];

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
