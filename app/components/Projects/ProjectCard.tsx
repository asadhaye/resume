'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({
  title,
  description,
  tech,
  image,
}: {
  title: string
  description: string
  tech: string[]
  image: string
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </h3>
        <p className="mt-2 text-white/80">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-cyan-900/50 px-3 py-1 text-sm text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}