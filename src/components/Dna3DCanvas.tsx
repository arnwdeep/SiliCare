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

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 42);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xf8fafc, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(20, 40, 30);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe2e8f0, 1.8);
    dirLight2.position.set(-20, -20, -20);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x3b82f6, 1.2, 100);
    pointLight.position.set(0, 10, 20);
    scene.add(pointLight);

    // 5. DNA Structure Generation (InstancedMesh for peak performance)
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Parameters matching the exact organic molecular look
    const numTurns = 3.5;
    const pointsPerTurn = 90;
    const totalStrandPoints = Math.floor(numTurns * pointsPerTurn);
    const radius = 6.5;
    const length = 48;
    const stepY = length / totalStrandPoints;
    const rungsInterval = 6; // Every N points create a rung

    // Count total spheres needed
    let totalRungSpheres = 0;
    const spheresPerRung = 9;
    for (let i = 0; i < totalStrandPoints; i += rungsInterval) {
      totalRungSpheres += spheresPerRung;
    }
    const totalSpheres = totalStrandPoints * 2 + totalRungSpheres;

    // Sphere Geometry & Pearl White Material (Matching Image)
    const sphereGeo = new THREE.SphereGeometry(0.55, 16, 16);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xf1f5f9,
      emissive: 0x000000,
      roughness: 0.28,
      metalness: 0.08,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
      reflectivity: 0.8,
    });

    const instancedMesh = new THREE.InstancedMesh(sphereGeo, sphereMat, totalSpheres);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let instanceIdx = 0;

    // Helper to add sphere instance with slight organic offset
    const addSphereInstance = (x: number, y: number, z: number, scale = 1) => {
      // Add slight organic bump jitter
      const jitterX = (Math.random() - 0.5) * 0.15;
      const jitterY = (Math.random() - 0.5) * 0.15;
      const jitterZ = (Math.random() - 0.5) * 0.15;

      dummy.position.set(x + jitterX, y + jitterY, z + jitterZ);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(instanceIdx, dummy.matrix);
      instanceIdx++;
    };

    // Build Strand 1, Strand 2, and Connecting Rungs
    for (let i = 0; i < totalStrandPoints; i++) {
      const progress = i / totalStrandPoints;
      const angle = progress * numTurns * Math.PI * 2;
      const y = progress * length - length / 2;

      // Strand 1 Position
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      addSphereInstance(x1, y, z1, 1.1);

      // Strand 2 Position (180 deg offset)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      addSphereInstance(x2, y, z2, 1.1);

      // Add rungs connecting strands at intervals
      if (i % rungsInterval === 0) {
        for (let r = 1; r <= spheresPerRung; r++) {
          const t = r / (spheresPerRung + 1);
          const rx = x1 + (x2 - x1) * t;
          const ry = y;
          const rz = z1 + (z2 - z1) * t;
          addSphereInstance(rx, ry, rz, 0.85);
        }
      }
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    dnaGroup.add(instancedMesh);

    // Initial DNA Group Rotation & Tilt to match image layout
    dnaGroup.rotation.z = -0.35;
    dnaGroup.rotation.x = 0.2;
    dnaGroup.position.set(-4, 0, 0);

    // 6. Interactive Mouse & Scroll Listener
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let scrollSpeed = 0;
    const handleScroll = () => {
      scrollSpeed += 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 7. Resize Listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous base rotation
      dnaGroup.rotation.y = elapsedTime * 0.25 + scrollSpeed;
      dnaGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.7;

      // Decay scroll speed back to zero
      scrollSpeed *= 0.94;

      // Mouse Parallax Lerp
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.3;

      dnaGroup.rotation.y += (targetRotationY - dnaGroup.rotation.y) * 0.05;
      dnaGroup.rotation.x += (targetRotationX + 0.2 - dnaGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      instancedMesh.geometry.dispose();
      sphereMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ minHeight: '100vh' }}
    />
  );
}
