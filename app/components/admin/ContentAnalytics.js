'use client'
import { useState, useEffect } from 'react'
import { ContentAutomator } from '@/utils/contentAutomation'
import { ContentTester } from '@/utils/contentTesting'
import { EngagementTracker } from '@/utils/engagementTracker'
import { ContentRecommender } from '@/utils/contentRecommendation'

export default function ContentAnalytics() {
  const [metrics, setMetrics] = useState(null)
  const [tests, setTests] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    initializeAnalytics()
  }, [])

  const initializeAnalytics = async () => {
    const automator = new ContentAutomator()
    const tester = new ContentTester()
    const tracker = new EngagementTracker()
    const recommender = new ContentRecommender()

    // Initialize all systems and gather data
    const data = await Promise.all([
      tracker.getAllMetrics(),
      tester.getActiveTests(),
      recommender.getTopRecommendations()
    ])

    setMetrics(data[0])
    setTests(data[1])
    setRecommendations(data[2])
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content Analytics</h2>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Engagement Score" value={metrics?.engagementScore} />
        <MetricCard title="Conversion Rate" value={metrics?.conversionRate} />
        <MetricCard title="Average Time on Page" value={metrics?.avgTimeOnPage} />
      </div>

      {/* A/B Tests */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Active A/B Tests</h3>
        <div className="space-y-4">
          {tests.map(test => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
      </div>

      {/* Content Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Top Performing Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map(rec => (
            <RecommendationCard key={rec.id} recommendation={rec} />
          ))}
        </div>
      </div>
    </div>
  )
} 