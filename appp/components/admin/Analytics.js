'use client'
import { Line, Pie, Bar } from 'react-chartjs-2'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Traffic Overview</h3>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{
                label: 'Page Views',
                data: [1000, 1500, 2000, 2500, 3000, 3500],
                borderColor: 'rgb(59, 130, 246)',
              }]
            }}
          />
        </div>

        {/* Conversion Rates */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Conversion Rates</h3>
          <Bar
            data={{
              labels: ['Freebies', 'Coupons', 'Deals', 'Samples'],
              datasets: [{
                label: 'Conversion Rate (%)',
                data: [4.5, 3.8, 5.2, 2.9],
                backgroundColor: 'rgb(59, 130, 246)',
              }]
            }}
          />
        </div>
      </div>
    </div>
  )
} 