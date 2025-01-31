'use client'
import { motion } from 'framer-motion'

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/asadhaye',
    icon: 'linkedin.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/asadhaye',
    icon: 'github.svg',
  },
  {
    name: 'Email',
    url: 'mailto:asadhaye@gmail.com',
    icon: 'email.svg',
  },
]

export default function SocialLinks() {
  return (
    <motion.div
      className="mt-12 flex justify-center space-x-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition-all hover:text-cyan-400"
        >
          <img
            src={`/icons/${social.icon}`}
            alt={social.name}
            className="h-8 w-8"
          />
        </a>
      ))}
    </motion.div>
  )
}