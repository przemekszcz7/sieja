/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Facebook, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer 
      id="premium-footer" 
      className="relative bg-wood-dark pt-16 pb-8 border-t border-[#c2a176]/15 text-[#f4efe9]/80 overflow-hidden"
    >
      {/* Decorative vertical gold border lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-[#c2a176]/15 via-transparent to-transparent hidden xl:block"></div>
      
      {/* Wooden texture filter reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0807]/90 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-[#f4efe9]/5">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            
            {/* Visual Logo */}
            <div className="flex items-center mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-[#f4efe9]">
                  SIEJA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#c2a176]">
                  Gościniec Wędkarski
                </span>
              </div>
            </div>

            <p className="text-sm font-sans font-light leading-relaxed text-[#f4efe9]/65 max-w-sm mb-6">
              Niezwykłe miejsce urządzone w duchu rustykalnego luksusu nad samym jeziorem w otoczeniu czystych lasów. Stworzone z miłości do wędkarstwa, wybitnego jedzenia i spokoju.
            </p>

            {/* Facebook shortcut */}
            <div className="flex items-center gap-4">
              <a
                id="footer-facebook-anchor"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#211915] hover:bg-[#244437] border border-[#c2a176]/15 hover:border-[#c2a176]/45 flex items-center justify-center text-[#f4efe9] hover:text-[#c2a176] transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif text-lg font-bold text-[#c2a176] mb-5 tracking-tight">
              Szybka nawigacja
            </h4>
            <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
              <a href="#o-nas" onClick={(e) => handleLinkScroll(e, "#o-nas")} className="hover:text-[#c2a176] transition-colors">O nas</a>
              <a href="#dlaczego-my" onClick={(e) => handleLinkScroll(e, "#dlaczego-my")} className="hover:text-[#c2a176] transition-colors">Atuty obiektu</a>
              <a href="#galeria" onClick={(e) => handleLinkScroll(e, "#galeria")} className="hover:text-[#c2a176] transition-colors">Galeria zdjęć</a>
              <a href="#nasze-smaki" onClick={(e) => handleLinkScroll(e, "#nasze-smaki")} className="hover:text-[#c2a176] transition-colors">Kuchnia i Menu</a>
              <a href="#opinie" onClick={(e) => handleLinkScroll(e, "#opinie")} className="hover:text-[#c2a176] transition-colors">Opinie gości</a>
              <a href="#godziny" onClick={(e) => handleLinkScroll(e, "#godziny")} className="hover:text-[#c2a176] transition-colors">Godziny otwarcia</a>
            </nav>
          </div>

          {/* Column 3: Contact details review */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-serif text-lg font-bold text-[#c2a176] mb-5 tracking-tight">
              Siedziba & Kontakt
            </h4>
            
            <div className="flex flex-col gap-4 text-sm font-sans font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c2a176] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#f4efe9]">Gościniec SIEJA</p>
                  <p className="text-xs text-[#f4efe9]/65">Ługi 30, 66-520 Dobiegniew</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c2a176] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-[#c2a176] transition-colors">{CONTACT_INFO.phone}</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c2a176] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#c2a176] transition-colors text-xs">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom panel */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
          
          <div className="text-left">
            <p className="text-xs font-mono text-[#f4efe9]/40 tracking-wider">
              &copy; {currentYear} Gościniec Wędkarski SIEJA. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-[10px] text-[#f4efe9]/30 font-mono mt-1 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#244437]" /> Projekt Premium • Eco-Design nad Jeziorem
            </p>
          </div>

          {/* Back to top dynamic scroll button */}
          <button
            id="back-to-top-button"
            onClick={handleScrollToTop}
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#211915] hover:bg-[#244437] text-[#f4efe9] hover:text-[#c2a176] border border-[#f4efe9]/10 hover:border-[#c2a176]/45 cursor-pointer shadow-lg transition-all"
            aria-label="Wróć na górę"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
