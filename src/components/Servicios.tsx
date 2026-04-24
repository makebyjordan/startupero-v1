"use client";

import { AnimatedSection } from "./AnimatedSection";
import { CardHover } from "./CardHover";

const servicios = [
  {
    titulo: "Creación de Startups Propias",
    descripcion: "Diseñamos, validamos y lanzamos startups innovadoras con equipos talentosos y modelos de negocio escalables.",
    icon: "rocket",
  },
  {
    titulo: "Asistencia para Startups",
    descripcion: "Acompañamos a emprendedores en todas las fases: desde la ideación hasta el scaling, con mentoría estratégica y execution.",
    icon: "users",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm"> NUESTROS SERVICIOS</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 font-[family-name:var(--font-montserrat)]">
              ¿Cómo te ayudamos?
            </h2>
            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto">
              Soluciones integrales para emprendedores que quieren crear o hacer crecer su startup
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <AnimatedSection key={servicio.titulo} delay={index * 150}>
              <CardHover>
                <div className="glass-card p-12 rounded-3xl h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5419CB]/30 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5419CB] to-[#C4A7E3] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      {servicio.icon === "rocket" ? (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
                      {servicio.titulo}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">{servicio.descripcion}</p>
                  </div>
                </div>
              </CardHover>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}