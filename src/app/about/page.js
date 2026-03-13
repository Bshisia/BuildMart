'use client';

import PageLayout from '../components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-6">About BuildMart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2015, BuildMart has grown to become Kenya&apos;s leading online marketplace for construction materials. 
            We started with a simple mission: to make quality construction materials accessible and affordable to everyone.
          </p>
          <p className="text-gray-700 mb-4">
            Today, we serve thousands of customers across the country, from individual homeowners to large construction companies. 
            Our commitment to quality, competitive pricing, and excellent customer service has made us the trusted choice for construction materials.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide high-quality construction materials at competitive prices with exceptional customer service and reliable delivery.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <i className="fas fa-check-circle text-success mr-2"></i>
                Quality Guaranteed
              </h3>
              <p className="text-gray-700">All our products are sourced from trusted manufacturers and suppliers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <i className="fas fa-check-circle text-success mr-2"></i>
                Competitive Prices
              </h3>
              <p className="text-gray-700">We offer the best prices in the market with regular deals and discounts.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <i className="fas fa-check-circle text-success mr-2"></i>
                Fast Delivery
              </h3>
              <p className="text-gray-700">Free delivery on orders over KES 50,000 with next-day delivery available.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <i className="fas fa-check-circle text-success mr-2"></i>
                Expert Support
              </h3>
              <p className="text-gray-700">Our team of experts is always ready to help with your construction needs.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
