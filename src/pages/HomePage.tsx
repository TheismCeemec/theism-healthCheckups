import HeroSection from "../components/home/HeroSection"
import ServicesSection from "../components/home/ServicesSection"
import DoctorsSection from "../components/home/DoctorsSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import DownloadAppSection from "../components/home/DownloadAppSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </div>
  )
}

export default HomePage
