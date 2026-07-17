import React from "react";
import { Article } from "../../../types";
import {
  P,
  BigQuote,
  ArticleImage,
  Subheading,
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
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop",
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
  id: "art-2",
  volume: "Volume 1",
  title: {
    en: "Heilige Sohlen – Sneaker für die Kirche",
    de: "Heilige Sohlen – Sneaker für die Kirche",
  },
  author: "Holger Dölle",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2494",

  headerImage: headerImg,
  headerVideo: headerVid,

  excerpt: {
    en: "On the altar of self-promotion.",
    de: "Auf dem Altar der Selbstinszenierung.",
  },

  content: {
    en: (
      <>
        <Subheading>Eine KI-generierte Werkserie als Triptychon</Subheading>
        <P>
          Mich beschäftigt die Kirche seit meiner frühen katholisch geprägten
          Kindheit als Ort eines großen Widerspruchs. Ich sehe in ihr den
          Anspruch auf Moral, Demut und Transzendenz, gleichzeitig aber auch
          eine Institution, die sich immer wieder in Macht, Prunk und
          Doppelmoral verstrickt. Gold, Weihrauch und kostbare Ornate sind für
          mich nicht nur religiöse Symbole, sondern auch Zeichen einer
          Inszenierung, die ihre eigene Bildsprache entwickelt hat und bis heute
          wirkt. Papst Leo XIV. wird aktuell als Pontifex in Turnschuhen
          beschrieben, da er bei offiziellen Anlässen mit Nike-Sneakern
          aufgetreten ist. Diese Leidenschaft für modernes, komfortables
          Schuhwerk möchte ich mit meinem Konzept visuell und ästhetisch
          weiterentwickeln und schlage vor, die Anmutung von kirchlichen
          Gewändern auf das komplette Outfit der Vertreter Gottes auf Erden
          anzuwenden.
        </P>
        <P>
          Mit meiner Werkserie Heilige Sohlen übersetze ich diese Bildwelt in
          die Sprache der Jugendkultur und nutze die popkulturelle Ikone
          “Sneaker” als Sujet. Mit Hilfe von bildgebender KI erschaffe ich
          Sportschuhe für Päpste, Kardinäle und Bischöfe. Ausgangspunkt ist
          dabei nicht die Parodie, sondern die Frage, warum bestimmte Formen von
          Luxus und Repräsentation eine solche Anziehungskraft besitzen. Die
          übersteigerte Ästhetik kirchlicher Gewänder findet in meiner
          Sneaker-Ästhetik eine visuelle Entsprechung: limitierte Auflagen,
          künstliche Verknappung, Markenmythen und das Versprechen von
          Zugehörigkeit.
        </P>
        <P>
          Mich interessiert dabei, wie sehr Religion, Branding, aber auch
          Politik als weitere Projektionsfläche einander heute ähnlicher
          geworden sind. Besonders deutlich wird das für mich in der
          gottgleichen Selbstinszenierung Donald Trumps und seinen goldenen
          Trump-Sneakern. Sie verwandeln politische Botschaften in
          begehrenswerte Objekte und folgen derselben Logik, die auch
          Luxusmarken und sakrale Inszenierungen nutzen: Aura entsteht durch
          Knappheit, Identität durch Besitz und Loyalität durch Symbole. Die
          Selbstdarstellung von Donald Trump als heilender Heiland legt die
          Verbindung der kirchlichen und politischen Inszenierung nahe. Diese
          Hybris und Selbstüberhöhung nehme ich in meinem Design augenzwinkernd
          auf und wende sie deutlich auf das Outfit von Gottes Personal auf
          Erden an.
        </P>
         <ArticleImage
          src={img1}
          alt="Heilige Sohlen"
          caption=""
        />
        <P>
          Die KI ist für mich dabei nicht nur mein Werkzeug, sondern Teil meines
          Konzepts. Damit kann ich Ideen in realitätsnahe Bilder umsetzen, die
          an der Oberfläche oft glaubwürdiger erscheinen, als sie sich bei
          genauer Prüfung tatsächlich erweisen. Ich benutze diese Bildsprache
          bewusst, um vertraute Zeichen neu zu kombinieren und aus dem Ergebnis
          Fragen beim Betrachter aufkommen zu lassen. “Ist das jetzt wirklich
          so?” “Stell dir mal vor, der Papst würde damit wirklich rumlaufen!”
        </P>
        <P>
          So darf jeder Rezipient spielerisch seine eigene Fantasie, Ästhetik
          und Moralvorstellung mit dem Werk abgleichen. Sich selbst dazu
          Antworten geben, diskutieren und weiterentwickeln. Denn durch die
          Demokratisierung der KI-Tools kann jeder Betrachter auch sehr leicht
          zum Creator werden und seine eigenen Gedanken weiterentwickeln und
          Angebote machen. Mir ist wichtig, dass es zum Austausch kommt; das
          Werk soll die Rezipienten dazu anregen, spielerisch tiefe Fragen
          aufzunehmen und eigene Antworten zu formulieren.
        </P>
        <P>
          Das Triptychon mit Sneakern für Papst, Kardinal und Bischof greift die
          klassische Form sakraler Darstellungen auf. Als Bild und als Video.
          Der Sneaker wird zum Kultobjekt, der Drop zur Liturgie und die Marke
          zum modernen Glaubensbekenntnis.
        </P>
        <P>
          Mich interessiert dieser Moment, in dem Jugendkultur, religiöse
          Symbolik und politisches Marketing kaum noch voneinander zu trennen
          sind. Durch die bewusste Übertreibung möchte ich aber auch diese
          Vermengung brechen und klarmachen, dass die Macht der Marke nur dann
          Wirkung zeigen kann, wenn es der Kunde, Gläubige, Wähler zulässt.
          Lassen wir es nicht zu!
        </P>
        <P>
          Tiefe Anregungen für diese Arbeit verdanke ich der bilderstürmerischen
          Fantasie von Wenzel Storch und den Sprach- und Gedankenwelten Arno
          Schmidts.
        </P>
      </>
    ),
    de: (
      <>
        <Subheading>Eine KI-generierte Werkserie als Triptychon</Subheading>
        <P>
          Mich beschäftigt die Kirche seit meiner frühen katholisch geprägten
          Kindheit als Ort eines großen Widerspruchs. Ich sehe in ihr den
          Anspruch auf Moral, Demut und Transzendenz, gleichzeitig aber auch
          eine Institution, die sich immer wieder in Macht, Prunk und
          Doppelmoral verstrickt. Gold, Weihrauch und kostbare Ornate sind für
          mich nicht nur religiöse Symbole, sondern auch Zeichen einer
          Inszenierung, die ihre eigene Bildsprache entwickelt hat und bis heute
          wirkt. Papst Leo XIV. wird aktuell als Pontifex in Turnschuhen
          beschrieben, da er bei offiziellen Anlässen mit Nike-Sneakern
          aufgetreten ist. Diese Leidenschaft für modernes, komfortables
          Schuhwerk möchte ich mit meinem Konzept visuell und ästhetisch
          weiterentwickeln und schlage vor, die Anmutung von kirchlichen
          Gewändern auf das komplette Outfit der Vertreter Gottes auf Erden
          anzuwenden.
        </P>
        <P>
          Mit meiner Werkserie Heilige Sohlen übersetze ich diese Bildwelt in
          die Sprache der Jugendkultur und nutze die popkulturelle Ikone
          “Sneaker” als Sujet. Mit Hilfe von bildgebender KI erschaffe ich
          Sportschuhe für Päpste, Kardinäle und Bischöfe. Ausgangspunkt ist
          dabei nicht die Parodie, sondern die Frage, warum bestimmte Formen von
          Luxus und Repräsentation eine solche Anziehungskraft besitzen. Die
          übersteigerte Ästhetik kirchlicher Gewänder findet in meiner
          Sneaker-Ästhetik eine visuelle Entsprechung: limitierte Auflagen,
          künstliche Verknappung, Markenmythen und das Versprechen von
          Zugehörigkeit.
        </P>
        <P>
          Mich interessiert dabei, wie sehr Religion, Branding, aber auch
          Politik als weitere Projektionsfläche einander heute ähnlicher
          geworden sind. Besonders deutlich wird das für mich in der
          gottgleichen Selbstinszenierung Donald Trumps und seinen goldenen
          Trump-Sneakern. Sie verwandeln politische Botschaften in
          begehrenswerte Objekte und folgen derselben Logik, die auch
          Luxusmarken und sakrale Inszenierungen nutzen: Aura entsteht durch
          Knappheit, Identität durch Besitz und Loyalität durch Symbole. Die
          Selbstdarstellung von Donald Trump als heilender Heiland legt die
          Verbindung der kirchlichen und politischen Inszenierung nahe. Diese
          Hybris und Selbstüberhöhung nehme ich in meinem Design augenzwinkernd
          auf und wende sie deutlich auf das Outfit von Gottes Personal auf
          Erden an.
        </P>
        <ArticleImage
          src={img1}
          alt="Heilige Sohlen"
          caption=""
        />
        <P>
          Die KI ist für mich dabei nicht nur mein Werkzeug, sondern Teil meines
          Konzepts. Damit kann ich Ideen in realitätsnahe Bilder umsetzen, die
          an der Oberfläche oft glaubwürdiger erscheinen, als sie sich bei
          genauer Prüfung tatsächlich erweisen. Ich benutze diese Bildsprache
          bewusst, um vertraute Zeichen neu zu kombinieren und aus dem Ergebnis
          Fragen beim Betrachter aufkommen zu lassen. “Ist das jetzt wirklich
          so?” “Stell dir mal vor, der Papst würde damit wirklich rumlaufen!”
        </P>
        <P>
          So darf jeder Rezipient spielerisch seine eigene Fantasie, Ästhetik
          und Moralvorstellung mit dem Werk abgleichen. Sich selbst dazu
          Antworten geben, diskutieren und weiterentwickeln. Denn durch die
          Demokratisierung der KI-Tools kann jeder Betrachter auch sehr leicht
          zum Creator werden und seine eigenen Gedanken weiterentwickeln und
          Angebote machen. Mir ist wichtig, dass es zum Austausch kommt; das
          Werk soll die Rezipienten dazu anregen, spielerisch tiefe Fragen
          aufzunehmen und eigene Antworten zu formulieren.
        </P>
        <P>
          Das Triptychon mit Sneakern für Papst, Kardinal und Bischof greift die
          klassische Form sakraler Darstellungen auf. Als Bild und als Video.
          Der Sneaker wird zum Kultobjekt, der Drop zur Liturgie und die Marke
          zum modernen Glaubensbekenntnis.
        </P>
        <P>
          Mich interessiert dieser Moment, in dem Jugendkultur, religiöse
          Symbolik und politisches Marketing kaum noch voneinander zu trennen
          sind. Durch die bewusste Übertreibung möchte ich aber auch diese
          Vermengung brechen und klarmachen, dass die Macht der Marke nur dann
          Wirkung zeigen kann, wenn es der Kunde, Gläubige, Wähler zulässt.
          Lassen wir es nicht zu!
        </P>
        <P>
          Tiefe Anregungen für diese Arbeit verdanke ich der bilderstürmerischen
          Fantasie von Wenzel Storch und den Sprach- und Gedankenwelten Arno
          Schmidts.
        </P>

        <div className="w-full aspect-video my-8">
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PHgSxqYg8EQ?si=qiuIEij8YGDD_tLv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
      </>
    ),
  },
  footnotes: {
    en: [],
    de: [],
  },
  authorBio: {
    en: "Holger Dölle arbeitet seit den frühen 1990er-Jahren als interdisziplinärer Künstler an den Schnittstellen von gesellschaftlicher Dissonanz, subkultureller Intervention und technologi- scher Evolution – von Super-8-Filmen über Streetart bis zu Performances wie \„Enthüllungen\" am verhüllten Reichstag. Nach seinem Studium der Theater-, Film- und Fernsehwis- senschaft sowie Publizistik (M.A., FU Berlin) und einem Aufbaustudium im Electronic Busi- ness an der UdK Berlin führt ihn der jüngste Schritt seiner Entwicklung in die generative KI, mit der er starre Narrative aufbricht und die Bruchlinien zwischen eigener Subjektivität und maschineller Ästhetik auslotet.",
    de: "Holger Dölle arbeitet seit den frühen 1990er-Jahren als interdisziplinärer Künstler an den Schnittstellen von gesellschaftlicher Dissonanz, subkultureller Intervention und technologi- scher Evolution – von Super-8-Filmen über Streetart bis zu Performances wie \„Enthüllungen\" am verhüllten Reichstag. Nach seinem Studium der Theater-, Film- und Fernsehwis- senschaft sowie Publizistik (M.A., FU Berlin) und einem Aufbaustudium im Electronic Busi- ness an der UdK Berlin führt ihn der jüngste Schritt seiner Entwicklung in die generative KI, mit der er starre Narrative aufbricht und die Bruchlinien zwischen eigener Subjektivität und maschineller Ästhetik auslotet.",
  },
  keywords: {
    en: [
      "Generative Art",
      "AI-Generated Artwork",
      "Holy Soles",
      "Sneaker Culture",
      "Sacred Fashion",
      "Church Critique",
      "Pop Culture & Religion",
      "Triptych",
      "Contemporary Art Berlin",
      "Political Iconography",
      "Brand Critique",
      "Faith & Consumerism",
    ],
    de: [
      "Generative Kunst",
      "KI-generierte Kunst",
      "Heilige Sohlen",
      "Sneaker Art",
      "Sakrale Mode",
      "Kirchenkritik",
      "Popkultur & Religion",
      "Triptychon",
      "Berlin Contemporary Art",
      "Politische Ikonografie",
      "Markenkritik",
      "Luxuskritik",
      "Glaube & Konsum",
    ],
  },
  documents: [
    {
      name: "Heilige_Sohlen.pdf",
      url: "/Heilige_Sohlen.pdf",
      doi: "https://doi.org/10.25624/kuenste-2494",
    },
  ],
};
