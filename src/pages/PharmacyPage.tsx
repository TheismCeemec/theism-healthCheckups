"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import ProductCard from "../components/ui/ProductCard"

const PharmacyPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "medicines", name: "Medicines" },
    { id: "wellness", name: "Wellness" },
    { id: "personal-care", name: "Personal Care" },
    { id: "baby-care", name: "Baby Care" },
    { id: "nutrition", name: "Nutrition" },
  ]

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "medicines",
      price: 25,
      originalPrice: 30,
      discount: 17,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      category: "wellness",
      price: 350,
      originalPrice: 400,
      discount: 13,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Hand Sanitizer 500ml",
      category: "personal-care",
      price: 150,
      originalPrice: 180,
      discount: 17,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Baby Diaper Pack",
      category: "baby-care",
      price: 450,
      originalPrice: 500,
      discount: 10,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Protein Powder 1kg",
      category: "nutrition",
      price: 1200,
      originalPrice: 1500,
      discount: 20,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Multivitamin Tablets",
      category: "wellness",
      price: 450,
      originalPrice: 500,
      discount: 10,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      name: "Cough Syrup 100ml",
      category: "medicines",
      price: 120,
      originalPrice: 140,
      discount: 14,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      name: "Face Wash 150ml",
      category: "personal-care",
      price: 180,
      originalPrice: 200,
      discount: 10,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality is already implemented with the filter above
  }

  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Online Pharmacy</h1>
            <p className="text-xl text-blue-100">Order medicines online and get them delivered to your doorstep.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search medicines, healthcare products..."
                  className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              <div className="md:w-64">
                <div className="relative">
                  <select
                    className="w-full py-3 px-4 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary md:w-auto">
                Search
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Pharmacy?</h2>
            <p className="text-gray-600">
              We ensure that you get genuine medicines at the best prices with timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Genuine Medicines</h3>
              <p className="text-gray-600">
                We source medicines directly from authorized distributors to ensure authenticity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your medicines delivered at your doorstep within hours.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">We offer competitive prices with regular discounts and offers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PharmacyPage
