"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Mathematics Tutor",
    company: "Best Tutors",
    period: "Jul 2023 - Present",
    description: [
      "Effectively managed job responsibilities while attending university",
      "Consistently provided clear explanations of complex concepts",
      "Helped 30 students achieve grade 6 or higher",
    ],
  },
  {
    title: "Tech Intern",
    company: "Enfield Council",
    period: "June 2022 - July 2022",
    description: [
      "Improved network security through account management solutions",
      "Managed events and chaired departmental meetings",
      "Led data management initiatives using database tools",
    ],
  },
]

export default function Experiences() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-zinc-800 pl-4 space-y-2"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-zinc-400">
                  {exp.company} | {exp.period}
                </p>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

