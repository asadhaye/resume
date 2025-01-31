'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted:', formData)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-white/80">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-white/80">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-white/80">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
          placeholder="Your project details..."
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 px-6 py-3 font-bold text-black transition-all hover:opacity-90"
      >
        Send Message
      </button>
    </motion.form>
  )
}