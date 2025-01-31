'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { animations } from '@/lib/animations'

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(containerRef.current.offsetWidth, 500)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Neural network nodes
    const nodes: THREE.Mesh[] = []
    const layers = 5
    const nodesPerLayer = 6

    // Create neural network structure
    for(let i = 0; i < layers; i++) {
      for(let j = 0; j < nodesPerLayer; j++) {
        const geometry = new THREE.SphereGeometry(0.2, 32, 32)
        const material = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color().setHSL(i/layers, 0.8, 0.5) 
        })
        const node = new THREE.Mesh(geometry, material)
        
        node.position.x = i * 2 - (layers - 1)
        node.position.y = j * 0.8 - (nodesPerLayer * 0.8)/2
        node.position.z = 0
        
        scene.add(node)
        nodes.push(node)
      }
    }

    // Connections between nodes
    const lines: THREE.Line[] = []
    nodes.forEach((startNode, i) => {
      nodes.forEach(endNode => {
        if (Math.random() > 0.7) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            startNode.position,
            endNode.position
          ])
          const material = new THREE.LineBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0.3
          })
          const line = new THREE.Line(geometry, material)
          scene.add(line)
          lines.push(line)
        }
      })
    })

    // Animation
    camera.position.z = 10
    const animate = () => {
      requestAnimationFrame(animate)
      
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005
      })
      lines.forEach(line => {
        if (line.material instanceof THREE.Material) {
          line.material.opacity = Math.abs(Math.sin(Date.now() * 0.001))
        }
      })

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <div ref={containerRef} className="neural-network h-[500px] w-full" />
  )
}