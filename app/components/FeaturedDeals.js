import { useState } from 'react';
import { ClockIcon, FireIcon, TagIcon } from '@heroicons/react/24/outline';

export default function FeaturedDeals() {
  const [timeLeft] = useState('23:59:59');

  const deals = [
    {
      id: 1,
      title: "Amazon Echo Dot - 65% OFF",
      description: "Latest generation smart speaker with improved sound",
      originalPrice: 49.99,
      salePrice: 17.49,
      savings: "65%",
      image: "/deals/echo-dot.jpg",
      expiresIn: "2 hours",
      claimed: 89,
      total: 100
    },
    // Add more featured deals
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="flex items-center">
              <FireIcon className="w-8 h-8 text-red-500 mr-2" />
              Hot Deals
            </span>
          </h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <ClockIcon className="w-5 h-5" />
            <span className="font-mono">{timeLeft}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="relative">
                <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {deal.savings} OFF
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through">${deal.originalPrice}</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">${deal.salePrice}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 inline mr-1" />
                    {deal.expiresIn} left
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 rounded-full h-2" 
                      style={{ width: `${(deal.claimed / deal.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {deal.claimed} of {deal.total} claimed
                  </p>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Claim Deal Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}