"use client"

import { useState } from "react"
import { Calendar, Clock, Video, MapPin, MoreHorizontal } from "lucide-react"

// Mock appointments data
const appointmentsData = [
  {
    id: 1,
    doctorName: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    date: "2023-06-15",
    time: "10:30 AM",
    type: "Video Consultation",
    status: "upcoming",
  },
  {
    id: 2,
    doctorName: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    date: "2023-06-10",
    time: "3:00 PM",
    type: "In-Clinic",
    status: "completed",
  },
  {
    id: 3,
    doctorName: "Dr. Amit Patel",
    specialty: "Pediatrician",
    date: "2023-05-28",
    time: "11:00 AM",
    type: "Video Consultation",
    status: "completed",
  },
  {
    id: 4,
    doctorName: "Dr. Sneha Reddy",
    specialty: "Gynecologist",
    date: "2023-06-20",
    time: "4:30 PM",
    type: "In-Clinic",
    status: "upcoming",
  },
]

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [showDropdown, setShowDropdown] = useState<number | null>(null)

  const filteredAppointments = appointmentsData.filter((appointment) => appointment.status === activeTab)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const toggleDropdown = (id: number) => {
    if (showDropdown === id) {
      setShowDropdown(null)
    } else {
      setShowDropdown(id)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">My Appointments</h2>

        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "upcoming"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "completed"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Past
          </button>
        </div>

        {filteredAppointments.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No {activeTab} appointments</h3>
            <p className="text-gray-600">
              {activeTab === "upcoming"
                ? "You don't have any upcoming appointments scheduled."
                : "You don't have any past appointments."}
            </p>
            {activeTab === "upcoming" && <button className="btn-primary mt-4">Book an Appointment</button>}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                    <p className="text-gray-600">{appointment.specialty}</p>
                  </div>
                  <div className="relative">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => toggleDropdown(appointment.id)}
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>

                    {showDropdown === appointment.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                        <div className="py-1">
                          {activeTab === "upcoming" && (
                            <>
                              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Reschedule
                              </button>
                              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Cancel Appointment
                              </button>
                            </>
                          )}
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Details
                          </button>
                          {activeTab === "completed" && (
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Download Prescription
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{formatDate(appointment.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center">
                    {appointment.type === "Video Consultation" ? (
                      <Video className="h-5 w-5 text-blue-600 mr-2" />
                    ) : (
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    )}
                    <span>{appointment.type}</span>
                  </div>
                </div>

                {activeTab === "upcoming" && (
                  <div className="mt-4 flex space-x-4">
                    {appointment.type === "Video Consultation" && (
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                        Join Consultation
                      </button>
                    )}
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                )}

                {activeTab === "completed" && (
                  <div className="mt-4 flex space-x-4">
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      Book Follow-up
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      Download Prescription
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppointmentsPage
