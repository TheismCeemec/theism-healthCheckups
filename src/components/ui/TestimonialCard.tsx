import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  testimonial: string
  rating: number
  imageUrl?: string
}

const TestimonialCard = ({ name, testimonial, rating, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={imageUrl || "/placeholder.svg?height=50&width=50"}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  )
}

export default TestimonialCard
