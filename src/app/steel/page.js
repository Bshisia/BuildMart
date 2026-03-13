'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const steelProducts = [
  { id: 201, name: "Y8 Steel Bars 6m", price: 850, originalPrice: 1000, discount: 15, rating: 4.6, reviews: 89, image: "https://picsum.photos/300/300?random=201", alt: "Y8 Steel Bars", brand: "SteelCorp", delivery: "Free delivery" },
  { id: 202, name: "Y10 Steel Bars 6m", price: 1050, originalPrice: 1200, discount: 13, rating: 4.7, reviews: 112, image: "https://picsum.photos/300/300?random=202", alt: "Y10 Steel Bars", brand: "SteelCorp", delivery: "Free delivery" },
  { id: 203, name: "Y12 Steel Bars 6m", price: 1250, originalPrice: 1400, discount: 11, rating: 4.7, reviews: 156, image: "https://picsum.photos/300/300?random=203", alt: "Y12 Steel Bars", brand: "SteelCorp", delivery: "Next day" },
  { id: 204, name: "Y16 Steel Bars 6m", price: 1850, originalPrice: 2100, discount: 12, rating: 4.8, reviews: 134, image: "https://picsum.photos/300/300?random=204", alt: "Y16 Steel Bars", brand: "SteelCorp", delivery: "Free delivery" },
  { id: 205, name: "Binding Wire 5kg", price: 650, originalPrice: 750, discount: 13, rating: 4.4, reviews: 98, image: "https://picsum.photos/300/300?random=205", alt: "Binding Wire", brand: "WireTech", delivery: "Free delivery" },
  { id: 206, name: "Steel Mesh 6x3m", price: 3200, originalPrice: 3800, discount: 16, rating: 4.5, reviews: 76, image: "https://picsum.photos/300/300?random=206", alt: "Steel Mesh", brand: "SteelCorp", delivery: "2-3 days" },
];

export default function SteelPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Steel & Reinforcement</h1>
        <p className="text-gray-600">High-quality steel bars, mesh, and reinforcement materials</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {steelProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
