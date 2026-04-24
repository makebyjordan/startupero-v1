"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Proyectos } from "@/components/Proyectos";
import { SobreNosotros } from "@/components/SobreNosotros";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#0D0C12] overflow-hidden">
      <Background />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Servicios />
      <ComoFunciona />
      <Proyectos />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}