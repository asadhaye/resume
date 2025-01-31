'use client'
import { certifications } from '@/lib/constants'

export default function Education() {
  return (
    <section className="py-24">
      <h2 className="text-gradient mb-16 text-center text-4xl">Credentials</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-gradient-to-b from-gray-900 to-black p-8"
          >
            <h3 className="text-xl font-bold text-cyan-300">{cert.title}</h3>
            <p className="mt-2 text-white/80">{cert.institution}</p>
            <p className="mt-4 text-sm text-cyan-400/80">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}