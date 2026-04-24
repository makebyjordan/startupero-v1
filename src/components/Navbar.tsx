"use client";

import Image from "next/image";

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
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D0C12]/90 backdrop-blur-xl shadow-2xl shadow-[#5419CB]/20 py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/startupero-logo.png" alt="STARTUPERO" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-[#C4A7E3] font-[family-name:var(--font-montserrat)] relative z-10">STARTUPERO</span>
          <span className="absolute inset-0 bg-[#C4A7E3] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </a>
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
      </div>
    </nav>
  );
}