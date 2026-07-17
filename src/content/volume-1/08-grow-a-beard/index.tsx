import React from "react";
import { Article } from "../../../types";
import {
  P,
  BigQuote,
  ArticleImage,
  Subheading,
  Fn,
} from "../../../components/ArticleElements";

// 01. BILDER UND VIDEOS AUTOMATISCH LADEN
// Vite sucht in diesem Ordner nach Dateien.
const localImages = import.meta.glob("./*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const localVideos = import.meta.glob("./*.{mp4,webm}", {
  eager: true,
  import: "default",
});

const getImg = (name: string, fallback: string) => {
  const key = Object.keys(localImages).find((k) => k.includes(name));
  return key ? (localImages[key] as string) : fallback;
};

const getVideo = (name: string) => {
  const key = Object.keys(localVideos).find((k) => k.includes(name));
  return key ? (localVideos[key] as string) : undefined;
};

const headerImg = getImg(
  "header",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2835&auto=format&fit=crop",
);
const headerVid = getVideo("header");
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
  id: "art-8",
  volume: "Volume 1",
  title: {
    en: "Grow a beard. Poison your digital twin. Listen to Jazz.",
    de: "Grow a beard. Poison your digital twin. Listen to Jazz.",
  },
  author: "Dominikus Mucha",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2495",

  headerImage: headerImg,
  headerVideo: headerVid,

  excerpt: {
    en: "Become the intentional dissonance in the symphony of algorithms.",
    de: "Werde zum absichtlichen Störklang in der Symphonie der Algorithmen.",
  },

  content: {
    en: (
      <>
        <P>
          [Redaktionelle Anmerkung: Verfasst in Zusammenarbeit mit Claude
          (Anthropic). Dies ist eine Denkfigur, kein Bauplan oder Prompt für
          einen Coding-Agent. Die inhaltliche Verantwortung liegt allein beim
          Autor.]
        </P>
        <Subheading>
          Über digitale Doppelgänger, automatisierte Biografie und die Kunst,
          falsch zu spielen
        </Subheading>
        <P>
          Wer kennt das nicht: Man steht an einem Schalter, reicht ein Dokument,
          und der Mensch dahinter schaut es an, schaut einen an, schaut wieder
          aufs Dokument. Und wer kennt nicht das Gefühl der Erleichterung, wenn
          der Abgleich erfolgreich war. Oder das mulmige, wenn der Vergleich
          scheitert.
        </P>
        <P>
          Vor allem in Situationen, wenn man seinen Führerschein vorzeigen muss.
          Dann schaut in meinem Fall ein glattes, bartloses Gesicht zurück – das
          Führerschein-Bubi-Face. Doch in persona steht da nun ein anderes
          Gesicht, verborgen hinter dem, was ich gerne meinen Reisepass-Bart
          nenne. Menschen, selbst Polizisten, kann man das meist noch irgendwie
          erklären. Aber biometrischen Systemen? Maschinen verlangen zwingend
          Kohärenz. Und Kohärenz ist genau das, was man manchmal eben nicht
          liefert.
        </P>
        <P>
          An der Einwanderungskontrolle in New York führt das zu einer
          freundlichen, aber bestimmten Aufforderung, zur Seite zu treten. Man
          wird nicht verhaftet, man wird kalibriert. Das Gesicht wird mit der
          Akte abgeglichen, das Dokument mit der Datenbank, der Körper mit dem
          gespeicherten Modell. Was dabei eigentlich geprüft wird, ist nicht die
          Identität. Es ist die Kohärenz des Profils.
        </P>
        <P>
          Um eindeutig auf Nummer sicher zu gehen, dass ich auch ich bin,
          verschickte LinkedIn vor Kurzem eine besonders freundliche
          Benachrichtigung: Hey, du hast viele Profilbesucher in dieser Woche.
          Verifiziere jetzt deine Identität! Das ist in etwa so plump wie: Ich
          schmeichle dir – jetzt her damit. Doch wozu? Upload des Reisepasses
          inklusive aller biometrischen Daten an ein Unternehmen, das enge
          Verbindungen zu Palantir Technologies unterhält – gegründet von Peter
          Thiel, mitfinanziert durch In-Q-Tel (die Venture-Capital-Tochter der
          CIA), Hauptauftragnehmer für Datenanalyse bei westlichen
          Geheimdiensten und Strafverfolgungsbehörden, aktiver Bieter für
          staatliche KI-Infrastrukturprojekte auf mehreren Kontinenten. Das
          Geflecht ist nicht Verschwörungstheorie – es ist öffentlich, es ist
          dokumentiert,
          <Fn n={1} /> es wird nur selten zusammen gelesen. Können “die” etwa
          besser verifizieren, wer ich bin, als ich selbst? Und wozu behalten
          “die” sich das Recht vor, meine Daten auf unbestimmte Zeiten zu
          speichern, wenn das im nationalen Interesse der USA sein könnte?
        </P>
        <P>
          Ihr könnt euch denken, was ich in so einem Fall rate zu tun: Einen
          Teufel.
        </P>
        <Subheading>Das Simulacrum läuft dir voraus</Subheading>
        <P>
          Vilém Flusser beschrieb in Für eine Philosophie der Fotografie, wie
          das technische Bild kein Abbild der Welt ist, sondern ein Produkt des
          Apparats. Das Programm des Apparats bestimmt, was sichtbar werden
          kann. Das Passfoto ist kein Porträt – es ist ein Datenpunkt, der in
          ein System eingespeist wird
          <Fn n={2} />. Das Biometriegerät an der Grenze fragt nicht Wer bist
          du? Es fragt: Stimmt dein Gesicht mit dem überein, das wir gespeichert
          haben?
        </P>
        <P>
          Jean Baudrillard wäre entzückt gewesen. In Simulacres et Simulation
          beschreibt er, wie das Modell der Realität vorausgeht – die Karte
          existiert vor dem Territorium.
          <Fn n={3} /> Übertragen: Der digitale Zwilling – jenes statistische
          Aggregat aus Datenpunkten, Verhaltensmustern, Transaktionen und
          Metadaten, das uns in den Datenbanken von Plattformkonzernen
          repräsentiert – ist kein Abbild mehr. Er ist Antezedens. Er geht
          voraus, als ein nulldimensionales Konstrukt im Flusser’schen Sinn: das
          Selbst, zerlegt in Punktelemente und aus deren Verdichtung neu
          zusammengeballt.
          <Fn n={4} /> Er entscheidet, welche Werbung man sieht, zu welchen
          Konditionen man einen Kredit bekommt, ob man als vertrauenswürdig
          klassifiziert wird. Der Mensch hechelt dem Modell hinterher, das ihn
          längst abgelöst hat.
        </P>
        <P>
          Deleuze hat in seinem kurzen, heute prophetisch wirkenden Postskriptum
          über die Kontrollgesellschaften die Verschiebung von Foucaults
          Disziplinargesellschaft zur Kontrollgesellschaft beschrieben: Statt
          Mauern und Gehegen gibt es Codes und Passwörter.
          <Fn n={5} /> Das Subjekt ist kein Individuum mehr – es ist ein
          Dividuum, eine Summe von Datenprofilen, die in verschiedenen Systemen
          gleichzeitig und weitgehend autonom operieren. Die Tür öffnet sich
          nicht, weil man ein Mensch ist. Sie öffnet sich, weil das Profil die
          richtigen Parameter aufweist.
        </P>
        <Subheading>Das Ding und sein Doppelgänger</Subheading>
        <P>
          In den vergangenen Jahren habe ich Kampagnen für Technologiekonzerne
          begleitet – Offshore-Windparks, Schieneninfrastruktur, Smart Cities.
          Das verbindende Leitprinzip war stets dasselbe: der Digital Twin.
          Siemensstadt 2.0 in Berlin ist ein lehrreiches Beispiel: ein urbaner
          Lebensraum, der durch das Internet of Things vollständig digitalisiert
          werden soll, mit einem digitalen Zwilling, der alle Funktionen erfasst
          und automatisiert reagiert
          <Fn n={6} />. Predictive Maintenance als Versprechen – die Rolltreppe
          wird repariert, bevor sie ausfällt. Das ist vernünftig. Das ist sogar
          gut.
        </P>
        <P>
          Mein Problem ist nicht die Vernetzung der Dinge. Es ist die
          Verwechslung: Der kürzeste Weg zur vernetzten Stadt ist offenbar nicht
          die Vernetzung der Dinge selbst, sondern das Abgreifen aller Daten der
          Bewohner. Der Nutzer wird zur Infrastruktur. Besonders perfide dabei
          ist das Tauschprinzip: Die biometrische Verifikation, die Einwilligung
          in Datenweitergabe, das Akzeptieren von Tracking – all das wird als
          Preis für gesellschaftliche Teilhabe gehandelt. Als Eintrittspreis für
          Sichtbarkeit: in sozialen Netzwerken, auf Plattformen, zunehmend auch
          offline in vernetzten Räumen.
        </P>
        <P>
          Der gläserne Mensch als dystopische Metapher ist ausgelutscht. Was
          aber die wenigsten wirklich konsequent zu Ende denken: Ein
          vollständiges digitales Abbild, das in einer weitgehend
          smart-vernetzten physischen Umgebung operiert, entscheidet über reale
          Möglichkeiten und Zugänglichkeiten. Wortwörtlich darüber, welche Tür
          aufgeht. Und welche nicht.
        </P>
        <Subheading>
          “Grow a Garden. Stop Talking Shit. Get off the Internet. Listen to
          Jazz.”
        </Subheading>
        <P>
          Vor einiger Zeit bekam ich ein T-Shirt geschenkt. Mit einer
          T-Shirt-Weisheit darauf. In etwa: Rausgehen, Erdbeeren züchten,
          analoge Entschleunigung betreiben. Das Shirt ist mittlerweile nicht
          mehr weiß, und die Weisheit nicht mehr so ganz zutreffend. Denn die
          vollständige digitale Abstinenz ist ein Luxusprivileg, und sie löst
          strukturell nichts. Sie verschiebt das Problem nur in die eigene
          Biografie. Wer sich herauszieht, ist weg. Aber nicht frei.
        </P>
        <P>
          Deleuze und Guattari haben in Tausend Plateaus die Strategie des
          Unsichtbarwerdens als revolutionäres Potenzial beschrieben – nicht als
          Flucht aus der Welt, sondern als Auflösung in ihr, als Entzug aus den
          territorialisierenden Kräften des Apparats.
          <Fn n={7} /> Aber das setzt voraus, dass man sich entziehen kann. Für
          die meisten ist die Plattform kein Luxus – sie ist Infrastruktur.
        </P>
        <P>
          Der produktivere Ansatz lautet: Wenn die bisherigen Handlungen den
          digitalen Zwilling geformt haben, lassen sich zukünftige Handlungen
          strategisch einsetzen, um ihn zu vergiften… oder in etwas Neues zu
          überführen.
        </P>
        <P>
          Konkret: Für die Recherche zu einem Auftrag, ein Modelabel im
          Luxussegment zu positionieren, begann ich, mein Browsing-Verhalten
          radikal umzulenken. Was folgte, war absurd aufschlussreich: Nicht nur
          wurden mir Ads für Luxusuhren, Nobelautos, Malediven-Urlaub und
          Polo-Turniere ausgespielt. Besonders bemerkenswert war die plötzliche
          Bewilligung eines Hauskredits ohne Eigenkapital – eine Konsequenz, die
          zeigt, wie eng die Korrelation zwischen Datenprofil und realen
          Zugangsmöglichkeiten bereits gezogen ist. Mein Profil hatte sich
          verändert. Die Türen hatten sich neu justiert. Das war temporär,
          experimentell, nicht systematisch. Aber es hat etwas gezeigt.
        </P>
        <Subheading>Poison Your Digital Twin – eine Praxis</Subheading>
        <P>
          Ich schlage eine Systematisierung vor. Keine Don-Quijote-Geste, kein
          aufreibender Kampf des Individuums gegen institutionelle Windmühlen.
          Sondern ein Techne-gegen-Techne-Prinzip: Wenn der Apparat – mit
          Flusser – nicht nur das Medium, sondern auch dessen Inhalte als seine
          Produkte hervorbringt und den Menschen zu seinem Funktionär macht,
          dann heißt die Antwort: Techne-gegen-Techne. Dem Apparat mit eigenem
          technischen Können zu begegnen, seine Programme zu kennen und gegen
          ihn zu wenden. Dasselbe Werkzeug als Gift und als Heilmittel. Das ist
          die Logik des Pharmakons.
          <Fn n={8} /> Konkret: die Unmenschlichkeit der automatisierten
          Narration – der unsichtbaren Erzählung, die aufschreibende Systeme
          über uns verfassen – mit einer automatisierten Autonarration kontern.
          Erzähl dich selbst. Mannigfaltig. Vielstimmig. Agentengestützt.
        </P>
        <P>
          Wenn für jeden realen Datenpunkt zwei weitere generiert werden –
          automatisiert, agentenbasiert –, entsteht eine zweite Instanz, die als
          direkte Reaktion auf tatsächliche Handlungen wie auch durch gezielt
          gesetzte Spuren operiert. Die Datensätze werden nicht gelöscht. Sie
          werden dichter. Nicht ärmer durch Lücke, sondern reicher durch
          Überdichte.
        </P>
        <P>Wäre das nach Flussers Logik nicht genau das Falsche? Richtig!</P>
        <P>
          Der Realitätsgrad steigt nach Flusser mit der Dichte der gestreuten
          Punkte, d.h. je dichter das Punktuniversum, desto wirklicher das, was
          aus ihm auftaucht
          <Fn n={9} />. Eine agentengestützte, automatisierte Gegennarration,
          wie ich sie vorschlage, erhöht dabei die Dichte ins Unermessliche.
        </P>
        <P>
          Der entscheidende Unterschied: eine solche Praxis trägt nicht dazu
          bei, eine konkretere Wirklichkeit zu realisieren. Sie verwirklicht
          Möglichkeiten, die im Programm nicht vorgesehen sind.
          <Fn n={10} />
        </P>
        <P>
          Was bedeutet das für LinkedIn? Folge Menschen in Disziplinen, in denen
          du dich nicht bewegst. Like Beiträge aus der Quantenphysik, wenn dein
          Hintergrund im Kommunikationsdesign liegt. Engage in Gesprächen über
          die Musikindustrie, wenn dein Netzwerk in nachhaltiger Infrastruktur
          verankert ist. Mein neuerliches Interesse an Quantenphysik? Könnte
          sein. Meine Vernetzung in die Musikindustrie? Könnte sein. Als Agent
          im wörtlichen Sinne und mit Hintergrund in Agenturen stimmt bei mir
          ohnehin alles – doch mein LinkedIn-Profil bildet das nicht ab. Noch.
        </P>
        <P>
          Weiter gedacht: Browser-Verhalten gezielt irritieren. Den
          YouTube-Algorithmus hacken. Amazon zeigen, was man sich nicht wünscht,
          aber wünschen könnte. Das Smartphone als Instrument strategischer
          Gegennarration über die eigene Person. Die Shopping-Plattform als
          Bühne performativer Wünsche. Dies ist kein Aufruf zur Lüge. Es ist ein
          Aufruf zur Rückeroberung narrativer Autonomie.
        </P>
        <Subheading>Das schreibende System</Subheading>
        <P>
          Hier kommt das Werkzeug ins Spiel: generative KI. Nicht als Bedrohung,
          sondern als Gegenmittel. Auch das ist Techne.
        </P>
        <P>
          Flusser beschrieb das Schreiben als Geste der Freiheit – eine Geste,
          die dem Apparat widersteht, indem sie sich seiner Logik bewusst
          bedient und sie unterläuft
          <Fn n={11} />. Ein KI-System, das die eigene Biografie strategisch
          mitschreibt und dabei die Prämissen des aufschreibenden Systems kennt
          und nutzt, ist in diesem Sinne vielleicht die flusserianischste
          Reaktion auf die Gegenwart.
        </P>
        <P>
          Ein agentenbasiertes System – wie ClawdBot/OpenClaw – kann Folgendes
          leisten: Für jede tatsächliche Handlung im digitalen Raum generieren
          persönliche Agents zusätzliche Datenpunkte. Doch nicht irgendwelche.
          Keine Obfuskation wie in bisherigen Ansätzen. Kein Täuschen,
          Verwässern, Verdünnen – kein Rauschen, was ohnehin maschinell wirkt
          und als solches zu entlarven ist
          <Fn n={12} />. Stattdessen nachverdichten, die unendlichen Leerstellen
          besetzen. Die eigene Narration weiterschreiben. Facettenreich,
          explorativ, szenarienhaft, Version um Version deiner selbst. Dabei
          wird nicht einfach nur hinzuaddiert, es werden Möglichkeitsräume
          eröffnet. Neue Elemente (wie Interessen oder Kontakte) werden in das
          Spiel der Identität eingeführt und damit das Repertoire des Spiels
          erweitert sowie seine Kompetenz erhöht. Letztlich wird aus
          Verdichtung, im strengen Sinn Flussers, Dichtung.
          <Fn n={13} />
        </P>
        <Subheading>Jazz</Subheading>
        <P>Nur wer spielt, erhebt sich über die Dinge.</P>
        <P>
          Es gibt eine Definition von Jazz, die ich dem „Grow a Garden"-T-Shirt
          vorziehe: Jazz ist das Neue, das mit hergebrachten Mustern und Regeln
          spielt – indem es Fremdes hinein holt, Töne, Tonfolgen, Klänge, die
          nicht ins Schema passen und genau darum das Repertoire erweitern. Jazz
          heißt falsch spielen. Nicht mitspielen. Spielen.
        </P>
        <P>
          Flusser hat es, ohne an Musik zu denken, genau so gesagt: Freiheit
          sei, gegen den Apparat zu spielen – nicht mit, sondern gegen das
          Spielzeug.
          <Fn n={14} /> Der Jazz gibt diesem Spielen nur seinen Namen.
        </P>
        <P>
          Die Maschinen spielen nach Regeln, die wir ihnen gegeben haben – und
          die sie inzwischen weitgehend selbst verfeinern. Wer im digitalen Raum
          immer nur korrekte, kohärente, regelkonforme Datenpunkte hinterlässt,
          spielt mit – und bleibt Funktionär des Apparats. Wer strategisch
          falsch spielt, nicht destruktiv, sondern kreativ, nicht zufällig,
          sondern mit Absicht, entzieht sich dessen Griff. Er wird zum Pharmakon
          des Apparats – Gift und Heilmittel in einem.
        </P>
        <P>Techne gegen Techne.</P>
        <P>Vergiftet das Ebenbild.</P>
        <P>Schreibt euch selbst.</P>
        <P>Spielt.</P>
      </>
    ),
    de: (
      <>
        <P>
          [Redaktionelle Anmerkung: Verfasst in Zusammenarbeit mit Claude
          (Anthropic). Dies ist eine Denkfigur, kein Bauplan oder Prompt für
          einen Coding-Agent. Die inhaltliche Verantwortung liegt allein beim
          Autor.]
        </P>
        <Subheading>
          Über digitale Doppelgänger, automatisierte Biografie und die Kunst,
          falsch zu spielen
        </Subheading>
        <P>
          Wer kennt das nicht: Man steht an einem Schalter, reicht ein Dokument,
          und der Mensch dahinter schaut es an, schaut einen an, schaut wieder
          aufs Dokument. Und wer kennt nicht das Gefühl der Erleichterung, wenn
          der Abgleich erfolgreich war. Oder das mulmige, wenn der Vergleich
          scheitert.
        </P>
        <P>
          Vor allem in Situationen, wenn man seinen Führerschein vorzeigen muss.
          Dann schaut in meinem Fall ein glattes, bartloses Gesicht zurück – das
          Führerschein-Bubi-Face. Doch in persona steht da nun ein anderes
          Gesicht, verborgen hinter dem, was ich gerne meinen Reisepass-Bart
          nenne. Menschen, selbst Polizisten, kann man das meist noch irgendwie
          erklären. Aber biometrischen Systemen? Maschinen verlangen zwingend
          Kohärenz. Und Kohärenz ist genau das, was man manchmal eben nicht
          liefert.
        </P>
        <P>
          An der Einwanderungskontrolle in New York führt das zu einer
          freundlichen, aber bestimmten Aufforderung, zur Seite zu treten. Man
          wird nicht verhaftet, man wird kalibriert. Das Gesicht wird mit der
          Akte abgeglichen, das Dokument mit der Datenbank, der Körper mit dem
          gespeicherten Modell. Was dabei eigentlich geprüft wird, ist nicht die
          Identität. Es ist die Kohärenz des Profils.
        </P>
        <P>
          Um eindeutig auf Nummer sicher zu gehen, dass ich auch ich bin,
          verschickte LinkedIn vor Kurzem eine besonders freundliche
          Benachrichtigung: Hey, du hast viele Profilbesucher in dieser Woche.
          Verifiziere jetzt deine Identität! Das ist in etwa so plump wie: Ich
          schmeichle dir – jetzt her damit. Doch wozu? Upload des Reisepasses
          inklusive aller biometrischen Daten an ein Unternehmen, das enge
          Verbindungen zu Palantir Technologies unterhält – gegründet von Peter
          Thiel, mitfinanziert durch In-Q-Tel (die Venture-Capital-Tochter der
          CIA), Hauptauftragnehmer für Datenanalyse bei westlichen
          Geheimdiensten und Strafverfolgungsbehörden, aktiver Bieter für
          staatliche KI-Infrastrukturprojekte auf mehreren Kontinenten. Das
          Geflecht ist nicht Verschwörungstheorie – es ist öffentlich, es ist
          dokumentiert,
          <Fn n={1} /> es wird nur selten zusammen gelesen. Können “die” etwa
          besser verifizieren, wer ich bin, als ich selbst? Und wozu behalten
          “die” sich das Recht vor, meine Daten auf unbestimmte Zeiten zu
          speichern, wenn das im nationalen Interesse der USA sein könnte?
        </P>
        <P>
          Ihr könnt euch denken, was ich in so einem Fall rate zu tun: Einen
          Teufel.
        </P>
        <Subheading>Das Simulacrum läuft dir voraus</Subheading>
        <P>
          Vilém Flusser beschrieb in Für eine Philosophie der Fotografie, wie
          das technische Bild kein Abbild der Welt ist, sondern ein Produkt des
          Apparats. Das Programm des Apparats bestimmt, was sichtbar werden
          kann. Das Passfoto ist kein Porträt – es ist ein Datenpunkt, der in
          ein System eingespeist wird
          <Fn n={2} />. Das Biometriegerät an der Grenze fragt nicht Wer bist
          du? Es fragt: Stimmt dein Gesicht mit dem überein, das wir gespeichert
          haben?
        </P>
        <P>
          Jean Baudrillard wäre entzückt gewesen. In Simulacres et Simulation
          beschreibt er, wie das Modell der Realität vorausgeht – die Karte
          existiert vor dem Territorium.
          <Fn n={3} /> Übertragen: Der digitale Zwilling – jenes statistische
          Aggregat aus Datenpunkten, Verhaltensmustern, Transaktionen und
          Metadaten, das uns in den Datenbanken von Plattformkonzernen
          repräsentiert – ist kein Abbild mehr. Er ist Antezedens. Er geht
          voraus, als ein nulldimensionales Konstrukt im Flusser’schen Sinn: das
          Selbst, zerlegt in Punktelemente und aus deren Verdichtung neu
          zusammengeballt.
          <Fn n={4} /> Er entscheidet, welche Werbung man sieht, zu welchen
          Konditionen man einen Kredit bekommt, ob man als vertrauenswürdig
          klassifiziert wird. Der Mensch hechelt dem Modell hinterher, das ihn
          längst abgelöst hat.
        </P>
        <P>
          Deleuze hat in seinem kurzen, heute prophetisch wirkenden Postskriptum
          über die Kontrollgesellschaften die Verschiebung von Foucaults
          Disziplinargesellschaft zur Kontrollgesellschaft beschrieben: Statt
          Mauern und Gehegen gibt es Codes und Passwörter.
          <Fn n={5} /> Das Subjekt ist kein Individuum mehr – es ist ein
          Dividuum, eine Summe von Datenprofilen, die in verschiedenen Systemen
          gleichzeitig und weitgehend autonom operieren. Die Tür öffnet sich
          nicht, weil man ein Mensch ist. Sie öffnet sich, weil das Profil die
          richtigen Parameter aufweist.
        </P>
        <Subheading>Das Ding und sein Doppelgänger</Subheading>
        <P>
          In den vergangenen Jahren habe ich Kampagnen für Technologiekonzerne
          begleitet – Offshore-Windparks, Schieneninfrastruktur, Smart Cities.
          Das verbindende Leitprinzip war stets dasselbe: der Digital Twin.
          Siemensstadt 2.0 in Berlin ist ein lehrreiches Beispiel: ein urbaner
          Lebensraum, der durch das Internet of Things vollständig digitalisiert
          werden soll, mit einem digitalen Zwilling, der alle Funktionen erfasst
          und automatisiert reagiert
          <Fn n={6} />. Predictive Maintenance als Versprechen – die Rolltreppe
          wird repariert, bevor sie ausfällt. Das ist vernünftig. Das ist sogar
          gut.
        </P>
        <P>
          Mein Problem ist nicht die Vernetzung der Dinge. Es ist die
          Verwechslung: Der kürzeste Weg zur vernetzten Stadt ist offenbar nicht
          die Vernetzung der Dinge selbst, sondern das Abgreifen aller Daten der
          Bewohner. Der Nutzer wird zur Infrastruktur. Besonders perfide dabei
          ist das Tauschprinzip: Die biometrische Verifikation, die Einwilligung
          in Datenweitergabe, das Akzeptieren von Tracking – all das wird als
          Preis für gesellschaftliche Teilhabe gehandelt. Als Eintrittspreis für
          Sichtbarkeit: in sozialen Netzwerken, auf Plattformen, zunehmend auch
          offline in vernetzten Räumen.
        </P>
        <P>
          Der gläserne Mensch als dystopische Metapher ist ausgelutscht. Was
          aber die wenigsten wirklich konsequent zu Ende denken: Ein
          vollständiges digitales Abbild, das in einer weitgehend
          smart-vernetzten physischen Umgebung operiert, entscheidet über reale
          Möglichkeiten und Zugänglichkeiten. Wortwörtlich darüber, welche Tür
          aufgeht. Und welche nicht.
        </P>
        <Subheading>
          “Grow a Garden. Stop Talking Shit. Get off the Internet. Listen to
          Jazz.”
        </Subheading>
        <P>
          Vor einiger Zeit bekam ich ein T-Shirt geschenkt. Mit einer
          T-Shirt-Weisheit darauf. In etwa: Rausgehen, Erdbeeren züchten,
          analoge Entschleunigung betreiben. Das Shirt ist mittlerweile nicht
          mehr weiß, und die Weisheit nicht mehr so ganz zutreffend. Denn die
          vollständige digitale Abstinenz ist ein Luxusprivileg, und sie löst
          strukturell nichts. Sie verschiebt das Problem nur in die eigene
          Biografie. Wer sich herauszieht, ist weg. Aber nicht frei.
        </P>
        <P>
          Deleuze und Guattari haben in Tausend Plateaus die Strategie des
          Unsichtbarwerdens als revolutionäres Potenzial beschrieben – nicht als
          Flucht aus der Welt, sondern als Auflösung in ihr, als Entzug aus den
          territorialisierenden Kräften des Apparats.
          <Fn n={7} /> Aber das setzt voraus, dass man sich entziehen kann. Für
          die meisten ist die Plattform kein Luxus – sie ist Infrastruktur.
        </P>
        <P>
          Der produktivere Ansatz lautet: Wenn die bisherigen Handlungen den
          digitalen Zwilling geformt haben, lassen sich zukünftige Handlungen
          strategisch einsetzen, um ihn zu vergiften… oder in etwas Neues zu
          überführen.
        </P>
        <P>
          Konkret: Für die Recherche zu einem Auftrag, ein Modelabel im
          Luxussegment zu positionieren, begann ich, mein Browsing-Verhalten
          radikal umzulenken. Was folgte, war absurd aufschlussreich: Nicht nur
          wurden mir Ads für Luxusuhren, Nobelautos, Malediven-Urlaub und
          Polo-Turniere ausgespielt. Besonders bemerkenswert war die plötzliche
          Bewilligung eines Hauskredits ohne Eigenkapital – eine Konsequenz, die
          zeigt, wie eng die Korrelation zwischen Datenprofil und realen
          Zugangsmöglichkeiten bereits gezogen ist. Mein Profil hatte sich
          verändert. Die Türen hatten sich neu justiert. Das war temporär,
          experimentell, nicht systematisch. Aber es hat etwas gezeigt.
        </P>
        <Subheading>Poison Your Digital Twin – eine Praxis</Subheading>
        <P>
          Ich schlage eine Systematisierung vor. Keine Don-Quijote-Geste, kein
          aufreibender Kampf des Individuums gegen institutionelle Windmühlen.
          Sondern ein Techne-gegen-Techne-Prinzip: Wenn der Apparat – mit
          Flusser – nicht nur das Medium, sondern auch dessen Inhalte als seine
          Produkte hervorbringt und den Menschen zu seinem Funktionär macht,
          dann heißt die Antwort: Techne-gegen-Techne. Dem Apparat mit eigenem
          technischen Können zu begegnen, seine Programme zu kennen und gegen
          ihn zu wenden. Dasselbe Werkzeug als Gift und als Heilmittel. Das ist
          die Logik des Pharmakons.
          <Fn n={8} /> Konkret: die Unmenschlichkeit der automatisierten
          Narration – der unsichtbaren Erzählung, die aufschreibende Systeme
          über uns verfassen – mit einer automatisierten Autonarration kontern.
          Erzähl dich selbst. Mannigfaltig. Vielstimmig. Agentengestützt.
        </P>
        <P>
          Wenn für jeden realen Datenpunkt zwei weitere generiert werden –
          automatisiert, agentenbasiert –, entsteht eine zweite Instanz, die als
          direkte Reaktion auf tatsächliche Handlungen wie auch durch gezielt
          gesetzte Spuren operiert. Die Datensätze werden nicht gelöscht. Sie
          werden dichter. Nicht ärmer durch Lücke, sondern reicher durch
          Überdichte.
        </P>
        <P>Wäre das nach Flussers Logik nicht genau das Falsche? Richtig!</P>
        <P>
          Der Realitätsgrad steigt nach Flusser mit der Dichte der gestreuten
          Punkte, d.h. je dichter das Punktuniversum, desto wirklicher das, was
          aus ihm auftaucht
          <Fn n={9} />. Eine agentengestützte, automatisierte Gegennarration,
          wie ich sie vorschlage, erhöht dabei die Dichte ins Unermessliche.
        </P>
        <P>
          Der entscheidende Unterschied: eine solche Praxis trägt nicht dazu
          bei, eine konkretere Wirklichkeit zu realisieren. Sie verwirklicht
          Möglichkeiten, die im Programm nicht vorgesehen sind.
          <Fn n={10} />
        </P>
        <P>
          Was bedeutet das für LinkedIn? Folge Menschen in Disziplinen, in denen
          du dich nicht bewegst. Like Beiträge aus der Quantenphysik, wenn dein
          Hintergrund im Kommunikationsdesign liegt. Engage in Gesprächen über
          die Musikindustrie, wenn dein Netzwerk in nachhaltiger Infrastruktur
          verankert ist. Mein neuerliches Interesse an Quantenphysik? Könnte
          sein. Meine Vernetzung in die Musikindustrie? Könnte sein. Als Agent
          im wörtlichen Sinne und mit Hintergrund in Agenturen stimmt bei mir
          ohnehin alles – doch mein LinkedIn-Profil bildet das nicht ab. Noch.
        </P>
        <P>
          Weiter gedacht: Browser-Verhalten gezielt irritieren. Den
          YouTube-Algorithmus hacken. Amazon zeigen, was man sich nicht wünscht,
          aber wünschen könnte. Das Smartphone als Instrument strategischer
          Gegennarration über die eigene Person. Die Shopping-Plattform als
          Bühne performativer Wünsche. Dies ist kein Aufruf zur Lüge. Es ist ein
          Aufruf zur Rückeroberung narrativer Autonomie.
        </P>
        <Subheading>Das schreibende System</Subheading>
        <P>
          Hier kommt das Werkzeug ins Spiel: generative KI. Nicht als Bedrohung,
          sondern als Gegenmittel. Auch das ist Techne.
        </P>
        <P>
          Flusser beschrieb das Schreiben als Geste der Freiheit – eine Geste,
          die dem Apparat widersteht, indem sie sich seiner Logik bewusst
          bedient und sie unterläuft
          <Fn n={11} />. Ein KI-System, das die eigene Biografie strategisch
          mitschreibt und dabei die Prämissen des aufschreibenden Systems kennt
          und nutzt, ist in diesem Sinne vielleicht die flusserianischste
          Reaktion auf die Gegenwart.
        </P>
        <P>
          Ein agentenbasiertes System – wie ClawdBot/OpenClaw – kann Folgendes
          leisten: Für jede tatsächliche Handlung im digitalen Raum generieren
          persönliche Agents zusätzliche Datenpunkte. Doch nicht irgendwelche.
          Keine Obfuskation wie in bisherigen Ansätzen. Kein Täuschen,
          Verwässern, Verdünnen – kein Rauschen, was ohnehin maschinell wirkt
          und als solches zu entlarven ist
          <Fn n={12} />. Stattdessen nachverdichten, die unendlichen Leerstellen
          besetzen. Die eigene Narration weiterschreiben. Facettenreich,
          explorativ, szenarienhaft, Version um Version deiner selbst. Dabei
          wird nicht einfach nur hinzuaddiert, es werden Möglichkeitsräume
          eröffnet. Neue Elemente (wie Interessen oder Kontakte) werden in das
          Spiel der Identität eingeführt und damit das Repertoire des Spiels
          erweitert sowie seine Kompetenz erhöht. Letztlich wird aus
          Verdichtung, im strengen Sinn Flussers, Dichtung.
          <Fn n={13} />
        </P>
        <Subheading>Jazz</Subheading>
        <P>Nur wer spielt, erhebt sich über die Dinge.</P>
        <P>
          Es gibt eine Definition von Jazz, die ich dem „Grow a Garden"-T-Shirt
          vorziehe: Jazz ist das Neue, das mit hergebrachten Mustern und Regeln
          spielt – indem es Fremdes hinein holt, Töne, Tonfolgen, Klänge, die
          nicht ins Schema passen und genau darum das Repertoire erweitern. Jazz
          heißt falsch spielen. Nicht mitspielen. Spielen.
        </P>
        <P>
          Flusser hat es, ohne an Musik zu denken, genau so gesagt: Freiheit
          sei, gegen den Apparat zu spielen – nicht mit, sondern gegen das
          Spielzeug.
          <Fn n={14} /> Der Jazz gibt diesem Spielen nur seinen Namen.
        </P>
        <P>
          Die Maschinen spielen nach Regeln, die wir ihnen gegeben haben – und
          die sie inzwischen weitgehend selbst verfeinern. Wer im digitalen Raum
          immer nur korrekte, kohärente, regelkonforme Datenpunkte hinterlässt,
          spielt mit – und bleibt Funktionär des Apparats. Wer strategisch
          falsch spielt, nicht destruktiv, sondern kreativ, nicht zufällig,
          sondern mit Absicht, entzieht sich dessen Griff. Er wird zum Pharmakon
          des Apparats – Gift und Heilmittel in einem.
        </P>
        <P>Techne gegen Techne.</P>
        <P>Vergiftet das Ebenbild.</P>
        <P>Schreibt euch selbst.</P>
        <P>Spielt.</P>
      </>
    ),
  },
  footnotes: {
    en: [
      "1. Palantir Technologies und In-Q-Tel: vgl. u. a. Alfred Ng, \"The Government Is Using the Most Punishing Tools of the Digital Age to Pursue Immigration Violations\", The Markup, 22. Oktober 2020; sowie Ryan Mac und William Turton, \"Palantir's Government Contracts Have Quietly Soared\", Bloomberg Businessweek, 25. März 2021.",
      "2. Vilém Flusser, Für eine Philosophie der Fotografie (Göttingen: European Photography, 1983 [= Edition Flusser, Bd. 3, hg. v. Andreas Müller-Pohle]), bes. S. 13 u. 32–34. Vgl. auch ders., Dinge in meiner Umgebung [Faksimile des Originalmanuskripts], in: Uncanny Interfaces, hg. v. Konstantin Daniel Haensch, Lara Nelke u. Matthias Planitzer (Hamburg: Textem, 2019).",
      "3. Jean Baudrillard, Simulacres et Simulation (Paris: Galilée, 1981), 10 f.; dt. Teilübers.: Agonie des Realen (Berlin: Merve, 1978).",
      "4. Vilém Flusser, Ins Universum der technischen Bilder (Göttingen: European Photography, 1985 [= Edition Flusser, Bd. 4]), Kap. \"Abstrahieren\", S. 9–13 (Fünf-Stufen-Modell der Abstraktion; die technischen Bilder als \"nulldimensionale\" Stufe, aus zu Formen verdichteten Punktelementen).",
      "5. Gilles Deleuze, \"Postskriptum über die Kontrollgesellschaften\" [1990], in: ders., Unterhandlungen 1972–1990 (Frankfurt a. M.: Suhrkamp, 1993), 254–262, hier 258: \"Die Individuen sind zu 'Dividuen' geworden, die Massen zu Stichproben, Daten, Märkten oder 'Banken'.\"",
      "6. Siemensstadt 2.0 Berlin: Projektdokumentation und Masterplan unter siemensstadt2.de (abgerufen März 2026).",
      "7. Gilles Deleuze und Félix Guattari, Mille Plateaux: Capitalisme et Schizophrénie 2 (Paris: Minuit, 1980); dt.: Tausend Plateaus. Kapitalismus und Schizophrenie (Berlin: Merve, 1992), Plateau 10: \"1730: Intensiv-werden, Tier-werden, Unwahrnehmbar-werden …\"",
      "8. Techne (griech. τέχνη) meint seit Aristoteles produktives Wissen als hervorbringendes Können (poiesis) im Unterschied zum theoretischen Wissen (episteme). Es umfasst die handwerkliche wie intellektuelle Fertigkeit: Nikomachische Ethik VI, 4 (1140a). Für Flussers Denkfigur des Apparats, der den Menschen zu seinem \"Funktionär\" macht und nach einem \"Programm\" operiert, das Medium wie Inhalt hervorbringt, vgl. Für eine Philosophie der Fotografie, Kap. \"Der Fotoapparat\", bes. S. 25 f. (zum \"Funktionär\") u. S. 29 (Definition des Apparats), sowie das Begriffslexikon ebd., S. 75 f. Flussers Denkfigur geht McLuhans These voraus, dass die Form des Mediums Wahrnehmung und Denken prägt: Understanding Media: The Extensions of Man (New York: McGraw-Hill, 1964). Techne-gegen-Techne wendet dieses Können gegen den Apparat selbst. Nach dem Modell von Derridas pharmakon, das zugleich Gift und Heilmittel ist: \"La pharmacie de Platon\", in: ders., La dissémination (Paris: Seuil, 1972), 69–197; dt.: \"Platons Pharmazie\", in: Dissemination, hg. v. Peter Engelmann (Wien: Passagen, 1995).",
      "9. Vilém Flusser, Ins Universum der technischen Bilder (Göttingen: European Photography, 1985).",
      "10. Vgl. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 73 f.",
      "11. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 73 f.",
      "12. Diese Rausch-Strategien fasst der Begriff der Obfuskation zusammen; grundlegend Finn Brunton u. Helen Nissenbaum, Obfuscation. A User's Guide for Privacy and Protest (Cambridge, MA: MIT Press, 2015). Werkzeuge wie TrackMeNot (Daniel Howe, Helen Nissenbaum, Vincent Toubiana, 2006) und AdNauseam arbeiten mit randomisierten \"Ghost-Queries\" bzw. Zufalls-Klicks. Zur statistischen Trennbarkeit des Rauschens vgl. Sai Teja Peddinti u. Nitesh Saxena, On the Privacy of Web Search Based on Query Obfuscation. A Case Study of TrackMeNot, PETS 2010 (LNCS 6205). Neuere Systeme wie HARPO gehen bereits den anderen Weg – sie verschränken reale Handlungen mit erzeugten, passen sich der Persona an, werden schwerer detektierbar. Aber ihre Persona bleibt Mittel zur Verzerrung: ein Optimierer, der das Profil falsch machen soll, kein Charakter. Jiang Zhang u. a., HARPO. Learning to Subvert Online Behavioral Advertising, NDSS 2022.",
      "13. Flusser, V. 2013. Spiele. In: Rötzer, Florian 2013. Ist das Leben ein Spiel? Aspekte einer Philosophie des Spiels und eines Denkens ohne Fundamente. Buchhandlung Walther König: Köln (S. 6).",
      "14. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 25 u. 73.",
    ],
    de: [
      "1. Palantir Technologies und In-Q-Tel: vgl. u. a. Alfred Ng, \"The Government Is Using the Most Punishing Tools of the Digital Age to Pursue Immigration Violations\", The Markup, 22. Oktober 2020; sowie Ryan Mac und William Turton, \"Palantir's Government Contracts Have Quietly Soared\", Bloomberg Businessweek, 25. März 2021.",
      "2. Vilém Flusser, Für eine Philosophie der Fotografie (Göttingen: European Photography, 1983 [= Edition Flusser, Bd. 3, hg. v. Andreas Müller-Pohle]), bes. S. 13 u. 32–34. Vgl. auch ders., Dinge in meiner Umgebung [Faksimile des Originalmanuskripts], in: Uncanny Interfaces, hg. v. Konstantin Daniel Haensch, Lara Nelke u. Matthias Planitzer (Hamburg: Textem, 2019).",
      "3. Jean Baudrillard, Simulacres et Simulation (Paris: Galilée, 1981), 10 f.; dt. Teilübers.: Agonie des Realen (Berlin: Merve, 1978).",
      "4. Vilém Flusser, Ins Universum der technischen Bilder (Göttingen: European Photography, 1985 [= Edition Flusser, Bd. 4]), Kap. \"Abstrahieren\", S. 9–13 (Fünf-Stufen-Modell der Abstraktion; die technischen Bilder als \"nulldimensionale\" Stufe, aus zu Formen verdichteten Punktelementen).",
      "5. Gilles Deleuze, \"Postskriptum über die Kontrollgesellschaften\" [1990], in: ders., Unterhandlungen 1972–1990 (Frankfurt a. M.: Suhrkamp, 1993), 254–262, hier 258: \"Die Individuen sind zu 'Dividuen' geworden, die Massen zu Stichproben, Daten, Märkten oder 'Banken'.\"",
      "6. Siemensstadt 2.0 Berlin: Projektdokumentation und Masterplan unter siemensstadt2.de (abgerufen März 2026).",
      "7. Gilles Deleuze und Félix Guattari, Mille Plateaux: Capitalisme et Schizophrénie 2 (Paris: Minuit, 1980); dt.: Tausend Plateaus. Kapitalismus und Schizophrenie (Berlin: Merve, 1992), Plateau 10: \"1730: Intensiv-werden, Tier-werden, Unwahrnehmbar-werden …\"",
      "8. Techne (griech. τέχνη) meint seit Aristoteles produktives Wissen als hervorbringendes Können (poiesis) im Unterschied zum theoretischen Wissen (episteme). Es umfasst die handwerkliche wie intellektuelle Fertigkeit: Nikomachische Ethik VI, 4 (1140a). Für Flussers Denkfigur des Apparats, der den Menschen zu seinem \"Funktionär\" macht und nach einem \"Programm\" operiert, das Medium wie Inhalt hervorbringt, vgl. Für eine Philosophie der Fotografie, Kap. \"Der Fotoapparat\", bes. S. 25 f. (zum \"Funktionär\") u. S. 29 (Definition des Apparats), sowie das Begriffslexikon ebd., S. 75 f. Flussers Denkfigur geht McLuhans These voraus, dass die Form des Mediums Wahrnehmung und Denken prägt: Understanding Media: The Extensions of Man (New York: McGraw-Hill, 1964). Techne-gegen-Techne wendet dieses Können gegen den Apparat selbst. Nach dem Modell von Derridas pharmakon, das zugleich Gift und Heilmittel ist: \"La pharmacie de Platon\", in: ders., La dissémination (Paris: Seuil, 1972), 69–197; dt.: \"Platons Pharmazie\", in: Dissemination, hg. v. Peter Engelmann (Wien: Passagen, 1995).",
      "9. Vilém Flusser, Ins Universum der technischen Bilder (Göttingen: European Photography, 1985).",
      "10. Vgl. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 73 f.",
      "11. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 73 f.",
      "12. Diese Rausch-Strategien fasst der Begriff der Obfuskation zusammen; grundlegend Finn Brunton u. Helen Nissenbaum, Obfuscation. A User's Guide for Privacy and Protest (Cambridge, MA: MIT Press, 2015). Werkzeuge wie TrackMeNot (Daniel Howe, Helen Nissenbaum, Vincent Toubiana, 2006) und AdNauseam arbeiten mit randomisierten \"Ghost-Queries\" bzw. Zufalls-Klicks. Zur statistischen Trennbarkeit des Rauschens vgl. Sai Teja Peddinti u. Nitesh Saxena, On the Privacy of Web Search Based on Query Obfuscation. A Case Study of TrackMeNot, PETS 2010 (LNCS 6205). Neuere Systeme wie HARPO gehen bereits den anderen Weg – sie verschränken reale Handlungen mit erzeugten, passen sich der Persona an, werden schwerer detektierbar. Aber ihre Persona bleibt Mittel zur Verzerrung: ein Optimierer, der das Profil falsch machen soll, kein Charakter. Jiang Zhang u. a., HARPO. Learning to Subvert Online Behavioral Advertising, NDSS 2022.",
      "13. Flusser, V. 2013. Spiele. In: Rötzer, Florian 2013. Ist das Leben ein Spiel? Aspekte einer Philosophie des Spiels und eines Denkens ohne Fundamente. Buchhandlung Walther König: Köln (S. 6).",
      "14. Flusser, Für eine Philosophie der Fotografie (wie Anm. 2), S. 25 u. 73.",
    ],
  },
  authorBio: {
    en: "Dominikus Mucha ist Wissenschaftlicher Mitarbeiter im Bereich Neue Medien (GWK) und am GenKI Lab der UdK Berlin.",
    de: "Dominikus Mucha ist Wissenschaftlicher Mitarbeiter im Bereich Neue Medien (GWK) und am GenKI Lab der UdK Berlin.",
  },
  keywords: {
    en: [
      "Digital Twin",
      "Biometrics",
      "Surveillance",
      "Data Poisoning",
      "Vilém Flusser",
      "Jean Baudrillard",
      "Simulacrum",
      "Gilles Deleuze",
      "Societies of Control",
      "Dividual",
      "Counter-Narration",
      "Pharmakon",
      "AI Agents",
      "Privacy",
    ],
    de: [
      "Digitaler Zwilling",
      "Biometrie",
      "Überwachung",
      "Datenvergiftung",
      "Vilém Flusser",
      "Jean Baudrillard",
      "Simulacrum",
      "Gilles Deleuze",
      "Kontrollgesellschaft",
      "Dividuum",
      "Gegennarration",
      "Pharmakon",
      "KI-Agenten",
      "Privatsphäre",
    ],
  },
  documents: [
    {
      name: "Dominikus_Mucha.pdf",
      url: "/Dominikus_Mucha.pdf",
      doi: "https://doi.org/10.25624/kuenste-2495",
    },
  ],
};
