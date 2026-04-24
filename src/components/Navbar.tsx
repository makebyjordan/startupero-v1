"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface NavbarProps {
  scrolled: boolean;
}

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Proyectos Destacados", href: "#proyectos-destacados" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar({ scrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMobileMenuOpen ? "bg-[#0D0C12]/90 backdrop-blur-xl shadow-2xl shadow-[#5419CB]/20 py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/startupero-logo.png" alt="STARTUPERO" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-[#C4A7E3] font-[family-name:var(--font-montserrat)] relative z-10">STARTUPERO</span>
          <span className="absolute inset-0 bg-[#C4A7E3] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </a>
        
        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-white/70 hover:text-[#C4A7E3] transition-all duration-300 hover:scale-105 font-medium relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4A7E3] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <a href="#contacto" className="hidden md:inline-flex bg-[#5419CB] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#C4A7E3] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#5419CB]/30 hover:shadow-[#C4A7E3]/40">
          Reserva Consulta
        </a>

        {/* Botón Menú Móvil */}
        <button 
          className="md:hidden text-white/90 hover:text-[#C4A7E3] focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full h-[100vh] bg-[#0D0C12]/95 backdrop-blur-3xl flex flex-col items-center justify-start pt-16 gap-8 border-t border-white/5 transition-all duration-500 origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        {navigation.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/80 hover:text-[#C4A7E3] text-2xl font-medium transition-all duration-300 transform hover:scale-110"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contacto" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-6 bg-[#5419CB] text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-[#C4A7E3] transition-all duration-300 shadow-lg shadow-[#5419CB]/30"
        >
          Reserva Consulta
        </a>
      </div>
    </nav>
  );
}