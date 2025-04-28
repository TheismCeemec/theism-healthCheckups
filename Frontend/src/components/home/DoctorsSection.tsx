"use client"

import { useState } from "react"
import DoctorCard from "../ui/DoctorCard"

const DoctorsSection = () => {
  const [activeTab, setActiveTab] = useState("popular")

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "15",
      rating: 4.8,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "800",
      category: "popular",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      experience: "10",
      rating: 4.7,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "700",
      category: "popular",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "Pediatrician",
      experience: "12",
      rating: 4.9,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "600",
      category: "popular",
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      specialty: "Gynecologist",
      experience: "8",
      rating: 4.6,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "900",
      category: "trending",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic Surgeon",
      experience: "14",
      rating: 4.5,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "1000",
      category: "trending",
    },
    {
      id: 6,
      name: "Dr. Meera Joshi",
      specialty: "Neurologist",
      experience: "11",
      rating: 4.7,
      imageUrl: "/placeholder.svg?height=100&width=100",
      fee: "950",
      category: "trending",
    },
  ]

  const filteredDoctors = doctors.filter((doctor) => doctor.category === activeTab)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consult with top doctors online or book an in-clinic appointment. Our doctors are available 24/7 to provide
            you with the best healthcare.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                activeTab === "popular" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Popular Doctors
            </button>
            <button
              onClick={() => setActiveTab("trending")}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                activeTab === "trending" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Trending Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              rating={doctor.rating}
              imageUrl={doctor.imageUrl}
              fee={doctor.fee}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-primary">View All Doctors</button>
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection
