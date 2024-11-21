export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold">DealHunter</a>
          <nav className="hidden md:flex space-x-4">
            <a href="/deals" className="hover:text-blue-600">Deals</a>
            <a href="/freebies" className="hover:text-blue-600">Freebies</a>
            <a href="/coupons" className="hover:text-blue-600">Coupons</a>
            <a href="/samples" className="hover:text-blue-600">Samples</a>
          </nav>
        </div>
      </div>
    </header>
  )
} 