"use client";

import { AnimatedSection } from "./AnimatedSection";

const proyectos = [
  { nombre: "TechFlow", descripcion: "Plataforma de automatización para empresas SaaS", metricas: "$2M ARR", color: "from-[#5419CB] to-[#2E0F70]" },
  { nombre: "GreenPay", descripcion: "Sistema de pagos sostenibles", metricas: "50K usuarios", color: "from-[#C4A7E3] to-[#5419CB]" },
  { nombre: "DocuSign Pro", descripcion: "Firma digital biométrica", metricas: "Premio 2024", color: "from-[#2E0F70] to-[#5419CB]" },
];

export function Proyectos() {
  return (
    <section id="proyectos-destacados" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm">NUESTRO TRABAJO</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 font-[family-name:var(--font-montserrat)]">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto">
              Startups que hemos creado o acompañado en su camino al éxito
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <AnimatedSection key={proyecto.nombre} delay={index * 150}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5419CB] to-[#C4A7E3] rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative glass-card rounded-3xl overflow-hidden hover:-translate-y-4 transition-all duration-500">
                  <div className={`h-56 bg-gradient-to-br ${proyecto.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 animate-shimmer" />
                    <span className="text-6xl font-bold text-white/30 group-hover:scale-125 transition-transform duration-500">{proyecto.nombre.charAt(0)}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C12]/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-montserrat)] group-hover:text-[#C4A7E3] transition-colors duration-300">
                      {proyecto.nombre}
                    </h3>
                    <p className="text-white/50 mb-4">{proyecto.descripcion}</p>
                    <div className="inline-block bg-[#5419CB]/30 text-[#C4A7E3] px-4 py-2 rounded-full font-semibold group-hover:bg-[#C4A7E3] group-hover:text-[#0D0C12] transition-all duration-300">
                      {proyecto.metricas}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}