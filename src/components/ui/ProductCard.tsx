import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  imageUrl: string
  price: number
  originalPrice?: number
  discount?: number
}

const ProductCard = ({ name, imageUrl, price, originalPrice, discount }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-48 object-contain p-4" />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 line-clamp-2 h-12">{name}</h3>
        <div className="mt-2 flex items-center">
          <span className="font-semibold text-gray-900">₹{price}</span>
          {originalPrice && <span className="ml-2 text-sm text-gray-500 line-through">₹{originalPrice}</span>}
        </div>
        <button className="mt-3 w-full btn-primary flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
