'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/lib/constants'

export default function ProjectGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  )
}