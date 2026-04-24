"use client";

import { AnimatedSection } from "./AnimatedSection";

const procesos = [
  { numero: "01", titulo: "Descubrimiento", descripcion: "Analizamos tu idea, mercado y competencia para validar la viabilidad." },
  { numero: "02", titulo: "Diseño", descripcion: "Creamos el MVP, definimos el modelo de negocio y ensamblamos el equipo fundador." },
  { numero: "03", titulo: "Lanzamiento", descripcion: "Ejecutamos el go-to-market, captamos primeros usuarios e iteramos." },
  { numero: "04", titulo: "Crecimiento", descripcion: "Escalamos con inversión, partnerships y expansión a nuevos mercados." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-32 bg-[#2E0F70]/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm">PROCESO</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 font-[family-name:var(--font-montserrat)]">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto">
              Un proceso probado en 4 etapas para convertir tu idea en una startup exitosa
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-4 gap-6">
          {procesos.map((proceso, index) => (
            <AnimatedSection key={proceso.numero} delay={index * 100}>
              <div className="relative group">
                <div className="glass-card p-8 rounded-3xl h-full transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5419CB]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-7xl font-bold text-[#5419CB]/40 group-hover:text-[#C4A7E3]/60 transition-colors duration-500">{proceso.numero}</span>
                  <h3 className="text-xl font-bold text-white mt-6 mb-3 font-[family-name:var(--font-montserrat)] group-hover:text-[#C4A7E3] transition-colors duration-300">
                    {proceso.titulo}
                  </h3>
                  <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300">{proceso.descripcion}</p>
                </div>
                {index < procesos.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8 text-[#C4A7E3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}