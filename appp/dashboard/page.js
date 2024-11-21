'use client'
import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view dashboard</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Add dashboard content */}
    </div>
  )
} 