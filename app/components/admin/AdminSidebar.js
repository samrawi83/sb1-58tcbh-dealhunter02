export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 min-h-screen text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      
      <nav className="space-y-2">
        <a href="/admin" className="block px-4 py-2 rounded hover:bg-gray-700">
          Dashboard
        </a>
        <a href="/admin/posts" className="block px-4 py-2 rounded hover:bg-gray-700">
          Manage Posts
        </a>
        <a href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-700">
          Users
        </a>
        <a href="/admin/categories" className="block px-4 py-2 rounded hover:bg-gray-700">
          Categories
        </a>
        <a href="/admin/comments" className="block px-4 py-2 rounded hover:bg-gray-700">
          Comments
        </a>
        <a href="/admin/analytics" className="block px-4 py-2 rounded hover:bg-gray-700">
          Analytics
        </a>
        <a href="/admin/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
          Settings
        </a>
      </nav>
    </aside>
  )
} 