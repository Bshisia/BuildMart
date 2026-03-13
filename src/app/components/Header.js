import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useAuth } from './AuthProvider';

export default function Header({ cart, onCartClick, navigationItems }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-secondary dark:text-white">
              <i className="fas fa-hard-hat text-accent mr-2"></i>
              BuildMart
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span className="dark:text-gray-300">Deliver to: <span className="font-semibold">Nairobi</span></span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="relative">
              <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <i className="fas fa-shopping-cart text-xl text-secondary dark:text-white"></i>
                <span className="cart-badge">{cartCount}</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 hover:text-primary">
                    <i className="fas fa-user-circle text-xl text-gray-600 dark:text-gray-300"></i>
                    <span className="text-sm dark:text-gray-300">{user.name}</span>
                    <i className="fas fa-chevron-down text-xs dark:text-gray-300"></i>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 hidden group-hover:block">
                    <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-user mr-2"></i>My Account
                    </Link>
                    <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-box mr-2"></i>My Orders
                    </Link>
                    <button onClick={logout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-sign-out-alt mr-2"></i>Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="flex items-center space-x-2 hover:text-primary">
                  <i className="fas fa-user-circle text-xl text-gray-600 dark:text-gray-300"></i>
                  <span className="text-sm dark:text-gray-300">Login</span>
                </Link>
              )}
            </div>
            <button className="md:hidden p-2">
              <i className="fas fa-bars text-xl dark:text-white"></i>
            </button>
          </div>
        </div>

        <nav className="py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-4 md:gap-6 mb-3 md:mb-0">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium">
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
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
