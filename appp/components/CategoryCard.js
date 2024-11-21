export default function CategoryCard({ title, subcategories }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {subcategories.map((sub, index) => (
          <a 
            key={index}
            href={`/${title.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`}
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            {sub}
          </a>
        ))}
      </div>
    </div>
  )
} 