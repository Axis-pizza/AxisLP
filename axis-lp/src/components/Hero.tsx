"use client";

import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/* 3D BACKGROUND (kept but toned down)                                         */
/* -------------------------------------------------------------------------- */
const TOKENS = ["SOL", "BTC", "ETH", "USDC", "JUP", "AXIS"];
const COINS_PER_TOKEN = 20;
const FIELD_SIZE = 10;
const FIELD_DEPTH = 5;
const GOLD_CORE = "#C77D36";
const GOLD_DARK = "#3D1A08";

function createCoinTexture(symbol: string) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = GOLD_CORE;
  ctx.fillRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
  ctx.strokeStyle = GOLD_DARK;
  ctx.lineWidth = 12;
  ctx.stroke();
  ctx.fillStyle = GOLD_DARK;
  ctx.font = `bold ${symbol.length >= 4 ? "56" : "72"}px "Inter", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbol, size / 2, size / 2 + 5);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
}

function TokenSwarm({ symbol }: { symbol: string }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { geometry, materials, motionData } = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.18, 0.18, 0.04, 32);
    geo.rotateX(Math.PI / 2);
    const faceTex = createCoinTexture(symbol);
    const sideMat = new THREE.MeshStandardMaterial({ color: GOLD_CORE, metalness: 1.0, roughness: 0.3 });
    const faceMat = new THREE.MeshStandardMaterial({ map: faceTex, metalness: 0.8, roughness: 0.4 });
    const mats = [sideMat, faceMat, faceMat];
    const data = Array.from({ length: COINS_PER_TOKEN }, () => ({
      pos: new THREE.Vector3((Math.random() - 0.5) * FIELD_SIZE, (Math.random() - 0.5) * FIELD_SIZE, (Math.random() - 0.5) * FIELD_DEPTH - 2),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005 + 0.002, (Math.random() - 0.5) * 0.005),
      rotSpeed: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02),
      rotation: new THREE.Vector3(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2),
    }));
    return { geometry: geo, materials: mats, motionData: data };
  }, [symbol]);

  useFrame(() => {
    if (!meshRef.current) return;
    motionData.forEach((data, i) => {
      data.pos.add(data.velocity);
      if (data.pos.y > FIELD_SIZE / 2) data.pos.y = -FIELD_SIZE / 2;
      if (data.pos.y < -FIELD_SIZE / 2) data.pos.y = FIELD_SIZE / 2;
      if (data.pos.x > FIELD_SIZE / 2) data.pos.x = -FIELD_SIZE / 2;
      if (data.pos.x < -FIELD_SIZE / 2) data.pos.x = FIELD_SIZE / 2;
      data.rotation.add(data.rotSpeed);
      dummy.position.copy(data.pos);
      dummy.rotation.set(data.rotation.x, data.rotation.y, data.rotation.z);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, materials, COINS_PER_TOKEN]} castShadow receiveShadow />;
}

function SweepLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const t = clock.getElapsedTime();
    lightRef.current.position.x = Math.sin(t * 0.4) * 5;
    lightRef.current.position.y = Math.cos(t * 0.6) * 1.5 + 1.0;
    lightRef.current.intensity = 3.0 + Math.sin(t * 2) * 1.5;
  });
  return <pointLight ref={lightRef} position={[0, 0, 2]} color="#FFE4B8" distance={10} decay={1.5} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} color="#C8D4E0" />
      <directionalLight position={[4, 5, 4]} intensity={1.5} color="#C77D36" castShadow />
      <SweepLight />
      {TOKENS.map((token) => <TokenSwarm key={token} symbol={token} />)}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                        */
/* -------------------------------------------------------------------------- */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5.0], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>

      {/* Subtle gold radial glow behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#D97706]/[0.07] blur-[120px] pointer-events-none z-[1]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-3xl mx-auto pt-20 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCD34D]" />
          <span className="text-[#FCD34D] text-xs font-semibold tracking-tight">Live on Solana</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-sans font-black text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.04em] text-white mb-5"
        >
          Your idea.
          <br />
          <span className="text-gold-gradient italic">Your ETF.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-white/50 tracking-tight mb-10 max-w-lg"
        >
          The first onchain index funds. Build, manage, and scale your index fund in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex gap-3"
        >
          <a href="https://axs.pizza" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Launch App
          </a>
          <a href="https://muse-7.gitbook.io/axis/product-docs" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Read Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
