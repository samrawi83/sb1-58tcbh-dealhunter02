'use client'
import { useState, useEffect } from 'react'
import { PerformanceOptimizer } from '@/utils/performanceOptimizer'
import { LeadGenerator } from '@/utils/leadGeneration'
import { ConversionOptimizer } from '@/utils/conversionOptimizer'

export default function AdvancedAnalytics() {
  const [metrics, setMetrics] = useState(null)
  const [insights, setInsights] = useState(null)
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    initializeAnalytics()
  }, [])

  const initializeAnalytics = async () => {
    const optimizer = new PerformanceOptimizer()
    const leads = new LeadGenerator()
    const conversions = new ConversionOptimizer()

    // Gather all metrics and insights
    const data = await Promise.all([
      optimizer.getMetrics(),
      leads.getInsights(),
      conversions.getAnalytics()
    ])

    setMetrics(data[0])
    setInsights(data[1])
    setRecommendations(data[2])
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Analytics Dashboard</h2>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Conversion Rate" 
          value={metrics?.conversionRate} 
          trend={metrics?.conversionTrend}
        />
        <MetricCard 
          title="Lead Generation" 
          value={metrics?.leadGeneration} 
          trend={metrics?.leadTrend}
        />
        <MetricCard 
          title="Revenue" 
          value={metrics?.revenue} 
          trend={metrics?.revenueTrend}
        />
      </div>

      {/* Insights */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Key Insights</h3>
        <div className="space-y-4">
          {insights?.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations?.map((rec, index) => (
            <RecommendationCard key={index} recommendation={rec} />
          ))}
        </div>
      </div>
    </div>
  )
} 