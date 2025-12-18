"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Lighter for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent z-10" />
      <img
        src="/oscarchef.jpg"
        alt="Chef Oscar Silva en cocina"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ 
          objectPosition: 'center 20%',
          objectFit: 'cover',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) brightness(1.2) saturate(1.15)'
        }}
      />
      
      {/* Content Container */}
      <div className={`relative z-20 text-white px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e95a2a] backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down shadow-2xl border-2 border-white/30">
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
            {t('homeBadge')}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-fade-in-up" 
              style={{ 
                textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)',
                WebkitTextStroke: '1px rgba(0,0,0,0.3)'
              }}>
            {t('homeTitle')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed animate-fade-in-up animation-delay-200 bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/20" 
             style={{ 
               textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'
             }}>
            {t('homeSubtitle')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm md:text-base animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2">
              <span className="text-[#e95a2a] text-xl">🏆</span>
              <span>{t('homeFeature1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#e95a2a] text-xl">🍽️</span>
              <span>{t('homeFeature2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#e95a2a] text-xl">🎉</span>
              <span>{t('homeFeature3')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <button
              className="group relative overflow-hidden bg-[#e95a2a] hover:bg-[#d14a1a] text-white font-bold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[#e95a2a]/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('homeCtaPrimary')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border-2 border-white/50 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('homeCtaSecondary')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs uppercase tracking-wider">{t('homeScroll')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 