'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function Headline() {
  return (
    <motion.div 
      className="relative z-10 flex h-screen items-center justify-center"
      {...fadeInUp}
    >
      <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tighter">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Digital Architect
        </span>
        <br />
        <span className="text-white/90">Muhammad Asad Haye</span>
      </h1>
    </motion.div>
  )
}