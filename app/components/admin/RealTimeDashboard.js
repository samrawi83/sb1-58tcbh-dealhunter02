'use client'
import { useState, useEffect } from 'react'
import { RealTimeMonitor } from '@/utils/realTimeMonitor'
import { PredictiveAnalytics } from '@/utils/predictiveAnalytics'

export default function RealTimeDashboard() {
  const [realTimeData, setRealTimeData] = useState(null)
  const [predictions, setPredictions] = useState(null)
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const monitor = new RealTimeMonitor()
    const analytics = new PredictiveAnalytics()

    monitor.on('metricUpdate', (metric) => {
      setRealTimeData(prev => ({...prev, [metric.name]: metric}))
    })

    monitor.on('alert', (alert) => {
      setAlerts(prev => [alert, ...prev])
    })

    const updatePredictions = async () => {
      const newPredictions = await analytics.predictFuture('traffic', '7d')
      setPredictions(newPredictions)
    }

    const interval = setInterval(updatePredictions, 300000) // 5 minutes

    return () => {
      monitor.disconnect()
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Real-Time Dashboard</h2>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {realTimeData && Object.entries(realTimeData).map(([key, metric]) => (
          <MetricCard
            key={key}
            title={key}
            value={metric.value}
            trend={metric.trend}
          />
        ))}
      </div>

      {/* Predictions */}
      {predictions && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Predictions</h3>
          <div className="h-64">
            <Line data={predictions.data} options={chartOptions} />
          </div>
        </div>
      )}

      {/* Alerts */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Recent Alerts</h3>
        <div className="space-y-4">
          {alerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  )
} 