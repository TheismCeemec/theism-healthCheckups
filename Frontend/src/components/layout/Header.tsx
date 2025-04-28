"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search, ShoppingCart, User, Phone } from "lucide-react"
import Logo from "../ui/Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:1800-108-7799" className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1" />
              1800-108-7799
            </a>
            <span className="text-sm">|</span>
            <a href="#" className="text-sm">
              Corporate
            </a>
            <span className="text-sm">|</span>
            <a href="#" className="text-sm">
              Partner with us
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm">
              Login
            </Link>
            <span className="text-sm">|</span>
            <Link to="/register" className="text-sm">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              {/* <Logo /> */}
              <p>Theism Diagnostics</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/doctors" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Doctors
            </Link>
            <Link to="/pharmacy" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pharmacy
            </Link>
            <Link to="/lab-tests" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Lab Tests
            </Link>
            <Link to="/health-packages" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Health Packages
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link to="/account" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-600" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/services"
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/doctors"
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link
                to="/pharmacy"
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pharmacy
              </Link>
              <Link
                to="/lab-tests"
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lab Tests
              </Link>
              <Link
                to="/health-packages"
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Packages
              </Link>
              <div className="flex space-x-4 py-2">
                <Link to="/login" className="text-blue-600 font-medium">
                  Login
                </Link>
                <span>|</span>
                <Link to="/register" className="text-blue-600 font-medium">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
