export function DealCard({ deal }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="relative aspect-video mb-4">
        <img
          src={deal?.image || '/placeholder.jpg'}
          alt={deal?.title || 'Deal'}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{deal?.title || 'Deal Title'}</h2>
      <p className="text-gray-600 mb-4">{deal?.description || 'Deal description'}</p>
    </div>
  )
} 