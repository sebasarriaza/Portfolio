import ProjectsSection from '@/components/sections/ProjectsSection'
import Landing from '@/components/Landing'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
