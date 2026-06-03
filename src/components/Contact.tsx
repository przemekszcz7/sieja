/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, Facebook, MapPin, Send, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  return (
    <section 
      id="kontakt" 
      className="relative py-24 sm:py-32 bg-[#120e0c]"
    >
      {/* Decorative divider grids */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c2a176]/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Skontaktuj Się Z Nami
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
            Zarezerwuj stolik lub pobyt
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6"></div>
          <p className="mt-6 text-sm sm:text-base text-[#f4efe9]/60 font-sans font-light">
            Chcesz zarezerwować stolik, zapytać o noclegi, warunki na łowisku lub zorganizować wydarzenie rodzinne? Skontaktuj się z nami telefonicznie, mailowo lub przez Facebook.
          </p>
        </div>

        {/* Info Blocks and Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Huge Info Blocks (3 elements) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Addressblock */}
            <div className="flex items-start gap-6 p-6 sm:p-8 rounded-2xl bg-[#211915]/40 border border-[#c2a176]/10 hover:border-[#c2a176]/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#162e24] flex items-center justify-center border border-[#c2a176]/20 text-[#c2a176] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#c2a176] block mb-2">Adres Gościńca</span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#f4efe9]">Ługi 30</p>
                <p className="text-sm text-[#f4efe9]/60 font-sans font-light mt-1">66-520 Dobiegniew, Polska</p>
              </div>
            </div>

            {/* Phone Block */}
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-start gap-6 p-6 sm:p-8 rounded-2xl bg-[#211915]/40 border border-[#c2a176]/10 hover:border-[#c2a176]/30 transition-all duration-300 pointer-events-auto"
            >
              <div className="w-14 h-14 rounded-xl bg-[#162e24] flex items-center justify-center border border-[#c2a176]/20 text-[#c2a176] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#c2a176] block mb-2">Zadzwoń do nas</span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#f4efe9] tracking-wider hover:text-[#c2a176] transition-colors">{CONTACT_INFO.phone}</p>
                <p className="text-sm text-[#f4efe9]/60 font-sans font-light mt-1">Szybka rezerwacja stolików i ryb</p>
              </div>
            </a>

            {/* Email Block */}
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-start gap-6 p-6 sm:p-8 rounded-2xl bg-[#211915]/40 border border-[#c2a176]/10 hover:border-[#c2a176]/30 transition-all duration-300 pointer-events-auto"
            >
              <div className="w-14 h-14 rounded-xl bg-[#162e24] flex items-center justify-center border border-[#c2a176]/20 text-[#c2a176] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left overflow-x-auto select-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#c2a176] block mb-2">Napisz e-mail</span>
                <p className="font-mono text-sm sm:text-lg font-medium text-[#f4efe9] hover:text-[#c2a176] transition-colors">{CONTACT_INFO.email}</p>
                <p className="text-sm text-[#f4efe9]/60 font-sans font-light mt-1.5">Kontakt biurowy i zapytania grupowe</p>
              </div>
            </a>

          </div>

          {/* Right Column: Interactive Quick Action Buttons Wrapper */}
          <div className="lg:col-span-6 flex flex-col justify-center p-8 sm:p-12 rounded-3xl bg-[#162e24]/30 border border-[#c2a176]/15 hover:border-[#c2a176]/35 transition-all duration-300 relative overflow-hidden">
            
            {/* Soft decorative visual light bloom */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#c2a176]/5 rounded-bl-full pointer-events-none"></div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4efe9] mb-4 text-left">
              Błyskawiczne akcje
            </h3>
            
            <p className="text-sm text-[#f4efe9]/70 font-sans font-light leading-relaxed mb-10 text-left">
              Wybierz preferowaną formę kontaktu. Nasz zespół odpowiada najszybciej jak to możliwe, dbając o każdy szczegół Twojego planowanego pobytu.
            </p>

            {/* Action buttons (Zadzwoń teraz, Napisz email, Profil Facebook) */}
            <div className="flex flex-col gap-4">
              
              {/* Call */}
              <a
                id="contact-button-call"
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#244437] hover:bg-[#162e24] border border-[#c2a176]/30 hover:border-[#c2a176]/65 transition-all duration-300 text-[#f4efe9] shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c2a176] group-hover:rotate-12 transition-transform" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">Zadzwoń teraz</span>
                </div>
                <Send className="w-4 h-4 text-[#c2a176]/55 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Email */}
              <a
                id="contact-button-email"
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#211915]/60 hover:bg-[#322822]/70 border border-[#c2a176]/15 hover:border-[#c2a176]/45 transition-all duration-300 text-[#f4efe9]"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#c2a176]" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">Napisz e-mail</span>
                </div>
                <Send className="w-4 h-4 text-[#c2a176]/50 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Facebook page */}
              <a
                id="contact-button-facebook"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#3b5998]/10 hover:bg-[#3b5998]/20 border border-[#3b5998]/30 hover:border-[#3b5998]/60 transition-all duration-300 text-[#f4efe9]"
              >
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-[#3b5998] group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">Facebook</span>
                </div>
                <MessageCircle className="w-4 h-4 text-[#c2a176]/50 group-hover:translate-x-1.5 transition-transform" />
              </a>

            </div>

            {/* Footer accent label */}
            <span className="mt-8 block text-[10px] text-[#f4efe9]/40 font-mono text-left">
              Odpowiadamy również na wiadomości prywatne na Messengerze całą dobę.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
