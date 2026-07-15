import { notFound } from 'next/navigation';
import ProductDetailClient from '@/app/products/[id]/ProductDetailClient';

export type ProductId = 'wall-mounted-multi-roll-poop-bag-dispenser' | 'certified-compostable-pet-waste-bags';

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
    tagline: 'Stores rolls, keeps bags ready, and makes every walk easier.',
    description:
      "Say goodbye to searching for poop bags before every walk. The PlanetPetly Wall-Mounted Poop Bag Organizer keeps refills, everyday bags, and your portable dispenser in one clean place. Designed for entryways, garages, mudrooms, or near the door, it helps you stay ready before every walk.",
    price: 'Coming Soon',
    badge: 'Most Popular',
    color: '#2a7dc9',
    features: [
      'Holds up to 15 bag rolls',
      'Bottom pull slot for quick access',
      'Portable dispenser included',
      'Wall-mount with screws or adhesive',
      'Keeps leash, bags, and refills together',
    ],
    images: [
      '/images/product-a1.png',
      '/images/product-a5.png',
      '/images/product-a2.jpeg',
      '/images/product-b3.png',
      '/images/product-b2.png',
      '/images/product-a3.jpg',
      '/images/product-a4.png',
    ],
  },
  'certified-compostable-pet-waste-bags': {
    id: 'product-b',
    name: 'Certified Compostable Pet Waste Bags',
    tagline: 'Good for your dog. Better for the planet.',
    description:
      "PlanetPetly pet waste bags are made with plant-based compostable materials and designed for everyday cleanups. Extra-thick, leak-resistant, and easy to open, each roll fits standard dispensers and works perfectly with the PlanetPetly organizer.",
    price: 'Coming Soon',
    badge: 'Eco Choice',
    color: '#2d6a4f',
    features: [
      'Certified compostable',
      'Extra-thick, leak-resistant design',
      'Easy to open and tear',
      'Unscented and pet-safe',
      'Fits standard dispensers',
      '240 bags / 16 rolls',
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
