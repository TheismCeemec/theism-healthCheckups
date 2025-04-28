"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    type: "Medicine",
    price: 25,
    quantity: 2,
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Complete Blood Count",
    type: "Lab Test",
    price: 350,
    quantity: 1,
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar - Consultation",
    type: "Doctor Consultation",
    price: 800,
    quantity: 1,
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
]

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [couponError, setCouponError] = useState("")

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = couponApplied ? couponDiscount : 0
  const deliveryFee = 50
  const total = subtotal - discount + deliveryFee

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = () => {
    setCouponError("")

    // Simulate coupon validation
    if (couponCode.toUpperCase() === "HEALTH20") {
      setCouponApplied(true)
      setCouponDiscount(Math.round(subtotal * 0.2)) // 20% discount
    } else {
      setCouponError("Invalid coupon code")
      setCouponApplied(false)
      setCouponDiscount(0)
    }
  }

  // Reset coupon if subtotal changes
  useEffect(() => {
    if (couponApplied) {
      setCouponDiscount(Math.round(subtotal * 0.2))
    }
  }, [subtotal, couponApplied])

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>

                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex items-center">
                        <div className="flex-shrink-0 w-20 h-20">
                          <img
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.type}</p>
                          <p className="font-semibold mt-1">₹{item.price}</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-3 w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="ml-6 text-right">
                          <p className="font-semibold">₹{item.price * item.quantity}</p>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Apply Coupon</h2>
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleApplyCoupon} className="btn-primary rounded-l-none">
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-red-500 text-sm mt-2">{couponError}</p>}
                  {couponApplied && <p className="text-green-600 text-sm mt-2">Coupon applied successfully!</p>}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>

                  <Link to="/checkout" className="btn-primary w-full py-3 text-center block">
                    Proceed to Checkout
                  </Link>

                  <Link to="/" className="text-blue-600 hover:text-blue-800 text-center block mt-4">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
