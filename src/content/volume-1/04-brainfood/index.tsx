import React from "react";
import { Article } from "../../../types";
import {
  P,
  BigQuote,
  ArticleImage,
  Subheading,
  Fn,
} from "../../../components/ArticleElements";

// 01. BILDER AUTOMATISCH LADEN
// Vite sucht in diesem Ordner nach Bildern. Wenn ein Bild existiert, wird es verwendet, sonst der Platzhalter.
const localImages = import.meta.glob("./*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const getImg = (name: string, fallback: string) => {
  const key = Object.keys(localImages).find((k) => k.includes(name));
  return key ? (localImages[key] as string) : fallback;
};

const headerImg = getImg(
  "header",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
);
const img1 = getImg(
  "img1",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
);
const img2 = getImg(
  "img2",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);

// 02. BEITRAGS-DATEN UND INHALT DEFINIEREN
export const article: Article = {
  id: "art-4",
  volume: "Volume 1",
  title: {
    en: "Brainfood",
    de: "Brainfood",
  },
  author: "Max Senges, Thomas Schildhauer, Klaus Gasteier",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2493",

  headerImage: headerImg,

  excerpt: {
    en: "From toxic information fast food to fine dining for the mind.",
    de: "Vom toxischen Informations-Fast-Food zur Feinkost für den Geist.",
  },

  content: {
    en: (
      <>
        <Subheading>#BrainFood, Kreativität für das 21. Jahrhundert</Subheading>
        <ArticleImage
          src={img1}
          alt="Fritz Schüler"
          caption="Kognitiver Verarbeitungsprozess beim Betrachten eines Schlüssels; Fritz Schüler, 1926."
        />
        <Subheading>
          Von der Nahrung für den Körper zur Nahrung für den Geist
        </Subheading>
        <P>
          Wir leben in einer Kultur, in der es selbstverständlich ist, auf
          Zutatenlisten zu achten, auf Produktionsmethoden zu pochen und
          regulatorische Kontrolle bei physischen Lebensmitteln einzufordern.
          Wir haben erkannt, dass was wir essen, tief mit unserer Gesundheit,
          unserer Leistungsfähigkeit und unserem Wohlbefinden verbunden ist.
        </P>
        <P>
          Doch während wir beim Frühstück die Herkunft unserer Bio-Eier
          hinterfragen, schlucken wir geistig oft unreflektiert alles, was uns
          auf dem Smartphone serviert wird.
        </P>
        <P>
          Warum achten wir nicht mehr auf unser #BrainFood? Was wir lesen,
          hören, sehen und anklicken, sind „Nahrungsmittel“ für unser Gehirn;
          sie füttern unsere Emotionen, unsere Wertebildung. Es sind memetische
          Einheiten, Ideenpartikel, Narrative und Bilder, die – genau wie
          Kalorien – entweder nähren, verstopfen oder vergiften können.
        </P>
        <P>
          Und doch gibt es keine Inhaltsangabe, keine Qualitätssiegel, keine
          Grenzwerte für toxische Informationsaufnahme. Der
          Informationsstoffwechsel unserer Gesellschaft ist weitgehend
          dereguliert und schwer einer paternalistischen Regulierung sinnvoll
          unterwerfbar
          <Fn n={1} />. Und mit dem massenhaften Einsatz von
          algorithmisch-personalisierten und KI-generierten Inhalten erleben wir
          einen Wendepunkt, bei dem Vermarktung und Propaganda uns seuchenhaft
          und hoch professionell überschwemmen, während wir noch keine
          kognitiven Abwehrkräfte und ausreichende Sensibilisierungen dafür
          entwickelt haben.
        </P>
        <P>
          Die Metapher #BrainFood ist dabei mehr als ein Bild, denn sie
          behauptet einen prüfbaren Zusammenhang zwischen der Qualität unserer
          kognitiven Nahrung und unserer Urteilsfähigkeit. Damit wird unser
          Informationsstoffwechsel keine ästhetische oder Geschmacksfrage,
          sondern eine, von der unsere demokratische Praxis abhängt.
        </P>
        <Subheading>
          Die Gefahr: AI-SLOP, Manipulation und mediale Umweltverschmutzung
        </Subheading>
        <P>
          Derzeit sehen wir, wie Generative AI immer mehr für die Produktion
          dessen genutzt wird, was man als AI-SLOP bezeichnen kann:
          minderwertige Masseninhalte, Clickbait, SEO-Spam, synthetisierte
          Empörungs- oder Verführungsmechanismen. Wozu? Um Aufmerksamkeit zu
          binden, Verhalten zu manipulieren, Werbung zu streuen und Meinungen zu
          steuern
          <Fn n={2} />.
        </P>
        <P>
          Vor dieser Entwicklung wird eindrücklich gewarnt (Harari, 2018)
          <Fn n={3} />: KI könnte die bislang robustesten Bastionen menschlicher
          Freiheit – den eigenen Willen, die Meinungsbildung, die politische
          Urteilskraft – unterwandern. Nicht durch offensichtliche Angriffe,
          sondern durch subversives „Hacking the human mind“ – also durch
          präzise, algorithmisch gesteuerte Manipulation unserer Aufmerksamkeit,
          Emotionen und Narrative. Joseph Weizenbaum (MIT, 2008)
          <Fn n={4} /> brachte diese Sorge bereits Jahrzehnte früher auf den
          Punkt, als er davor warnte, dass der Mensch mit seiner zunehmenden
          Abhängigkeit von digitaler Technologie vor allem eines verliere: die
          Bereitschaft, als freier, verantwortlicher Akteur zu handeln.
          Stattdessen bediene er sich der Technologie, um der eigentlichen
          Aufgabe seines Daseins zu entkommen: dem Leben Bedeutung zu geben und
          das wahrhaft Wertvolle zu erkennen und zu verfolgen.
        </P>
        <P>
          Weizenbaums Einwand ist dabei kein utilitaristischer. Es geht ihm
          nicht darum, dass Maschinen schlechter urteilen, sondern um die
          Differenz zwischen kalkulierbarem Entscheiden und verantwortlichem
          Wählen. Manche Wahlakte sollten dem Rechner nicht überlassen werden,
          weil schon das Delegieren die Handlungsfähigkeit beschädigt.
        </P>
        <P>
          Wenn unsere digitale Informationsnahrung vergiftet ist, werden auch
          unsere Demokratien krank. Wenn meinungsprägende Inhalte zunehmend zu
          Clickbait-Simulacren entkernter Bedeutungen werden, wird auch
          Demokratie zu einem Simulacrum gesellschaftlichen Austauschs.
        </P>
        <P>
          Die gegenwärtige Dynamik gleicht einer medialen Umweltverschmutzung.
          Während Plastik die Ozeane bedroht, ist es nun auch massenhaft
          generierter Content, der unsere sozialen, emotionalen und kognitiven
          Ökosysteme überflutet. Was fehlt, sind offene Standards – nicht nur
          technische, sondern auch ethische. Und es bedarf eines fundamentalen
          Updates der Kriterien und Mechanismen der algorithmischen Kuratierung
          jener Plattformen, die uns diese SLOP-Überflutungen bescheren und
          darin zunehmend selbst KI-gesteuert sind.
        </P>
        <P>
          Gleichzeitig werden KI-basierte Werkzeuge vermehrt in wertschöpfenden
          Produktionsprozessen, insbesondere in Berufen eingesetzt, bei denen es
          um die Verarbeitung von Informationen, Wissen und oft die Gestaltung
          von Inhalten geht. Auf einen kritisch reflektierten, aber auch
          offenen, experimentell zugelassenen Einsatz müssen Menschen in diesen
          Arbeitsprozessen eingestellt und trainiert werden.
        </P>
        <Subheading>
          Die Chance: KI als Instrument der Augmentierung, nicht der Ersetzung
        </Subheading>
        <P>
          Wenn wir eine humanistische Konzeption von KI (Senges et al. 2025)
          <Fn n={5} /> ernst nehmen, dann begreifen wir Technologie nicht als
          Ersatz für menschliche Kreativität, Urteilskraft oder Emotion, sondern
          als Werkzeug der Augmentierung.
        </P>
        <P>
          Was aber heißt hier „humanistisch“? Dass KI dem Menschen nützt, ist
          noch kein humanistisches, sondern ein utilitaristisches Kriterium. Die
          humanistische Ökonomie setzt nach Pirson (2017)
          <Fn n={6} /> anders an. Der Zweck wirtschaftlichen Handelns ist es,
          Würde zu schützen und Wohlbefinden zu fördern. Nach Dierksmeier (2016)
          <Fn n={7} /> heißt Freiheit nicht, möglichst viele Optionen zu haben,
          sondern die richtigen wählen zu können (qualitative statt quantitative
          Freiheit). Daraus folgt ein prüfbares Kriterium: humanistisch ist ein
          KI-Einsatz, wenn er (a) Personen und die Befriedigung von deren
          Bedürfnissen als Raison d’être behandelt und Aufmerksamkeit nicht
          instrumentalisiert, (b) qualitative Freiheit und Urteilskraft
          erweitert, statt Reizdichte zu maximieren und (c) nicht-delegierbare
          Wahlakte respektiert (Weizenbaum)
          <Fn n={8} />. Gemessen daran ist AI-Slop nicht bloß „schlechte
          Qualität“, sondern der Paradefall anti-humanistischen Designs.
        </P>
        <P>
          Aber z. B. Howard Rheingold, Vordenker digital vernetzter
          Gemeinschaften, erinnerte schon früh daran, dass Technologie auch
          Räume schaffen kann, in denen Kooperation gedeiht. In seinen Büchern
          wie „Smart Mobs“ (2002) und „Mind Amplifier“ (2022)
          <Fn n={9} /> zeigt er, wie kollektive Intelligenz entstehen kann, wenn
          Menschen Technologien nicht konsumieren, sondern gestalten und
          gemeinsam nutzen. Diese Perspektive ist aktueller denn je. Wenn KI
          bewusst eingesetzt wird, kann sie eine Renaissance der Zusammenarbeit,
          der kulturellen Vielfalt und der schöpferischen Selbstwirksamkeit
          auslösen.
        </P>
        <P>
          KI kann helfen, die individuellen menschlichen Potenziale auf dem Weg
          zur/zum Künstler:in, Gestalter:in, Autor:in, Entrepreneur:in,
          Forscher:in nutzbar zu machen. Sie kann Ideen ordnen, Perspektiven
          schaffen, Routinen abnehmen, Inspiration bereitstellen. Sie kann
          Menschen ermächtigen, sich auf neue Weise Einzigartigkeit im Ausdruck
          anzueignen und dabei das Verständnis und die Wertigkeit von
          Diversität, Tiefe, Resonanz und Sinn auszubauen.
        </P>
        <P>
          Wenn wir es schaffen, den Großteil der KI-Nutzung in Richtung originär
          menschlich gesteuerter Kreativität zu verschieben, entsteht ein
          sozio-ökonomisches Renaissance-Momentum. Eine neue Wissensökonomie,
          deren Währung nicht Clicks, sondern Einsichten sind. Deren Rohstoffe
          nicht propagandistisch erhaschte Aufmerksamkeit und virtuell erzeugte
          Glücksmomente (Dopamin), sondern Verständnis und kooperative
          Produktivität (Peer-Production) sind. Ziel dieses sozio-ökonomischen,
          hybriden Ökosystems sollten Lebenskunst (das gute Leben) und Weisheit
          sein. Der Anspruch ist dabei nicht, den Menschen „wieder an den
          Drücker“ zu bringen (mehr Kontrolle). Es geht um den Wechsel der
          Zielgröße von quantitativer Optionsmaximierung hin zu qualitativer
          Freiheit im Sinne von Dierksmeiers Fähigkeit, das Richtige zu wählen.
        </P>
        <P>
          Eine zukunftsfähige Konzeption von #BrainFood sollte also nicht nur
          technisch, sondern kulturell, sozial und künstlerisch durchdrungen
          sein. Hier spielt Bildung in Schulen, Hochschulen und speziell
          Kunsthochschulen eine entscheidende Rolle. Sie sind nicht nur Orte der
          Gestaltung, sondern Laboratorien der kulturellen Sinnstiftung und
          Reflexion. Die von Richard Florida (2002)
          <Fn n={10} /> beschriebene „Creative Class“ ist Keimzelle jener
          kreativen Akteure, die Innovation nicht nur ökonomisch, sondern auch
          ethisch, ästhetisch und gesellschaftlich interpretiert
          <Fn n={11} />. In dieser Perspektive ist Künstliche Intelligenz, wenn
          sie richtig kultiviert wird, kein disruptives Werkzeug von außen,
          sondern ein integratives Medium, das neue Ausdrucksformen, neue
          Denkweisen und neue Formen der Kollaboration ermöglicht.
        </P>
        <P>
          Kunsthochschulen sollten daher die Avantgarde einer humanistischen
          KI-Kultur sein, indem sie forschendes Gestalten, interdisziplinäre
          Dialoge, neue Formen des kritischen Storytellings und die Erprobung
          von ko-kreativen Praktiken im Umgang mit KI-Systemen vorantreiben. Es
          braucht neue Curricula, die KI nicht nur als Tool, sondern als
          gesellschaftsgestaltende Kraft
          <Fn n={12} />, inklusive ihrer ästhetischen, politischen und sozialen
          Dimensionen, thematisieren.
        </P>
        <Subheading>
          Ein neues Paradigma für gehaltvolles BrainFood und kollektive
          psychologische Gesundheit
        </Subheading>
        <P>
          Um die beschriebenen Ziele zu erreichen, stellt sich die Frage, was
          wir konkret tun können, um Momentum für die Entwicklung in diese
          Richtung zu erzeugen.
        </P>
        <P>
          Wir brauchen selbstregulatorische #BrainFood-Qualitätsmechanismen und
          -kriterien für digitale Inhalte, vergleichbar mit Bio-Siegeln und
          Zutatenangaben
          <Fn n={13} />, um deren Intentionen und deren Wirkungen sichtbar zu
          machen. Hier können wir sowohl von Folksonomy-Tools wie del.icio.us,
          digg und peer-curated Content-Filtering-Systemen lernen
          <Fn n={14} /> (konkrete Überlegungen zum Design eines BrainFood
          Open-Peer-Review-Systems finden Sie im Epilog unter diesem Beitrag).
        </P>
        <P>
          Um BrainFood wirksam zu machen, braucht es außerdem Selbstkompetenz
          <Fn n={15} /> und Medienkompetenz, um unsere Nahrungsvorlieben
          kritisch zu reflektieren bzw. das Vorgesetzte zu bewerten.
        </P>
        <P>
          Wir sollten Plattformen, Tools und Trainings fördern, die kreative
          Ausdrucksformen, Selbstwirksamkeit und Ko-Kreation stärken.
        </P>
        <P>
          Bildungsinstitutionen – insbesondere Kunsthochschulen – sollten
          Trainingsräume schaffen, in denen eine humanistische Konzeption von KI
          praktisch erlernbar, gelebt und weiterentwickelt wird. Dies umfasst
          Haltung (Wofür setzen wir KI ein?), Perspektive (Wie verstehen wir
          Intelligenz, Kreativität, Verantwortung?) und Praxis (Wie gestalten
          wir human-centered KI-Werke und -Systeme?).
        </P>
        <P>
          Wir sollten speziell an Kunstuniversitäten emergente Generative KI als
          "Augmented Creation" aktiv mit Inspiration, Verwirbelung,
          Konfrontation und Provokation in die erkenntnisstiftende und
          selbstbestimmte Anwendung einführen. Jenseits einer Illusion, dass es
          in einer KI-beschleunigten Welt weiterhin durch Repetition erlernbare,
          generische, bleibende Rezepturen in stabilen Berufsbildern geben kann.
        </P>
        <P>
          Wir erarbeiten eine Diskussionsgrundlage für einen neuen
          Gesellschaftsvertrag zwischen Mensch und Maschine; namentlich den
          Ansatz The Alchemy of the Next Societal Operating System - An
          Invitation to peer-produce a Blueprint for Human Flourishing through
          Multistakeholder Missions & Playbooks in Education, Business and
          Democracy , der KI auf die Seite des positiv Schaffenden stellt: der
          psychischen Gesundheit, der schöpferischen Potentialentfaltung und der
          partizipativen Demokratie.
        </P>
        <Subheading>Einladung zur Mitgestaltung</Subheading>
        <P>
          Wir stehen an einem Scheideweg. Wollen wir eine Zukunft mit
          algorithmischem Fast Food – billig, süchtig machend, aber letztlich
          entmenschlichend? Oder ko-kreieren wir eine Zukunft, in der KI jeden
          Einzelnen ermächtigt, die kreativste, kooperativste, wertschöpfendste
          Version seiner selbst zu sein, eine Welt, in der #BrainFood bewusst
          kuratiert, kritisch reflektiert und immer wieder kreativ transformiert
          wird?
        </P>
        <P>
          Wir laden Sie ein, mit uns diesen Entwicklungspfad zu imaginieren und
          ganz praktisch zu erkunden. In Communities of Practice und dem
          GenKI-Lab an der UdK, in künstlerischen Experimenten, in Schulen,
          Startups und Universitäten; in Cafés und auf Konferenzen.
        </P>
        <P>
          Denn schon Admiral Rickover, Erbauer und Kommandeur der
          US-Atom-Flotte, schrieb 1965: “Humanistically viewed, technology is
          not an end in itself but a means to an end, the end being determined
          by man.”
          <Fn n={16} /> Wie wir Technologie gestalten, entscheidet, wie wir
          leben.
        </P>
        <P>
          Lasst uns KI nutzen, um zu lernen, um zu deliberieren und die besten
          Argumente zu finden und letztendlich um ausgewogenere Entscheidungen
          zu treffen und unsere gemeinsame Zukunftsreise zu gestalten
          (collective action).
        </P>
        <BigQuote source="">
          “Der Mensch ist, was er isst.” – Ludwig Feuerbach.
          Wir sind, womit wir unser Denken füttern.
          Let’s co-create and serve better BrainFood.
        </BigQuote>
      </>
    ),
    de: (
      <>
        <Subheading>#BrainFood, Kreativität für das 21. Jahrhundert</Subheading>
        <ArticleImage
          src={img1}
          alt="Fritz Schüler"
          caption="Kognitiver Verarbeitungsprozess beim Betrachten eines Schlüssels; Fritz Schüler, 1926."
        />
        <Subheading>
          Von der Nahrung für den Körper zur Nahrung für den Geist
        </Subheading>
        <P>
          Wir leben in einer Kultur, in der es selbstverständlich ist, auf
          Zutatenlisten zu achten, auf Produktionsmethoden zu pochen und
          regulatorische Kontrolle bei physischen Lebensmitteln einzufordern.
          Wir haben erkannt, dass was wir essen, tief mit unserer Gesundheit,
          unserer Leistungsfähigkeit und unserem Wohlbefinden verbunden ist.
        </P>
        <P>
          Doch während wir beim Frühstück die Herkunft unserer Bio-Eier
          hinterfragen, schlucken wir geistig oft unreflektiert alles, was uns
          auf dem Smartphone serviert wird.
        </P>
        <P>
          Warum achten wir nicht mehr auf unser #BrainFood? Was wir lesen,
          hören, sehen und anklicken, sind „Nahrungsmittel“ für unser Gehirn;
          sie füttern unsere Emotionen, unsere Wertebildung. Es sind memetische
          Einheiten, Ideenpartikel, Narrative und Bilder, die – genau wie
          Kalorien – entweder nähren, verstopfen oder vergiften können.
        </P>
        <P>
          Und doch gibt es keine Inhaltsangabe, keine Qualitätssiegel, keine
          Grenzwerte für toxische Informationsaufnahme. Der
          Informationsstoffwechsel unserer Gesellschaft ist weitgehend
          dereguliert und schwer einer paternalistischen Regulierung sinnvoll
          unterwerfbar
          <Fn n={1} />. Und mit dem massenhaften Einsatz von
          algorithmisch-personalisierten und KI-generierten Inhalten erleben wir
          einen Wendepunkt, bei dem Vermarktung und Propaganda uns seuchenhaft
          und hoch professionell überschwemmen, während wir noch keine
          kognitiven Abwehrkräfte und ausreichende Sensibilisierungen dafür
          entwickelt haben.
        </P>
        <P>
          Die Metapher #BrainFood ist dabei mehr als ein Bild, denn sie
          behauptet einen prüfbaren Zusammenhang zwischen der Qualität unserer
          kognitiven Nahrung und unserer Urteilsfähigkeit. Damit wird unser
          Informationsstoffwechsel keine ästhetische oder Geschmacksfrage,
          sondern eine, von der unsere demokratische Praxis abhängt.
        </P>
        <Subheading>
          Die Gefahr: AI-SLOP, Manipulation und mediale Umweltverschmutzung
        </Subheading>
        <P>
          Derzeit sehen wir, wie Generative AI immer mehr für die Produktion
          dessen genutzt wird, was man als AI-SLOP bezeichnen kann:
          minderwertige Masseninhalte, Clickbait, SEO-Spam, synthetisierte
          Empörungs- oder Verführungsmechanismen. Wozu? Um Aufmerksamkeit zu
          binden, Verhalten zu manipulieren, Werbung zu streuen und Meinungen zu
          steuern
          <Fn n={2} />.
        </P>
        <P>
          Vor dieser Entwicklung wird eindrücklich gewarnt (Harari, 2018)
          <Fn n={3} />: KI könnte die bislang robustesten Bastionen menschlicher
          Freiheit – den eigenen Willen, die Meinungsbildung, die politische
          Urteilskraft – unterwandern. Nicht durch offensichtliche Angriffe,
          sondern durch subversives „Hacking the human mind“ – also durch
          präzise, algorithmisch gesteuerte Manipulation unserer Aufmerksamkeit,
          Emotionen und Narrative. Joseph Weizenbaum (MIT, 2008)
          <Fn n={4} /> brachte diese Sorge bereits Jahrzehnte früher auf den
          Punkt, als er davor warnte, dass der Mensch mit seiner zunehmenden
          Abhängigkeit von digitaler Technologie vor allem eines verliere: die
          Bereitschaft, als freier, verantwortlicher Akteur zu handeln.
          Stattdessen bediene er sich der Technologie, um der eigentlichen
          Aufgabe seines Daseins zu entkommen: dem Leben Bedeutung zu geben und
          das wahrhaft Wertvolle zu erkennen und zu verfolgen.
        </P>
        <P>
          Weizenbaums Einwand ist dabei kein utilitaristischer. Es geht ihm
          nicht darum, dass Maschinen schlechter urteilen, sondern um die
          Differenz zwischen kalkulierbarem Entscheiden und verantwortlichem
          Wählen. Manche Wahlakte sollten dem Rechner nicht überlassen werden,
          weil schon das Delegieren die Handlungsfähigkeit beschädigt.
        </P>
        <P>
          Wenn unsere digitale Informationsnahrung vergiftet ist, werden auch
          unsere Demokratien krank. Wenn meinungsprägende Inhalte zunehmend zu
          Clickbait-Simulacren entkernter Bedeutungen werden, wird auch
          Demokratie zu einem Simulacrum gesellschaftlichen Austauschs.
        </P>
        <P>
          Die gegenwärtige Dynamik gleicht einer medialen Umweltverschmutzung.
          Während Plastik die Ozeane bedroht, ist es nun auch massenhaft
          generierter Content, der unsere sozialen, emotionalen und kognitiven
          Ökosysteme überflutet. Was fehlt, sind offene Standards – nicht nur
          technische, sondern auch ethische. Und es bedarf eines fundamentalen
          Updates der Kriterien und Mechanismen der algorithmischen Kuratierung
          jener Plattformen, die uns diese SLOP-Überflutungen bescheren und
          darin zunehmend selbst KI-gesteuert sind.
        </P>
        <P>
          Gleichzeitig werden KI-basierte Werkzeuge vermehrt in wertschöpfenden
          Produktionsprozessen, insbesondere in Berufen eingesetzt, bei denen es
          um die Verarbeitung von Informationen, Wissen und oft die Gestaltung
          von Inhalten geht. Auf einen kritisch reflektierten, aber auch
          offenen, experimentell zugelassenen Einsatz müssen Menschen in diesen
          Arbeitsprozessen eingestellt und trainiert werden.
        </P>
        <Subheading>
          Die Chance: KI als Instrument der Augmentierung, nicht der Ersetzung
        </Subheading>
        <P>
          Wenn wir eine humanistische Konzeption von KI (Senges et al. 2025)
          <Fn n={5} /> ernst nehmen, dann begreifen wir Technologie nicht als
          Ersatz für menschliche Kreativität, Urteilskraft oder Emotion, sondern
          als Werkzeug der Augmentierung.
        </P>
        <P>
          Was aber heißt hier „humanistisch“? Dass KI dem Menschen nützt, ist
          noch kein humanistisches, sondern ein utilitaristisches Kriterium. Die
          humanistische Ökonomie setzt nach Pirson (2017)
          <Fn n={6} /> anders an. Der Zweck wirtschaftlichen Handelns ist es,
          Würde zu schützen und Wohlbefinden zu fördern. Nach Dierksmeier (2016)
          <Fn n={7} /> heißt Freiheit nicht, möglichst viele Optionen zu haben,
          sondern die richtigen wählen zu können (qualitative statt quantitative
          Freiheit). Daraus folgt ein prüfbares Kriterium: humanistisch ist ein
          KI-Einsatz, wenn er (a) Personen und die Befriedigung von deren
          Bedürfnissen als Raison d’être behandelt und Aufmerksamkeit nicht
          instrumentalisiert, (b) qualitative Freiheit und Urteilskraft
          erweitert, statt Reizdichte zu maximieren und (c) nicht-delegierbare
          Wahlakte respektiert (Weizenbaum)
          <Fn n={8} />. Gemessen daran ist AI-Slop nicht bloß „schlechte
          Qualität“, sondern der Paradefall anti-humanistischen Designs.
        </P>
        <P>
          Aber z. B. Howard Rheingold, Vordenker digital vernetzter
          Gemeinschaften, erinnerte schon früh daran, dass Technologie auch
          Räume schaffen kann, in denen Kooperation gedeiht. In seinen Büchern
          wie „Smart Mobs“ (2002) und „Mind Amplifier“ (2022)
          <Fn n={9} /> zeigt er, wie kollektive Intelligenz entstehen kann, wenn
          Menschen Technologien nicht konsumieren, sondern gestalten und
          gemeinsam nutzen. Diese Perspektive ist aktueller denn je. Wenn KI
          bewusst eingesetzt wird, kann sie eine Renaissance der Zusammenarbeit,
          der kulturellen Vielfalt und der schöpferischen Selbstwirksamkeit
          auslösen.
        </P>
        <P>
          KI kann helfen, die individuellen menschlichen Potenziale auf dem Weg
          zur/zum Künstler:in, Gestalter:in, Autor:in, Entrepreneur:in,
          Forscher:in nutzbar zu machen. Sie kann Ideen ordnen, Perspektiven
          schaffen, Routinen abnehmen, Inspiration bereitstellen. Sie kann
          Menschen ermächtigen, sich auf neue Weise Einzigartigkeit im Ausdruck
          anzueignen und dabei das Verständnis und die Wertigkeit von
          Diversität, Tiefe, Resonanz und Sinn auszubauen.
        </P>
        <P>
          Wenn wir es schaffen, den Großteil der KI-Nutzung in Richtung originär
          menschlich gesteuerter Kreativität zu verschieben, entsteht ein
          sozio-ökonomisches Renaissance-Momentum. Eine neue Wissensökonomie,
          deren Währung nicht Clicks, sondern Einsichten sind. Deren Rohstoffe
          nicht propagandistisch erhaschte Aufmerksamkeit und virtuell erzeugte
          Glücksmomente (Dopamin), sondern Verständnis und kooperative
          Produktivität (Peer-Production) sind. Ziel dieses sozio-ökonomischen,
          hybriden Ökosystems sollten Lebenskunst (das gute Leben) und Weisheit
          sein. Der Anspruch ist dabei nicht, den Menschen „wieder an den
          Drücker“ zu bringen (mehr Kontrolle). Es geht um den Wechsel der
          Zielgröße von quantitativer Optionsmaximierung hin zu qualitativer
          Freiheit im Sinne von Dierksmeiers Fähigkeit, das Richtige zu wählen.
        </P>
        <P>
          Eine zukunftsfähige Konzeption von #BrainFood sollte also nicht nur
          technisch, sondern kulturell, sozial und künstlerisch durchdrungen
          sein. Hier spielt Bildung in Schulen, Hochschulen und speziell
          Kunsthochschulen eine entscheidende Rolle. Sie sind nicht nur Orte der
          Gestaltung, sondern Laboratorien der kulturellen Sinnstiftung und
          Reflexion. Die von Richard Florida (2002)
          <Fn n={10} /> beschriebene „Creative Class“ ist Keimzelle jener
          kreativen Akteure, die Innovation nicht nur ökonomisch, sondern auch
          ethisch, ästhetisch und gesellschaftlich interpretiert
          <Fn n={11} />. In dieser Perspektive ist Künstliche Intelligenz, wenn
          sie richtig kultiviert wird, kein disruptives Werkzeug von außen,
          sondern ein integratives Medium, das neue Ausdrucksformen, neue
          Denkweisen und neue Formen der Kollaboration ermöglicht.
        </P>
        <P>
          Kunsthochschulen sollten daher die Avantgarde einer humanistischen
          KI-Kultur sein, indem sie forschendes Gestalten, interdisziplinäre
          Dialoge, neue Formen des kritischen Storytellings und die Erprobung
          von ko-kreativen Praktiken im Umgang mit KI-Systemen vorantreiben. Es
          braucht neue Curricula, die KI nicht nur als Tool, sondern als
          gesellschaftsgestaltende Kraft
          <Fn n={12} />, inklusive ihrer ästhetischen, politischen und sozialen
          Dimensionen, thematisieren.
        </P>
        <Subheading>
          Ein neues Paradigma für gehaltvolles BrainFood und kollektive
          psychologische Gesundheit
        </Subheading>
        <P>
          Um die beschriebenen Ziele zu erreichen, stellt sich die Frage, was
          wir konkret tun können, um Momentum für die Entwicklung in diese
          Richtung zu erzeugen.
        </P>
        <P>
          Wir brauchen selbstregulatorische #BrainFood-Qualitätsmechanismen und
          -kriterien für digitale Inhalte, vergleichbar mit Bio-Siegeln und
          Zutatenangaben
          <Fn n={13} />, um deren Intentionen und deren Wirkungen sichtbar zu
          machen. Hier können wir sowohl von Folksonomy-Tools wie del.icio.us,
          digg und peer-curated Content-Filtering-Systemen lernen
          <Fn n={14} /> (konkrete Überlegungen zum Design eines BrainFood
          Open-Peer-Review-Systems finden Sie im Epilog unter diesem Beitrag).
        </P>
        <P>
          Um BrainFood wirksam zu machen, braucht es außerdem Selbstkompetenz
          <Fn n={15} /> und Medienkompetenz, um unsere Nahrungsvorlieben
          kritisch zu reflektieren bzw. das Vorgesetzte zu bewerten.
        </P>
        <P>
          Wir sollten Plattformen, Tools und Trainings fördern, die kreative
          Ausdrucksformen, Selbstwirksamkeit und Ko-Kreation stärken.
        </P>
        <P>
          Bildungsinstitutionen – insbesondere Kunsthochschulen – sollten
          Trainingsräume schaffen, in denen eine humanistische Konzeption von KI
          praktisch erlernbar, gelebt und weiterentwickelt wird. Dies umfasst
          Haltung (Wofür setzen wir KI ein?), Perspektive (Wie verstehen wir
          Intelligenz, Kreativität, Verantwortung?) und Praxis (Wie gestalten
          wir human-centered KI-Werke und -Systeme?).
        </P>
        <P>
          Wir sollten speziell an Kunstuniversitäten emergente Generative KI als
          "Augmented Creation" aktiv mit Inspiration, Verwirbelung,
          Konfrontation und Provokation in die erkenntnisstiftende und
          selbstbestimmte Anwendung einführen. Jenseits einer Illusion, dass es
          in einer KI-beschleunigten Welt weiterhin durch Repetition erlernbare,
          generische, bleibende Rezepturen in stabilen Berufsbildern geben kann.
        </P>
        <P>
          Wir erarbeiten eine Diskussionsgrundlage für einen neuen
          Gesellschaftsvertrag zwischen Mensch und Maschine; namentlich den
          Ansatz The Alchemy of the Next Societal Operating System - An
          Invitation to peer-produce a Blueprint for Human Flourishing through
          Multistakeholder Missions & Playbooks in Education, Business and
          Democracy , der KI auf die Seite des positiv Schaffenden stellt: der
          psychischen Gesundheit, der schöpferischen Potentialentfaltung und der
          partizipativen Demokratie.
        </P>
        <Subheading>Einladung zur Mitgestaltung</Subheading>
        <P>
          Wir stehen an einem Scheideweg. Wollen wir eine Zukunft mit
          algorithmischem Fast Food – billig, süchtig machend, aber letztlich
          entmenschlichend? Oder ko-kreieren wir eine Zukunft, in der KI jeden
          Einzelnen ermächtigt, die kreativste, kooperativste, wertschöpfendste
          Version seiner selbst zu sein, eine Welt, in der #BrainFood bewusst
          kuratiert, kritisch reflektiert und immer wieder kreativ transformiert
          wird?
        </P>
        <P>
          Wir laden Sie ein, mit uns diesen Entwicklungspfad zu imaginieren und
          ganz praktisch zu erkunden. In Communities of Practice und dem
          GenKI-Lab an der UdK, in künstlerischen Experimenten, in Schulen,
          Startups und Universitäten; in Cafés und auf Konferenzen.
        </P>
        <P>
          Denn schon Admiral Rickover, Erbauer und Kommandeur der
          US-Atom-Flotte, schrieb 1965: “Humanistically viewed, technology is
          not an end in itself but a means to an end, the end being determined
          by man.”
          <Fn n={16} /> Wie wir Technologie gestalten, entscheidet, wie wir
          leben.
        </P>
        <P>
          Lasst uns KI nutzen, um zu lernen, um zu deliberieren und die besten
          Argumente zu finden und letztendlich um ausgewogenere Entscheidungen
          zu treffen und unsere gemeinsame Zukunftsreise zu gestalten
          (collective action).
        </P>
        <BigQuote source="">
          “Der Mensch ist, was er isst.” – Ludwig Feuerbach.
          Wir sind, womit wir unser Denken füttern.
          Let’s co-create and serve better BrainFood.
        </BigQuote>
      </>
    ),
  },

  footnotes: {
    en: [
      "Oder dieses Phänomen zynisch in der Gen-Z/A-Memekultur mit eigenen Waffen zu reflektieren, es aber damit allerdings auch zu verstärken.",
      "Peck (2005) hat gezeigt, dass Floridas Kausalthese (kreative Klasse führt zu wirtschaftlichem Wachstum) empirisch ungesichert bleibt; wir beziehen uns folglich nur auf die Beobachtung, dass kreative Tätigkeit ökonomisch an Gewicht gewinnt.",
      "Wie z.B. die Hochschule für Gesellschaftsgestaltung: https://de.wikipedia.org/wiki/Hochschule_für_Gesellschaftsgestaltung",
      "Eine Liste typischer repräsentativer Online-Inhalte könnte auf Lebensmittel gemappt werden, z.B. Fakten für kritische politische Meinungsbildung ist das tägliche Wasser – 3 Liter reichen, Youtube-Schulungen zu einem Fachthema ist wie Salat – gut für die Verdauung.",
      "Collaborative Tagging @ sciencedirect, wikipedia.org WOT_Services, wikipedia.org/Delicious",
      "Achtsamkeit, emotionale Intelligenz, also die Fähigkeiten, die eigene Bedürfnisse und Emotionen besser erkennen und benennen zu können, um weniger manipulierbar zu sein und gleichzeitig auch z.B. die eigene Kreativität zu fördern.",
      "z.B. https://www.w3.org/TR/did-1.0/",
      "Buterin, V. (2021). Moving beyond coin voting governance.",
      "Dierksmeier, C. (2016). Qualitative Freiheit. Bielefeld: transcript.",
      "Florida, R. (2002). The rise of the creative class (Vol. 9). New York: Basic books.",
      "Frontiers in Blockchain (2025). Delegated voting in DAOs: a scoping review.",
      "Harari, Y. N. (2018). 21 Lessons for the 21st Century. Spiegel & Grau.",
      "Komlos, J. (2021). Humanistic economics, a new paradigm for the 21st century. RWER 96.",
      "Lutz, M. A. (1999). Economics for the Common Good. Routledge (sowie Lutz & Lux 1979).",
      "MIT (2008) Joseph Weizenbaum, professor emeritus of computer science, 85. https://news.mit.edu/newsoffice/2008/techtalk52-19.pdf",
      "Ostrom, E. (1990). Governing the Commons. Cambridge University Press.",
    ],
    de: [
      "Oder dieses Phänomen zynisch in der Gen-Z/A-Memekultur mit eigenen Waffen zu reflektieren, es aber damit allerdings auch zu verstärken.",
      "Peck (2005) hat gezeigt, dass Floridas Kausalthese (kreative Klasse führt zu wirtschaftlichem Wachstum) empirisch ungesichert bleibt; wir beziehen uns folglich nur auf die Beobachtung, dass kreative Tätigkeit ökonomisch an Gewicht gewinnt.",
      "Wie z.B. die Hochschule für Gesellschaftsgestaltung: https://de.wikipedia.org/wiki/Hochschule_für_Gesellschaftsgestaltung",
      "Eine Liste typischer repräsentativer Online-Inhalte könnte auf Lebensmittel gemappt werden, z.B. Fakten für kritische politische Meinungsbildung ist das tägliche Wasser – 3 Liter reichen, Youtube-Schulungen zu einem Fachthema ist wie Salat – gut für die Verdauung.",
      "Collaborative Tagging @ sciencedirect, wikipedia.org WOT_Services, wikipedia.org/Delicious",
      "Achtsamkeit, emotionale Intelligenz, also die Fähigkeiten, die eigene Bedürfnisse und Emotionen besser erkennen und benennen zu können, um weniger manipulierbar zu sein und gleichzeitig auch z.B. die eigene Kreativität zu fördern.",
      "z.B. https://www.w3.org/TR/did-1.0/",
      "Buterin, V. (2021). Moving beyond coin voting governance.",
      "Dierksmeier, C. (2016). Qualitative Freiheit. Bielefeld: transcript.",
      "Florida, R. (2002). The rise of the creative class (Vol. 9). New York: Basic books.",
      "Frontiers in Blockchain (2025). Delegated voting in DAOs: a scoping review.",
      "Harari, Y. N. (2018). 21 Lessons for the 21st Century. Spiegel & Grau.",
      "Komlos, J. (2021). Humanistic economics, a new paradigm for the 21st century. RWER 96.",
      "Lutz, M. A. (1999). Economics for the Common Good. Routledge (sowie Lutz & Lux 1979).",
      "MIT (2008) Joseph Weizenbaum, professor emeritus of computer science, 85. https://news.mit.edu/newsoffice/2008/techtalk52-19.pdf",
      "Ostrom, E. (1990). Governing the Commons. Cambridge University Press.",
      "Peck, J. (2005). Struggling with the Creative Class. IJURR 29(4), 740–770.",
      "Pirson, M. (2017). Humanistic Management. Cambridge University Press.",
      "Rheingold, H. (2002). Smart mobs: The new social revolution. Perseus Publishing.",
      "Rheingold, H. (2022). Mind amplifier: Can our digital tools make us smarter?. Stillpoint Digital Press.",
      "Rickover (1965) A Humanistic Technology, American Behavioral Scientist, 8:5 p.3.",
      "Sacchetti, S. & Tortia, E. (2024). A needs theory of governance. JOIE 20.",
      "Senges, M. et al. (2025). KI zur Potentialentfaltung. IEB, UdK. SSRN: ssrn.com/abstract=5501838",
      "Weizenbaum, J. (1976). Computer Power and Human Reason. Freeman.",
    ],
  },
  authorBio: {
    en: ( 
      <>
        Prof. Dr. Max Senges ist diplomierter Wirtschaftsinformatiker (Technische Hochschule Wildau), promovierter Philosoph (UOC Barcelona) und nun Gastprofessor für Entrepreneurship an der UdK. Außerdem leitet er das UdK An-Institut IEB. 
        <br /><br />
        Prof. Dr. Dr. Thomas Schildhauer - Informatiker, Marketingexperte und Internetforscher – ist Direktor am Alexander von Humboldt Institut für Internet und Gesellschaft, sowie Direktor am Weizenbaum Institut. Er war von 2002-2026 UdK-Professor am Lehrstuhl für Electronic Business mit Schwerpunkt Marketing und von 2007-2026 außerdem Geschäftsführender Direktor des UdK Zentralinstituts für Weiterbildung und Transfer (ZIWT). 
        <br /><br />
        Prof. Klaus Gasteier gründete das UdK GenKI Lab und ist der UdK Beauftragte für Künstliche Intelligenz. Er lehrt seit 2008 an der Fakultät Gestaltung im Studiengang GWK an der UdK Berlin das Fachgebiet Neue Medien. Zuvor war er Professor für Interaktionsdesign an der FH Aachen, Fachbereich Design.
      </> 
    ),
    de: ( 
      <>
        Prof. Dr. Max Senges ist diplomierter Wirtschaftsinformatiker (Technische Hochschule Wildau), promovierter Philosoph (UOC Barcelona) und nun Gastprofessor für Entrepreneurship an der UdK. Außerdem leitet er das UdK An-Institut IEB. 
        <br /><br />
        Prof. Dr. Dr. Thomas Schildhauer - Informatiker, Marketingexperte und Internetforscher – ist Direktor am Alexander von Humboldt Institut für Internet und Gesellschaft, sowie Direktor am Weizenbaum Institut. Er war von 2002-2026 UdK-Professor am Lehrstuhl für Electronic Business mit Schwerpunkt Marketing und von 2007-2026 außerdem Geschäftsführender Direktor des UdK Zentralinstituts für Weiterbildung und Transfer (ZIWT). 
        <br /><br />
        Prof. Klaus Gasteier gründete das UdK GenKI Lab und ist der UdK Beauftragte für Künstliche Intelligenz. Er lehrt seit 2008 an der Fakultät Gestaltung im Studiengang GWK an der UdK Berlin das Fachgebiet Neue Medien. Zuvor war er Professor für Interaktionsdesign an der FH Aachen, Fachbereich Design.
      </> 
    ),
  },
  keywords: {
    en: [
      "Brain Food",
      "AI Slop",
      "Humanistic AI",
      "Augmentation",
      "Media Literacy",
      "Information Diet",
      "Filter Sovereignty",
      "Peer Production",
      "Digital Democracy",
      "Joseph Weizenbaum",
      "Elinor Ostrom",
      "Commons Governance",
      "Art Education",
    ],
    de: [
      "BrainFood",
      "KI-Slop",
      "Humanistische KI",
      "Augmentierung",
      "Medienkompetenz",
      "Informationsdiät",
      "Filtersouveränität",
      "Peer-Production",
      "Digitale Demokratie",
      "Joseph Weizenbaum",
      "Elinor Ostrom",
      "Commons",
      "Kunsthochschule",
    ],
  },
  documents: [
    {
      name: "Brainfood.pdf",
      url: "/Brainfood.pdf",
      doi: "https://doi.org/10.25624/kuenste-2493",
    },
  ],
};
