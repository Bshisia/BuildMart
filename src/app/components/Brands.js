export default function Brands({ brands }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-secondary dark:text-white mb-6">Top Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4 flex items-center justify-center">
            <img src={brand.logo} alt={brand.alt} className="h-10 object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
