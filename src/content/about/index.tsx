export interface Person {
  id: string;
  name: string;
  role: {
    en: string;
    de: string;
  };
  bio: {
    en: string;
    de: string;
  };
  image?: string;
}

export const aboutContent = {
  title: {
    en: 'About Us',
    de: 'Über uns'
  },
  description: {
    en: 'Art, Aesthetics and AI (AAA) is a digital magazine by the Berlin University of the Arts focusing on artistic, design-based, and cultural-theoretical investigations of artificial intelligence.<br />It approaches the current challenges—especially those accompanying generative AI in terms of art, creativity, authorship, the description of reality, and responsibility—critically and constructively. AAA sees itself as a space of possibility to practically interweave human intuition and machine prediction, scientific research and vectorial pattern recognition, play and mind games—or to let them clash in inspiring ways.<br /><br />Founded in 2026 in the environment of the GenAI Lab at the Berlin University of the Arts around Prof. Klaus Gasteier. The editorial team consists of Daniel Franke, Prof. Christiane Kühl, Dominikus Mucha, and Prof. Dr. Max Senges, supported by Philipp Kastorff. AAA has an ongoing Open Call for contributions – more information <a href="/#open-call" class="underline hover:text-black transition-colors">here</a>. The next issue is planned for Winter 2026.',
    
    de: 'Art, Aesthetics and AI (AAA) ist ein digitales Magazin der Universität der Künste Berlin mit Fokus auf künstlerische, gestalterische und kulturtheoretische Untersuchungen künstlicher Intelligenz.<br />Den aktuellen Herausforderungen, die besonders mit generativer KI für Kunst, Kreativität, Autorschaft, Realitätsbeschreibung und Verantwortung einhergehen, begegnet es kritisch und konstruktiv. AAA versteht sich als Möglichkeitsraum, menschliche Intuition und maschinelle Vorhersage, wissenschaftliche Recherche und vektorielle Mustererkennung, Spiel und Denkspiel praktisch zusammenzuweben – oder auch inspirierend clashen zu lassen.<br /><br />2026 gegründet im Umfeld des GenKI Labs der Universität der Künste um Prof. Klaus Gasteier. Der Redaktion gehören Daniel Franke, Prof. Christiane Kühl, Dominikus Mucha und Prof. Dr. Max Senges an, Philipp Kastorff unterstützt. AAA hat einen laufenden Open Call für Beiträge – Infos dazu <a href="/#open-call" class="underline hover:text-black transition-colors">hier</a>. Die nächste Ausgabe ist für den Winter 2026 geplant.'
  },
  team: [
    {
      id: 'person-1',
      name: 'Daniel Franke',
      role: {
        en: 'Editorial Board',
        de: 'Redaktion'
      },
      bio: {
        en: 'Artist and Research Associate GenKI Lab // UdK Berlin',
        de: 'Künstler und wissenschaftlicher Mitarbeiter GenKI Lab // UdK Berlin'
      }
    },
    {
      id: 'person-2',
      name: 'Christiane Kühl',
      role: {
        en: 'Editorial Board',
        de: 'Redaktion'
      },
      bio: {
        en: 'Visiting Professor of Interdisciplinary Artistic Practice and Theory // Studium Generale',
        de: 'Gastprofessorin für Interdisziplinäre künstlerische Praxis und Theorie // Studium Generale'
      }
    },
    {
      id: 'person-3',
      name: 'Dominikus Mucha',
      role: {
        en: 'Editorial Board',
        de: 'Redaktion'
      },
      bio: {
        en: 'Research Associate New Media (GWK) // GenKI Lab',
        de: 'Wissenschaftlicher Mitarbeiter Neue Medien (GWK) // GenKI Lab'
      }
    },
    {
      id: 'person-4',
      name: 'Max Senges',
      role: {
        en: 'Editorial Board',
        de: 'Redaktion'
      },
      bio: {
        en: 'Visiting Professor and Director of the Institute of Electronic Business',
        de: 'Gastprofessor und Direktor Institute of Electronic Business'
      }
    },
        {
      id: 'person-5',
      name: 'Philipp Kasdorff',
      role: {
        en: 'Assistance',
        de: 'Mitarbeit'
      },
      bio: {
        en: 'Student assistant GenKi Lab',
        de: 'Studentischer Mitarbeiter GenKi Lab'
      }
    }
  ] as Person[]
};
