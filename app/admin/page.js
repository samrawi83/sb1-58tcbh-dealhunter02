import StatsCard from '../components/admin/StatsCard'
import RecentActivity from '../components/admin/RecentActivity'
import Chart from '../components/admin/Chart'

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Users" 
          value="1,234" 
          trend={12} 
          icon="👥"
        />
        <StatsCard 
          title="Revenue" 
          value="$12,345" 
          trend={-5} 
          icon="💰"
        />
        <StatsCard 
          title="Active Deals" 
          value="45" 
          trend={8} 
          icon="🏷️"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Chart />
        <RecentActivity />
      </div>
    </div>
  )
} 