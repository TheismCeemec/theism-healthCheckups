"use client"

import { useState, useEffect, useRef } from "react"
import TestimonialCard from "../ui/TestimonialCard"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Mehta",
      testimonial:
        "CallHealth has made healthcare so convenient. I was able to consult a doctor online and get medicines delivered to my home within hours.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anita Desai",
      testimonial:
        "The lab test service is excellent. The technician was professional and the reports were delivered on time. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Suresh Kumar",
      testimonial:
        "I've been using CallHealth for my regular health check-ups. The health packages are comprehensive and the service is top-notch.",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Sharma",
      testimonial:
        "The doctors on CallHealth are very knowledgeable and patient. They take time to understand your concerns and provide proper guidance.",
      rating: 5,
    },
    {
      id: 5,
      name: "Karthik Reddy",
      testimonial:
        "The medicine delivery service is prompt and reliable. The app is user-friendly and makes ordering medicines a breeze.",
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const maxVisibleItems = 3
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - maxVisibleItems ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - maxVisibleItems : prevIndex - 1))
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + maxVisibleItems)

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with
            CallHealth.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
          >
            &#10095;
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index >= currentIndex && index < currentIndex + maxVisibleItems ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
