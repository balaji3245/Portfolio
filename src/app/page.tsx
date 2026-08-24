import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { BackendArchitecture } from "@/components/sections/BackendArchitecture"
import { TechnicalSkillsMatrix } from "@/components/sections/TechnicalSkillsMatrix"
import { Certifications } from "@/components/sections/Certifications"
import { ContactSection } from "@/components/sections/ContactSection"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <div className="w-full">
          <Hero />
          <ProfessionalSummary />
          <ExperienceTimeline />
          <FeaturedProjects />
          <BackendArchitecture />
          <TechnicalSkillsMatrix />
          <Certifications />
          <ContactSection />
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
