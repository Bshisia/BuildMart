import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Quality Construction Materials Delivered to Your Site
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Get the best prices on cement, steel, tools, and all construction supplies. Free delivery on orders over KES 50,000
          </p>
          <Link 
            href="/deals" 
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Shop Now <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
