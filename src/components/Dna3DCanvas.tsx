'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Dna3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 500);
    camera.position.set(0, 0, 36);

    // 2. High-Performance WebGL Renderer with Glass Physical Transmission
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // 3. High-Contrast Lighting for Liquid Glass Refraction Highlights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
    mainLight.position.set(30, 40, 35);
    scene.add(mainLight);

    const backLight = new THREE.DirectionalLight(0xe0f2fe, 3.0);
    backLight.position.set(-30, -20, -30);
    scene.add(backLight);

    const sideLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sideLight.position.set(0, -30, 30);
    scene.add(sideLight);

    // 4. DNA Group Setup
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Liquid Glass / Crystal Acrylic Physical Material (Exact match to screenshot)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.94, // High optical transparency for liquid glass
      opacity: 1.0,
      transparent: true,
      roughness: 0.06, // Ultra-smooth glass gloss
      metalness: 0.05,
      ior: 1.48, // Index of refraction for liquid acrylic glass
      thickness: 1.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 0.95,
      emissive: 0x0a101f,
    });

    // 5. Generate Smooth Continuous Tube Geometry for Both Strands
    const turns = 3.2;
    const heightSpan = 46;
    const strandRadius = 7.8;
    const tubeRadius = 1.25; // Crystal liquid glass tube
    const pointsCount = 200;

    const points1: THREE.Vector3[] = [];
    const points2: THREE.Vector3[] = [];

    for (let i = 0; i <= pointsCount; i++) {
      const progress = i / pointsCount;
      const angle = progress * turns * Math.PI * 2;
      const y = progress * heightSpan - heightSpan / 2;

      // Strand 1
      const x1 = Math.cos(angle) * strandRadius;
      const z1 = Math.sin(angle) * strandRadius;
      points1.push(new THREE.Vector3(x1, y, z1));

      // Strand 2 (180 deg offset)
      const x2 = Math.cos(angle + Math.PI) * strandRadius;
      const z2 = Math.sin(angle + Math.PI) * strandRadius;
      points2.push(new THREE.Vector3(x2, y, z2));
    }

    // Create 3D Smooth Curves
    const curve1 = new THREE.CatmullRomCurve3(points1);
    const curve2 = new THREE.CatmullRomCurve3(points2);

    // Tube Geometries
    const tubeGeo1 = new THREE.TubeGeometry(curve1, 180, tubeRadius, 24, false);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, 180, tubeRadius, 24, false);

    const tubeMesh1 = new THREE.Mesh(tubeGeo1, glassMaterial);
    const tubeMesh2 = new THREE.Mesh(tubeGeo2, glassMaterial);

    dnaGroup.add(tubeMesh1);
    dnaGroup.add(tubeMesh2);

    // 6. Generate Glass Cylindrical Rungs Connecting Strands
    const rungsCount = 42;
    const rungRadius = 0.38;

    for (let i = 0; i < rungsCount; i++) {
      const t = (i + 0.5) / rungsCount;
      const p1 = curve1.getPoint(t);
      const p2 = curve2.getPoint(t);

      const distance = p1.distanceTo(p2);
      const rungGeo = new THREE.CylinderGeometry(rungRadius, rungRadius, distance, 16);
      const rungMesh = new THREE.Mesh(rungGeo, glassMaterial);

      // Midpoint position
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      rungMesh.position.copy(midPoint);

      // Orientation (align cylinder Y-axis with p2 - p1 vector)
      const direction = new THREE.Vector3().subVectors(p2, p1).normalize();
      const defaultYAxis = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(defaultYAxis, direction);
      rungMesh.quaternion.copy(quaternion);

      dnaGroup.add(rungMesh);
    }

    // Horizontal sine wave orientation (Smaller size)
    dnaGroup.rotation.z = -1.25; // Horizontal layout across hero
    dnaGroup.rotation.x = 0.35;
    dnaGroup.position.set(0, 0, 0);
    dnaGroup.scale.setScalar(0.65);

    // 7. Interactive Drag to Rotate & Mouse Parallax
    let isMouseDown = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationX = dnaGroup.rotation.x;
    let targetRotationY = dnaGroup.rotation.y;
    let autoRotateSpeed = 0.004;

    const onPointerDown = (e: PointerEvent) => {
      isMouseDown = true;
      setIsDragging(true);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isMouseDown) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      } else {
        const normX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        const normY = (e.clientY / window.innerHeight - 0.5) * 0.3;
        targetRotationY += normX * 0.01;
        targetRotationX = 0.35 + normY;
      }
    };

    const onPointerUp = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    let scrollSpeed = 0;
    const onScroll = () => {
      scrollSpeed += 0.04;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // 8. Animation Loop
    let animId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.033);
      lastTime = currentTime;

      // Auto rotation + scroll spin momentum
      if (!isMouseDown) {
        targetRotationY += autoRotateSpeed + scrollSpeed;
      }
      scrollSpeed *= 0.92;

      // Smooth lerp rotation
      dnaGroup.rotation.y += (targetRotationY - dnaGroup.rotation.y) * 0.08;
      dnaGroup.rotation.x += (targetRotationX - dnaGroup.rotation.x) * 0.08;

      // Subtle liquid wave floating
      dnaGroup.position.y = Math.sin(currentTime * 0.0015) * 0.4;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      tubeGeo1.dispose();
      tubeGeo2.dispose();
      glassMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none cursor-grab active:cursor-grabbing">
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ minHeight: '100vh' }}
      />
      {/* Interactive Helper Badge */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span>Click & Drag to Rotate 3D Liquid Glass DNA</span>
      </div>
    </div>
  );
}
