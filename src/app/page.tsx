import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesOverview from "@/components/ServicesOverview"
import TestimonialsSection from "@/components/TestimonialsSection"
import StatsSection from "@/components/StatsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="space-y-0">
          <ServicesOverview />
          <TestimonialsSection className="bg-muted/30" />
          <StatsSection />
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}