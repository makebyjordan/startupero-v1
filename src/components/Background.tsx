"use client";

import { useEffect, useState } from "react";

export function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const x = (mousePos.x / window.innerWidth - 0.5) * 20;
  const y = (mousePos.y / window.innerHeight - 0.5) * 20;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ transform: `translate(${x}px, ${y}px)`, transition: "transform 0.2s ease-out" }}
    >
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5419CB]/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C4A7E3]/15 rounded-full blur-[100px] animate-float animation-delay-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2E0F70]/10 rounded-full blur-[150px]" />
    </div>
  );
}