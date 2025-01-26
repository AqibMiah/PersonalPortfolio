"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const technicalSkills = [
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
  ];

  const projects = [
    {
      title: "Inventory Management System",
      description: "An inventory management system developed in Python for my A-Level project. Features include user access levels, secure data storage, and automated visual reports.",
      github: "https://github.com/AqibMiah/A-level-Coursework-nea",
      technologies: ["Python", "SQLite3", "Matplotlib", "Tkinter", "SMTPlib"],
    },
    {
      title: "MyDigitalMushaf",
      description: "A digital Quran application with features for reading, listening, note-taking and tracking progress.",
      github: "https://github.com/AqibMiah/MyDigitalMushaf",
      liveLink: "https://www.mydigitalmushaf.com/",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "HealthcareSys",
      description: "A healthcare system built with TypeScript, Twilio, and Next.js that enables patients to book appointments online with an intuitive interface.",
      github: "https://github.com/AqibMiah/HealthcareSys",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Twilio", "Appwrite"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-900/70 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl sm:text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aqib Miah
          </motion.h1>
          <motion.div 
            className="flex gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="https://www.linkedin.com/in/aqibmiah1/" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/AqibMiah" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 hover:scale-110 transition-transform">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/60 transition-colors">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Me</h2>
                <Card className="bg-zinc-900 border-zinc-800">
                  <div className="p-3 sm:p-4">
                    <p className="text-sm text-gray-300">
                      I&apos;m a Computer Science student at Queen Mary University of London, pursuing a BSc with a predicted First Class Honours. Currently working as a Mathematics Tutor while developing my software engineering skills through various projects and professional experiences.
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
          </motion.div>

          <motion.div
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/60 transition-colors">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Technical Skills</h2>
                <Card className="bg-zinc-900 border-zinc-800">
                  <div className="p-3 sm:p-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          variants={fadeInUp}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs sm:text-sm py-0.5 sm:py-1 px-2 sm:px-3 hover:scale-105 transition-transform"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </motion.div>

          <motion.div
            ref={experienceRef}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/60 transition-colors">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Experience</h2>
                <Card className="bg-zinc-900 border-zinc-800">
                  <div className="p-3 sm:p-4 space-y-5 sm:space-y-6">
                    <motion.div 
                      className="border-l-2 border-gray-700 pl-3 sm:pl-4"
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-base sm:text-lg font-bold">Mathematics Tutor</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Best Tutors | Jul 2023 - Present</p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-0.5 sm:space-y-1">
                        <li>Effectively managed job responsibilities while attending university</li>
                        <li>Consistently provided clear explanations of complex concepts</li>
                        <li>Helped 30 students achieve grade 6 or higher</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="border-l-2 border-gray-700 pl-3 sm:pl-4"
                      variants={fadeInUp}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-base sm:text-lg font-bold">Tech Intern</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Enfield Council | June 2022 - July 2022</p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-0.5 sm:space-y-1">
                        <li>Improved network security through account management solutions</li>
                        <li>Managed events and chaired departmental meetings</li>
                        <li>Led data management initiatives using database tools</li>
                      </ul>
                    </motion.div>
                  </div>
                </Card>
              </div>
            </Card>
          </motion.div>

          <motion.div
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/60 transition-colors">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Projects</h2>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Highlighted projects from my portfolio</p>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                        <div className="p-3 sm:p-4">
                          <div className="flex justify-between items-start mb-2 sm:mb-3">
                            <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                            <div className="flex gap-1.5 sm:gap-2">
                              {project.liveLink && (
                                <Link href={project.liveLink} target="_blank">
                                  <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-110 transition-transform">
                                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                  </Button>
                                </Link>
                              )}
                              <Link href={project.github} target="_blank">
                                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-110 transition-transform">
                                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="text-xs bg-zinc-800 px-2 py-0.5 hover:scale-105 transition-transform"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}