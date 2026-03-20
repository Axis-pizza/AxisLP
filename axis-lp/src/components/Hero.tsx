"use client";

import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/* 3D BACKGROUND                                                               */
/* -------------------------------------------------------------------------- */
const TOKENS = ["SOL", "BTC", "ETH", "USDC", "JUP", "AXIS"];
const COINS_PER_TOKEN = 25; // reduced from 50 for better mobile perf
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
  ctx.font = `bold ${symbol.length >= 4 ? "56" : "72"}px "Times New Roman", serif`;
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

    const sideMat = new THREE.MeshStandardMaterial({
      color: GOLD_CORE,
      metalness: 1.0,
      roughness: 0.3,
    });
    const faceMat = new THREE.MeshStandardMaterial({
      map: faceTex,
      metalness: 0.8,
      roughness: 0.4,
    });
    const mats = [sideMat, faceMat, faceMat];

    const data = Array.from({ length: COINS_PER_TOKEN }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * FIELD_SIZE,
        (Math.random() - 0.5) * FIELD_SIZE,
        (Math.random() - 0.5) * FIELD_DEPTH - 2
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005 + 0.002,
        (Math.random() - 0.5) * 0.005
      ),
      rotSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      rotation: new THREE.Vector3(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      ),
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

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, materials, COINS_PER_TOKEN]}
      castShadow
      receiveShadow
    />
  );
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

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 2]}
      color="#FFE4B8"
      distance={10}
      decay={1.5}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} color="#C8D4E0" />
      <directionalLight
        position={[4, 5, 4]}
        intensity={1.5}
        color="#C77D36"
        castShadow
      />
      <SweepLight />
      {TOKENS.map((token) => (
        <TokenSwarm key={token} symbol={token} />
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO SECTION                                                                */
/* -------------------------------------------------------------------------- */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
        {/* Translucent overlay to soften the 3D background */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl mx-auto pt-20 pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.9] tracking-[-0.04em] text-white mb-8 drop-shadow-2xl"
        >
          Your idea.
          <br />
          <span className="text-gold-gradient italic font-normal pr-4">
            Your ETF.
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-normal text-white/50 tracking-wide mb-16 max-w-2xl"
        >
          The first onchain index funds. Build, manage, and scale your index
          fund in seconds.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.75,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a
            href="https://axs.pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass"
          >
            Launch App
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
