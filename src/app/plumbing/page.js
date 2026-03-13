'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const plumbingProducts = [
  { id: 501, name: "PVC Pipes 4-inch 6m", price: 1200, originalPrice: 1350, discount: 11, rating: 4.3, reviews: 67, image: "https://picsum.photos/300/300?random=501", alt: "PVC Pipes", brand: "PipeMaster", delivery: "Free delivery" },
  { id: 502, name: "Water Tank 500L", price: 8500, originalPrice: 10000, discount: 15, rating: 4.6, reviews: 145, image: "https://picsum.photos/300/300?random=502", alt: "Water Tank", brand: "TankPro", delivery: "Free delivery" },
  { id: 503, name: "Kitchen Sink Stainless", price: 4500, originalPrice: 5500, discount: 18, rating: 4.5, reviews: 123, image: "https://picsum.photos/300/300?random=503", alt: "Kitchen Sink", brand: "SinkMaster", delivery: "Next day" },
  { id: 504, name: "Toilet Suite Complete", price: 12500, originalPrice: 15000, discount: 17, rating: 4.7, reviews: 189, image: "https://picsum.photos/300/300?random=504", alt: "Toilet Suite", brand: "Sanitech", delivery: "Free delivery" },
  { id: 505, name: "Shower Mixer Set", price: 3200, originalPrice: 4000, discount: 20, rating: 4.4, reviews: 98, image: "https://picsum.photos/300/300?random=505", alt: "Shower Mixer", brand: "AquaFlow", delivery: "Free delivery" },
  { id: 506, name: "Basin Mixer Tap", price: 2800, originalPrice: 3500, discount: 20, rating: 4.5, reviews: 112, image: "https://picsum.photos/300/300?random=506", alt: "Basin Mixer", brand: "AquaFlow", delivery: "2-3 days" },
];

export default function PlumbingPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Plumbing Supplies</h1>
        <p className="text-gray-600">Complete range of plumbing materials and fixtures</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plumbingProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
