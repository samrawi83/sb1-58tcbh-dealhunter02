'use client'
import { useState, useEffect } from 'react'
import { fetchAndParseFeeds } from '@/utils/rssParser'

export default function RssFeedManager() {
  const [feeds, setFeeds] = useState([])
  const [newFeed, setNewFeed] = useState({ url: '', category: '' })
  const [feedItems, setFeedItems] = useState([])

  const addFeed = async () => {
    if (!newFeed.url) return
    
    try {
      const items = await fetchAndParseFeeds([newFeed.url])
      setFeeds([...feeds, newFeed])
      setFeedItems([...feedItems, ...items])
      setNewFeed({ url: '', category: '' })
    } catch (error) {
      console.error('Error adding feed:', error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">RSS Feed Manager</h2>

      {/* Add New Feed */}
      <div className="flex gap-4 mb-6">
        <input
          type="url"
          placeholder="RSS Feed URL"
          value={newFeed.url}
          onChange={(e) => setNewFeed({...newFeed, url: e.target.value})}
          className="flex-1 px-4 py-2 rounded-lg border"
        />
        <select
          value={newFeed.category}
          onChange={(e) => setNewFeed({...newFeed, category: e.target.value})}
          className="px-4 py-2 rounded-lg border"
        >
          <option value="">Select Category</option>
          <option value="deals">Deals</option>
          <option value="freebies">Freebies</option>
          <option value="coupons">Coupons</option>
        </select>
        <button
          onClick={addFeed}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Feed
        </button>
      </div>

      {/* Feed List */}
      <div className="space-y-4">
        {feeds.map((feed, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <p className="font-medium">{feed.url}</p>
              <p className="text-sm text-gray-600">{feed.category}</p>
            </div>
            <button
              onClick={() => {/* Remove feed */}}
              className="text-red-600 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Feed Items Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Latest Items</h3>
        <div className="space-y-4">
          {feedItems.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.pubDate}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Original
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 