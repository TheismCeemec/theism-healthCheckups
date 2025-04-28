"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Star, Calendar, Video, MapPin, Clock, Award } from "lucide-react"
import { useEffect, useState } from "react"

// Mock doctor data
const doctors = [
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    experience: "15",
    rating: 4.8,
    reviews: 120,
    bio: "Dr. Rajesh Kumar is a highly experienced cardiologist with over 15 years of practice. He specializes in interventional cardiology and has performed over 1000 cardiac procedures. Dr. Kumar completed his medical education from AIIMS, Delhi and received specialized training in cardiology from renowned institutions in the US.",
    education: [
      "MBBS - All India Institute of Medical Sciences, Delhi",
      "MD (Internal Medicine) - All India Institute of Medical Sciences, Delhi",
      "DM (Cardiology) - Post Graduate Institute of Medical Education and Research, Chandigarh",
    ],
    specializations: [
      "Interventional Cardiology",
      "Cardiac Electrophysiology",
      "Heart Failure Management",
      "Preventive Cardiology",
    ],
    languages: ["English", "Hindi", "Telugu"],
    consultationFee: "₹800",
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimeSlots: ["10:00 AM - 1:00 PM", "5:00 PM - 8:00 PM"],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    experience: "10",
    rating: 4.7,
    reviews: 95,
    bio: "Dr. Priya Sharma is a board-certified dermatologist with 10 years of experience in treating various skin conditions. She specializes in cosmetic dermatology and has helped thousands of patients achieve healthier skin. Dr. Sharma is known for her patient-centric approach and stays updated with the latest advancements in dermatology.",
    education: [
      "MBBS - Kasturba Medical College, Manipal",
      "MD (Dermatology) - Lady Hardinge Medical College, Delhi",
      "Fellowship in Cosmetic Dermatology - University of California, San Francisco",
    ],
    specializations: [
      "Cosmetic Dermatology",
      "Pediatric Dermatology",
      "Skin Cancer Screening",
      "Acne and Rosacea Treatment",
    ],
    languages: ["English", "Hindi", "Marathi"],
    consultationFee: "₹700",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    availableTimeSlots: ["11:00 AM - 2:00 PM", "4:00 PM - 7:00 PM"],
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]

const DoctorDetailPage = () => {
  const { doctorId } = useParams()
  const [doctor, setDoctor] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedTab, setSelectedTab] = useState("about")

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      const foundDoctor = doctors.find((d) => d.id === doctorId)
      if (foundDoctor) {
        setDoctor(foundDoctor)
        setError(false)
      } else {
        setError(true)
      }
      setLoading(false)
    }, 500)
  }, [doctorId])

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading doctor profile...</p>
      </div>
    )
  }

  if (error || !doctor) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Doctor Not Found</h2>
        <p className="text-gray-600 mb-6">The doctor profile you are looking for does not exist or has been removed.</p>
        <Link to="/doctors" className="btn-primary inline-block">
          View All Doctors
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link to="/doctors" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Doctors
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <div className="relative w-48 h-48">
                    <img
                      src={doctor.imageUrl || "/placeholder.svg"}
                      alt={doctor.name}
                      className="rounded-full object-cover w-full h-full border-4 border-blue-100"
                    />
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{doctor.name}</h1>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(doctor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{doctor.experience} years experience</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">Hyderabad</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">Available Today</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Appointment
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      Video Consult
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b">
              <div className="flex">
                <button
                  className={`px-6 py-3 font-medium ${selectedTab === "about" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                  onClick={() => setSelectedTab("about")}
                >
                  About
                </button>
                <button
                  className={`px-6 py-3 font-medium ${selectedTab === "education" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                  onClick={() => setSelectedTab("education")}
                >
                  Education & Experience
                </button>
                <button
                  className={`px-6 py-3 font-medium ${selectedTab === "availability" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                  onClick={() => setSelectedTab("availability")}
                >
                  Availability
                </button>
              </div>
            </div>

            <div className="p-6">
              {selectedTab === "about" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">About {doctor.name}</h2>
                  <p className="text-gray-600 mb-6">{doctor.bio}</p>

                  <h3 className="text-lg font-semibold mb-3">Specializations</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {doctor.specializations.map((specialization: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                        <span className="text-gray-600">{specialization}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((language: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === "education" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Education & Experience</h2>

                  <h3 className="text-lg font-semibold mb-3">Education</h3>
                  <ul className="space-y-3 mb-6">
                    {doctor.education.map((education: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2 mt-2"></span>
                        <span className="text-gray-600">{education}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mb-3">Experience</h3>
                  <p className="text-gray-600 mb-2">{doctor.experience} years of clinical experience</p>
                </div>
              )}

              {selectedTab === "availability" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Availability & Fees</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Available Days</h3>
                      <ul className="space-y-2 mb-6">
                        {doctor.availableDays.map((day: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-gray-600">{day}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Time Slots</h3>
                      <ul className="space-y-2 mb-6">
                        {doctor.availableTimeSlots.map((slot: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-gray-600">{slot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Consultation Fee</h3>
                    <p className="text-2xl font-bold text-blue-600">{doctor.consultationFee}</p>
                    <p className="text-sm text-gray-500 mt-1">*Fees may vary for different consultation types</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Similar Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">You might also be interested in these doctors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doctors
              .filter((d) => d.id !== doctorId)
              .map((similarDoctor) => (
                <div key={similarDoctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={similarDoctor.imageUrl || "/placeholder.svg"}
                        alt={similarDoctor.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{similarDoctor.name}</h3>
                      <p className="text-gray-600">{similarDoctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(similarDoctor.rating) ? "fill-current" : ""}`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">{similarDoctor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{similarDoctor.experience} years experience</p>
                      <Link
                        to={`/doctors/${similarDoctor.id}`}
                        className="mt-2 inline-block text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorDetailPage
