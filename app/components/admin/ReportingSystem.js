'use client'
import { useState } from 'react'

export default function ReportingSystem() {
  const [reportType, setReportType] = useState('deals')
  const [dateRange, setDateRange] = useState('week')

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Reports & Analytics</h2>

      <div className="flex gap-4 mb-6">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="deals">Deals Performance</option>
          <option value="users">User Activity</option>
          <option value="conversions">Conversion Rates</option>
          <option value="traffic">Traffic Sources</option>
        </select>

        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Report Content */}
      <div className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Total Views</h3>
            <p className="text-2xl">12,345</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Conversions</h3>
            <p className="text-2xl">456</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Revenue</h3>
            <p className="text-2xl">$789</p>
          </div>
        </div>

        {/* Charts will go here */}
      </div>
    </div>
  )
} 