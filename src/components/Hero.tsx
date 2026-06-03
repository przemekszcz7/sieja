/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import { HERO_BACKGROUND, CONTACT_INFO } from "../data";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phoneRaw}`;
  };

  const handleGoToMap = () => {
    const mapSection = document.getElementById("dojazd");
    if (mapSection) {
      const headerOffset = 90;
      const elementPosition = mapSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("dlaczego-my");
    if (nextSection) {
      const headerOffset = 90;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#120e0c]"
    >
      {/* Parallax Background Container */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] left-0 transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
        }}
      >
        <img
          src={HERO_BACKGROUND}
          alt="Gościniec Wędkarski SIEJA nad Jeziorem"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
          loading="eager"
        />
        {/* Dark elegant overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0c] via-[#120e0c]/40 to-[#120e0c]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#120e0c]/50 via-transparent to-[#120e0c]/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 flex flex-col items-center">
        {/* Subtitle Accent */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#162e24]/75 border border-[#c2a176]/30 backdrop-blur-sm animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c2a176] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#dfc8af]">Oaza Spokoju i Natury</span>
        </div>

        {/* Large Decorative Title */}
        <h1 
          className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#f4efe9] leading-none mb-6 drop-shadow-2xl selection:bg-[#c2a176] select-none animate-fade-in opacity-0"
          style={{ animationDelay: "450ms" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#f4efe9] via-[#f4efe9] to-[#d8cca9]">GOŚCINIEC</span>
          <span className="block font-serif-italic font-normal tracking-wide text-[#c2a176] text-3xl sm:text-5xl md:text-7xl mt-1 sm:mt-2">Wędkarski Sieja</span>
        </h1>

        {/* Short atmospheric description */}
        <p 
          className="text-base sm:text-xl text-[#f4efe9]/80 font-sans font-light max-w-2xl leading-relaxed mb-10 text-shadow-md animate-fade-in opacity-0"
          style={{ animationDelay: "700ms" }}
        >
          „Miejsce stworzone dla wędkarzy. Cisza, spokój, natura i wyjątkowe smaki nad samym jeziorem.”
        </p>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0 animate-fade-in opacity-0"
          style={{ animationDelay: "950ms" }}
        >
          {/* Call button */}
          <button
            id="hero-call-button"
            onClick={handleCall}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#244437] to-[#162e24] text-[#f4efe9] font-mono text-sm uppercase tracking-wider border border-[#c2a176]/40 cursor-pointer overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[#162e24]/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#c2a176]/20 to-transparent transform -translateX-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Phone className="w-4 h-4 text-[#c2a176] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold tracking-widest">Zadzwoń teraz</span>
          </button>

          {/* Map location button */}
          <button
            id="hero-map-button"
            onClick={handleGoToMap}
            className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-xl bg-[#211915]/60 hover:bg-[#372a24]/80 text-[#f4efe9] font-mono text-sm uppercase tracking-wider border border-[#c2a176]/25 hover:border-[#c2a176]/50 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="w-4 h-4 text-[#c2a176] group-hover:translate-y-0.5 transition-transform duration-300" />
            <span>Jak do nas trafić</span>
          </button>
        </div>
      </div>

      {/* Ambient bottom fade and scroll down button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#f4efe9]/40 font-mono font-medium">Przewiń</span>
        <button
          id="hero-scroll-trigger"
          onClick={handleScrollDown}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#f4efe9]/15 bg-[#120e0c]/50 hover:bg-[#244437] hover:border-[#c2a176]/40 text-[#f4efe9] hover:text-[#c2a176] transition-all duration-300 shadow-lg cursor-pointer animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Elegant side elements representing quiet high-end design */}
      <div className="hidden xl:flex absolute bottom-12 left-12 flex-col gap-6 text-[#f4efe9]/40 font-mono text-[10px] tracking-widest uppercase">
        <span className="writing-mode-vertical">66-520 Dobiegniew</span>
        <span className="h-10 w-[1px] bg-[#f4efe9]/20 self-center"></span>
        <span className="writing-mode-vertical">Ługi 30</span>
      </div>

      <div className="hidden xl:flex absolute bottom-12 right-12 flex-col gap-6 text-[#f4efe9]/40 font-mono text-[10px] tracking-widest uppercase items-center">
        <span className="writing-mode-vertical">Gościnność i Pasja</span>
        <span className="h-10 w-[1px] bg-[#f4efe9]/20"></span>
        <span className="writing-mode-vertical">Poczuj Jezioro</span>
      </div>
    </section>
  );
}
