/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, Menu, X, Landmark } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "O nas", href: "#o-nas" },
    { label: "Dlaczego my", href: "#dlaczego-my" },
    { label: "Galeria", href: "#galeria" },
    { label: "Nasze Smaki", href: "#nasze-smaki" },
    { label: "Opinie", href: "#opinie" },
    { label: "Godziny", href: "#godziny" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#120e0caf]/90 backdrop-blur-md md:py-4 py-3 border-b border-[#c2a176]/15 shadow-xl"
          : "bg-gradient-to-b from-[#120e0c]/80 to-transparent md:py-6 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="logo-brand-link"
            href="#"
            onClick={(e) => scrollToSection(e, "#root")}
            className="flex items-center group"
          >
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold text-[#f4efe9] tracking-wider group-hover:text-[#c2a176] transition-colors duration-300">
                SIEJA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#c2a176]/80 -mt-1 font-medium">
                Gościniec Wędkarski
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                id={`navbar-item-${item.label.toLowerCase().replace(" ", "-")}`}
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-sans text-[13px] uppercase tracking-wider text-[#f4efe9]/80 hover:text-[#c2a176] transition-all relative py-2 group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c2a176] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-call-cta"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#244437] hover:bg-[#162e24] text-[#f4efe9] text-xs font-mono uppercase tracking-wider border border-[#c2a176]/30 hover:border-[#c2a176]/60 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#c2a176]" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#211915]/50 border border-[#c2a176]/20 text-[#f4efe9] hover:text-[#c2a176] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navbar-dropdown"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#120e0ce0] backdrop-blur-lg border-b border-[#c2a176]/15 py-6 px-4 animate-fade-in z-45"
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                id={`mobile-navbar-item-${item.label.toLowerCase().replace(" ", "-")}`}
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-serif text-lg tracking-wide text-[#f4efe9] hover:text-[#c2a176] hover:translate-x-1 transition-all py-2 border-b border-[#f4efe9]/5"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col sm:hidden gap-3 mt-4">
              <a
                id="mobile-header-call-cta"
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#244437] text-[#f4efe9] font-mono text-sm uppercase tracking-wider border border-[#c2a176]/35"
              >
                <Phone className="w-4 h-4 text-[#c2a176]" />
                {CONTACT_INFO.phone}
              </a>
              <a
                id="mobile-header-fb-cta"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#211915]/90 border border-[#c2a176]/25 text-[#f4efe9] font-mono text-sm"
              >
                <Facebook className="w-4 h-4 text-[#c2a176]" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
