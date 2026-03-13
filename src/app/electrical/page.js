'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const electricalProducts = [
  { id: 601, name: "Copper Wire 2.5mm 100m", price: 8500, originalPrice: 10500, discount: 19, rating: 4.7, reviews: 134, image: "https://picsum.photos/300/300?random=601", alt: "Copper Wire", brand: "WireTech", delivery: "Free delivery" },
  { id: 602, name: "Circuit Breaker 63A", price: 1200, originalPrice: 1500, discount: 20, rating: 4.5, reviews: 89, image: "https://picsum.photos/300/300?random=602", alt: "Circuit Breaker", brand: "ElectroSafe", delivery: "Free delivery" },
  { id: 603, name: "Distribution Board 12-Way", price: 3500, originalPrice: 4200, discount: 17, rating: 4.6, reviews: 112, image: "https://picsum.photos/300/300?random=603", alt: "Distribution Board", brand: "ElectroSafe", delivery: "Next day" },
  { id: 604, name: "LED Bulbs 15W Pack of 10", price: 2500, originalPrice: 3200, discount: 22, rating: 4.4, reviews: 178, image: "https://picsum.photos/300/300?random=604", alt: "LED Bulbs", brand: "BrightLight", delivery: "Free delivery" },
  { id: 605, name: "Socket Outlets 13A Pack", price: 850, originalPrice: 1100, discount: 23, rating: 4.3, reviews: 98, image: "https://picsum.photos/300/300?random=605", alt: "Socket Outlets", brand: "ElectroSafe", delivery: "Free delivery" },
  { id: 606, name: "Conduit Pipes 20mm 3m", price: 450, originalPrice: 600, discount: 25, rating: 4.5, reviews: 67, image: "https://picsum.photos/300/300?random=606", alt: "Conduit Pipes", brand: "PipeMaster", delivery: "2-3 days" },
];

export default function ElectricalPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Electrical Supplies</h1>
        <p className="text-gray-600">Quality electrical wiring, fixtures, and accessories</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {electricalProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
