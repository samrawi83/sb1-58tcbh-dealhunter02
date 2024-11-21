'use client'
import { useState } from 'react'
import { analyzeSerpCompetition } from '@/utils/serpAnalyzer'

export default function KeywordResearch() {
  const [seedKeyword, setSeedKeyword] = useState('')
  const [keywordData, setKeywordData] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyzeKeywords = async () => {
    setLoading(true)
    try {
      const data = await analyzeSerpCompetition(seedKeyword)
      setKeywordData(data)
    } catch (error) {
      console.error('Error analyzing keywords:', error)
    }
    setLoading(false)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Keyword Research & Optimization</h2>

      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={seedKeyword}
            onChange={(e) => setSeedKeyword(e.target.value)}
            placeholder="Enter seed keyword"
            className="flex-1 px-4 py-2 rounded-lg border"
          />
          <button
            onClick={analyzeKeywords}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {keywordData && (
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Keyword Analysis Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keywordData.map((keyword, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{keyword.term}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Score: {keyword.score}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Search Volume: {keyword.searchVolume}</p>
                    <p>Competition: {keyword.competition}</p>
                    <p>CPC: ${keyword.cpc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 