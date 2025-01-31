'use client'
import { motion } from 'framer-motion'
import { skills } from '@/lib/constants'
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations'

export default function SkillNodes() {
  return (
    <section className="py-24">
      <motion.h2 
        className="text-gradient mb-16 text-center text-4xl"
        {...fadeInUp}
      >
        Technical Mastery
      </motion.h2>
      
      <motion.div 
        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="skill-node flex flex-col items-center"
            variants={scaleIn}
          >
            {/* ... rest of the component remains the same ... */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}