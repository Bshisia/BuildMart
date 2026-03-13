import Link from 'next/link';

export default function Header({ cart, onCartClick, navigationItems }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-secondary">
              <i className="fas fa-hard-hat text-accent mr-2"></i>
              BuildMart
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span>Deliver to: <span className="font-semibold">Nairobi</span></span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 rounded-full">
                <i className="fas fa-shopping-cart text-xl text-secondary"></i>
                <span className="cart-badge">{cartCount}</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <i className="fas fa-user-circle text-xl text-gray-600"></i>
              <span className="text-sm">Account</span>
            </div>
            <button className="md:hidden p-2">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        <nav className="py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-4 md:gap-6 mb-3 md:mb-0">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center text-gray-700 hover:text-primary font-medium">
                    <i className={`${item.icon} mr-2`}></i>
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for cement, steel, tools, paints..." 
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
