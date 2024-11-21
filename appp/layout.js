import { Inter } from 'next/font/google'
import Navigation from './components/layout/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DealHunter - Best Deals, Freebies, and Coupons',
  description: 'Find the latest deals, freebies, coupons, and money-saving opportunities all in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}