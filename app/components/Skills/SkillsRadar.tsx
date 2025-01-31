'use client'
import { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import { skills } from '@/lib/constants'

const width = 300
const height = 300
const margin = { top: 30, right: 30, bottom: 30, left: 30 }

export default function SkillsRadar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Clear previous chart
    d3.select(ref.current).selectAll('*').remove()

    // Create SVG
    const svg = d3.select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width/2},${height/2})`)

    // Radar grid
    const levels = 5
    const radius = Math.min(width, height) / 2 - margin.top
    const angleSlice = (Math.PI * 2) / skills.length
    
    // Draw axes
    for(let i = 0; i < skills.length; i++) {
      const angle = angleSlice * i - Math.PI/2
      svg.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', radius * Math.cos(angle))
        .attr('y2', radius * Math.sin(angle))
        .attr('stroke', 'rgba(255,255,255,0.1)')
    }

    // Draw skill areas
    const radarLine = d3.lineRadial<{level: number}>()
      .curve(d3.curveLinearClosed)
      .radius(d => radius * (d.level/100))
      .angle((d, i) => angleSlice * i - Math.PI/2)

    svg.append('path')
      .datum(skills)
      .attr('d', radarLine)
      .attr('fill', 'rgba(0, 255, 255, 0.2)')
      .attr('stroke', '#00ffff')
  }, [])

  return <div ref={ref} className="skills-radar" />
}