export default function Newsletter() {
  return (
    <div className="bg-blue-600 text-white py-12 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Never Miss a Deal!</h2>
        <p className="mb-6">Subscribe to get the latest deals, samples, and giveaways delivered to your inbox.</p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full text-gray-900"
          />
          <button 
            type="submit"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
} 