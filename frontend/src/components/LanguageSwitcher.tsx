'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 border border-gray-200">
      <FaGlobe className="text-[#1a4d3a] w-4 h-4" />
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          language === 'es'
            ? 'bg-[#e95a2a] text-white shadow-md'
            : 'text-gray-600 hover:text-[#e95a2a] hover:bg-gray-200'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          language === 'en'
            ? 'bg-[#e95a2a] text-white shadow-md'
            : 'text-gray-600 hover:text-[#e95a2a] hover:bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
