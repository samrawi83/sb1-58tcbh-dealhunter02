'use client'
import { useState } from 'react'

export default function FilterSort({ onFilter, onSort }) {
  const [sortBy, setSortBy] = useState('newest')
  
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {/* Sort Options */}
      <select 
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value)
          onSort(e.target.value)
        }}
        className="px-4 py-2 rounded-lg border"
      >
        <option value="newest">Newest First</option>
        <option value="popular">Most Popular</option>
        <option value="ending">Ending Soon</option>
      </select>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => onFilter('active')}
          className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
        >
          Active Only
        </button>
        <button 
          onClick={() => onFilter('verified')}
          className="px-4 py-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
        >
          Verified Only
        </button>
      </div>
    </div>
  )
} 