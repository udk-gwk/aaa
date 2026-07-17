import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface PageBlock {
  heading?: string;
  text: string;
}

interface PageContent {
  title: {
    en: string;
    de: string;
  };
  blocks: {
    en: PageBlock[];
    de: PageBlock[];
  };
}

interface PageViewProps {
  lang: Language;
  content: PageContent;
}

export const PageView: React.FC<PageViewProps> = ({ lang, content }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight mb-16">
          {content.title[lang]}
        </h1>

        <div className="space-y-12">
          {content.blocks[lang].map((block, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              {block.heading && (
                <h2 className="text-lg md:text-xl font-sans font-medium mb-4">
                  {block.heading}
                </h2>
              )}
              <div className="text-base md:text-lg font-serif text-gray-600 leading-relaxed whitespace-pre-wrap">
                {block.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
