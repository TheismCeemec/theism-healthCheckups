"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Check, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

// Mock service data
const services = [
  {
    id: "doctor-consultation",
    name: "Doctor Consultation",
    description: "Consult with qualified doctors online or in-clinic at your convenience.",
    longDescription:
      "Our doctor consultation service connects you with experienced healthcare professionals who can provide medical advice, diagnoses, and treatment plans. Choose between video consultations from the comfort of your home or in-person visits at our partner clinics.",
    benefits: [
      "Consult with experienced doctors",
      "Available 24/7 for urgent care",
      "Secure and private consultations",
      "Digital prescriptions and follow-ups",
      "Specialist referrals when needed",
    ],
    price: "From ₹499",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "lab-tests",
    name: "Lab Tests",
    description: "Book lab tests online and get samples collected from your home.",
    longDescription:
      "Our home collection service for lab tests makes healthcare more accessible and convenient. Our trained phlebotomists visit your home to collect samples, which are then processed in NABL-accredited laboratories to ensure accurate results.",
    benefits: [
      "Home sample collection",
      "NABL-accredited laboratories",
      "Digital reports within 24-48 hours",
      "Wide range of tests available",
      "Free doctor consultation to explain results",
    ],
    price: "From ₹299",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "medicine-delivery",
    name: "Medicine Delivery",
    description: "Order medicines online and get them delivered to your doorstep.",
    longDescription:
      "Our medicine delivery service ensures that you receive your prescribed medications without leaving your home. Upload your prescription, and our pharmacists will verify it and deliver the medicines to your doorstep.",
    benefits: [
      "Doorstep delivery of medicines",
      "Genuine medicines from licensed pharmacies",
      "Attractive discounts on medications",
      "Prescription verification by qualified pharmacists",
      "Regular refill reminders",
    ],
    price: "Varies by medication",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

const ServiceDetailPage = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      const foundService = services.find((s) => s.id === serviceId)
      if (foundService) {
        setService(foundService)
        setError(false)
      } else {
        setError(true)
      }
      setLoading(false)
    }, 500)
  }, [serviceId])

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading service details...</p>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">The service you are looking for does not exist or has been removed.</p>
        <Link to="/services" className="btn-primary inline-block">
          View All Services
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl text-blue-100">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={service.imageUrl || "/placeholder.svg"}
                alt={service.name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Service</h2>
              <p className="text-gray-600 mb-6">{service.longDescription}</p>

              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 font-medium">Price:</p>
                <p className="text-2xl font-bold text-blue-600">{service.price}</p>
              </div>

              <button className="btn-primary flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore other healthcare services that might interest you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== serviceId)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={relatedService.imageUrl || "/placeholder.svg"}
                    alt={relatedService.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedService.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    <Link
                      to={`/services/${relatedService.id}`}
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
