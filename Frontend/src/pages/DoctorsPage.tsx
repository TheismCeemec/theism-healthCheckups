"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import DoctorCard from "../components/ui/DoctorCard"

const DoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "15",
      rating: 4.8,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "800",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      experience: "10",
      rating: 4.7,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "700",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "Pediatrician",
      experience: "12",
      rating: 4.9,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "600",
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      specialty: "Gynecologist",
      experience: "8",
      rating: 4.6,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "900",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic",
      experience: "14",
      rating: 4.5,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "1000",
    },
    {
      id: 6,
      name: "Dr. Meera Joshi",
      specialty: "Neurologist",
      experience: "11",
      rating: 4.7,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "950",
    },
    {
      id: 7,
      name: "Dr. Suresh Reddy",
      specialty: "ENT Specialist",
      experience: "9",
      rating: 4.4,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "750",
    },
    {
      id: 8,
      name: "Dr. Anita Desai",
      specialty: "Psychiatrist",
      experience: "13",
      rating: 4.8,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "1200",
    },
  ]

  const specialties = ["all", ...new Set(doctors.map((doctor) => doctor.specialty))]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty

    return matchesSearch && matchesSpecialty
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find & Book Appointment with Doctors</h1>
            <p className="text-xl text-blue-100">Consult with top doctors online or book an in-clinic appointment.</p>
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
                  placeholder="Search doctors by name or specialty"
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
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                  >
                    {specialties.map((specialty, index) => (
                      <option key={index} value={specialty}>
                        {specialty === "all" ? "All Specialties" : specialty}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              <button type="submit" className="btn-primary md:w-auto">
                Search
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  experience={doctor.experience}
                  rating={doctor.rating}
                  imageUrl={doctor.imageUrl}
                  fee={doctor.fee}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No doctors found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorsPage
