"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"

interface Background3DProps {
  type: "home" | "about" | "products" | "team" | "career" | "contact"
}

export function Background3D({ type }: Background3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 40

    if (type === "home") {
      // Home: Blue spiral vortex with rotating particles
      const colors = [0x4f46e5, 0x2563eb, 0x3b82f6, 0x1d4ed8]
      const particles = []
      for (let i = 0; i < 25; i++) {
        const angle = (i / 25) * Math.PI * 4
        const radius = 15 + (i / 25) * 20
        const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.7, 16, 16)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0x2563eb,
          emissiveIntensity: 0.8,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 12.5) * 2, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      // Animate vortex rotation
      particles.forEach((p, idx) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 8,
          duration: 20 + Math.random() * 10,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.rotation, {
          x: Math.PI * 2,
          y: Math.PI * 2,
          z: Math.PI * 2,
          duration: 15 + Math.random() * 8,
          repeat: -1,
          ease: "none",
        })
      })
    } else if (type === "about") {
      // About: Cyan spiral galaxy vortex
      const colors = [0x06b6d4, 0x0891b2, 0x0e7490, 0x164e63]
      const particles = []
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 5
        const radius = 10 + (i / 30) * 25
        const geometry = new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.5, 3)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0x06b6d4,
          emissiveIntensity: 0.7,
          wireframe: false,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 15) * 1.8, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      particles.forEach((p) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 6,
          duration: 25 + Math.random() * 8,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.scale, {
          x: 1.3,
          y: 1.3,
          z: 1.3,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    } else if (type === "products") {
      // Products: Purple intense vortex with expanding rings
      const colors = [0x8b5cf6, 0x7c3aed, 0x6d28d9, 0x5b21b6]
      const particles = []
      for (let i = 0; i < 35; i++) {
        const angle = (i / 35) * Math.PI * 6
        const radius = 8 + (i / 35) * 30
        const geometry = new THREE.TetrahedronGeometry(0.7 + Math.random() * 0.6, 2)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0x7c3aed,
          emissiveIntensity: 0.9,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 17.5) * 1.5, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      particles.forEach((p) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 10,
          duration: 18 + Math.random() * 6,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.rotation, {
          x: Math.PI * 3,
          y: Math.PI * 3,
          z: Math.PI * 3,
          duration: 12 + Math.random() * 6,
          repeat: -1,
          ease: "none",
        })
      })
    } else if (type === "team") {
      // Team: Pink double helix vortex
      const colors = [0xec4899, 0xdb2777, 0xbe185d, 0xa11042]
      const particles = []
      for (let i = 0; i < 28; i++) {
        const angle = (i / 28) * Math.PI * 4
        const radius = 12 + (i / 28) * 22
        const geometry = new THREE.OctahedronGeometry(0.65 + Math.random() * 0.55, 2)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0xdb2777,
          emissiveIntensity: 0.8,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 14) * 2, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      particles.forEach((p) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 7,
          duration: 22 + Math.random() * 8,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.scale, {
          x: 1.4,
          y: 1.4,
          z: 1.4,
          duration: 4 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    } else if (type === "career") {
      // Career: Teal flowing tornado vortex
      const colors = [0x14b8a6, 0x0d9488, 0x0f766e, 0x134e4a]
      const particles = []
      for (let i = 0; i < 32; i++) {
        const angle = (i / 32) * Math.PI * 5.5
        const radius = 9 + (i / 32) * 28
        const geometry = new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.6, 4)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0x0d9488,
          emissiveIntensity: 0.75,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 16) * 1.7, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      particles.forEach((p) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 9,
          duration: 24 + Math.random() * 10,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.rotation, {
          x: Math.PI * 2.5,
          y: Math.PI * 2.5,
          z: Math.PI * 2.5,
          duration: 16 + Math.random() * 8,
          repeat: -1,
          ease: "none",
        })
      })
    } else if (type === "contact") {
      // Contact: Orange energetic vortex lattice
      const colors = [0xf97316, 0xea580c, 0xe16a04, 0xdc2626]
      const particles = []
      for (let i = 0; i < 26; i++) {
        const angle = (i / 26) * Math.PI * 3.5
        const radius = 11 + (i / 26) * 24
        const geometry =
          Math.random() > 0.5 ? new THREE.DodecahedronGeometry(0.6, 1) : new THREE.TorusGeometry(0.8, 0.3, 8, 16)
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          emissive: 0xea580c,
          emissiveIntensity: 0.85,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.cos(angle) * radius, (i - 13) * 1.9, Math.sin(angle) * radius)
        scene.add(mesh)
        particles.push({ mesh, angle, radius, index: i })
      }
      particles.forEach((p) => {
        gsap.to(p, {
          angle: p.angle + Math.PI * 8,
          duration: 20 + Math.random() * 9,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            p.mesh.position.x = Math.cos(p.angle) * p.radius
            p.mesh.position.z = Math.sin(p.angle) * p.radius
          },
        })
        gsap.to(p.mesh.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 3.5 + Math.random() * 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight.position.set(50, 50, 50)
    scene.add(directionalLight)

    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 200)
    pointLight1.position.set(-50, 30, 50)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.9, 200)
    pointLight2.position.set(50, -30, -50)
    scene.add(pointLight2)

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [type])

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  )
}
