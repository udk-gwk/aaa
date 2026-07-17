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
    en: 'We are a collective of thinkers, artists, and engineers exploring the intersection of generative AI and contemporary aesthetics.',
    de: 'Wir sind ein Kollektiv aus Denkern, Künstlern und Ingenieuren, die die Schnittstelle von generativer KI und zeitgenössischer Ästhetik erforschen.'
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
