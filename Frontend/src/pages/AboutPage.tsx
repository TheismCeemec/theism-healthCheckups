import { Award, Heart, Shield } from "lucide-react"

const AboutPage = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About CallHealth</h1>
            <p className="text-xl text-blue-100">
              Making healthcare accessible, affordable, and convenient for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                CallHealth was founded in 2015 with a vision to transform the way healthcare is delivered in India. We
                recognized the challenges people face in accessing quality healthcare services and set out to create a
                platform that makes healthcare accessible, affordable, and convenient for everyone.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team with a big dream has now grown into one of India's leading healthcare
                platforms, serving millions of customers across the country. Our journey has been driven by a passion
                for innovation and a commitment to improving the healthcare experience for our customers.
              </p>
              <p className="text-gray-600">
                Today, CallHealth offers a wide range of healthcare services including doctor consultations, medicine
                delivery, lab tests, health packages, and more. We continue to innovate and expand our services to meet
                the evolving healthcare needs of our customers.
              </p>
            </div>
            <div>
              <img src="/placeholder.svg?height=400&width=500" alt="CallHealth Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are on a mission to make healthcare accessible to everyone, everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make quality healthcare accessible, affordable, and convenient for everyone by leveraging technology
                and innovation. We aim to empower individuals to take control of their health by providing them with the
                tools, information, and services they need to make informed healthcare decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted healthcare platform that transforms the healthcare experience for millions of
                people. We envision a world where everyone has access to quality healthcare services at their
                fingertips, regardless of their location or socioeconomic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do and help us deliver the best healthcare experience to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do. Their health and well-being are our top
                priorities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our services to the customer
                experience we deliver.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest level of integrity and transparency in all our interactions with customers,
                partners, and employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud of the impact we have made in the healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Doctors</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Cities</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the team that's driving our mission to transform healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg?height=300&width=300" alt="CEO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Rajiv Sharma</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Dr. Rajiv has over 20 years of experience in healthcare and technology. He founded CallHealth with a
                  vision to make healthcare accessible to everyone.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg?height=300&width=300" alt="COO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Priya Mehta</h3>
                <p className="text-blue-600 mb-4">Chief Operating Officer</p>
                <p className="text-gray-600">
                  Priya brings over 15 years of operational experience to CallHealth. She is responsible for the
                  day-to-day operations of the company.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg?height=300&width=300" alt="CTO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Vikram Singh</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Vikram is a technology veteran with expertise in building scalable platforms. He leads the technology
                  team at CallHealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
