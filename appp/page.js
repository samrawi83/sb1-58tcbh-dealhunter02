import { DealCard } from './components/DealCard'
import Header from './components/Header'

export default function Home() {
  const deals = [
    {
      id: 1,
      title: 'Sample Deal 1',
      description: 'This is a sample deal',
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      title: 'Sample Deal 2',
      description: 'This is another sample deal',
      image: '/placeholder.jpg'
    }
  ]

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <nav className="space-y-2">
              <a href="/deals" className="block hover:text-blue-600">Deals</a>
              <a href="/freebies" className="block hover:text-blue-600">Freebies</a>
              <a href="/coupons" className="block hover:text-blue-600">Coupons</a>
              <a href="/samples" className="block hover:text-blue-600">Samples</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-8">Latest Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deals.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}