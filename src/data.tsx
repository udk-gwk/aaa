import React from 'react';
import { Article } from './types';
import { P } from './components/ArticleElements';

import { article as article1 } from './content/volume-1/01-noise';
import { article as article2 } from './content/volume-1/02-heilige-sohlen';
import { article as article3 } from './content/volume-1/03-pseudo-kunst';
import { article as article4 } from './content/volume-1/04-brainfood';
import { article as article5 } from './content/volume-1/05-skin-in-the-game';
import { article as article6 } from './content/volume-1/06-motivational-speech';
import { article as article7 } from './content/volume-1/07-glitched-skins';
import { article as article8 } from './content/volume-1/08-grow-a-beard';
import { article as article9 } from './content/volume-1/09-on-encountering';
import { article as article10 } from './content/volume-1/10-binary-machines';
import { article as article11 } from './content/volume-1/11-generating-the-identity-token';

export const articles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
  article11
];


export const contributors = [
  'Philipp Bieronski',
  'Yvon Chabrowski',
  'Holger Dölle',
  'Daniel Franke',
  'Klaus Gasteier',
  'Luis Küffner et al.',
  'Jana Möller Herm',
  'Dominikus Mucha',
  'Thomas Schildhauer',
  'Max Senges',
  'Zrinka Štimac',
  'Julia Thomas',
  'Maham Zahid'
];
