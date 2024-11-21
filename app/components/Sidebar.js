import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Never Miss a Deal</h3>
        <p className="text-gray-600 mb-4">
          Get the best deals delivered directly to your inbox.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Popular Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <Link
              key={category.name}
              href={category.href}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
} 