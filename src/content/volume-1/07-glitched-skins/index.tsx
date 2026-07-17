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
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
);
const img1 = getImg(
  "img1",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
);
const img2 = getImg(
  "img2",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img3 = getImg(
  "img3",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img4 = getImg(
  "img4",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img5 = getImg(
  "img5",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img6 = getImg(
  "img6",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img7 = getImg(
  "img7",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img8 = getImg(
  "img8",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);

// 02. BEITRAGS-DATEN UND INHALT DEFINIEREN
export const article: Article = {
  id: "art-7",
  volume: "Volume 1",
  title: {
    en: "Glitched Skins ans Surfaces",
    de: "Glitched Skins ans Surfaces",
  },
  author: "Yvon Chabrowski",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2501",

  headerImage: headerImg,

  excerpt: {
    en: "A living glitch in the flawless skin of the machine.",
    de: "Ein lebendiger Glitch in der makellosen Haut der Maschine.",
  },

  content: {
    en: (
      <>
        <Subheading>Ein fragmentarisches Text-Bild-Essay</Subheading>
        <P>Von Yvon Chabrowski</P>
        <P>
          Das nachfolgende Text-Bild-Essay basiert auf meiner
          Bewegtbild-Skulptur glitched skins and surfaces und auf mehreren
          Phasen der Recherche und Reflexion, die in meinem Studio unter Einsatz
          performativer Strategien und bildgenerierender Technologien
          durchgeführt wurden. Diese Prozesse materialisieren sich in der
          Bewegtbild-Skulptur als verschiedene Bildlayer: videografierte
          Performances, KI-generierte Bewegtbilder sowie Performances mit den
          jeweiligen Bildträgern selbst. Die unterschiedlichen Bildqualitäten,
          die auf verschiedenen performativen Methoden und bildgenerierenden
          Technologien beruhen, wurden übereinandergeschichtet. Zentral für
          meinen Rechercheprozess sind Konstellationen und Formen von Embodiment
          sowie die Frage, inwiefern performative Strategien dazu beitragen
          können, Körper-Bild-Produktionen im Kontext neuer Technologien,
          einschließlich KI-Anwendungen, analytisch zu untersuchen und zu
          erschließen.
        </P>
        <ArticleImage
          src={img1}
          alt="Installationsansicht"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          2020 führte ich während des Corona-Lockdowns eine Recherche auf einer
          Social-Media-Plattform zu performativen Körperbildern durch, die
          veränderliche Körperbilder inszenieren und die körperliche
          Transformationsfähigkeit zur Anpassung an bestimmte Stereotype
          betonen. Ich sammelte drei Bildkonvolute und entwickelte darauf
          basierend die Video-Performances muscles, sculptural nose und
          resilience. Die Bildinhalte und Ikonografien dieser drei Konvolute
          lassen sich als spezifische Social-Media-Bildgenres verstehen, die
          Körper disziplinierend und monetarisierend inszenieren und durch ihre
          anhaltend hohe Zirkulation und Sichtbarkeit Einfluss auf
          unterschiedliche gesellschaftliche Gruppen haben. In diesen
          Social-Media-Bildgenres gibt es keinen Glitch, da nach Legacy Russell
          der Glitch die Nicht-Erfüllung binärer Körperkonzeptionen ist.
          <Fn n={1} /> Die Körper werden eindeutig als männlich oder weiblich
          mit klar erkennbaren Formationen und Bewegungsabläufen performed.
        </P>
        <P>
          Ich wollte erproben, inwiefern sich mein Video-Performance-Material
          muscles, sculpture nose und resilience mit einer KI-Anwendung weiter
          bearbeiten lässt und welche Erkenntnisse sich daraus über die
          körperbildgenerierenden Verfahren von KI-Video- und Bildgeneratoren
          gewinnen lassen.
        </P>
        <P>
          Die erste – vielleicht eindrücklichste, zugleich auch verwirrendste –
          Erkenntnis angesichts der rasanten Entwicklung von
          KI-Bildgenerierungs-Anwendungen in den letzten Jahren ist, dass kein
          gelebter Körper vor einer Kamera stand, wenn wir ein fotografisch
          anmutendes Körperbild sehen. “We are conditioned to see photographs as
          documents of things captured with a camera, even if they are not made
          that way.”
          <Fn n={2} /> Diese Einsicht geht einher mit meinem eigenen Hintergrund
          in der Fotografie, der stets an reale, physisch anwesende Körper vor –
          und auch hinter – der Kamera gebunden war. Im Akt des Fotografierens
          und Filmens geht es auch um die Beziehung, die Personen vor und hinter
          der Kamera zueinander aufbauen: ein Moment der Kooperation und des
          Miteinanders.
        </P>
        <ArticleImage
          src={img2}
          alt="Doppelbild"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          Um meinen ursprünglichen Zugang zur Fotografie zu rekapitulieren, nahm
          ich in meinem Studio eine Spiegelreflexkamera und fotografierte die
          von mir performten, gefilmten und mit einem KI-Tool bearbeiteten
          Bewegtbilder direkt von den Monitoren der Bewegtbild-Skulptur ab.
          Dabei entstanden die hier gezeigten glitched skins and surfaces IV–IX.
          Zu sehen sind analoge Fotografien von analogen Performances und
          Bewegtbilder, die mit KI-generierten Materialien überlagert wurden. In
          dieses fotografische Material haben sich verschiedene Artefakte
          eingeschrieben: die des analogen Films wie die Körnung,
          unterschiedliche Glitches (also analoge Brüche der Bildschirme), aber
          auch Oberflächeneffekte wie Moiré-Effekte und Reflexionen, wenn Bilder
          unterschiedlicher Qualitäten abgefilmt, überlagert und fotografiert
          wurden.
        </P>
        <P>
          Grundsätzlich war meine Arbeit in meinem Studio für glitched skins and
          surfaces IV–X von einem Zirkulieren und Re-enacten der Körper-Bilder
          und digitalen Materialien geprägt, die ich performativ mit
          verschiedenen analogen wie digitalen Technologien bearbeitete und
          übereinanderschichtete.
        </P>
        <P>
          Auf diese Weise habe ich die technologischen Artefakte sedimentiert
          und performativen Akte nachvollzogen, die heute unser Sehen begleiten
          müssen, um Bilder und Körperdarstellungen verstehen zu können. Sehen
          ist dabei kein neutraler Akt, sondern überlagert sich mit Empfindungen
          und Erinnerungen und muss heute zusätzlich vor dem Hintergrund der
          Produktionsweisen und Bedingungen bildgebender und bildgenerierender
          Technologien und Plattformrealitäten reflektiert werden.
        </P>
        <ArticleImage
          src={img3}
          alt="Bild 3"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img4}
          alt="Bild 4"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          KI-Körperbild-Generierung setzt voraus, dass die ihr zugrunde
          liegenden Bilddatenkonvolute mit klar beschrifteten, also gelabelten
          Körper-Bildern gefüttert wurden. KI-Bild-Generierung arbeitet mit
          riesigen Bilddatenkonvoluten, aus denen Bilder häufig mithilfe von
          Diffusionsmodellen generiert werden. Diese grundlegenden
          Bilddatenkonvolute speisen sich unter anderem aus
          Social-Media-Anwendungen, die ihre Bildkategorien – also Prompts –
          anhand von Bildbeschriftungen und Hashtags gleich mitliefern.
        </P>
        <P>
          Unter den aktuellen Bedingungen reproduzieren KI-Anwendungen in
          unzähligen Varianten, was wir bereits kennen und erkennen – Bilder,
          die einer klaren Begrifflichkeit folgen und unter anderem aus riesigen
          Social-Media-Bildkonvoluten einer westlichen geprägten Bildkultur
          gespeist werden.
        </P>
        <P>
          Die aktuellen Entwicklungen gehen noch weiter: Heute finden
          Bildklassifizierungen bei der Nutzung von Social-Media-Plattformen
          ganz automatisch statt, da KI-gestützte Vision-Modelle mitbestimmen,
          welche Körper-Bilder – der Logik einer plattformbasierten
          Aufmerksamkeitsökonomie folgend – sichtbar werden und zirkulieren:
          „Bilder und Videos, die auf Social-Media-Plattformen zirkulieren,
          werden mithilfe von maschinellem Lernen nicht nur für den Zweck der
          Content-Moderation ausgelesen. Sie werden viel umfassender sowohl in
          Hinblick auf ihre Bildsujets, die vermeintliche Attraktivität der
          abgebildeten Subjekte, als auch in Bezug auf ihren bildästhetischen
          Wert klassifiziert.
          <Fn n={3} />“ Körper-Bilder zirkulieren auf Social Media längst nicht
          mehr nur nach den Regeln einer Community, sondern richten sich
          zunehmend nach den kuratorischen Vorgaben von KI-Anwendungen und der
          Logik der Plattformökonomie.
        </P>
        <ArticleImage
          src={img5}
          alt="Bild 5"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img6}
          alt="Bild 6"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          In glitched skins and surfaces konnte ich eine Logik der
          Klassifizierung ganz konkret erfahren, als ich meine eigenen
          Körperbilder in eine KI-Anwendung einspeiste. Es ist vorstellbar, dass
          der KI-Video- und Image-Generator, ein Online-Tool, das ich nutze, der
          insbesondere filmische Effekte anbietet, auch durch
          Bilddaten-Konvolute aus filmischem Archivmaterial trainiert wurde.
          Mein Ziel war es, ein fluides Körperbild und einen über die
          Bildschirmoberfläche hinaus ausgedehnten Körper zu generieren.
        </P>
        <P>
          Mein Prompten für einen fluiden Körper und die Ausdehnung über Bild-
          und Körpergrenzen hinaus wurde vor allem mit Darstellungen von
          Flüssigkeiten und Körpertransformationen beantwortet, die an bekannte
          und aktualisierte Mainstream-Cyborg-Visionen – etwa die des
          Terminators – erinnern. Also an Körperbilder, die westlichen binären
          Körperkonzeptionen und etablierten Science-Fiction-Narrativen von
          Mensch-Maschine-Verhältnissen entsprechen.
          <Fn n={4} />
        </P>
        <P>
          Es wurden digitale Flüssigkeiten und Körperobjekte generiert, die zwar
          Transformationen zeigen, aber keine Fluidität im Sinne eines
          nicht-binären Körperkonzepts jenseits einer westlichen Bildkultur.
          Eine nicht-binäre Körperkonzeption, die keiner festgelegten Idee von
          Körper folgt und etwa eine Vielzahl von Wölbungen, Brüsten, Hoden oder
          nicht eindeutig definierbaren Formationen an meinem Körper zuließe,
          blieb aus.
        </P>
        <P>
          Stattdessen musste ich Prompts einbauen, die sich gegen verschiedene
          nicht gepromptete Bildgenerationen wandten – beispielsweise gegen ein
          Lächeln für die weiblichen Körperversionen und ein Lachen in den
          männlichen Körperdarstellungen, die auf verschiedenen synthetisierten
          und diffusionsbasiert generierten Gesichtern erschienen. Eine solche
          Bildanweisung (Prompt) hatte ich nie gegeben. Das Bewegtbildmaterial
          des KI-Video- und Bildgenerators zeigte also eher diffusionsbasierte
          Körpertransformationen: So verwandelte sich in einer KI-Generation
          augenscheinlich die analog nachempfundene Brustmuskulatur, die ich in
          der Video-Performance muscles anlegte, in kompakte, nackte, feste,
          hüpfende Brüste – Bewegungsmomente, die nicht meinen Prompts
          entsprachen und die auf eine sexualisierte Darstellung der weiblichen
          Brust abzielen, wie dies symptomatisch ist für eine
          westlich-kapitalistische Körperbildkultur ist.
        </P>
        <ArticleImage
          src={img7}
          alt="Bild 7"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img8}
          alt="Bild 8"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          In den KI-generierten Bewegtbild‑Clips gab es keine Glitches: Die
          Körperdarstellungen sind klar als männlich oder weiblich erkennbar und
          zeigen keine anatomischen Ungenauigkeiten mehr, wie sie vor einigen
          Monaten noch für KI‑generierte Bilder typisch waren.
        </P>
        <P>
          Für mich war es notwendig, den eigenen Körper performativ einzubinden,
          um die Körperbild‑Hüllen analoger und digitaler körperformender
          Elemente, die bildgebenden und bildgenerierenden Technologien, die
          Bildträger sowie meinen gelebten Körper zu erfahren.
        </P>
        <P>
          Mein Körperbild verweigert die eindeutige Lesbarkeit. Diese
          Verweigerung ist der Glitch, eine Störung.
          <Fn n={5} /> So beschreibt auch Franziska Kunze, dass die Störung
          nicht nur den Blick auf das Medium, auf die technische Apparatur als
          solche lenkt, sondern dass in diesem Moment aus einer „passiv
          konsumierenden Haltung eine aktiv agierende“ wird.
          <Fn n={6} />
        </P>
      </>
    ),
    de: (
      <>
        <Subheading>Ein fragmentarisches Text-Bild-Essay</Subheading>
        <P>Von Yvon Chabrowski</P>
        <P>
          Das nachfolgende Text-Bild-Essay basiert auf meiner
          Bewegtbild-Skulptur glitched skins and surfaces und auf mehreren
          Phasen der Recherche und Reflexion, die in meinem Studio unter Einsatz
          performativer Strategien und bildgenerierender Technologien
          durchgeführt wurden. Diese Prozesse materialisieren sich in der
          Bewegtbild-Skulptur als verschiedene Bildlayer: videografierte
          Performances, KI-generierte Bewegtbilder sowie Performances mit den
          jeweiligen Bildträgern selbst. Die unterschiedlichen Bildqualitäten,
          die auf verschiedenen performativen Methoden und bildgenerierenden
          Technologien beruhen, wurden übereinandergeschichtet. Zentral für
          meinen Rechercheprozess sind Konstellationen und Formen von Embodiment
          sowie die Frage, inwiefern performative Strategien dazu beitragen
          können, Körper-Bild-Produktionen im Kontext neuer Technologien,
          einschließlich KI-Anwendungen, analytisch zu untersuchen und zu
          erschließen.
        </P>
        <ArticleImage
          src={img1}
          alt="Installationsansicht"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          2020 führte ich während des Corona-Lockdowns eine Recherche auf einer
          Social-Media-Plattform zu performativen Körperbildern durch, die
          veränderliche Körperbilder inszenieren und die körperliche
          Transformationsfähigkeit zur Anpassung an bestimmte Stereotype
          betonen. Ich sammelte drei Bildkonvolute und entwickelte darauf
          basierend die Video-Performances muscles, sculptural nose und
          resilience. Die Bildinhalte und Ikonografien dieser drei Konvolute
          lassen sich als spezifische Social-Media-Bildgenres verstehen, die
          Körper disziplinierend und monetarisierend inszenieren und durch ihre
          anhaltend hohe Zirkulation und Sichtbarkeit Einfluss auf
          unterschiedliche gesellschaftliche Gruppen haben. In diesen
          Social-Media-Bildgenres gibt es keinen Glitch, da nach Legacy Russell
          der Glitch die Nicht-Erfüllung binärer Körperkonzeptionen ist.
          <Fn n={1} /> Die Körper werden eindeutig als männlich oder weiblich
          mit klar erkennbaren Formationen und Bewegungsabläufen performed.
        </P>
        <P>
          Ich wollte erproben, inwiefern sich mein Video-Performance-Material
          muscles, sculpture nose und resilience mit einer KI-Anwendung weiter
          bearbeiten lässt und welche Erkenntnisse sich daraus über die
          körperbildgenerierenden Verfahren von KI-Video- und Bildgeneratoren
          gewinnen lassen.
        </P>
        <P>
          Die erste – vielleicht eindrücklichste, zugleich auch verwirrendste –
          Erkenntnis angesichts der rasanten Entwicklung von
          KI-Bildgenerierungs-Anwendungen in den letzten Jahren ist, dass kein
          gelebter Körper vor einer Kamera stand, wenn wir ein fotografisch
          anmutendes Körperbild sehen. “We are conditioned to see photographs as
          documents of things captured with a camera, even if they are not made
          that way.”
          <Fn n={2} /> Diese Einsicht geht einher mit meinem eigenen Hintergrund
          in der Fotografie, der stets an reale, physisch anwesende Körper vor –
          und auch hinter – der Kamera gebunden war. Im Akt des Fotografierens
          und Filmens geht es auch um die Beziehung, die Personen vor und hinter
          der Kamera zueinander aufbauen: ein Moment der Kooperation und des
          Miteinanders.
        </P>
        <ArticleImage
          src={img2}
          alt="Doppelbild"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          Um meinen ursprünglichen Zugang zur Fotografie zu rekapitulieren, nahm
          ich in meinem Studio eine Spiegelreflexkamera und fotografierte die
          von mir performten, gefilmten und mit einem KI-Tool bearbeiteten
          Bewegtbilder direkt von den Monitoren der Bewegtbild-Skulptur ab.
          Dabei entstanden die hier gezeigten glitched skins and surfaces IV–IX.
          Zu sehen sind analoge Fotografien von analogen Performances und
          Bewegtbilder, die mit KI-generierten Materialien überlagert wurden. In
          dieses fotografische Material haben sich verschiedene Artefakte
          eingeschrieben: die des analogen Films wie die Körnung,
          unterschiedliche Glitches (also analoge Brüche der Bildschirme), aber
          auch Oberflächeneffekte wie Moiré-Effekte und Reflexionen, wenn Bilder
          unterschiedlicher Qualitäten abgefilmt, überlagert und fotografiert
          wurden.
        </P>
        <P>
          Grundsätzlich war meine Arbeit in meinem Studio für glitched skins and
          surfaces IV–X von einem Zirkulieren und Re-enacten der Körper-Bilder
          und digitalen Materialien geprägt, die ich performativ mit
          verschiedenen analogen wie digitalen Technologien bearbeitete und
          übereinanderschichtete.
        </P>
        <P>
          Auf diese Weise habe ich die technologischen Artefakte sedimentiert
          und performativen Akte nachvollzogen, die heute unser Sehen begleiten
          müssen, um Bilder und Körperdarstellungen verstehen zu können. Sehen
          ist dabei kein neutraler Akt, sondern überlagert sich mit Empfindungen
          und Erinnerungen und muss heute zusätzlich vor dem Hintergrund der
          Produktionsweisen und Bedingungen bildgebender und bildgenerierender
          Technologien und Plattformrealitäten reflektiert werden.
        </P>
        <ArticleImage
          src={img3}
          alt="Bild 3"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img4}
          alt="Bild 4"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          KI-Körperbild-Generierung setzt voraus, dass die ihr zugrunde
          liegenden Bilddatenkonvolute mit klar beschrifteten, also gelabelten
          Körper-Bildern gefüttert wurden. KI-Bild-Generierung arbeitet mit
          riesigen Bilddatenkonvoluten, aus denen Bilder häufig mithilfe von
          Diffusionsmodellen generiert werden. Diese grundlegenden
          Bilddatenkonvolute speisen sich unter anderem aus
          Social-Media-Anwendungen, die ihre Bildkategorien – also Prompts –
          anhand von Bildbeschriftungen und Hashtags gleich mitliefern.
        </P>
        <P>
          Unter den aktuellen Bedingungen reproduzieren KI-Anwendungen in
          unzähligen Varianten, was wir bereits kennen und erkennen – Bilder,
          die einer klaren Begrifflichkeit folgen und unter anderem aus riesigen
          Social-Media-Bildkonvoluten einer westlichen geprägten Bildkultur
          gespeist werden.
        </P>
        <P>
          Die aktuellen Entwicklungen gehen noch weiter: Heute finden
          Bildklassifizierungen bei der Nutzung von Social-Media-Plattformen
          ganz automatisch statt, da KI-gestützte Vision-Modelle mitbestimmen,
          welche Körper-Bilder – der Logik einer plattformbasierten
          Aufmerksamkeitsökonomie folgend – sichtbar werden und zirkulieren:
          „Bilder und Videos, die auf Social-Media-Plattformen zirkulieren,
          werden mithilfe von maschinellem Lernen nicht nur für den Zweck der
          Content-Moderation ausgelesen. Sie werden viel umfassender sowohl in
          Hinblick auf ihre Bildsujets, die vermeintliche Attraktivität der
          abgebildeten Subjekte, als auch in Bezug auf ihren bildästhetischen
          Wert klassifiziert.
          <Fn n={3} />“ Körper-Bilder zirkulieren auf Social Media längst nicht
          mehr nur nach den Regeln einer Community, sondern richten sich
          zunehmend nach den kuratorischen Vorgaben von KI-Anwendungen und der
          Logik der Plattformökonomie.
        </P>
        <ArticleImage
          src={img5}
          alt="Bild 5"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img6}
          alt="Bild 6"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          In glitched skins and surfaces konnte ich eine Logik der
          Klassifizierung ganz konkret erfahren, als ich meine eigenen
          Körperbilder in eine KI-Anwendung einspeiste. Es ist vorstellbar, dass
          der KI-Video- und Image-Generator, ein Online-Tool, das ich nutze, der
          insbesondere filmische Effekte anbietet, auch durch
          Bilddaten-Konvolute aus filmischem Archivmaterial trainiert wurde.
          Mein Ziel war es, ein fluides Körperbild und einen über die
          Bildschirmoberfläche hinaus ausgedehnten Körper zu generieren.
        </P>
        <P>
          Mein Prompten für einen fluiden Körper und die Ausdehnung über Bild-
          und Körpergrenzen hinaus wurde vor allem mit Darstellungen von
          Flüssigkeiten und Körpertransformationen beantwortet, die an bekannte
          und aktualisierte Mainstream-Cyborg-Visionen – etwa die des
          Terminators – erinnern. Also an Körperbilder, die westlichen binären
          Körperkonzeptionen und etablierten Science-Fiction-Narrativen von
          Mensch-Maschine-Verhältnissen entsprechen.
          <Fn n={4} />
        </P>
        <P>
          Es wurden digitale Flüssigkeiten und Körperobjekte generiert, die zwar
          Transformationen zeigen, aber keine Fluidität im Sinne eines
          nicht-binären Körperkonzepts jenseits einer westlichen Bildkultur.
          Eine nicht-binäre Körperkonzeption, die keiner festgelegten Idee von
          Körper folgt und etwa eine Vielzahl von Wölbungen, Brüsten, Hoden oder
          nicht eindeutig definierbaren Formationen an meinem Körper zuließe,
          blieb aus.
        </P>
        <P>
          Stattdessen musste ich Prompts einbauen, die sich gegen verschiedene
          nicht gepromptete Bildgenerationen wandten – beispielsweise gegen ein
          Lächeln für die weiblichen Körperversionen und ein Lachen in den
          männlichen Körperdarstellungen, die auf verschiedenen synthetisierten
          und diffusionsbasiert generierten Gesichtern erschienen. Eine solche
          Bildanweisung (Prompt) hatte ich nie gegeben. Das Bewegtbildmaterial
          des KI-Video- und Bildgenerators zeigte also eher diffusionsbasierte
          Körpertransformationen: So verwandelte sich in einer KI-Generation
          augenscheinlich die analog nachempfundene Brustmuskulatur, die ich in
          der Video-Performance muscles anlegte, in kompakte, nackte, feste,
          hüpfende Brüste – Bewegungsmomente, die nicht meinen Prompts
          entsprachen und die auf eine sexualisierte Darstellung der weiblichen
          Brust abzielen, wie dies symptomatisch ist für eine
          westlich-kapitalistische Körperbildkultur ist.
        </P>
        <ArticleImage
          src={img7}
          alt="Bild 7"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <ArticleImage
          src={img8}
          alt="Bild 8"
          caption="glitched skins and surfaces IV–IX  ©Yvon Chabrowski"
        />
        <P>
          In den KI-generierten Bewegtbild‑Clips gab es keine Glitches: Die
          Körperdarstellungen sind klar als männlich oder weiblich erkennbar und
          zeigen keine anatomischen Ungenauigkeiten mehr, wie sie vor einigen
          Monaten noch für KI‑generierte Bilder typisch waren.
        </P>
        <P>
          Für mich war es notwendig, den eigenen Körper performativ einzubinden,
          um die Körperbild‑Hüllen analoger und digitaler körperformender
          Elemente, die bildgebenden und bildgenerierenden Technologien, die
          Bildträger sowie meinen gelebten Körper zu erfahren.
        </P>
        <P>
          Mein Körperbild verweigert die eindeutige Lesbarkeit. Diese
          Verweigerung ist der Glitch, eine Störung.
          <Fn n={5} /> So beschreibt auch Franziska Kunze, dass die Störung
          nicht nur den Blick auf das Medium, auf die technische Apparatur als
          solche lenkt, sondern dass in diesem Moment aus einer „passiv
          konsumierenden Haltung eine aktiv agierende“ wird.
          <Fn n={6} />
        </P>
      </>
    ),
  },
  footnotes: {
    en: [
      "Legacy Russell, Glitch Feminism: A Manifesto, London: Verso, 2020",
      "Amanda Wasielewski, „Unnatural Images: On AI-Generated Photographs,“ Critical Inquiry 51, no. 1 (Herbst 2024): 1–29, https://doi.org/10.1086/731729. (journals.uchicago.edu)",
      "Lisa Rein und Sabine Wirth, „Exzesse des Indizierens: Von fotografischen Archiven zur Bildklassifizierung im Plattformkapitalismus,“ Fotogeschichte. Beiträge zur Geschichte und Ästhetik der Fotografie 45, H. 177 (2025): 37",
      "Ich dachte an Donna Haraways oppositionelle Cyborg-Denkfigur: “Why should our bodies end at the skin...?” Sie entwirft eine nicht-binäre, fluide und vernetzte Körper-Konzeption, die dichotome Wissensordnungen in Frage stellt.",
      "In Glitch Feminism beschreibt Legacy Russell einen Körperbegriff, der als Idee ohne eigentliche Form und als abstrakte Assemblage, also fragmentarische Zusammenstellung, verstanden wird, dem durch den Begriff dennoch eine materielle Form gegeben wird. Das Konzept des Körpers ist Teil sozialer, politischer und kultureller Diskurse, die sich je nach Ort des Körpers und seiner Interpretation verändern. Ein Körper, der innerhalb binärer Zuordnungen nicht entschlüsselbar bleibt, ist ein Körper, der sich weigert, seine binären Zuschreibungen zu performen – diese Nichterfüllung ist der Glitch, eine Form der Verweigerung.",
      "Franziska Kunze, ed., Glitch. Die Kunst der Störung, Berlin: DISTANZ Verlag, 2023, S. 24",
    ],
    de: [
      "Legacy Russell, Glitch Feminism: A Manifesto, London: Verso, 2020",
      "Amanda Wasielewski, „Unnatural Images: On AI-Generated Photographs,“ Critical Inquiry 51, no. 1 (Herbst 2024): 1–29, https://doi.org/10.1086/731729. (journals.uchicago.edu)",
      "Lisa Rein und Sabine Wirth, „Exzesse des Indizierens: Von fotografischen Archiven zur Bildklassifizierung im Plattformkapitalismus,“ Fotogeschichte. Beiträge zur Geschichte und Ästhetik der Fotografie 45, H. 177 (2025): 37",
      "Ich dachte an Donna Haraways oppositionelle Cyborg-Denkfigur: “Why should our bodies end at the skin...?” Sie entwirft eine nicht-binäre, fluide und vernetzte Körper-Konzeption, die dichotome Wissensordnungen in Frage stellt.",
      "In Glitch Feminism beschreibt Legacy Russell einen Körperbegriff, der als Idee ohne eigentliche Form und als abstrakte Assemblage, also fragmentarische Zusammenstellung, verstanden wird, dem durch den Begriff dennoch eine materielle Form gegeben wird. Das Konzept des Körpers ist Teil sozialer, politischer und kultureller Diskurse, die sich je nach Ort des Körpers und seiner Interpretation verändern. Ein Körper, der innerhalb binärer Zuordnungen nicht entschlüsselbar bleibt, ist ein Körper, der sich weigert, seine binären Zuschreibungen zu performen – diese Nichterfüllung ist der Glitch, eine Form der Verweigerung.",
      "Franziska Kunze, ed., Glitch. Die Kunst der Störung, Berlin: DISTANZ Verlag, 2023, S. 24",
    ],
  },
  authorBio: {
    en: "Yvon Chabroswki lebt und arbeitet in Leipzig und Berlin. Aus der Fotografie kommend, untersucht die Bildende Künstler:in mediale Bildformeln und nutzt Performance, um Körper-Bilder und bildgenerierende Technologien, die diese erzeugen, zu erforschen. Sie realisiert performative Bewegtbild-Skulpturen, in denen Bewegungen, soziale Rollen und Beziehungen erfahrbar werden. Aktuell arbeitet Yvon Chabrowski an ihrem praxisbasierten PhD-Arbeit second skins. embodiment and digital skins through generated body images, in deren Rahmen Closed-Circuit- und Bewegtbild-Skulpturen sowie eine eng mit der künstlerischen Praxis verbundene theoretische Forschung entstehen. www.chabrowski.info",
    de: "Yvon Chabroswki lebt und arbeitet in Leipzig und Berlin. Aus der Fotografie kommend, untersucht die Bildende Künstler:in mediale Bildformeln und nutzt Performance, um Körper-Bilder und bildgenerierende Technologien, die diese erzeugen, zu erforschen. Sie realisiert performative Bewegtbild-Skulpturen, in denen Bewegungen, soziale Rollen und Beziehungen erfahrbar werden. Aktuell arbeitet Yvon Chabrowski an ihrem praxisbasierten PhD-Arbeit second skins. embodiment and digital skins through generated body images, in deren Rahmen Closed-Circuit- und Bewegtbild-Skulpturen sowie eine eng mit der künstlerischen Praxis verbundene theoretische Forschung entstehen. www.chabrowski.info",
  },
  keywords: {
    en: [
      "Embodiment",
      "Glitch",
      "Legacy Russell",
      "Body Image",
      "Diffusion Models",
      "Attention Economy",
      "Performative Strategies",
      "Cyborg",
      "Visual Culture",
      "Disruption",
    ],
    de: [
      "Embodiment",
      "Glitch",
      "Legacy Russell",
      "Körperbild",
      "Diffusionsmodelle",
      "Aufmerksamkeitsökonomie",
      "Performative Strategien",
      "Cyborg",
      "Bildkultur",
      "Störung",
    ],
  },
  documents: [
    {
      name: "Yvon_Chabroswki.pdf",
      url: "/Yvon Chabroswki.pdf",
      doi: "https://doi.org/10.25624/kuenste-2501",
    },
  ],
};
