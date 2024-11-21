'use client'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

export default function ContentPerformance() {
  const [timeframe, setTimeframe] = useState('7d')
  const [metrics, setMetrics] = useState(null)

  const fetchPerformanceData = async () => {
    // Fetch performance data from analytics
    const data = await getContentMetrics(timeframe)
    setMetrics(data)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Content Performance</h2>

      <div className="flex gap-4 mb-6">
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {metrics && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Organic Traffic</h3>
              <p className="text-2xl">{metrics.organicTraffic}</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Conversion Rate</h3>
              <p className="text-2xl">{metrics.conversionRate}%</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Avg. Time on Page</h3>
              <p className="text-2xl">{metrics.avgTimeOnPage}s</p>
            </div>
          </div>

          <div className="h-80">
            <Line data={metrics.chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  )
} 