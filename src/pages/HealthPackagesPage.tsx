"use client"

import type React from "react"

import { useState } from "react"
import { Search, Check, Calendar } from "lucide-react"

const HealthPackagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "basic", name: "Basic Health" },
    { id: "comprehensive", name: "Comprehensive" },
    { id: "women", name: "Women's Health" },
    { id: "men", name: "Men's Health" },
    { id: "senior", name: "Senior Citizen" },
  ]

  const healthPackages = [
    {
      id: 1,
      name: "Basic Health Checkup",
      category: "basic",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      description: "A basic health checkup package covering essential health parameters.",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "Blood Sugar Fasting",
      ],
      recommended: "For individuals aged 18-40 years",
    },
    {
      id: 2,
      name: "Comprehensive Health Checkup",
      category: "comprehensive",
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      description: "A comprehensive health checkup package covering all major health parameters.",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "Thyroid Profile",
        "Vitamin D",
        "Vitamin B12",
        "HbA1c",
        "Urine Routine",
        "Chest X-Ray",
        "ECG",
      ],
      recommended: "For individuals aged 40+ years",
    },
    {
      id: 3,
      name: "Women's Health Checkup",
      category: "women",
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      description: "A specialized health checkup package for women's health.",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "Thyroid Profile",
        "Vitamin D",
        "Vitamin B12",
        "Calcium",
        "Iron Studies",
        "Pap Smear",
      ],
      recommended: "For women aged 25+ years",
    },
    {
      id: 4,
      name: "Men's Health Checkup",
      category: "men",
      price: 1899,
      originalPrice: 2299,
      discount: 17,
      description: "A specialized health checkup package for men's health.",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "Thyroid Profile",
        "PSA (Prostate Specific Antigen)",
        "Testosterone",
      ],
      recommended: "For men aged 35+ years",
    },
    {
      id: 5,
      name: "Senior Citizen Health Checkup",
      category: "senior",
      price: 2999,
      originalPrice: 3599,
      discount: 17,
      description: "A comprehensive health checkup package for senior citizens.",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "Thyroid Profile",
        "Vitamin D",
        "Vitamin B12",
        "HbA1c",
        "Urine Routine",
        "Chest X-Ray",
        "ECG",
        "Bone Mineral Density",
        "Eye Examination",
      ],
      recommended: "For individuals aged 60+ years",
    },
  ]

  const filteredPackages = healthPackages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Health Packages</h1>
            <p className="text-xl text-blue-100">Comprehensive health check-up packages for preventive care.</p>
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
                  placeholder="Search health packages..."
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
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between">
                      <div className="lg:w-2/3">
                        <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 mb-4">{pkg.description}</p>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-700">Recommended for: </span>
                          <span className="text-sm text-gray-600">{pkg.recommended}</span>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Tests Included:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pkg.tests.map((test, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{test}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                        <div className="flex items-center mb-2">
                          <span className="font-semibold text-xl text-gray-900">₹{pkg.price}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">₹{pkg.originalPrice}</span>
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {pkg.discount}% OFF
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
                <p className="text-gray-600">No health packages found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Health Packages?</h2>
            <p className="text-gray-600">
              Our health packages are designed to provide comprehensive health assessment and early detection of
              diseases.
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
              <h3 className="text-xl font-semibold mb-2">NABL Accredited Labs</h3>
              <p className="text-gray-600">
                All tests are conducted in NABL accredited laboratories to ensure accuracy and reliability.
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
              <h3 className="text-xl font-semibold mb-2">Home Sample Collection</h3>
              <p className="text-gray-600">
                Our trained phlebotomists collect samples from your home at your convenient time.
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
              <p className="text-gray-600">
                Free doctor consultation to explain your test results and provide health advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthPackagesPage
