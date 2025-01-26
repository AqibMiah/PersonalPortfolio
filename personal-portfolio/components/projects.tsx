"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  language: string
}

const projectDescriptions = {
  HealthcareSys: {
    description:
      "A healthcare system built with TypeScript, Twilio, and Next.js that enables patients to book appointments online with an intuitive interface.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Twilio", "Appwrite"],
  },
  "Inventory-Management-System": {
    description:
      "An inventory management system developed in Python for my A-Level project. Features include user access levels, secure data storage, and automated visual reports.",
    tech: ["Python", "SQLite3", "Matplotlib", "Tkinter", "SMTPlib"],
  },
  MyDigitalMushaf: {
    description: "A digital Quran application with features for reading, listening, note-taking and tracking progress.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    externalLink: "https://www.mydigitalmushaf.com/",
  },
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/AqibMiah/repos")
        const data = await response.json()

        // Filter and map repos
        const featuredRepos = data
          .filter(
            (repo: Repository) =>
              Object.keys(projectDescriptions).includes(repo.name) || repo.name === "A-level-Coursework-nea",
          )
          .map((repo: Repository) =>
            repo.name === "A-level-Coursework-nea" ? { ...repo, name: "Inventory-Management-System" } : repo,
          )

        // Ensure all projects from projectDescriptions are included
        Object.keys(projectDescriptions).forEach((projectName) => {
          if (!featuredRepos.some((repo) => repo.name === projectName)) {
            featuredRepos.push({
              id: Math.random(),
              name: projectName,
              description: projectDescriptions[projectName as keyof typeof projectDescriptions].description,
              html_url: "#",
              language: projectDescriptions[projectName as keyof typeof projectDescriptions].tech[0],
            })
          }
        })

        setRepos(featuredRepos)
      } catch (error) {
        console.error("Error fetching repos:", error)
      }
    }

    fetchRepos()
  }, [])

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Projects</CardTitle>
          <CardDescription>Highlighted projects from my portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-zinc-800/50 border-zinc-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {repo.name === "Inventory-Management-System" ? "Inventory Management System" : repo.name}
                      <div className="ml-auto flex gap-2">
                        {projectDescriptions[repo.name as keyof typeof projectDescriptions]?.externalLink && (
                          <Button variant="ghost" size="icon" asChild>
                            <a
                              href={projectDescriptions[repo.name as keyof typeof projectDescriptions].externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" asChild>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-300 mb-4">
                      {projectDescriptions[repo.name as keyof typeof projectDescriptions]?.description ||
                        repo.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectDescriptions[repo.name as keyof typeof projectDescriptions]?.tech.map((tech, i) => (
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

