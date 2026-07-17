import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { aboutContent } from '../content/about';

interface AboutViewProps {
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight mb-8">
          {aboutContent.title[lang]}
        </h1>
        <p className="text-xl md:text-2xl font-serif text-gray-600 leading-relaxed mb-24 max-w-3xl">
          {aboutContent.description[lang]}
        </p>

        <div className="space-y-24">
          {aboutContent.team.map((person, index) => (
            <motion.div 
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-2">
                {person.role[lang]}
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight mb-6">
                {person.name}
              </h2>
              <p className="text-lg md:text-xl font-serif text-gray-600 leading-relaxed max-w-2xl">
                {person.bio[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
