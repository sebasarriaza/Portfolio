import ProjectsSection from '@/components/sections/ProjectsSection'
import Image from 'next/image'
import Landing from '@/components/Landing'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import projects__pokerfinance from '@/public/images/projects__pokerfinance.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <img src="@/public/images/projects__pokerfinance.png" alt="" />
      
    </main>
  )
}
