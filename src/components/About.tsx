/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Compass, Anchor } from "lucide-react";
import { ABOUT_LODGE_IMAGE } from "../data";

export default function About() {
  const checkItems = [
    { title: "Cisza i spokój", desc: "Sferyczne wyciszenie i ucieczka od szumu" },
    { title: "Natura", desc: "Pierwotny las i najczystszy akwen wodny w okolicy" },
    { title: "Świeże ryby", desc: "Złowione o świcie, przyrządzone według tradycji" },
    { title: "Niezapomniane widoki", desc: "Najpiękniejsze zachody słońca wprost z tarasu" }
  ];

  return (
    <section 
      id="o-nas" 
      className="relative py-24 sm:py-32 bg-[#120e0c]/95 overflow-hidden"
    >
      {/* Decorative vertical texts */}
      <div className="absolute top-20 right-8 uppercase text-[10px] tracking-[0.4em] font-mono text-[#c2a176]/10 writing-mode-vertical select-none">
        RUSTYKALNY KOMFORT & ECO LUKSUS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Elegant Images Frame with Floating Badges */}
          <div className="lg:col-span-6 relative group">
            
            {/* Background design elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#162e24]/60 to-transparent blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Picture Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c2a176]/15 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={ABOUT_LODGE_IMAGE}
                alt="Taras widokowy Gościńca SIEJA"
                className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              {/* Dynamic Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120e0c]/60 to-transparent"></div>
            </div>

            {/* Overlapping Floating Luxury Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#162e24]/90 backdrop-blur-md px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border border-[#c2a176]/30 shadow-2xl animate-pulse-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c2a176]/15 flex items-center justify-center border border-[#c2a176]/30">
                  <Anchor className="w-6 h-6 text-[#c2a176]" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#dfc8af]/80">Linia Brzegowa</span>
                  <span className="block font-serif text-lg sm:text-xl font-bold text-[#f4efe9]">Bezpośrednio nad wodą</span>
                </div>
              </div>
            </div>

            {/* Minor decorative floating badge */}
            <div className="hidden sm:flex absolute -top-6 -left-6 bg-[#372a24]/90 backdrop-blur-md p-4 rounded-xl border border-[#c2a176]/10 shadow-lg items-center gap-3">
              <Compass className="w-5 h-5 text-[#c2a176] animate-spin-slow" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#dfc8af]/80">Oaza Wędkarza</span>
            </div>

          </div>

          {/* Right Side: Copy & Custom Checklist Container */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold mb-4 text-left">
              Odkryj Naszą Historię
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none mb-8 text-left">
              O Gościńcu <span className="font-serif-italic font-normal text-[#c2a176]">SIEJA</span>
            </h2>

            <div className="space-y-6 text-[#f4efe9]/80 text-base sm:text-lg font-sans font-light leading-relaxed mb-10 text-left">
              <p>
                Serdecznie zapraszamy do naszego Gościńca. To wyjątkowe miejsce stworzone z myślą o wędkarzach, rodzinach oraz wszystkich osobach ceniących spokój i kontakt z naturą.
              </p>
              <p>
                Otoczenie jeziora, lasów i świeżego powietrza sprawia, że każdy może tutaj odpocząć od codzienności i spędzić czas w wyjątkowej atmosferze, łączącej tradycyjną gościnność ze współczesną wygodą.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {checkItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#211915]/40 border border-[#c2a176]/5 hover:border-[#c2a176]/20 transition-colors duration-300 group/item"
                >
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#162e24] border border-[#c2a176]/40 text-[#c2a176] group-hover/item:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-[#f4efe9] font-bold tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#f4efe9]/60 font-sans mt-0.5 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
