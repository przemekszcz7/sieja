/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fish, Cookie, Utensils, Leaf, Flame, Sparkles } from "lucide-react";
import { FOOD_ITEMS, FOOD_CARDS } from "../data";

export default function Tastes() {

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "FishSymbol":
        return <Fish className="w-5 h-5 text-[#c2a176]" />;
      case "Cookie":
        return <Cookie className="w-5 h-5 text-[#c2a176]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#c2a176]" />;
      case "Leaf":
        return <Leaf className="w-5 h-5 text-[#c2a176]" />;
      default:
        return <Utensils className="w-5 h-5 text-[#c2a176]" />;
    }
  };

  return (
    <section 
      id="nasze-smaki" 
      className="relative py-24 sm:py-32 bg-[#120e0c]"
    >
      {/* Decorative linear dividers */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#c2a176]/15 to-transparent"></div>
      
      {/* Visual background lights representing sunset mist over the lake */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-[#162e24]/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#372a24]/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Ryby Prosto Z Patelni & Domowe Obiady
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
            Smaki, które zapamiętasz
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6"></div>
          <p className="mt-6 text-sm sm:text-base text-[#f4efe9]/60 font-sans font-light max-w-lg mx-auto">
            Nasze potrawy przygotowujemy wyłącznie ze świeżych lokalnych ryb i naturalnych składników najwyższej jakości. Posiłek serwujemy z widokiem na jezioro.
          </p>
        </div>

        {/* Gallery of Premium Food Images Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {FOOD_ITEMS.map((item) => (
            <div
              id={`food-image-card-${item.id}`}
              key={item.id}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#c2a176]/15 hover:border-[#c2a176]/45 transition-colors duration-500 group shadow-lg"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c2a176]/20 transition-all rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
