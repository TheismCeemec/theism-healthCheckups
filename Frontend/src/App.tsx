import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import LoadingSpinner from "./components/ui/LoadingSpinner"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const DoctorsPage = lazy(() => import("./pages/DoctorsPage"))
const PharmacyPage = lazy(() => import("./pages/PharmacyPage"))
const LabTestsPage = lazy(() => import("./pages/LabTestsPage"))
const HealthPackagesPage = lazy(() => import("./pages/HealthPackagesPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"))
const DoctorDetailPage = lazy(() => import("./pages/DoctorDetailPage"))
const CartPage = lazy(() => import("./pages/CartPage"))
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"))

// User dashboard pages
const UserDashboardPage = lazy(() => import("./pages/dashboard/UserDashboardPage"))
const AppointmentsPage = lazy(() => import("./pages/dashboard/AppointmentsPage"))
const OrdersPage = lazy(() => import("./pages/dashboard/OrdersPage"))
const ProfilePage = lazy(() => import("./pages/dashboard/ProfilePage"))

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/doctors/:doctorId" element={<DoctorDetailPage />} />
              <Route path="/pharmacy" element={<PharmacyPage />} />
              <Route path="/lab-tests" element={<LabTestsPage />} />
              <Route path="/health-packages" element={<HealthPackagesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* User dashboard routes */}
              <Route path="/dashboard" element={<UserDashboardPage />}>
                <Route index element={<Navigate to="/dashboard/appointments" replace />} />
                <Route path="appointments" element={<AppointmentsPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>

              {/* 404 route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
