'use client';

import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';

const paintsProducts = [
  { id: 401, name: "Crown Paints 20L White", price: 4500, originalPrice: 5200, discount: 13, rating: 4.4, reviews: 178, image: "https://picsum.photos/300/300?random=401", alt: "Crown Paint White", brand: "Crown", delivery: "Free delivery" },
  { id: 402, name: "Duracoat Emulsion 20L", price: 4200, originalPrice: 4900, discount: 14, rating: 4.5, reviews: 156, image: "https://picsum.photos/300/300?random=402", alt: "Duracoat Emulsion", brand: "Duracoat", delivery: "Free delivery" },
  { id: 403, name: "Crown Gloss Paint 4L", price: 1850, originalPrice: 2200, discount: 16, rating: 4.6, reviews: 134, image: "https://picsum.photos/300/300?random=403", alt: "Gloss Paint", brand: "Crown", delivery: "Next day" },
  { id: 404, name: "Wood Varnish 4L", price: 2100, originalPrice: 2500, discount: 16, rating: 4.3, reviews: 98, image: "https://picsum.photos/300/300?random=404", alt: "Wood Varnish", brand: "Crown", delivery: "Free delivery" },
  { id: 405, name: "Primer Sealer 20L", price: 3800, originalPrice: 4500, discount: 16, rating: 4.5, reviews: 112, image: "https://picsum.photos/300/300?random=405", alt: "Primer Sealer", brand: "Duracoat", delivery: "Free delivery" },
  { id: 406, name: "Texture Paint 20L", price: 5200, originalPrice: 6000, discount: 13, rating: 4.7, reviews: 145, image: "https://picsum.photos/300/300?random=406", alt: "Texture Paint", brand: "Crown", delivery: "2-3 days" },
];

export default function PaintsPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Paints & Finishes</h1>
        <p className="text-gray-600">Premium quality paints, varnishes, and finishing materials</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paintsProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </PageLayout>
  );
}
