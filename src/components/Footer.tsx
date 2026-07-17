import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n';

interface FooterProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  return (
    <footer className="w-full bg-white py-16 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-sans font-light tracking-tight leading-none text-black">
              Art,<br/>Aesthetics<br/>and AI
            </h2>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={() => onNavigate('imprint')}
              className="text-xs text-gray-500 hover:text-black transition-colors font-mono uppercase tracking-widest"
            >
              {t.imprint}
            </button>
            <button 
              onClick={() => onNavigate('privacy')}
              className="text-xs text-gray-500 hover:text-black transition-colors font-mono uppercase tracking-widest"
            >
              {t.privacy}
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="text-xs text-gray-500 hover:text-black transition-colors font-mono uppercase tracking-widest"
            >
              {t.contact}
            </button>
          </nav>
        </div>
        <div className="mt-16 text-center text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} Art, Aesthetics and AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
