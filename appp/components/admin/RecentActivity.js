export default function RecentActivity() {
  const activities = [
    { id: 1, user: 'John Doe', action: 'Created new post', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '3 hours ago' },
    // Add more activities
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{activity.user}</p>
              <p className="text-sm text-gray-500">{activity.action}</p>
            </div>
            <span className="text-sm text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 