'use client'
import { useAuth } from '../context/AuthContext'

export default function SettingsPage() {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view settings</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      {/* Add settings content */}
    </div>
  )
} 