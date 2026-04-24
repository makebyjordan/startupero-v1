"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const proyectos = [
  {
    nombre: "InteligenciaSevilla",
    descripcion: "Consultora especializada en IA para empresas.",
    metricas: "$2M ARR",
    color: "from-[#5419CB] to-[#2E0F70]",
    link: "https://ejemplo.com",
    imagen: "https://iili.io/BqUBw6F.png",
  },
  {
    nombre: "GreenPay",
    descripcion: "Sistema de pagos sostenibles para e-commerce con cero emisiones de carbono",
    metricas: "50K usuarios",
    color: "from-[#C4A7E3] to-[#5419CB]",
    link: "https://ejemplo.com",
    imagen: "",
  },
  {
    nombre: "DocuSign Pro",
    descripcion: "Firma digital con verificación biométrica de última generación",
    metricas: "Premio 2024",
    color: "from-[#2E0F70] to-[#5419CB]",
    link: "https://ejemplo.com",
    imagen: "",
  },
  {
    nombre: "DataMind",
    descripcion: "Inteligencia artificial para análisis predictivo de negocios",
    metricas: "$5M ARR",
    color: "from-[#5419CB] to-[#C4A7E3]",
    link: "https://ejemplo.com",
    imagen: "",
  },
  {
    nombre: "CloudScale",
    descripcion: "Infraestructura cloud optimizada para startups en crecimiento",
    metricas: "200+ empresas",
    color: "from-[#2E0F70] to-[#5419CB]",
    link: "https://ejemplo.com",
    imagen: "",
  },
  {
    nombre: "SecureAuth",
    descripcion: "Autenticación biométrica multibiometrica para fintech",
    metricas: "1M+ usuarios",
    color: "from-[#C4A7E3] to-[#2E0F70]",
    link: "https://ejemplo.com",
    imagen: "",
  },
];

const proyectosData = [
  {
    nombre: "TechFlow",
    descripcion: "Plataforma de automatización para empresas SaaS",
    metricas: "$2M ARR",
    color: "from-[#5419CB] to-[#2E0F70]",
    link: "#",
  },
  {
    nombre: "GreenPay",
    descripcion: "Sistema de pagos sostenibles",
    metricas: "50K usuarios",
    color: "from-[#C4A7E3] to-[#5419CB]",
    link: "#",
  },
  {
    nombre: "DocuSign Pro",
    descripcion: "Firma digital biométrica",
    metricas: "Premio 2024",
    color: "from-[#2E0F70] to-[#5419CB]",
    link: "#",
  },
];

export default function ProyectosPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#0D0C12] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5419CB]/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C4A7E3]/15 rounded-full blur-[100px] animate-float animation-delay-200" />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D0C12]/90 backdrop-blur-xl shadow-2xl shadow-[#5419CB]/20 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/startupero-logo.png" alt="STARTUPERO" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-[#C4A7E3] font-[family-name:var(--font-montserrat)]">STARTUPERO</span>
          </Link>
          <Link href="/" className="bg-[#5419CB] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#C4A7E3] transition-all duration-300">
            Volver al inicio
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm">NUESTRO TRABAJO</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 font-[family-name:var(--font-montserrat)]">
              Proyectos
            </h1>
            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto">
              Conoce todas las startups que hemos creado o acompanhado en su camino al éxito
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <div key={proyecto.nombre} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5419CB] to-[#C4A7E3] rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative glass-card rounded-3xl overflow-hidden hover:-translate-y-4 transition-all duration-500">
                  <div className={`h-56 bg-gradient-to-br ${proyecto.color} flex items-center justify-center relative overflow-hidden`}>
                    {proyecto.imagen ? (
                      <Image
                        src={proyecto.imagen}
                        alt={proyecto.nombre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-white/10 animate-shimmer" />
                        <span className="text-6xl font-bold text-white/30 group-hover:scale-125 transition-transform duration-500">{proyecto.nombre.charAt(0)}</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C12]/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-montserrat)] group-hover:text-[#C4A7E3] transition-colors duration-300">
                      {proyecto.nombre}
                    </h3>
                    <p className="text-white/50 mb-4">{proyecto.descripcion}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-block bg-[#5419CB]/30 text-[#C4A7E3] px-4 py-2 rounded-full font-semibold">
                        {proyecto.metricas}
                      </div>
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-[#C4A7E3] transition-colors duration-300"
                      >
                        Visitar
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0D0C12] text-white py-12 border-t border-[#5419CB]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm">© 2026 STARTUPERO. Proyecto de <a href="https://www.inteligenciasevilla.com/" target="_blank" rel="noopener noreferrer" className="text-[#C4A7E3] hover:text-white transition-colors">INTELIGENCIA SEVILLA</a></p>
        </div>
      </footer>
    </main>
  );
}