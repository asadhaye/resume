'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border-2 border-cyan-400 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 30,
      }}
    />
  )
}