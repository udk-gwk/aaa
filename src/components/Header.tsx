import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';
import { Article, Language } from '../types';
import { translations } from '../i18n';
import { createSearchIndex, searchDocuments } from '../search';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: string) => void;
  currentView: string;
  articles: Article[];
  contributors: string[];
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onNavigate, currentView, articles, contributors }) => {
  const t = translations[lang];
  const location = useLocation();
  const [showOpenCall, setShowOpenCall] = useState(true);
  const [panel, setPanel] = useState<'menu' | 'search' | null>(null);
  const [query, setQuery] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstResultRef = useRef<HTMLAnchorElement>(null);
  const searchIndex = useMemo(() => createSearchIndex(articles, contributors, lang), [articles, contributors, lang]);
  const results = useMemo(() => searchDocuments(searchIndex, query), [searchIndex, query]);
  const searchOpen = panel === 'search';
  const menuOpen = panel === 'menu';
  const hasQuery = query.trim().length > 0;
  const iconButtonClass = 'flex h-9 w-7 shrink-0 items-center justify-center sm:w-8 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black';

  useEffect(() => {
    setPanel(null);
    setQuery('');
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!panel) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setPanel(null);
      setQuery('');
      if (panel === 'menu') menuButtonRef.current?.focus();
      else window.requestAnimationFrame(() => searchButtonRef.current?.focus());
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setPanel(null);
        setQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [panel]);

  const closeSearch = () => {
    setPanel(null);
    setQuery('');
    window.requestAnimationFrame(() => searchButtonRef.current?.focus());
  };

  const handleNavigationLink = (event: React.MouseEvent<HTMLAnchorElement>, view: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setPanel(null);
    setQuery('');
    onNavigate(view);
  };

  const menuColumns = [
    [
      { label: t.editorial, view: 'editorial', href: '/#editorial' },
      { label: 'Current Volume', view: 'volume-1', href: '/#volume-1' },
      { label: t.contributors, view: 'contributors', href: '/#contributors' },
      { label: 'Open Call', view: 'open-call', href: '/open-call' }
    ],
    [
      { label: t.contact, view: 'contact', href: '/contact' },
      { label: t.aboutUs, view: 'about', href: '/about' }
    ]
  ];

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-white/95 backdrop-blur-md">
        <div className="h-16 sm:h-20">
          {searchOpen ? (
            <form
              id="header-search"
              role="search"
              aria-label={lang === 'de' ? 'Website durchsuchen' : 'Search the website'}
              onSubmit={(event) => { event.preventDefault(); firstResultRef.current?.focus(); }}
              className="flex h-full items-center gap-2 px-3 sm:px-6 lg:px-8"
            >
              <label htmlFor="site-search-input" className="sr-only">
                {lang === 'de' ? 'Suchbegriff' : 'Search term'}
              </label>
              <input
                ref={inputRef}
                id="site-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={lang === 'de' ? 'Namen und Inhalte suchen …' : 'Search names and content …'}
                autoComplete="off"
                aria-controls="search-results"
                className="min-w-0 flex-1 bg-transparent py-3 text-left font-sans text-base outline-none placeholder:text-gray-500 sm:text-xl [&::-webkit-search-cancel-button]:appearance-none"
              />
              <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
                <button type="submit" aria-label={lang === 'de' ? 'Suchergebnisse anzeigen' : 'Show search results'} className={iconButtonClass}>
                  <Search size={20} aria-hidden="true" />
                </button>
                <button type="button" onClick={closeSearch} aria-label={lang === 'de' ? 'Suche schließen' : 'Close search'} className={iconButtonClass}>
                  <X size={22} aria-hidden="true" />
                </button>
                {/* Reserve the language-toggle slot so the search icon never moves. */}
                <span aria-hidden="true" className="w-7 shrink-0 sm:w-8" />
              </div>
            </form>
          ) : (
            <nav aria-label={lang === 'de' ? 'Hauptnavigation' : 'Main navigation'} className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1 px-3 sm:gap-2 sm:px-6 lg:px-8">
              <div className="flex min-w-0 items-center justify-self-start gap-3 lg:gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}#editorial`}
                  onClick={(event) => handleNavigationLink(event, 'editorial')}
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
                onClick={() => { setPanel(null); onNavigate('home'); }}
                aria-label={lang === 'de' ? 'Zur Startseite' : 'Go to home page'}
                className="justify-self-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <img src={`${import.meta.env.BASE_URL}aaa_logo_black.png`} alt="Art, Aesthetics and AI" className="h-9 w-auto sm:h-11 md:h-14" />
              </button>

              <div className="flex items-center justify-self-end gap-0.5 sm:gap-2">
                <button
                  ref={searchButtonRef}
                  type="button"
                  onClick={() => setPanel('search')}
                  aria-label={lang === 'de' ? 'Suche öffnen' : 'Open search'}
                  aria-expanded={false}
                  aria-controls="header-search"
                  className={iconButtonClass}
                >
                  <Search size={20} aria-hidden="true" />
                </button>
                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setPanel(menuOpen ? null : 'menu')}
                  aria-label={menuOpen ? (lang === 'de' ? 'Menü schließen' : 'Close menu') : (lang === 'de' ? 'Menü öffnen' : 'Open menu')}
                  aria-expanded={menuOpen}
                  aria-controls="header-menu"
                  className={iconButtonClass}
                >
                  {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                  aria-label={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
                  className={`${iconButtonClass} font-mono text-xs sm:text-sm`}
                >
                  {lang === 'de' ? 'EN' : 'DE'}
                </button>
              </div>
            </nav>
          )}
        </div>

        <div
          id="header-menu"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 motion-reduce:transition-none ${menuOpen ? 'visible grid-rows-[1fr] border-t border-black/15 opacity-100' : 'invisible grid-rows-[0fr] opacity-0'}`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav aria-label={lang === 'de' ? 'Seiten und Bereiche' : 'Pages and sections'} className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-5 sm:py-7">
              <div className="mx-auto grid w-fit max-w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 sm:gap-16">
                {menuColumns.map((column, index) => (
                  <ul key={index} className="space-y-1.5 sm:space-y-2">
                    {column.map((item) => (
                      <li key={item.view}>
                        <Link
                          to={item.href}
                          onClick={(event) => handleNavigationLink(event, item.view)}
                          aria-current={location.pathname === item.href ? 'page' : location.pathname === '/' && location.hash === `#${item.view}` ? 'location' : undefined}
                          className="block font-sans text-sm leading-snug tracking-tight underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-base"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {searchOpen && hasQuery && (
          <section id="search-results" aria-label={lang === 'de' ? 'Suchergebnisse' : 'Search results'} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/15 px-4 py-6 sm:max-h-[calc(100dvh-5rem)] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p role="status" aria-live="polite" className="font-mono text-xs uppercase tracking-wider text-gray-500">
                {results.length === 0
                  ? (lang === 'de' ? 'Keine Ergebnisse. Versuche einen anderen Suchbegriff.' : 'No results. Try a different search term.')
                  : `${results.length} ${lang === 'de' ? 'Treffer' : (results.length === 1 ? 'result' : 'results')}`}
              </p>
              {results.length > 0 && (
                <ul className="mt-4 divide-y divide-black/15">
                  {results.map((result, index) => (
                    <li key={result.id}>
                      <Link
                        ref={index === 0 ? firstResultRef : undefined}
                        to={result.href}
                        onClick={() => { setPanel(null); setQuery(''); }}
                        className="group block py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <div className="font-mono text-xs text-gray-500">{result.meta}</div>
                        <h2 className="mt-1 font-sans text-lg font-medium tracking-tight group-hover:underline underline-offset-4">{result.title}</h2>
                        <p className="mt-1.5 font-serif text-sm leading-relaxed text-gray-600">{result.snippet}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
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
          <Link
            to="/open-call"
            onClick={(event) => handleNavigationLink(event, 'open-call')}
            className="group mt-4 block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span className="block font-sans text-3xl font-medium uppercase leading-none tracking-tight sm:text-4xl">Open Call</span>
            <span className="mt-2 block font-serif text-sm leading-snug">{t.openCallTeaser}</span>
            <span className="mt-4 flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest underline underline-offset-4 group-hover:no-underline">
              {t.openCallLink} <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </Link>
        </aside>
      )}
    </>
  );
};
