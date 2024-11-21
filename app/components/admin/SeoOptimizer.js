'use client'
import { useState } from 'react'

export default function SeoOptimizer() {
  const [content, setContent] = useState({
    title: '',
    description: '',
    keywords: '',
    mainContent: ''
  })

  const [seoScore, setSeoScore] = useState(null)

  const analyzeSeo = () => {
    const scores = {
      titleLength: calculateTitleScore(content.title),
      descriptionLength: calculateDescriptionScore(content.description),
      keywordDensity: calculateKeywordDensity(content.mainContent, content.keywords),
      readability: calculateReadabilityScore(content.mainContent)
    }

    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) / 4
    setSeoScore(totalScore)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">SEO Optimizer</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={content.title}
            onChange={(e) => setContent({...content, title: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border"
          />
          <p className="text-sm text-gray-500 mt-1">
            {60 - content.title.length} characters remaining
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Meta Description</label>
          <textarea
            value={content.description}
            onChange={(e) => setContent({...content, description: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border"
            rows="3"
          />
          <p className="text-sm text-gray-500 mt-1">
            {160 - content.description.length} characters remaining
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Keywords</label>
          <input
            type="text"
            value={content.keywords}
            onChange={(e) => setContent({...content, keywords: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border"
            placeholder="Comma-separated keywords"
          />
        </div>

        <button
          onClick={analyzeSeo}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Analyze SEO
        </button>

        {seoScore && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">SEO Score: {seoScore}/100</h3>
            {/* Add detailed recommendations */}
          </div>
        )}
      </div>
    </div>
  )
} 