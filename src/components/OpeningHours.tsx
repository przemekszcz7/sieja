/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock } from "lucide-react";
import { OPENING_HOURS } from "../data";

export default function OpeningHours() {
  return (
    <section 
      id="godziny" 
      className="relative py-24 sm:py-32 bg-wood-pattern overflow-hidden"
    >
      {/* Decorative vertical texts */}
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#c2a176]/10 via-transparent to-transparent"></div>
      
      {/* Subtle organic light reflections */}
      <div className="absolute top-1/2 right-[15%] w-80 h-80 rounded-full bg-[#162e24]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Zaplanuj Wizytę
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
            Godziny otwarcia
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6"></div>
        </div>

        {/* Unified Premium Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden glass-panel border border-[#c2a176]/20 shadow-2xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Card left: Icon emphasis */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#162e24] border-2 border-[#c2a176]/55 flex items-center justify-center text-[#c2a176] mb-6 shadow-xl">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
              {/* Spinning subtle outer ring */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-[#c2a176]/15 hover:rotate-45 transition-transform duration-1000"></div>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-[#f4efe9] mb-3">
              Otwarci Codziennie
            </h3>
            
            <p className="text-xs text-[#f4efe9]/60 font-sans font-light max-w-[200px] leading-relaxed">
              Zapraszamy na świeżą rybę, rodzinne biesiadowanie i podziwianie zachodów słońca przez cały tydzień.
            </p>


          </div>

          {/* Card right: Time slots schedule */}
          <div className="w-full md:w-2/3 flex flex-col gap-3.5">
            {OPENING_HOURS.map((slot, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between py-3.5 px-5 rounded-xl border border-[#c2a176]/5 bg-[#211915]/20 hover:border-[#c2a176]/25 hover:bg-[#372a24]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {/* Bullet color marker */}
                  <span className="w-2 h-2 rounded-full bg-[#c2a176] shadow-sm"></span>
                  <span className="font-serif text-lg font-bold text-[#f4efe9] tracking-tight">
                    {slot.day}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm tracking-wider text-[#dfc8af]/90 font-medium">
                    {slot.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
