"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Contacto() {
  return (
    <section id="contacto" className="py-32 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E0F70]/10 to-transparent" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm">CONTACTO</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 font-[family-name:var(--font-montserrat)]">
            ¿Listo para lanzar tu startup?
          </h2>
          <p className="text-lg text-white/50 mb-12">
            Reserva tu consulta gratuita de 30 minutos. Analizaremos tu idea y te mostraremos el camino hacia el éxito.
          </p>
          <form className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Tu nombre" 
                className="w-full px-6 py-4 rounded-full bg-[#2E0F70]/20 border-2 border-[#5419CB]/30 focus:border-[#C4A7E3] outline-none transition-all text-white placeholder:text-white/30" 
              />
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full px-6 py-4 rounded-full bg-[#2E0F70]/20 border-2 border-[#5419CB]/30 focus:border-[#C4A7E3] outline-none transition-all text-white placeholder:text-white/30" 
              />
            </div>
            <textarea 
              placeholder="Cuéntanos tu idea..." 
              rows={4} 
              className="w-full px-6 py-4 rounded-3xl bg-[#2E0F70]/20 border-2 border-[#5419CB]/30 focus:border-[#C4A7E3] outline-none transition-all resize-none text-white placeholder:text-white/30" 
            />
            <button 
              type="submit" 
              className="w-full group bg-gradient-to-r from-[#5419CB] to-[#C4A7E3] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#C4A7E3]/30 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Reservar Consulta Gratuita</span>
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}