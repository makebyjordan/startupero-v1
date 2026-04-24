"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 bg-[#5419CB]/20 border border-[#5419CB]/40 px-5 py-2 rounded-full text-sm font-semibold text-[#C4A7E3] mb-8 animate-pulse-glow">
            <span className="w-2 h-2 bg-[#C4A7E3] rounded-full animate-pulse" />
            Transformamos ideas en empresas exitosas
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
            Creamos el <span className="animate-text-gradient">futuro</span>
            <br />
            de los negocios
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-10 font-[family-name:var(--font-open-sans)] leading-relaxed">
            En STARTUPERO transformamos ideas brillantes en startups exitosas.
            <span className="text-[#C4A7E3]">También ayudarte a hacer realidad tu visión empresarial.</span>
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="group relative inline-flex bg-[#5419CB] text-white px-10 py-4 rounded-full text-lg font-semibold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#C4A7E3] to-[#5419CB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Reserva Consulta Gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a href="/proyectos" className="inline-flex bg-white/5 text-white border-2 border-white/20 px-10 py-4 rounded-full text-lg font-semibold hover:border-[#C4A7E3] hover:text-[#C4A7E3] transition-all duration-300 backdrop-blur-sm">
              Ver Proyectos
            </a>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}