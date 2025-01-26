"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutMe() {
  const skills = [
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PHP",
    "Git",
  ]

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-zinc-300">
            I'm a Computer Science student at Queen Mary University of London, pursuing a BSc with a predicted First
            Class Honours. Currently working as a Mathematics Tutor while developing my software engineering skills
            through various projects and professional experiences.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

