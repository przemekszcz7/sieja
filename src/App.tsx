/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Tastes from "./components/Tastes";
import Reviews from "./components/Reviews";
import OpeningHours from "./components/OpeningHours";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-landing-wrapper" className="min-h-screen bg-[#120e0c] text-[#f4efe9] flex flex-col font-sans select-none overflow-x-hidden selection:bg-[#244437] selection:text-[#f4efe9]">
      
      {/* Premium Translucent Top Header Navigation */}
      <Header />

      {/* Main Single Page Layout Content */}
      <main className="flex-grow">
        
        {/* SECTION 1 - HERO PREMIUM */}
        <section id="hero-section">
          <Hero />
        </section>

        {/* SECTION 2 - DLACZEGO WARTO NAS ODWIEDZIĆ */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="features-section"
        >
          <Features />
        </motion.section>

        {/* SECTION 3 - O GOŚCIŃCU */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="about-section"
        >
          <About />
        </motion.section>

        {/* SECTION 4 - GALERIA MIEJSCA */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="gallery-section"
        >
          <Gallery />
        </motion.section>

        {/* SECTION 5 - NASZE SMAKI */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="tastes-section"
        >
          <Tastes />
        </motion.section>

        {/* SECTION 6 - OPINIE GOŚCI */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="reviews-section"
        >
          <Reviews />
        </motion.section>

        {/* SECTION 7 - GODZINY OTWARCIA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="opening-hours-section"
        >
          <OpeningHours />
        </motion.section>

        {/* SECTION 8 - KONTAKT */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="contact-section"
        >
          <Contact />
        </motion.section>

        {/* SECTION 9 - MAPA DOJAZDU */}
        <section id="map-section">
          <Map />
        </section>

      </main>

      {/* SECTION 10 - STOPKA PREMIUM */}
      <Footer />
    </div>
  );
}
