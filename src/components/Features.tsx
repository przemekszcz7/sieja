/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fish, Trees, UtensilsCrossed, Heart } from "lucide-react";
import { FEATURES } from "../data";

export default function Features() {

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Fish":
        return <Fish className="w-8 h-8 text-[#c2a176]" />;
      case "Trees":
        return <Trees className="w-8 h-8 text-[#c2a176]" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-8 h-8 text-[#c2a176]" />;
      case "Heart":
        return <Heart className="w-8 h-8 text-[#c2a176]" />;
      default:
        return <Fish className="w-8 h-8 text-[#c2a176]" />;
    }
  };

  return (
    <section 
      id="dlaczego-my" 
      className="relative py-24 sm:py-32 bg-wood-pattern overflow-hidden"
    >
      {/* Decorative premium elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c2a176]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c2a176]/20 to-transparent"></div>
      
      {/* Subtle organic light reflections */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 rounded-full bg-[#162e24]/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] rounded-full bg-[#c2a176]/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Odkryj Nasz Mikroklimat
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-tight">
            Dlaczego warto nas odwiedzić?
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6"></div>
        </div>

        {/* Elegant Premium List Layout */}
        <div className="max-w-5xl mx-auto flex flex-col divide-y divide-[#c2a176]/15 border-t border-b border-[#c2a176]/15">
          {FEATURES.map((feature, idx) => (
            <div
              id={`feature-row-${feature.id}`}
              key={feature.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 sm:py-12 px-2 sm:px-6 hover:bg-[#244437]/10 transition-all duration-500 relative overflow-hidden"
              style={{
                animationDelay: `${idx * 150}ms`
              }}
            >
              {/* Row hover gold left indicator bar */}
              <div className="absolute top-0 bottom-0 left-0 w-0 group-hover:w-1 bg-[#c2a176] transition-all duration-300"></div>

              {/* Number and Icon container */}
              <div className="flex items-center gap-6 mb-4 md:mb-0 md:w-1/4 shrink-0">
                <span className="font-serif text-3xl sm:text-4xl text-[#c2a176]/50 group-hover:text-[#c2a176] font-medium tracking-wider transition-colors duration-300">
                  0{idx + 1}.
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#162e24] border border-[#c2a176]/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.iconName)}
                </div>
              </div>

              {/* Title & Accent Label */}
              <div className="md:w-1/3 pr-4 mb-3 md:mb-0">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4efe9] group-hover:text-[#c2a176] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>

              {/* Narrative description */}
              <div className="md:w-5/12">
                <p className="text-sm sm:text-base text-[#f4efe9]/75 font-sans font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
