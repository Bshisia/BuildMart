export default function DailyDeals({ deals, onAddToCart }) {
  return (
    <section className="mb-10">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-secondary">Today&apos;s Deals</h2>
            <p className="text-gray-600">Limited time offers</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">45</div>
              <div className="text-sm text-gray-600">Mins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">22</div>
              <div className="text-sm text-gray-600">Secs</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg border overflow-hidden">
              <div className="relative">
                <img src={deal.image} alt={deal.alt} className="w-full h-48 object-cover" loading="lazy" />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                  -{deal.discount}%
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{deal.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-red-600">KES {deal.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      KES {deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <i className="fas fa-box mr-1"></i>
                  Only {deal.unitsLeft} units left
                </div>
                <button 
                  onClick={() => onAddToCart(deal.id)}
                  className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
