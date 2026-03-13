import Link from 'next/link';

export default function Categories({ categories }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-secondary">Shop by Category</h2>
        <Link href="/categories" className="text-primary hover:underline font-medium">View All</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Link 
            key={index}
            href={category.href} 
            className="category-card bg-white rounded-lg border p-4 text-center transition duration-300"
          >
            <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
              <i className={`${category.icon} text-2xl text-gray-700`}></i>
            </div>
            <h3 className="font-semibold text-gray-800">{category.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{category.count}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
