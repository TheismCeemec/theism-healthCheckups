"use client"

import type React from "react"

import { useState } from "react"
import { Search, Calendar, Home, Clock } from "lucide-react"

const LabTestsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Tests" },
    { id: "popular", name: "Popular Tests" },
    { id: "health-packages", name: "Health Packages" },
    { id: "covid", name: "COVID-19 Tests" },
    { id: "diabetes", name: "Diabetes" },
    { id: "thyroid", name: "Thyroid" },
  ]

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "popular",
      price: 350,
      originalPrice: 400,
      discount: 13,
      description:
        "Measures different components of blood including red blood cells, white blood cells, and platelets.",
      preparation: "No special preparation required.",
    },
    {
      id: 2,
      name: "Lipid Profile",
      category: "popular",
      price: 450,
      originalPrice: 500,
      discount: 10,
      description: "Measures cholesterol levels in blood including HDL, LDL, and triglycerides.",
      preparation: "Fasting for 8-12 hours before the test.",
    },
    {
      id: 3,
      name: "COVID-19 RT-PCR Test",
      category: "covid",
      price: 800,
      originalPrice: 1000,
      discount: 20,
      description: "Detects the presence of SARS-CoV-2 virus that causes COVID-19.",
      preparation: "No special preparation required.",
    },
    {
      id: 4,
      name: "HbA1c (Glycated Hemoglobin)",
      category: "diabetes",
      price: 500,
      originalPrice: 600,
      discount: 17,
      description: "Measures average blood glucose levels over the past 2-3 months.",
      preparation: "No fasting required.",
    },
    {
      id: 5,
      name: "Thyroid Profile",
      category: "thyroid",
      price: 650,
      originalPrice: 750,
      discount: 13,
      description: "Measures thyroid hormone levels including T3, T4, and TSH.",
      preparation: "No special preparation required.",
    },
    {
      id: 6,
      name: "Comprehensive Health Package",
      category: "health-packages",
      price: 1800,
      originalPrice: 2200,
      discount: 18,
      description: "Includes 70+ tests covering all major health parameters.",
      preparation: "Fasting for 8-12 hours before the test.",
    },
  ]

  const filteredTests = labTests.filter((test) => {
    const matchesSearch =
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || test.category === selectedCategory

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Lab Tests & Health Packages</h1>
            <p className="text-xl text-blue-100">Book lab tests online and get samples collected from your home.</p>
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
                  placeholder="Search for tests, health packages..."
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

          <div className="grid grid-cols-1 gap-6">
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{test.name}</h3>
                        <p className="text-gray-600 mb-4">{test.description}</p>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-700">Preparation: </span>
                          <span className="text-sm text-gray-600">{test.preparation}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Home className="h-4 w-4 mr-1 text-blue-600" />
                            Home Sample Collection
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-blue-600" />
                            Reports in 24 hours
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                        <div className="flex items-center mb-2">
                          <span className="font-semibold text-xl text-gray-900">₹{test.price}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {test.discount}% OFF
                          </span>
                        </div>
                        <button className="btn-primary flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No tests found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Booking a lab test with CallHealth is simple and convenient.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book a Test</h3>
              <p className="text-gray-600">Select the test you want to book and choose a convenient time slot.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sample Collection</h3>
              <p className="text-gray-600">Our trained phlebotomist will visit your home to collect the sample.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sample Processing</h3>
              <p className="text-gray-600">The sample is processed in our NABL accredited laboratory.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reports Delivery</h3>
              <p className="text-gray-600">Get your reports online or via email within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LabTestsPage
