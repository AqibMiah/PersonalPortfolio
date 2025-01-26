import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Experiences from "@/components/experiences"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <AboutMe />
        <Experiences />
        <Projects />
      </div>
    </main>
  )
}

