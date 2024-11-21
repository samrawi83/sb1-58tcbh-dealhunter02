'use client'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            {children}
          </main>
          <Sidebar className="lg:col-span-4" />
        </div>
      </div>
      <Footer />
    </div>
  )
} 