import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary"
import { TechnicalSkillsMatrix } from "@/components/sections/TechnicalSkillsMatrix"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { Certifications } from "@/components/sections/Certifications"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { BackendArchitecture } from "@/components/sections/BackendArchitecture"
import { ApiShowcase } from "@/components/sections/ApiShowcase"
import { DatabaseEngineering } from "@/components/sections/DatabaseEngineering"
import { DevOpsDeployment } from "@/components/sections/DevOpsDeployment"
import { SystemDesign } from "@/components/sections/SystemDesign"
import { ProfessionalActivity } from "@/components/sections/ProfessionalActivity"
import { TestimonialsBlog } from "@/components/sections/TestimonialsBlog"
import { ContactSection } from "@/components/sections/ContactSection"

import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
          <Hero />
          <ProfessionalSummary />
          <TechnicalSkillsMatrix />
          <ExperienceTimeline />
          <Certifications />
          <FeaturedProjects />
          <BackendArchitecture />
          <ApiShowcase />
          <DatabaseEngineering />
          <DevOpsDeployment />
          <SystemDesign />
          <ProfessionalActivity />
          <TestimonialsBlog />
          <ContactSection />
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
