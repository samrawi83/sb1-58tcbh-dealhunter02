export default function PostCard({ 
  title, 
  description, 
  image, 
  link, 
  category, 
  expiryDate, 
  endTime 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full"
          />
          {category && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {(expiryDate || endTime) && (
          <div className="text-sm text-red-600 mb-4">
            Expires: {new Date(expiryDate || endTime).toLocaleDateString()}
          </div>
        )}
        
        <a 
          href={link} 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {category?.includes('Coupon') ? 'Get Coupon' : 'Get Deal'}
        </a>
      </div>
    </div>
  )
} 