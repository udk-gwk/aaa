import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Language, Article } from './types';
import { articles, contributors } from './data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ArticleViewWrapper } from './components/ArticleViewWrapper';
import { AboutView } from './components/AboutView';
import { PageView } from './components/PageView';
import { imprintContent } from './content/imprint';
import { privacyContent } from './content/privacy';
import { contactContent } from './content/contact';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current view for the header highlighting based on location
  const currentView = location.pathname === '/' ? 'home' 
                    : location.pathname.startsWith('/article/') ? 'article'
                    : location.pathname.substring(1);

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (article: Article) => {
    navigate(`/article/${article.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Header 
        lang={lang} 
        setLang={setLang} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <main>
        <Routes>
          <Route path="/" element={
            <HomeView 
              articles={articles} 
              lang={lang} 
              onArticleClick={handleArticleClick} 
              contributors={contributors}
            />
          } />
          <Route path="/article/:id" element={
            <ArticleViewWrapper lang={lang} onBack={() => handleNavigate('home')} />
          } />
          <Route path="/about" element={<AboutView lang={lang} />} />
          <Route path="/imprint" element={<PageView lang={lang} content={imprintContent} />} />
          <Route path="/privacy" element={<PageView lang={lang} content={privacyContent} />} />
          <Route path="/contact" element={<PageView lang={lang} content={contactContent} />} />
        </Routes>
      </main>

      <Footer 
        lang={lang} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}

