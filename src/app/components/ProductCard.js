export default function ProductCard({ product, onAddToCart }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="product-card bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 overflow-hidden transition duration-300">
      <div className="relative">
        <img src={product.image} alt={product.alt} className="w-full h-48 object-cover" loading="lazy" />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        <button 
          onClick={() => onAddToCart(product.id)}
          className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <i className="fas fa-cart-plus text-gray-600 dark:text-gray-300"></i>
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.brand}</p>
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2 truncate">{product.name}</h3>
        
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-amber-500">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({product.reviews})</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-secondary dark:text-white">KES {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                KES {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        {product.delivery && (
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            <i className="fas fa-shipping-fast mr-1"></i>
            {product.delivery}
          </p>
        )}
        
        <button 
          onClick={() => onAddToCart(product.id)}
          className="w-full mt-3 bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
