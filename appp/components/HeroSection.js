import { useState } from 'react';
import { ArrowRightIcon, ClockIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const stats = [
    { icon: UserGroupIcon, value: '50,000+', label: 'Active Members' },
    { icon: ClockIcon, value: '24/7', label: 'Deal Updates' },
    { icon: CheckCircleIcon, value: '100%', label: 'Verified Deals' }
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      {/* Scarcity Banner */}
      <div className="bg-yellow-500 text-white py-2 text-center animate-pulse">
        <p className="text-sm font-medium">🔥 Limited Time: Get exclusive access to premium deals - Join now!</p>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Never Miss a <span className="text-blue-600 relative">
              Hot Deal
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Join our community of smart shoppers and save up to 80% on your favorite brands!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-full text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none flex-1 max-w-md"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
              Get Exclusive Deals
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic">"I've saved over $2,000 using DealHunter this year alone!"</p>
            <p className="text-gray-600 text-sm mt-2">- Sarah M., Verified Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}