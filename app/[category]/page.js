import { notFound } from 'next/navigation'

export default function CategoryPage({ params }) {
  const validCategories = ['deals', 'coupons', 'freebies', 'discounts']
  
  if (!validCategories.includes(params.category)) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category content */}
      </div>
    </div>
  )
} 