'use client'
import { useState, useEffect } from 'react'
import { TrackingSystem } from '@/utils/trackingAttribution'
import { PerformanceMonitor } from '@/utils/performanceMonitor'
import { RevenueAnalytics } from '@/utils/revenueAnalytics'

export default function AdvancedReporting() {
  const [metrics, setMetrics] = useState(null)
  const [reports, setReports] = useState(null)
  const [insights, setInsights] = useState(null)

  useEffect(() => {
    initializeReporting()
  }, [])

  const initializeReporting = async () => {
    const tracking = new TrackingSystem()
    const performance = new PerformanceMonitor()
    const revenue = new RevenueAnalytics()

    const data = await Promise.all([
      tracking.getMetrics(),
      performance.getMetrics(),
      revenue.getMetrics()
    ])

    setMetrics(data[0])
    setReports(data[1])
    setInsights(data[2])
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Reporting Dashboard</h2>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Revenue" 
          value={metrics?.revenue} 
          trend={metrics?.revenueTrend}
        />
        <MetricCard 
          title="Conversions" 
          value={metrics?.conversions} 
          trend={metrics?.conversionTrend}
        />
        <MetricCard 
          title="User Engagement" 
          value={metrics?.engagement} 
          trend={metrics?.engagementTrend}
        />
      </div>

      {/* Attribution Analysis */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Attribution Analysis</h3>
        <div className="space-y-4">
          {reports?.attribution?.map((report, index) => (
            <AttributionCard key={index} report={report} />
          ))}
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Revenue Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports?.revenue?.map((report, index) => (
            <RevenueCard key={index} report={report} />
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Performance Insights</h3>
        <div className="space-y-4">
          {insights?.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  )
} 