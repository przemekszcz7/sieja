/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Compass } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Map() {
  return (
    <section 
      id="dojazd" 
      className="relative bg-wood-pattern overflow-hidden flex flex-col pt-24"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
          Lokalizacja nad Jeziorem
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
          Jak do nas trafić?
        </h2>
        <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6 mb-6"></div>
        <p className="text-sm text-[#f4efe9]/60 font-sans font-light flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-[#c2a176] shrink-0" />
          <span>Województwo Lubuskie, Ługi 30, 66-520 Dobiegniew</span>
        </p>
      </div>

      {/* Map Embed Frame - Full Width, min 550px height */}
      <div className="relative w-full h-[550px] sm:h-[600px] border-t border-b border-[#c2a176]/20 bg-[#120e0c]/90">
        
        {/* Absolute floating guide card on desktop */}
        <div className="hidden lg:block absolute top-8 left-12 z-10 p-6 rounded-2xl glass-panel max-w-sm pointer-events-auto shadow-2xl border border-[#c2a176]/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#162e24] flex items-center justify-center border border-[#c2a176]/30 text-[#c2a176] shrink-0">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div className="text-left">
              <h4 className="font-serif text-lg font-bold text-[#f4efe9]">Gościniec SIEJA</h4>
              <p className="text-xs text-[#f4efe9]/70 font-sans font-style-light mt-1.5 leading-relaxed">
                Położony malowniczo wśród zielonych lasów i krystalicznych jezior Dojrzewa. Łatwy dojazd samochodem prosto z drogi krajowej.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Iframe */}
        <iframe
          id="google-maps-iframe"
          title="Lokalizacja Gościniec Wędkarski SIEJA"
          src={CONTACT_INFO.mapUrl}
          className="w-full h-full border-0 filter brightness-[0.88] contrast-[1.03] saturate-[0.9] hover:filter-none transition-all duration-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  );
}
