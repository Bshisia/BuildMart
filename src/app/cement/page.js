'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const cementProducts = [
  { id: 101, name: "Bamburi Cement 50kg", price: 850, originalPrice: 950, discount: 11, rating: 4.5, reviews: 124, image: "https://picsum.photos/300/300?random=101", alt: "Bamburi Cement", brand: "Bamburi", delivery: "Free delivery" },
  { id: 102, name: "East African Portland Cement", price: 820, originalPrice: 920, discount: 11, rating: 4.4, reviews: 98, image: "https://picsum.photos/300/300?random=102", alt: "Portland Cement", brand: "EAPC", delivery: "Free delivery" },
  { id: 103, name: "Mombasa Cement 50kg", price: 830, originalPrice: 930, discount: 11, rating: 4.3, reviews: 87, image: "https://picsum.photos/300/300?random=103", alt: "Mombasa Cement", brand: "Mombasa", delivery: "Next day" },
  { id: 104, name: "Ballast per Tonne", price: 3500, originalPrice: 4000, discount: 13, rating: 4.6, reviews: 156, image: "https://picsum.photos/300/300?random=104", alt: "Ballast", brand: "BuildMart", delivery: "Free delivery" },
  { id: 105, name: "River Sand per Tonne", price: 2800, originalPrice: 3200, discount: 13, rating: 4.5, reviews: 142, image: "https://picsum.photos/300/300?random=105", alt: "River Sand", brand: "BuildMart", delivery: "Free delivery" },
  { id: 106, name: "Machine Cut Stones", price: 4200, originalPrice: 4800, discount: 13, rating: 4.7, reviews: 178, image: "https://picsum.photos/300/300?random=106", alt: "Cut Stones", brand: "BuildMart", delivery: "2-3 days" },
];

export default function CementPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Cement & Aggregates</h1>
        <p className="text-gray-600">Quality cement, sand, ballast, and aggregates for your construction needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cementProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
