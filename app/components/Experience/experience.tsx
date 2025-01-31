'use client'
import { motion } from 'framer-motion'
import { experiences } from '@/lib/constants'

export default function Experience() {
  return (
    <section className="py-24">
      <h2 className="text-gradient mb-16 text-center text-4xl">Professional Journey</h2>
      <div className="mx-auto max-w-4xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative border-l-2 border-cyan-400/30 pl-8 pb-12"
          >
            <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-cyan-400" />
            <h3 className="text-xl font-bold text-cyan-300">{exp.role}</h3>
            <p className="text-white/80">{exp.company} • {exp.duration}</p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-white/70">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}