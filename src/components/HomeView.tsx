import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Article, Language } from '../types';
import { translations } from '../i18n';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

interface HomeViewProps {
  articles: Article[];
  lang: Language;
  onArticleClick: (article: Article) => void;
  contributors: string[];
}

export const HomeView: React.FC<HomeViewProps> = ({ articles, lang, onArticleClick, contributors }) => {
  const t = translations[lang];
  const [currentSlide, setCurrentSlide] = useState(() => Math.floor(Math.random() * articles.length));
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      filter: 'hue-rotate(90deg) contrast(200%) invert(10%)',
      x: direction > 0 ? 20 : -20,
      skewX: 10
    }),
    center: {
      opacity: [0, 1, 0, 1, 1],
      x: [0, -10, 10, -5, 0],
      skewX: [0, -20, 20, -10, 0],
      filter: ['hue-rotate(90deg) contrast(200%) invert(10%)', 'hue-rotate(0deg) contrast(100%) invert(0%)'],
      transition: { duration: 0.5, ease: "linear", times: [0, 0.1, 0.2, 0.3, 1] }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 20 : -20,
      transition: { duration: 0.2 }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + articles.length) % articles.length);
  };

  const nextArticle = articles[(currentSlide + 1) % articles.length];
  const prevArticle = articles[(currentSlide - 1 + articles.length) % articles.length];

  return (
    <div className="w-full flex flex-col min-h-screen relative overflow-hidden bg-white">
      
      {/* Background Decorative "A"s */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="text-[60vw] font-sans font-thin text-gray-50 select-none absolute top-[-10%] left-[-10%] tracking-tighter leading-none opacity-50">A</div>
        <div className="text-[40vw] font-sans font-thin text-gray-50 select-none absolute bottom-[-10%] right-[-10%] tracking-tighter leading-none opacity-50">A</div>
      </div>

      {/* Hero Carousel */}
      <section className="relative w-full h-screen bg-black overflow-hidden z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            onClick={() => onArticleClick(articles[currentSlide])}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            {articles[currentSlide].headerVideo ? (
              <video 
                src={articles[currentSlide].headerVideo}
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img 
                src={articles[currentSlide].headerImage} 
                alt={articles[currentSlide].title[lang]} 
                className="w-full h-full object-cover pointer-events-none"
              />
            )}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-4xl"
              >
                <div className="text-white/80 font-mono text-sm md:text-base mb-6 uppercase tracking-[0.2em]">
                  {articles[currentSlide].volume} — {articles[currentSlide].author}
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-white mb-6 leading-none">
                  {articles[currentSlide].title[lang]}
                </h2>
                <button className="text-white font-mono uppercase tracking-widest text-sm border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                  {t.readMore}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Carousel Slider Controls */}
        <div className="absolute bottom-[50px] left-0 right-0 z-30 flex justify-between items-end pointer-events-none pb-8 px-4 sm:px-8">
          {/* Prev Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            className="pointer-events-auto group flex flex-col items-start text-white/70 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <ChevronLeft size={20} />
              </div>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
              {prevArticle.title[lang]}
            </div>
          </button>

          {/* Next Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); paginate(1); }}
            className="pointer-events-auto group flex flex-col items-end text-white/70 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300 text-right">
              {nextArticle.title[lang]}
            </div>
          </button>
        </div>

        {/* Scroll down banner */}
        <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-white/80 backdrop-blur-md z-40 cursor-pointer pointer-events-auto flex items-center justify-center" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex items-center gap-2 text-black"
          >
            <span className="font-mono uppercase text-xs sm:text-sm tracking-[0.2em]">
              {lang === 'en' ? 'All Magazine Articles' : 'Alle Magazin-Artikel'}
            </span>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area (Everything else on Homepage) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full relative z-10 space-y-48">
        
        {/* Editorial Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="md:col-span-1">
            <div className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-4">{t.editorial}</div>
            <h3 className="text-2xl md:text-4xl font-sans font-light tracking-tight text-black leading-none">
              {t.editorialTitle}
            </h3>
          </div>
          <div className="md:col-span-2 text-base md:text-lg text-gray-600 font-serif leading-snug flex items-end whitespace-pre-wrap">
            {t.editorialLong}
          </div>
        </section>

        {/* Volume Grid */}
        <section>
          <div className="mb-12">
             <div className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-2">{t.volume1}</div>
             <h3 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-black leading-none">Artikel</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
            {articles.map((article, idx) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => onArticleClick(article)}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
                  {article.headerVideo ? (
                    <video 
                      src={article.headerVideo}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={article.headerImage} 
                      alt={article.title[lang]} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col flex-grow text-left">
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1">
                    {article.author}
                  </div>
                  <h4 className="text-lg md:text-xl font-sans font-medium tracking-tight text-black mb-1 leading-none">
                    {article.title[lang]}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 font-serif leading-snug line-clamp-2">
                    {article.excerpt[lang]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contributors & Submit Section (Side by Side on Desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Contributors */}
          <div>
            <div className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">{t.contributors}</div>
            <ul className="space-y-1">
              {contributors.map((name, idx) => (
                <li key={idx} className="text-lg font-sans font-light text-black cursor-default">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Submit */}
          <div>
            <div className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">{t.submit}</div>
            <h3 className="text-3xl font-sans font-medium tracking-tight text-black mb-6">
              {t.submitTitle}
            </h3>
            <p className="text-lg text-gray-600 font-serif leading-relaxed mb-10">
              {t.submitText}
            </p>
            <button className="bg-black text-white px-8 py-4 uppercase font-mono text-sm tracking-[0.2em] hover:bg-gray-800 transition-colors">
              {lang === 'en' ? 'Submit via Email' : 'Per E-Mail einreichen'}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
