import React from 'react';

export type Language = 'en' | 'de';

export interface ArticleDocument {
  name: string;
  url: string;
  doi: string;
}

export interface Article {
  id: string;
  volume: string;
  title: Record<Language, string>;
  author: string;
  date: string;
  doi: string;
  headerImage: string;
  headerVideo?: string;
  excerpt: Record<Language, string>;
  content: Record<Language, React.ReactNode>;
  footnotes: Record<Language, string[]>;
  authorBio: Record<Language, string>;
  keywords: Record<Language, string[]>;
  documents?: ArticleDocument[];
}
