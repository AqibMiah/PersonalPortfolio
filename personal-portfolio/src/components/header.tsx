"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 bg-black/50 backdrop-blur-sm sticky top-0 z-10"
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          Aqib Miah
        </motion.h1>
        <div className="space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://www.linkedin.com/in/aqibmiah1/" target="_blank">
              LinkedIn
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/AqibMiah" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}

