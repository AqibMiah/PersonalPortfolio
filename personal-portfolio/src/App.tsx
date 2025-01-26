import React from 'react';
import { Github, Linkedin, ExternalLink, GitFork } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-20">
        <h1 className="text-4xl font-bold">Aqib Miah</h1>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors">
            <span className="text-xl">LinkedIn</span>
          </a>
          <a href="https://github.com/AqibMiah" className="hover:text-gray-300 transition-colors">
            <span className="text-xl">GitHub</span>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mb-20 bg-zinc-900 rounded-lg p-8">
        <h2 className="text-5xl font-bold mb-8">About Me</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          I'm a Computer Science student at Queen Mary University of London, pursuing a BSc with a predicted First Class Honours. Currently working as a Mathematics Tutor while developing my software engineering skills through various projects and professional experiences.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-5xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PHP', 'Git'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-full text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-5xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-12">
          <div className="bg-zinc-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Mathematics Tutor</h3>
            <p className="text-gray-400 mb-4">Best Tutors | Jul 2023 - Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Effectively managed job responsibilities while attending university</li>
              <li>Consistently provided clear explanations of complex concepts</li>
              <li>Helped 30 students achieve grade 6 or higher</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Tech Intern</h3>
            <p className="text-gray-400 mb-4">Enfield Council | June 2022 - July 2022</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Improved network security through account management solutions</li>
              <li>Managed events and chaired departmental meetings</li>
              <li>Led data management initiatives using database tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">Projects</h2>
        <p className="text-xl text-gray-400 mb-8">Highlighted projects from my portfolio</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Inventory Management System</h3>
              <GitFork className="text-gray-400" />
            </div>
            <p className="text-gray-300 mb-6">
              An inventory management system developed in Python for my A-Level project. Features include user access levels, secure data storage, and automated visual reports.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQLite3', 'Matplotlib', 'Tkinter', 'SMTPlib'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">HealthcareSys</h3>
              <GitFork className="text-gray-400" />
            </div>
            <p className="text-gray-300 mb-6">
              A healthcare system built with TypeScript, Twilio, and Next.js that enables patients to book appointments online with an intuitive interface.
            </p>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'Next.js', 'Tailwind CSS', 'Twilio', 'Appwrite'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">MyDigitalMushaf</h3>
              <div className="flex gap-2">
                <ExternalLink className="text-gray-400" />
                <GitFork className="text-gray-400" />
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              A digital Quran application with features for reading, listening, note-taking and tracking progress.
            </p>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;