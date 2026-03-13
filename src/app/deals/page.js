'use client';

import PageLayout from '../components/PageLayout';
import DailyDeals from '../components/DailyDeals';
import { dailyDeals } from '../data';

export default function DealsPage() {
  const addToCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Today&apos;s Hot Deals</h1>
        <p className="text-gray-600">Limited time offers on construction materials and equipment</p>
      </div>

      <DailyDeals deals={dailyDeals} onAddToCart={addToCart} />
    </PageLayout>
  );
}
