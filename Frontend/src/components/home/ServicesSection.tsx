import { Stethoscope, Pill, FlaskRoundIcon as Flask, HeartPulse, ShieldCheck, Home } from "lucide-react"
import ServiceCard from "../ui/ServiceCard"

const ServicesSection = () => {
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
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of healthcare services to meet all your health needs. From doctor consultations to lab
            tests and medicines, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  )
}

export default ServicesSection
