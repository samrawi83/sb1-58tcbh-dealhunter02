export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <nav className="space-y-2">
              <a href="/deals" className="block hover:text-blue-600">Deals</a>
              <a href="/freebies" className="block hover:text-blue-600">Freebies</a>
              <a href="/coupons" className="block hover:text-blue-600">Coupons</a>
            </nav>
          </div>
          {/* Add more footer sections */}
        </div>
      </div>
    </footer>
  )
} 