import ProjectsSection from '@/components/sections/ProjectsSection'
import Landing from '@/components/Landing'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950">
      <Landing />
      <div className='backdrop-blur-3xl 2xl:flex 2xl:flex-col 2xl:items-center'>
        <div className='2xl:max-w-screen-2xl'>
          {/* <ProjectsSection /> */}
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
