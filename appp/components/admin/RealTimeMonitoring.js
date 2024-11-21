'use client'
import { useState, useEffect } from 'react'
import { PerformanceMonitor } from '@/utils/performanceMonitor'
import { RealTimeMetrics } from '@/utils/realTimeMetrics'

export default function RealTimeMonitoring() {
  const [realTimeData, setRealTimeData] = useState(null)
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const monitor = new PerformanceMonitor()
    const metrics = new RealTimeMetrics()

    const subscription = metrics.subscribe(data => {
      setRealTimeData(data)
    })

    monitor.onAlert(alert => {
      setAlerts(prev => [alert, ...prev])
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Real-Time Monitoring</h2>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Active Users"
          value={realTimeData?.activeUsers}
          trend={realTimeData?.usersTrend}
        />
        <MetricCard 
          title="Conversions"
          value={realTimeData?.conversions}
          trend={realTimeData?.conversionsTrend}
        />
        <MetricCard 
          title="Revenue"
          value={realTimeData?.revenue}
          trend={realTimeData?.revenueTrend}
        />
        <MetricCard 
          title="Page Views"
          value={realTimeData?.pageViews}
          trend={realTimeData?.pageViewsTrend}
        />
      </div>

      {/* Active Sessions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Active Sessions</h3>
        <div className="h-64">
          <SessionsChart data={realTimeData?.sessions} />
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Recent Alerts</h3>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <AlertCard key={index} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  )
} 