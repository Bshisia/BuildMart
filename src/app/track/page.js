'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Simulate order tracking
    setOrderStatus({
      orderNumber: trackingNumber,
      status: 'In Transit',
      estimatedDelivery: 'Tomorrow, 2:00 PM',
      timeline: [
        { status: 'Order Placed', date: 'Jan 15, 2024 10:30 AM', completed: true },
        { status: 'Order Confirmed', date: 'Jan 15, 2024 11:00 AM', completed: true },
        { status: 'Packed', date: 'Jan 15, 2024 2:00 PM', completed: true },
        { status: 'In Transit', date: 'Jan 16, 2024 9:00 AM', completed: true },
        { status: 'Out for Delivery', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false }
      ]
    });
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-6">Track Your Order</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <form onSubmit={handleTrack} className="max-w-xl mx-auto">
            <label className="block text-gray-700 font-medium mb-2">Enter Tracking Number</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., BM123456789"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Track
              </button>
            </div>
          </form>
        </div>

        {orderStatus && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6 pb-6 border-b">
              <h2 className="text-2xl font-semibold text-secondary mb-2">Order #{orderStatus.orderNumber}</h2>
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-primary px-4 py-2 rounded-full font-semibold">
                  {orderStatus.status}
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-clock mr-2"></i>
                  Estimated Delivery: {orderStatus.estimatedDelivery}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {orderStatus.timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-success text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {item.completed ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-circle text-xs"></i>
                      )}
                    </div>
                    {index < orderStatus.timeline.length - 1 && (
                      <div className={`w-0.5 h-12 ${item.completed ? 'bg-success' : 'bg-gray-300'}`}></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${item.completed ? 'text-secondary' : 'text-gray-500'}`}>
                      {item.status}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
