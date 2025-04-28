"use client"

import { Outlet, NavLink } from "react-router-dom"
import { User, Calendar, ShoppingBag, Settings, LogOut } from "lucide-react"

const UserDashboardPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-semibold">John Doe</h2>
                    <p className="text-sm text-gray-500">john.doe@example.com</p>
                  </div>
                </div>
              </div>

              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/dashboard/appointments"
                      className={({ isActive }) =>
                        `flex items-center p-2 rounded-md ${
                          isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <Calendar className="h-5 w-5 mr-3" />
                      Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/orders"
                      className={({ isActive }) =>
                        `flex items-center p-2 rounded-md ${
                          isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <ShoppingBag className="h-5 w-5 mr-3" />
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/profile"
                      className={({ isActive }) =>
                        `flex items-center p-2 rounded-md ${
                          isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      Profile Settings
                    </NavLink>
                  </li>
                  <li className="pt-4 border-t mt-4">
                    <button
                      className="flex items-center p-2 rounded-md text-red-600 hover:bg-red-50 w-full text-left"
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn")
                        window.location.href = "/"
                      }}
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
