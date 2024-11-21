'use client'
import Image from 'next/image'

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="relative aspect-video mb-4">
        <Image
          src={deal?.image || '/placeholder.jpg'}
          alt={deal?.title || 'Deal'}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{deal?.title}</h2>
      <p className="text-gray-600">{deal?.description}</p>
    </div>
  )
}

export default DealCard 