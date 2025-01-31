'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ParticleCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < 5000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    const material = new THREE.PointsMaterial({ size: 0.02, color: 0x00ffff })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Animation
    camera.position.z = 5
    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.x += 0.001
      particles.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10 opacity-50" />
}