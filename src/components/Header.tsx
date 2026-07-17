import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';
import { translations } from '../i18n';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onNavigate }) => {
  const t = translations[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <style>
        {`
          :root {
            /* 1. RUNDUNG: 16px = abgerundete Ecken. Je höher, desto runder (z.B. 99px für komplett rund). */
            --base-radius: 16px; 
          }

          .custom-rounded {
            border-radius: var(--base-radius);
          }
        `}
      </style>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-start">
          
          {/* Logo */}
          <div 
            className="relative flex items-center cursor-pointer pointer-events-auto px-4 py-2 transition-all group"
            onClick={() => onNavigate('home')}
          >
            {/* 1. Backdrop Blur (Statischer Hintergrund für den Glass-Effekt) */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md custom-rounded -z-20 transition-all" />

            {/* Logo */}
            {/* 
              Hier kannst du die Höhe des Logos für verschiedene Geräte (Devices) anpassen:
              h-12      = Mobile (Standard)
              md:h-16   = Tablet (ab 768px)
              lg:h-20   = Desktop (ab 1024px)
            */}
            <img 
              src={`${import.meta.env.BASE_URL}aaa_logo_black.png`}
              alt="Art, Aesthetics and AI" 
              className="h-8 md:h-12 lg:h-16 object-contain relative z-10" 
            />
          </div>

          {/* Controls */}
          <div className="flex flex-row md:grid md:grid-cols-2 gap-1.5 md:gap-2 pointer-events-auto items-center md:items-stretch">
            
            <button 
              onClick={() => onNavigate('about')}
              className="order-1 md:order-1 md:col-span-1 relative px-2.5 py-1.5 md:px-3 lg:px-4 md:py-1.5 lg:py-2 text-black hover:text-white transition-colors font-mono uppercase text-[11px] lg:text-sm flex justify-center items-center group custom-rounded whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md group-hover:bg-black transition-colors custom-rounded -z-10" />
              <span className="relative z-10">{t.aboutUs}</span>
            </button>

            <button 
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight - window.innerHeight - 100, behavior: 'smooth' });
                }, 100);
              }}
              className="order-2 md:order-3 md:col-span-2 relative px-2.5 py-1.5 md:px-0 md:py-1.5 lg:py-2 text-black hover:text-white transition-colors font-mono uppercase text-[11px] lg:text-sm flex items-center justify-center group custom-rounded whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md group-hover:bg-black transition-colors custom-rounded -z-10" />
              <span className="relative z-10">OPEN CALL</span>
            </button>

            <button 
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="order-3 md:order-2 md:col-span-1 relative px-2.5 py-1.5 md:px-3 lg:px-4 md:py-1.5 lg:py-2 text-black hover:text-white transition-colors font-mono uppercase text-[11px] lg:text-sm flex justify-center items-center gap-1 lg:gap-2 group custom-rounded"
              aria-label="Toggle language"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md group-hover:bg-black transition-colors custom-rounded -z-10" />
              <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 relative z-10" />
              <span className="relative z-10">{lang === 'en' ? 'de' : 'en'}</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
