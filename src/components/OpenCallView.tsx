import React from 'react';
import { Language } from '../types';
import { openCallContent, submissionEmail } from '../content/open-call';

export const OpenCallView: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = openCallContent[lang];

  return (
    <article className="min-h-screen max-w-3xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <h1 className="mb-12 font-sans text-4xl font-medium tracking-tight md:text-6xl">
        {content.title}
      </h1>
      <p className="font-serif text-lg leading-relaxed text-gray-600 md:text-xl">
        {content.introduction}
      </p>

      <section aria-labelledby="submission-guidelines" className="mt-16">
        <h2 id="submission-guidelines" className="mb-6 font-sans text-2xl font-medium tracking-tight">
          {content.guidelinesTitle}
        </h2>
        <ul className="divide-y divide-black/15 border-y border-black/15">
          {content.guidelines.map((guideline) => (
            <li key={guideline.label} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <span className="font-mono text-sm">{guideline.label}</span>
              <span className="font-serif text-lg leading-relaxed text-gray-600">{guideline.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <a
        href={`mailto:${submissionEmail}`}
        className="mt-16 inline-block bg-black px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        {content.submitLabel}
      </a>
    </article>
  );
};
