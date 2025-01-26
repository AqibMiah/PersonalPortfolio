import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, GitFork } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-20">
        <h1 className="text-4xl font-bold">Aqib Miah</h1>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" className="hover:text-muted-foreground transition-colors">
            <span className="text-xl">LinkedIn</span>
          </a>
          <a href="https://github.com/AqibMiah" className="hover:text-muted-foreground transition-colors">
            <span className="text-xl">GitHub</span>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a Computer Science student at Queen Mary University of London, pursuing a BSc with a predicted First Class Honours. Currently working as a Mathematics Tutor while developing my software engineering skills through various projects and professional experiences.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Technical Skills */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-5xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PHP', 'Git'].map((skill) => (
            <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-5xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Mathematics Tutor</CardTitle>
              <CardDescription>Best Tutors | Jul 2023 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Effectively managed job responsibilities while attending university</li>
                <li>Consistently provided clear explanations of complex concepts</li>
                <li>Helped 30 students achieve grade 6 or higher</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tech Intern</CardTitle>
              <CardDescription>Enfield Council | June 2022 - July 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Improved network security through account management solutions</li>
                <li>Managed events and chaired departmental meetings</li>
                <li>Led data management initiatives using database tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">Projects</h2>
        <p className="text-xl text-muted-foreground mb-8">Highlighted projects from my portfolio</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <CardTitle>Inventory Management System</CardTitle>
              <GitFork className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                An inventory management system developed in Python for my A-Level project. Features include user access levels, secure data storage, and automated visual reports.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQLite3', 'Matplotlib', 'Tkinter', 'SMTPlib'].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <CardTitle>HealthcareSys</CardTitle>
              <GitFork className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                A healthcare system built with TypeScript, Twilio, and Next.js that enables patients to book appointments online with an intuitive interface.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'Tailwind CSS', 'Twilio', 'Appwrite'].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <CardTitle>MyDigitalMushaf</CardTitle>
              <div className="flex gap-2">
                <ExternalLink className="text-muted-foreground" />
                <GitFork className="text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                A digital Quran application with features for reading, listening, note-taking and tracking progress.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}