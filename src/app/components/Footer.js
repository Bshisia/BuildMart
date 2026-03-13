import Link from 'next/link';
import { quickLinks, customerService } from '../data';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-hard-hat text-accent mr-2"></i>
              BuildMart
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality construction materials since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {customerService.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers and construction tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Download Our App</h5>
              <div className="flex space-x-2">
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm">
                  <i className="fab fa-google-play mr-2"></i>
                  Google Play
                </button>
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm">
                  <i className="fab fa-apple mr-2"></i>
                  App Store
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 BuildMart. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white"> Terms of Service</Link>
          </p>
          <p className="mt-2 text-sm">
            Accepted Payment Methods: 
            <i className="fab fa-cc-visa ml-2"></i> 
            <i className="fab fa-cc-mastercard ml-2"></i> 
            <i className="fab fa-cc-paypal ml-2"></i> 
            <i className="fas fa-money-bill-wave ml-2"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
