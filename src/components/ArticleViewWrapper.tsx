import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleView } from './ArticleView';
import { articles } from '../data';
import { Language } from '../types';

interface Props {
  lang: Language;
  onBack: () => void;
}

export function ArticleViewWrapper({ lang, onBack }: Props) {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen bg-white text-black">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  return <ArticleView article={article} lang={lang} onBack={onBack} />;
}
