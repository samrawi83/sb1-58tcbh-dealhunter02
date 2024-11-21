'use client'
import { useState } from 'react'

export default function PostManager() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('all')

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Posts</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add New Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Posts</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
          <option value="draft">Drafts</option>
        </select>
      </div>

      {/* Posts Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Title</th>
            <th className="text-left py-2">Category</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample row */}
          <tr className="border-b">
            <td className="py-2">Sample Post</td>
            <td>Freebies</td>
            <td>Active</td>
            <td>2024-03-20</td>
            <td className="flex gap-2">
              <button className="text-blue-600">Edit</button>
              <button className="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
} 