export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for deals, freebies, coupons..."
          className="w-full px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 justify-center text-sm">
        <span className="text-gray-600">Popular:</span>
        <a href="#" className="text-blue-600 hover:underline">Electronics</a>
        <a href="#" className="text-blue-600 hover:underline">Clothing</a>
        <a href="#" className="text-blue-600 hover:underline">Home & Garden</a>
        <a href="#" className="text-blue-600 hover:underline">Health & Beauty</a>
        <a href="#" className="text-blue-600 hover:underline">Sports & Outdoors</a>
        <a href="#" className="text-blue-600 hover:underline">Toys & Games</a>
        <a href="#" className="text-blue-600 hover:underline">Travel</a>
      </div>
    </div>
  );
} 