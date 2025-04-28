import {
  Stethoscope,
  Pill,
  FlaskRoundIcon as Flask,
  HeartPulse,
  ShieldCheck,
  Home,
  Ambulance,
  Brain,
  Thermometer,
  Syringe,
} from "lucide-react"
import ServiceCard from "../components/ui/ServiceCard"

const ServicesPage = () => {
  const services = [
    {
      title: "Doctor Consultation",
      description: "Consult with top doctors online or in-clinic at your convenience.",
      icon: <Stethoscope className="h-6 w-6" />,
      link: "/doctors",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Medicines",
      description: "Order medicines online and get them delivered to your doorstep.",
      icon: <Pill className="h-6 w-6" />,
      link: "/pharmacy",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Lab Tests",
      description: "Book lab tests online and get samples collected from your home.",
      icon: <Flask className="h-6 w-6" />,
      link: "/lab-tests",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Health Packages",
      description: "Comprehensive health check-up packages for preventive care.",
      icon: <HeartPulse className="h-6 w-6" />,
      link: "/health-packages",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Insurance",
      description: "Health insurance plans to protect you and your family.",
      icon: <ShieldCheck className="h-6 w-6" />,
      link: "/insurance",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Home Healthcare",
      description: "Professional healthcare services at the comfort of your home.",
      icon: <Home className="h-6 w-6" />,
      link: "/home-healthcare",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ambulance",
      description: "Emergency ambulance services available 24/7.",
      icon: <Ambulance className="h-6 w-6" />,
      link: "/ambulance",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mental Health",
      description: "Consult with psychologists and psychiatrists for mental wellbeing.",
      icon: <Brain className="h-6 w-6" />,
      link: "/mental-health",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fever Clinic",
      description: "Specialized care for fever and related symptoms.",
      icon: <Thermometer className="h-6 w-6" />,
      link: "/fever-clinic",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Vaccination",
      description: "Vaccination services for all age groups.",
      icon: <Syringe className="h-6 w-6" />,
      link: "/vaccination",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive healthcare services designed to meet all your health needs. From doctor consultations to lab
              tests and medicines, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CallHealth?</h2>
            <p className="text-gray-600">We are committed to providing you with the best healthcare experience.</p>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Our services are available round the clock to ensure you get care whenever you need it.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We ensure the highest quality of care with our network of certified healthcare professionals.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is always ready to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
