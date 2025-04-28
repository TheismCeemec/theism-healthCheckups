"use client"

import { useState } from "react"
import { Package, Clock, Check, X, ChevronDown, ChevronUp } from "lucide-react"

// Mock orders data
const ordersData = [
  {
    id: "ORD12345",
    date: "2023-06-10",
    total: 1010,
    status: "delivered",
    items: [
      { name: "Paracetamol 500mg", quantity: 2, price: 25 },
      { name: "Complete Blood Count", quantity: 1, price: 350 },
      { name: "Dr. Rajesh Kumar - Consultation", quantity: 1, price: 800 },
    ],
    deliveryAddress: "123, ABC Apartments, XYZ Street, Hyderabad - 500081",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD12346",
    date: "2023-06-05",
    total: 750,
    status: "processing",
    items: [
      { name: "Vitamin C 1000mg", quantity: 1, price: 350 },
      { name: "Hand Sanitizer 500ml", quantity: 2, price: 150 },
      { name: "Face Mask (Pack of 10)", quantity: 1, price: 100 },
    ],
    deliveryAddress: "456, PQR Apartments, MNO Street, Hyderabad - 500082",
    paymentMethod: "UPI",
  },
  {
    id: "ORD12347",
    date: "2023-05-28",
    total: 1200,
    status: "cancelled",
    items: [
      { name: "Basic Health Checkup", quantity: 1, price: 999 },
      { name: "Thermometer", quantity: 1, price: 201 },
    ],
    deliveryAddress: "789, LMN Apartments, DEF Street, Hyderabad - 500083",
    paymentMethod: "Cash on Delivery",
  },
]

const OrdersPage = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const toggleOrderDetails = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null)
    } else {
      setExpandedOrder(orderId)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <Check className="h-5 w-5 text-green-600" />
      case "processing":
        return <Clock className="h-5 w-5 text-orange-600" />
      case "cancelled":
        return <X className="h-5 w-5 text-red-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered"
      case "processing":
        return "Processing"
      case "cancelled":
        return "Cancelled"
      default:
        return status
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-orange-100 text-orange-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">My Orders</h2>

        {ordersData.length === 0 ? (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No orders yet</h3>
            <p className="text-gray-600">You haven't placed any orders yet.</p>
            <button className="btn-primary mt-4">Start Shopping</button>
          </div>
        ) : (
          <div className="space-y-4">
            {ordersData.map((order) => (
              <div key={order.id} className="border rounded-lg overflow-hidden">
                <div
                  className="p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <Package className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <span className="font-medium">{order.id}</span>
                      <span className="text-gray-500 text-sm ml-2">({formatDate(order.date)})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{getStatusText(order.status)}</span>
                      </span>
                      <span className="mx-4 text-gray-500 hidden md:inline">|</span>
                      <span className="font-medium">₹{order.total}</span>
                    </div>
                    <div className="ml-4">
                      {expandedOrder === order.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedOrder === order.id && (
                  <div className="border-t p-4 bg-gray-50">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Order Items</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-700">
                              {item.name} x {item.quantity}
                            </span>
                            <span className="font-medium">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium mb-2">Delivery Address</h4>
                        <p className="text-gray-700">{order.deliveryAddress}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Payment Method</h4>
                        <p className="text-gray-700">{order.paymentMethod}</p>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                        Download Invoice
                      </button>
                      {order.status === "delivered" && (
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                          Reorder
                        </button>
                      )}
                      {order.status === "processing" && (
                        <button className="bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                          Cancel Order
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersPage
