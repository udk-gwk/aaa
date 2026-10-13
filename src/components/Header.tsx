import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onNavigate, currentView }) => {
  const t = translations[lang];
  const [showOpenCall, setShowOpenCall] = useState(true);

  const handleSectionLink = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-black/15 bg-white/95 backdrop-blur-md sm:h-20">
        <nav aria-label={lang === 'de' ? 'Hauptnavigation' : 'Main navigation'} className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1 px-3 sm:gap-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center justify-self-start gap-3 lg:gap-4">
            <a
              href={`${import.meta.env.BASE_URL}#editorial`}
              onClick={(event) => handleSectionLink(event, 'editorial')}
              className="shrink-0 font-mono text-xs sm:text-sm uppercase tracking-[0.04em] sm:tracking-[0.12em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              {t.magazine}
            </a>
            <span className="hidden max-w-44 whitespace-pre-line border-l border-black/35 pl-3 text-left font-mono text-[10px] leading-[1.3] text-black/70 md:block lg:max-w-52 lg:text-[11px]">
              {t.headerPublisher}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            aria-label={lang === 'de' ? 'Zur Startseite' : 'Go to home page'}
            className="justify-self-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <img src={`${import.meta.env.BASE_URL}aaa_logo_black.png`} alt="Art, Aesthetics and AI" className="h-9 w-auto sm:h-11 md:h-14" />
          </button>

          <div className="flex items-center justify-self-end gap-1.5 sm:gap-5">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              aria-current={currentView === 'about' ? 'page' : undefined}
              className="whitespace-nowrap font-mono text-xs sm:text-sm uppercase tracking-normal sm:tracking-[0.12em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              {t.aboutUs}
            </button>
            <span className="hidden h-5 w-px bg-black/20 sm:block" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              aria-label={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              className="flex items-center gap-0.5 sm:gap-1 font-mono text-xs sm:text-sm tracking-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span className="sm:hidden">{lang === 'de' ? 'EN' : 'DE'}</span>
              <span className={`hidden sm:inline ${lang === 'de' ? 'font-bold text-black' : 'text-gray-400'}`}>DE</span>
              <span className="hidden text-gray-400 sm:inline" aria-hidden="true">/</span>
              <span className={`hidden sm:inline ${lang === 'en' ? 'font-bold text-black' : 'text-gray-400'}`}>EN</span>
            </button>
          </div>
        </nav>
      </header>

      {showOpenCall && currentView === 'home' && (
        <aside aria-label="Open Call" className="absolute right-4 top-20 z-40 w-[min(21rem,calc(100vw-2rem))] border border-black bg-[#E5FF80] p-4 shadow-[5px_5px_0_0_#000] sm:right-6 sm:top-24 sm:p-5 lg:right-8">
          <div className="flex items-start justify-between gap-4 border-b border-black/30 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">AAA / Volume 2</span>
            <button
              type="button"
              onClick={() => setShowOpenCall(false)}
              aria-label={lang === 'de' ? 'Open Call schließen' : 'Dismiss open call'}
              className="-m-1 shrink-0 p-1 hover:rotate-90 transition-transform focus-visible:outline-2 focus-visible:outline-black"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}#open-call`}
            onClick={(event) => handleSectionLink(event, 'open-call')}
            className="group mt-4 block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span className="block font-sans text-3xl font-medium uppercase leading-none tracking-tight sm:text-4xl">Open Call</span>
            <span className="mt-2 block font-serif text-sm leading-snug">{t.openCallTeaser}</span>
            <span className="mt-4 flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest underline underline-offset-4 group-hover:no-underline">
              {t.openCallLink} <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </a>
        </aside>
      )}
    </>
  );
};
