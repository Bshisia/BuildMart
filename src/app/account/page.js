'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageLayout from '../components/PageLayout';
import { useAuth } from '../components/AuthProvider';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary dark:text-white mb-6">My Account</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-4xl text-white"></i>
                </div>
                <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#profile" className="block px-4 py-2 rounded-lg bg-primary text-white">
                  <i className="fas fa-user mr-2"></i>Profile
                </a>
                <a href="#orders" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
                  <i className="fas fa-box mr-2"></i>My Orders
                </a>
                <a href="#addresses" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
                  <i className="fas fa-map-marker-alt mr-2"></i>Addresses
                </a>
                <a href="#wishlist" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
                  <i className="fas fa-heart mr-2"></i>Wishlist
                </a>
                <button onClick={logout} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-red-600 dark:text-red-400">
                  <i className="fas fa-sign-out-alt mr-2"></i>Logout
                </button>
              </nav>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    readOnly
                  />
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">Recent Orders</h2>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <i className="fas fa-box-open text-4xl mb-4"></i>
                <p>No orders yet</p>
                <a href="/" className="text-primary hover:underline mt-2 inline-block">
                  Start Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
