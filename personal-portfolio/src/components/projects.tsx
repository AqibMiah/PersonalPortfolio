"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    name: "Inventory Management System",
    description:
      "An inventory management system developed in Python for my A-Level project. Features include user access levels, secure data storage, and automated visual reports.",
    tech: ["Python", "SQLite3", "Matplotlib", "Tkinter", "SMTPlib"],
    github_url: "https://github.com/AqibMiah/A-level-Coursework-nea",
  },
  {
    id: 2,
    name: "MyDigitalMushaf",
    description: "A digital Quran application with features for reading, listening, note-taking and tracking progress.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    github_url: "https://github.com/AqibMiah/MyDigitalMushaf",
    external_url: "https://www.mydigitalmushaf.com/",
  },
  {
    id: 3,
    name: "HealthcareSys",
    description:
      "A healthcare system built with TypeScript, Twilio, and Next.js that enables patients to book appointments online with an intuitive interface.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Twilio", "Appwrite"],
    github_url: "https://github.com/AqibMiah/HealthcareSys",
  },
]

export default function Projects() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Projects</CardTitle>
          <CardDescription>Highlighted projects from my portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-zinc-800/50 border-zinc-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {project.name}
                      <div className="ml-auto flex gap-2">
                        {project.external_url && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.external_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

