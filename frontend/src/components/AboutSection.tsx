"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-gradient-to-br from-[#23281a] via-[#2a3020] to-[#23281a] text-gray-100 flex flex-col gap-12 md:gap-20 py-12 md:py-16 px-4 md:px-6">
      {/* Bloque principal tipo About */}
      <div className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 md:gap-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-white">{t('aboutTitle')}</h2>
          <div className="w-16 h-1 bg-[#e95a2a] mb-6 md:mb-8 animate-slide-in" />
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
            <p className="animate-fade-in-up">
              {t('aboutText1')}
            </p>
            <p className="animate-fade-in-up animation-delay-200">
              {t('aboutText2')}
            </p>
            <p className="animate-fade-in-up animation-delay-400">
              {t('aboutText3')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e95a2a]">15+</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{t('aboutStat1')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e95a2a]">500+</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{t('aboutStat2')}</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-[#e95a2a]">100%</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{t('aboutStat3')}</div>
            </div>
          </div>
        </div>
        
        {/* Foto circular */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="relative group">
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-[#e95a2a] shadow-2xl shadow-[#e95a2a]/20 bg-gray-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <img
                src="/chef-oscar-silva.jpg"
                alt="Chef Oscar Silva"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#e95a2a]/30 animate-ping-slow" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
          </div>
        </div>
      </div>

      {/* Bloques adicionales con scroll */}
      <div className="flex flex-col gap-12 md:gap-20 max-w-6xl mx-auto">
        {/* Bloque 1 */}
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#e95a2a]/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src="/foto1.jpg"
              alt="Oscar Silva cooking"
              className="relative w-full rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-base md:text-lg leading-relaxed">
            <div className="inline-block bg-[#e95a2a] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {t('aboutBadge1')}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('aboutTitle1')}</h3>
            <p className="text-gray-300">
              {t('aboutText4')}
            </p>
          </div>
        </div>
        
        {/* Bloque 2 */}
        <div className={`flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#e95a2a]/20 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
            <img
              src="/foto2.jpg"
              alt="Private event"
              className="relative w-full rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-base md:text-lg leading-relaxed">
            <div className="inline-block bg-[#e95a2a] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {t('aboutBadge2')}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('aboutTitle2')}</h3>
            <p className="text-gray-300">
              {t('aboutText5')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}