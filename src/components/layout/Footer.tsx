import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Logo from "../ui/Logo"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm">
              CallHealth is a healthcare platform that provides a wide range of healthcare services at your doorstep.
              From doctor consultations to lab tests, medicines, and more, we make healthcare accessible and convenient.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/pharmacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/lab-tests" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link to="/health-packages" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Health Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>1800-108-7799</p>
              <p>support@callhealth.com</p>
              <p>
                Plot No. 20, Jayabheri Enclave,
                <br />
                Gachibowli, Hyderabad,
                <br />
                Telangana - 500032
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CallHealth. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <img src="/placeholder.svg?height=40&width=250" alt="Payment Methods" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
