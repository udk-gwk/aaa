import React from 'react';
import { motion } from 'motion/react';
import { Article, Language } from '../types';
import { translations } from '../i18n';
import { ArrowLeft, FileText } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  lang: Language;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, lang, onBack }) => {
  const t = translations[lang];

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-white pb-32"
    >
      {/* Header Image */}
      <div className="w-full h-[60vh] relative">
        {article.headerVideo ? (
          <video 
            src={article.headerVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={article.headerImage} 
            alt={article.title[lang]} 
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        
        {/* Metadata & Title */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-8">
            <h1 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-black leading-tight max-w-3xl">
              {article.title[lang]}
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm font-mono uppercase tracking-widest text-gray-500">
            <div>
              <span className="block text-xs text-gray-400 mb-1">{t.author}</span>
              <span className="text-black">{article.author}</span>
            </div>
            <div>
              <span className="block text-xs text-gray-400 mb-1">{t.volume1}</span>
              <span className="text-black">{article.date}</span>
            </div>
            <div>
              <span className="block text-xs text-gray-400 mb-1">DOI</span>
              <span className="text-black">{article.doi}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-24 max-w-3xl w-full">
          {article.content[lang]}
        </div>

        {/* Footer Area of Article */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Bio & Keywords */}
          <div>
            <div className="mb-12">
              <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">{t.authorBio}</h4>
              <p className="text-base text-gray-800 font-serif">
                {article.authorBio[lang]}
              </p>
            </div>

            <div className="mb-12">
              <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">{t.keywords}</h4>
              <div className="flex flex-wrap gap-2">
                {article.keywords[lang].map((kw, idx) => (
                  <span key={idx} className="bg-gray-100 text-black px-3 py-1 text-xs font-mono">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Documents & Footnotes */}
          <div>
            {article.documents && article.documents.length > 0 && (
              <div className="mb-12">
                <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">{t.documents}</h4>
                <div className="space-y-4">
                  {article.documents.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-4 bg-gray-50 hover:bg-black hover:text-white transition-colors"
                    >
                      <FileText className="shrink-0 mt-0.5" size={18} />
                      <div>
                        <div className="font-mono text-sm break-all">{doc.name}</div>
                        <div className="font-mono text-xs text-gray-500 group-hover:text-gray-300 mt-1">DOI: {doc.doi}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {article.footnotes[lang].length > 0 && (
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">{t.footnotes}</h4>
                <ul className="text-sm text-gray-600 space-y-3 font-serif">
                  {article.footnotes[lang].map((note, idx) => {
                    const fnStr = typeof note === 'string' ? note : '';
                    // Some notes might already start with "1. " or "[1]", let's clean them up slightly if needed,
                    // but the existing code just renders them as-is.
                    return (
                      <li key={idx} id={`footnote-${idx + 1}`} className="flex gap-2">
                        <a href={`#fn-ref-${idx + 1}`} className="text-gray-400 hover:text-black transition-colors select-none">[{idx + 1}]</a>
                        <span>{note}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.article>
  );
};
