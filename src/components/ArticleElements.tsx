import React from 'react';

export const P: React.FC<{children: React.ReactNode}> = ({children}) => (
  <p className="mb-8 text-lg md:text-xl text-gray-800 font-serif leading-relaxed">
    {children}
  </p>
);

export const BigQuote: React.FC<{children: React.ReactNode, source?: string}> = ({children, source}) => (
  <blockquote className="my-16 md:my-24">
    <div className="text-3xl md:text-5xl font-sans font-light leading-tight text-black border-l-2 border-black pl-6 md:pl-10">
      {children}
    </div>
    {source && (
      <div className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-gray-500 pl-6 md:pl-10">
        — {source}
      </div>
    )}
  </blockquote>
);

export const ArticleImage: React.FC<{src: string, alt: string, caption?: string}> = ({src, alt, caption}) => (
  <figure className="my-16 md:my-24">
    <img src={src} alt={alt} className="w-full h-auto object-cover bg-gray-100" />
    {caption && (
      <figcaption className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
        {caption}
      </figcaption>
    )}
  </figure>
);

export const Subheading: React.FC<{children: React.ReactNode}> = ({children}) => (
  <h3 className="text-2xl md:text-3xl font-sans font-medium mt-16 mb-6 text-black">
    {children}
  </h3>
);

export const Fn: React.FC<{n: number}> = ({n}) => (
  <sup id={`fn-ref-${n}`} className="ml-0.5">
    <a 
      href={`#footnote-${n}`}
      className="text-blue-600 hover:text-black transition-colors"
    >
      [{n}]
    </a>
  </sup>
);
