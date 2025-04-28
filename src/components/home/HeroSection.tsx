"use client"

import type React from "react"

import { Search } from "lucide-react"
import { useState } from "react"

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Your Health, Our Priority</h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Access quality healthcare services from the comfort of your home. Book doctor appointments, order
              medicines, schedule lab tests, and more.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-md">
              <input
                type="text"
                placeholder="Search for doctors, services, medicines..."
                className="w-full py-3 px-4 pr-12 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 p-1">
                <Search className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn-secondary">Consult a Doctor</button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors">
                Order Medicines
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Healthcare services"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
