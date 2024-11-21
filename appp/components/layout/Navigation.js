"use client";

import Link from 'next/link'
import { useState } from 'react'
import { siteCategories } from '@/app/constants/categories'
import { UserIcon, BellIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              DealHunter<span className="text-yellow-400">Pro</span>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {Object.entries(siteCategories).map(([key, category]) => (
                <div 
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link 
                    href={`/${key}`}
                    className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {category.name}
                  </Link>
                  
                  {openMenu === key && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/${key}/${sub.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <span className="font-medium">{sub.name}</span>
                          {sub.count && (
                            <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              {sub.count}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors transform hover:scale-105">
              Submit Deal
            </button>
            <div className="flex items-center space-x-2">
              <BellIcon className="h-6 w-6 text-white/80 hover:text-white cursor-pointer" />
              <UserIcon className="h-6 w-6 text-white/80 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}