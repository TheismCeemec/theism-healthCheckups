"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CreditCard, MapPin, Check } from "lucide-react"

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [addressForm, setAddressForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    addressType: "home",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAddressForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveStep(2)
    window.scrollTo(0, 0)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setActiveStep(3)
      window.scrollTo(0, 0)
    }, 1500)
  }

  const handleOrderComplete = () => {
    navigate("/dashboard/orders")
  }

  // Mock order summary data
  const orderSummary = {
    items: [
      { name: "Paracetamol 500mg", quantity: 2, price: 25 },
      { name: "Complete Blood Count", quantity: 1, price: 350 },
      { name: "Dr. Rajesh Kumar - Consultation", quantity: 1, price: 800 },
    ],
    subtotal: 1200,
    discount: 240,
    deliveryFee: 50,
    total: 1010,
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Checkout Steps */}
        <div className="flex justify-between mb-8">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <span className="mt-2 text-sm font-medium">Delivery Address</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className={`h-1 w-full ${activeStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="mt-2 text-sm font-medium">Payment</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className={`h-1 w-full ${activeStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <Check className="h-5 w-5" />
            </div>
            <span className="mt-2 text-sm font-medium">Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Address */}
            {activeStep === 1 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>

                  <form onSubmit={handleAddressSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={addressForm.fullName}
                          onChange={handleAddressChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={addressForm.phone}
                          onChange={handleAddressChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={addressForm.addressLine1}
                        onChange={handleAddressChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="House No., Building Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={addressForm.addressLine2}
                        onChange={handleAddressChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Street, Area"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={addressForm.city}
                          onChange={handleAddressChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={addressForm.state}
                          onChange={handleAddressChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={addressForm.pincode}
                          onChange={handleAddressChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address Type</label>
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="addressType"
                            value="home"
                            checked={addressForm.addressType === "home"}
                            onChange={handleAddressChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">Home</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="addressType"
                            value="work"
                            checked={addressForm.addressType === "work"}
                            onChange={handleAddressChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">Work</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="addressType"
                            value="other"
                            checked={addressForm.addressType === "other"}
                            onChange={handleAddressChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">Other</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button type="submit" className="btn-primary">
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {activeStep === 2 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-700">Credit/Debit Card</span>
                          <span className="block text-sm text-gray-500">Pay securely with your card</span>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={paymentMethod === "upi"}
                          onChange={() => setPaymentMethod("upi")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-700">UPI</span>
                          <span className="block text-sm text-gray-500">
                            Pay using UPI apps like Google Pay, PhonePe, etc.
                          </span>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={paymentMethod === "netbanking"}
                          onChange={() => setPaymentMethod("netbanking")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-700">Net Banking</span>
                          <span className="block text-sm text-gray-500">Pay using your bank account</span>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-700">Cash on Delivery</span>
                          <span className="block text-sm text-gray-500">Pay when your order is delivered</span>
                        </div>
                      </label>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4 p-4 border rounded-md bg-gray-50">
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              id="expiryDate"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                              CVV *
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              placeholder="123"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            id="nameOnCard"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Back to Address
                      </button>
                      <button
                        type="submit"
                        className={`btn-primary ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {activeStep === 3 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your order. Your order number is <span className="font-semibold">#ORD12345</span>.
                  </p>
                  <p className="text-gray-600 mb-8">
                    We have sent an order confirmation to your email address. You can track your order status in your
                    account dashboard.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button onClick={handleOrderComplete} className="btn-primary">
                      View Order
                    </button>
                    <Link
                      to="/"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{orderSummary.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{orderSummary.discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>₹{orderSummary.deliveryFee}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{orderSummary.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
