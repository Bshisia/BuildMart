'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const toolsProducts = [
  { id: 301, name: "Makita Cordless Drill", price: 12500, originalPrice: 14500, discount: 14, rating: 4.8, reviews: 256, image: "https://picsum.photos/300/300?random=301", alt: "Makita Drill", brand: "Makita", delivery: "Free delivery" },
  { id: 302, name: "Bosch Angle Grinder", price: 8500, originalPrice: 10000, discount: 15, rating: 4.7, reviews: 189, image: "https://picsum.photos/300/300?random=302", alt: "Angle Grinder", brand: "Bosch", delivery: "Free delivery" },
  { id: 303, name: "Circular Saw 7-inch", price: 9800, originalPrice: 11500, discount: 15, rating: 4.6, reviews: 145, image: "https://picsum.photos/300/300?random=303", alt: "Circular Saw", brand: "Makita", delivery: "Next day" },
  { id: 304, name: "Hammer Drill Set", price: 15500, originalPrice: 18000, discount: 14, rating: 4.8, reviews: 234, image: "https://picsum.photos/300/300?random=304", alt: "Hammer Drill", brand: "Bosch", delivery: "Free delivery" },
  { id: 305, name: "Tool Box Complete Set", price: 6500, originalPrice: 7800, discount: 17, rating: 4.5, reviews: 167, image: "https://picsum.photos/300/300?random=305", alt: "Tool Box", brand: "Stanley", delivery: "Free delivery" },
  { id: 306, name: "Electric Planer", price: 7200, originalPrice: 8500, discount: 15, rating: 4.4, reviews: 98, image: "https://picsum.photos/300/300?random=306", alt: "Electric Planer", brand: "Makita", delivery: "2-3 days" },
  { id: 307, name: "Jigsaw Machine", price: 5800, originalPrice: 6800, discount: 15, rating: 4.6, reviews: 123, image: "https://picsum.photos/300/300?random=307", alt: "Jigsaw", brand: "Bosch", delivery: "Free delivery" },
  { id: 308, name: "Impact Driver Kit", price: 11200, originalPrice: 13000, discount: 14, rating: 4.7, reviews: 178, image: "https://picsum.photos/300/300?random=308", alt: "Impact Driver", brand: "Makita", delivery: "Next day" },
];

export default function ToolsPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Tools & Equipment</h1>
        <p className="text-gray-600">Professional power tools and equipment for construction</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toolsProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
