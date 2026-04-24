"use client";

import Image from "next/image";

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Proyectos Destacados", href: "#proyectos-destacados" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const redesSociales = [
  { nombre: "LinkedIn", url: "#" },
  { nombre: "Twitter", url: "#" },
  { nombre: "Instagram", url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D0C12] text-white py-16 border-t border-[#5419CB]/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Image src="/startupero-logo.png" alt="STARTUPERO" width={50} height={50} className="w-12 h-12" />
              <h3 className="text-3xl font-bold text-[#C4A7E3] font-[family-name:var(--font-montserrat)]">STARTUPERO</h3>
            </a>
            <p className="text-white/50 mb-6 max-w-sm">
              Transformamos ideas en empresas exitosas. Únete a la revolución emprendedora.
            </p>
            <div className="flex gap-4">
              {redesSociales.map((red) => (
                <a key={red.nombre} href={red.url} className="w-12 h-12 bg-[#2E0F70]/40 rounded-full flex items-center justify-center hover:bg-[#5419CB] hover:scale-110 transition-all duration-300">
                  <span className="sr-only">{red.nombre}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C4A7E3]">Navegación</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/50 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C4A7E3]">Newsletter</h4>
            <p className="text-white/50 mb-4">
              Recibe las últimas noticias sobre startups.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-full bg-[#2E0F70]/40 border border-[#5419CB]/30 outline-none focus:border-[#C4A7E3] transition-colors text-white placeholder:text-white/30 text-sm"
              />
              <button type="submit" className="bg-[#5419CB] px-4 py-2 rounded-full hover:scale-110 transition-transform">
                →
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#5419CB]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/30 text-sm">© 2026 STARTUPERO. Proyecto de <a href="https://www.inteligenciasevilla.com/" target="_blank" rel="noopener noreferrer" className="text-[#C4A7E3] hover:text-white transition-colors">INTELIGENCIA SEVILLA</a> - Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Privacidad</a>
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}