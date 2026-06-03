/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      }
    };

    // Lock scroll
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1));
  };

  const navigatePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1));
  };

  return (
    <section 
      id="galeria" 
      className="relative py-24 sm:py-32 bg-wood-pattern overflow-hidden"
    >
      {/* Visual highlights */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#162e24]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Fotogaleria Obiektu
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
            Poznaj Gościniec SIEJA
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6 mb-12"></div>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              id={`gallery-card-${item.id}`}
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-[#c2a176]/10 hover:border-[#c2a176]/45 transition-all duration-500 shadow-xl"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Clean Overlay styling – only visual zoom indicator icon on hover, no texts */}
              <div className="absolute inset-0 bg-[#120e0c]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#244437]/90 border border-[#c2a176]/40 flex items-center justify-center text-[#c2a176] shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Static subtle outline border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c2a176]/20 transition-all rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-55 bg-[#0a0807]/95 flex flex-col items-center justify-center animate-fade-in"
        >
          {/* Close Action Area (clicking outside image resets too) */}
          <div className="absolute inset-0 cursor-default" onClick={closeLightbox}></div>

          {/* Top Panel - Cleaned with no Titles or Categories */}
          <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-10 bg-gradient-to-b from-[#120e0c]/90 to-transparent">
            <div>
              <span className="text-xs text-[#f4efe9]/60 font-mono">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
            
            <button
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="w-11 h-11 rounded-full bg-[#211915]/80 hover:bg-[#244437] text-[#f4efe9] hover:text-[#c2a176] border border-[#f4efe9]/15 hover:border-[#c2a176]/40 transition-all flex items-center justify-center cursor-pointer shadow-lg"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 sm:px-8 pointer-events-none z-10 w-full">
            <button
              id="lightbox-prev-btn"
              onClick={navigatePrev}
              className="w-12 h-12 rounded-full bg-[#211915]/80 hover:bg-[#244437] border border-[#f4efe9]/10 hover:border-[#c2a176]/40 text-[#f4efe9] hover:text-[#c2a176] flex items-center justify-center pointer-events-auto transition-transform active:scale-95 cursor-pointer shadow-xl"
              aria-label="Poprzedni"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              id="lightbox-next-btn"
              onClick={navigateNext}
              className="w-12 h-12 rounded-full bg-[#211915]/80 hover:bg-[#244437] border border-[#f4efe9]/10 hover:border-[#c2a176]/40 text-[#f4efe9] hover:text-[#c2a176] flex items-center justify-center pointer-events-auto transition-transform active:scale-95 cursor-pointer shadow-xl"
              aria-label="Następny"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative max-w-[95%] max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center z-5 pointer-events-auto select-none mt-16 scale-95 transition-all">
            <img
              id="lightbox-active-image"
              src={GALLERY_ITEMS[lightboxIndex].url}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-xl border border-[#c2a176]/20 shadow-2xl animate-fade-in"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Controls Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-3">
            {GALLERY_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  lightboxIndex === idx ? "w-6 bg-[#c2a176]" : "bg-[#f4efe9]/20"
                }`}
                aria-label={`Przejdź do slajdu ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}
