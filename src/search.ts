import React from 'react';
import { Article, Language } from './types';
import { translations } from './i18n';
import { aboutContent } from './content/about';
import { contactContent } from './content/contact';
import { imprintContent } from './content/imprint';
import { privacyContent } from './content/privacy';
import { openCallContent } from './content/open-call';

export interface SearchDocument {
  id: string;
  title: string;
  meta: string;
  text: string;
  href: string;
  normalizedTitle: string;
  normalizedMeta: string;
  normalizedText: string;
}

export interface SearchResult extends SearchDocument {
  snippet: string;
}

// Read the text from the existing JSX content, including captions and quotes,
// without mounting articles or loading their images, videos and embeds.
export function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join(' ');
  if (!React.isValidElement(node)) return '';

  const props = node.props as {
    children?: React.ReactNode;
    caption?: string;
    source?: string;
    alt?: string;
    dangerouslySetInnerHTML?: { __html: string };
  };

  return [
    getNodeText(props.children),
    props.caption,
    props.source,
    props.alt,
    props.dangerouslySetInnerHTML?.__html
  ].filter(Boolean).join(' ');
}

function plainText(text: string): string {
  return text.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

export function normalizeSearchText(text: string): string {
  return text.toLocaleLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/ß/g, 'ss');
}

export function createSearchIndex(articles: Article[], contributors: string[], lang: Language): SearchDocument[] {
  const t = translations[lang];
  const documents: Array<Pick<SearchDocument, 'id' | 'title' | 'meta' | 'text' | 'href'>> = articles.map((article) => ({
    id: article.id,
    title: article.title[lang],
    meta: `${article.author} — ${article.volume}`,
    text: [
      article.excerpt[lang],
      getNodeText(article.content[lang]),
      getNodeText(article.authorBio[lang]),
      ...article.keywords[lang],
      ...article.footnotes[lang]
    ].join(' '),
    href: `/article/${article.id}`
  }));

  documents.push(
    { id: 'editorial', title: t.editorial, meta: t.magazine, text: `${t.editorialTitle} ${t.editorialLong}`, href: '/#editorial' },
    { id: 'volume-1', title: `Current Volume — ${t.volume1}`, meta: t.magazine, text: articles.map((article) => `${article.title[lang]} ${article.author}`).join(' '), href: '/#volume-1' },
    { id: 'contributors', title: t.contributors, meta: t.magazine, text: contributors.join(', '), href: '/#contributors' },
    {
      id: 'open-call', title: 'Open Call', meta: t.submitTitle,
      text: [openCallContent[lang].introduction, openCallContent[lang].guidelinesTitle, ...openCallContent[lang].guidelines.map((item) => `${item.label}: ${item.text}`)].join(' '),
      href: '/open-call'
    },
    {
      id: 'about', title: t.aboutUs, meta: 'Art, Aesthetics and AI',
      text: [aboutContent.description[lang], ...aboutContent.team.map((person) => `${person.name} ${person.role[lang]} ${person.bio[lang]}`)].join(' '),
      href: '/about'
    }
  );

  for (const [id, content] of [['contact', contactContent], ['imprint', imprintContent], ['privacy', privacyContent]] as const) {
    documents.push({
      id, title: content.title[lang], meta: 'Art, Aesthetics and AI',
      text: content.blocks[lang].map((block) => `${block.heading ?? ''} ${block.text}`).join(' '),
      href: `/${id}`
    });
  }

  return documents.map((document) => {
    const text = plainText(document.text);
    return {
      ...document,
      text,
      normalizedTitle: normalizeSearchText(document.title),
      normalizedMeta: normalizeSearchText(document.meta),
      normalizedText: normalizeSearchText(text)
    };
  });
}

export function searchDocuments(documents: SearchDocument[], query: string): SearchResult[] {
  const terms = normalizeSearchText(query).trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return documents
    .filter((document) => terms.every((term) => `${document.normalizedTitle} ${document.normalizedMeta} ${document.normalizedText}`.includes(term)))
    .map((document) => {
      const score = terms.reduce((total, term) => total + (document.normalizedTitle.includes(term) ? 4 : 0) + (document.normalizedMeta.includes(term) ? 2 : 0), 0);
      const matchIndex = Math.max(0, document.normalizedText.indexOf(terms[0]));
      let start = Math.max(0, matchIndex - 65);
      if (start > 0) {
        const boundary = document.text.indexOf(' ', start);
        if (boundary !== -1 && boundary < matchIndex) start = boundary + 1;
      }
      const end = Math.min(document.text.length, start + 230);
      const snippet = `${start > 0 ? '…' : ''}${document.text.slice(start, end).trim()}${end < document.text.length ? '…' : ''}`;
      return { ...document, score, snippet };
    })
    .sort((a, b) => b.score - a.score);
}
