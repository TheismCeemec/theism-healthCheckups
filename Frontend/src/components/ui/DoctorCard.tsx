import { Star } from "lucide-react"

interface DoctorCardProps {
  name: string
  specialty: string
  experience: string
  rating: number
  imageUrl: string
  fee: string
}

const DoctorCard = ({ name, specialty, experience, rating, imageUrl, fee }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{specialty}</p>
          <div className="flex items-center mt-1">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{experience} years experience</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Video Consult</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">In-clinic</span>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <p className="font-semibold text-gray-800">₹{fee}</p>
          <button className="btn-primary text-sm">Book Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
