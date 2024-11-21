'use client'
import { useState } from 'react'

export default function LeadCaptureForm({ type = 'popup' }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: []
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Add API call to save lead
      setSubmitted(true)
    } catch (error) {
      console.error('Error saving lead:', error)
    }
  }

  if (type === 'popup') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Get Exclusive Deals!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Inline form
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
} 