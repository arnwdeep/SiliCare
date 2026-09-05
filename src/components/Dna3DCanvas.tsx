'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Dna3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 500);
    camera.position.set(0, 0, 40);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });

    // Cap pixel ratio to 1.5 for silky smooth 60-120 FPS on all monitors
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // 3. Balanced Studio Lighting (Optimized Shading)
    const ambientLight = new THREE.AmbientLight(0xf8fafc, 1.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(15, 30, 25);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xc7d2fe, 1.4);
    rimLight.position.set(-20, -15, -15);
    scene.add(rimLight);

    // 4. DNA Instanced Mesh Generation
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Geometry tuning: 10x10 segments is crisp & 60% faster GPU rendering
    const sphereGeo = new THREE.SphereGeometry(0.52, 12, 12);
    
    // High-performance Standard Material (Silky Pearlescent White)
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.25,
      metalness: 0.08,
      emissive: 0x050510,
    });

    // Parameters for organic double helix
    const numTurns = 3.2;
    const pointsPerTurn = 75;
    const totalStrandPoints = Math.floor(numTurns * pointsPerTurn);
    const radius = 6.2;
    const length = 46;
    const rungsInterval = 6;
    const spheresPerRung = 7;

    let totalRungSpheres = 0;
    for (let i = 0; i < totalStrandPoints; i += rungsInterval) {
      totalRungSpheres += spheresPerRung;
    }
    const totalSpheres = totalStrandPoints * 2 + totalRungSpheres;

    const instancedMesh = new THREE.InstancedMesh(sphereGeo, sphereMat, totalSpheres);
    const dummy = new THREE.Object3D();
    let instanceIdx = 0;

    // Build static transformation matrices once
    for (let i = 0; i < totalStrandPoints; i++) {
      const progress = i / totalStrandPoints;
      const angle = progress * numTurns * Math.PI * 2;
      const y = progress * length - length / 2;

      // Strand 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      dummy.position.set(x1, y, z1);
      dummy.scale.setScalar(1.08);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(instanceIdx++, dummy.matrix);

      // Strand 2 (180 deg offset)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      dummy.position.set(x2, y, z2);
      dummy.scale.setScalar(1.08);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(instanceIdx++, dummy.matrix);

      // Connecting rungs
      if (i % rungsInterval === 0) {
        for (let r = 1; r <= spheresPerRung; r++) {
          const t = r / (spheresPerRung + 1);
          const rx = x1 + (x2 - x1) * t;
          const ry = y;
          const rz = z1 + (z2 - z1) * t;
          dummy.position.set(rx, ry, rz);
          dummy.scale.setScalar(0.82);
          dummy.updateMatrix();
          instancedMesh.setMatrixAt(instanceIdx++, dummy.matrix);
        }
      }
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    dnaGroup.add(instancedMesh);

    // Initial orientation matching the concept screenshot
    dnaGroup.rotation.z = -0.32;
    dnaGroup.rotation.x = 0.18;
    dnaGroup.position.set(-5, 0, 0);

    // 5. Smooth Parallax & Momentum Controllers
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollVelocity = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };

    const onScroll = () => {
      scrollVelocity += 0.03;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Throttle resize
    let resizeTimeout: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }, 100);
    };

    window.addEventListener('resize', onResize);

    // 6. Smooth Animation Loop with Capped Delta Capping
    let animId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.033); // Cap at 30 FPS min step
      lastTime = currentTime;

      // Base smooth rotation
      dnaGroup.rotation.y += delta * 0.35 + scrollVelocity;
      dnaGroup.position.y = Math.sin(currentTime * 0.001) * 0.5;

      // Decay scroll speed
      scrollVelocity *= 0.92;

      // Smooth lerp mouse parallax (0.05 for buttery soft momentum)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      dnaGroup.rotation.y += currentMouseX * delta * 2;
      dnaGroup.rotation.x = 0.18 + currentMouseY;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      sphereMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ minHeight: '100vh', willChange: 'transform' }}
    />
  );
}
