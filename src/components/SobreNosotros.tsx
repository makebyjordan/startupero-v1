"use client";

import { AnimatedSection } from "./AnimatedSection";

export function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-32 bg-gradient-to-b from-[#2E0F70]/20 to-[#0D0C12] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#C4A7E3] font-semibold tracking-widest uppercase text-sm">SOBRE NOSOTROS</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-8 font-[family-name:var(--font-montserrat)]">
                Nuestra Historia
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                STARTUPERO nació de la pasión por la innovación y el emprendimiento. Fundado por un equipo de emprendedores con décadas de experiencia, creemos que cada gran empresa empieza con una idea y la determinación de hacerla realidad.
              </p>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Nuestra misión es democratizar el acceso a los recursos, conocimiento y conexiones que convierten una startup en una empresaicornia.
              </p>
              <div className="flex gap-10">
                <div className="relative">
                  <span className="text-5xl font-bold text-[#C4A7E3]">50+</span>
                  <p className="text-white/50 mt-2">Startups creadas</p>
                  <div className="absolute -inset-4 bg-[#C4A7E3]/10 rounded-full blur-lg" />
                </div>
                <div className="relative">
                  <span className="text-5xl font-bold text-[#5419CB]">$100M+</span>
                  <p className="text-white/50 mt-2">Valor generado</p>
                  <div className="absolute -inset-4 bg-[#5419CB]/10 rounded-full blur-lg" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5419CB] to-[#C4A7E3] rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative glass-card rounded-3xl p-10 border border-[#5419CB]/30">
                <h3 className="text-2xl font-bold text-white mb-8 font-[family-name:var(--font-montserrat)]">
                  Nuestro Equipo
                </h3>
                <ul className="space-y-5">
                  {[
                    "Fundadores con 3 exits exitosos",
                    "Mentores de YC y Sequoia",
                    "Red global de inversores",
                    "Experts en growth y product",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 group">
                      <span className="w-10 h-10 rounded-full bg-[#5419CB]/30 flex items-center justify-center text-[#C4A7E3] group-hover:bg-[#C4A7E3] group-hover:text-[#0D0C12] transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-white/70 group-hover:text-white transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}