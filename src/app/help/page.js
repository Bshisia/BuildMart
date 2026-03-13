'use client';

import PageLayout from '../components/PageLayout';

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our products, add items to your cart, and proceed to checkout. You can pay via M-Pesa, card, or cash on delivery."
    },
    {
      question: "What are the delivery charges?",
      answer: "Delivery is free for orders over KES 50,000. For orders below this amount, delivery charges vary based on location and weight."
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 1-3 business days. Next-day delivery is available for selected products and locations."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, we accept returns within 7 days of delivery for unused products in original packaging. Contact our support team to initiate a return."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special pricing for bulk orders. Contact our sales team for a custom quote."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via SMS and email. Use this to track your delivery in real-time."
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-6">Help Center</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-semibold text-lg mb-2 flex items-start">
                  <i className="fas fa-question-circle text-primary mr-3 mt-1"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-700 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="mb-6">Our customer support team is here to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </a>
            <a 
              href="tel:+254700000000" 
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
