'use client'
import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"
      style={{ scaleX: scrollYProgress }}
    />
  )
}