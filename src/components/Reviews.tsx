/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Facebook, Quote } from "lucide-react";
import { REVIEWS, CONTACT_INFO } from "../data";

export default function Reviews() {
  return (
    <section 
      id="opinie" 
      className="relative py-24 sm:py-32 bg-[#211915] overflow-hidden"
    >
      {/* Visual background image or textures indicating wood grains */}
      <div className="absolute inset-0 bg-[#120e0c]/40 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-[#211915]/20 via-transparent to-[#120e0c]/90 pointer-events-none"></div>
      
      {/* Decorative vertical gold border lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-[#c2a176]/10 to-transparent hidden xl:block"></div>
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-gradient-to-b from-transparent via-[#c2a176]/10 to-transparent hidden xl:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c2a176] font-mono font-semibold block mb-3">
            Zaufanie Naszych Gości
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#f4efe9] tracking-tight leading-none">
            Opinie naszych gości
          </h2>
          <div className="w-16 h-[2px] bg-[#c2a176] mx-auto mt-6"></div>
        </div>

        {/* 3 Testimonial Glassmorphic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review, idx) => (
            <div
              id={`review-item-${review.id}`}
              key={review.id}
              className="relative p-8 sm:p-10 rounded-2xl bg-[#372a24]/15 border border-[#c2a176]/15 hover:border-[#c2a176]/40 backdrop-blur-xl hover:bg-[#372a24]/25 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              {/* Giant elegant quote emblem in background */}
              <div className="absolute top-6 right-8 text-[#c2a176]/5 select-none pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                {/* 5-Star Indicator */}
                <div id={`rating-star-${review.id}`} className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#c2a176] text-[#c2a176]"
                    />
                  ))}
                </div>

                {/* Feedback description copy */}
                <p className="text-base text-[#f4efe9]/85 font-sans font-light italic leading-relaxed mb-8 text-left">
                  "{review.text}"
                </p>
              </div>

              {/* Author metadata panel */}
              <div className="flex items-center justify-between border-t border-[#f4efe9]/10 pt-5 mt-auto">
                <div className="text-left">
                  <h4 className="font-serif text-lg font-bold text-[#f4efe9]">
                    {review.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-[#c2a176]">
                    {review.source}
                  </span>
                </div>
                
                {/* Visual marker */}
                <div className="w-8 h-8 rounded-full bg-[#162e24] flex items-center justify-center border border-[#c2a176]/20">
                  <span className="text-[10px] font-mono text-[#c2a176] font-bold">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Review Redirect Call to Action */}
        <div className="flex justify-center">
          <a
            id="facebook-reviews-cta"
            href={CONTACT_INFO.facebookReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-xl bg-[#244437] hover:bg-[#162e24] border border-[#c2a176]/35 hover:border-[#c2a176]/70 text-[#f4efe9] font-mono text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Facebook className="w-4 h-4 text-[#c2a176] group-hover:scale-110 transition-transform duration-300" />
            <span>Zobacz więcej opinii na Facebooku</span>
          </a>
        </div>

      </div>
    </section>
  );
}
