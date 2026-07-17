import React from "react";
import { Article } from "../../../types";
import {
  P,
  BigQuote,
  ArticleImage,
  Subheading,
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
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2940&auto=format&fit=crop",
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
  id: "art-9",
  volume: "Volume 1",
  title: {
    en: "On Encountering",
    de: "On Encountering",
  },
  author: "Maham Zahid",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2491",

  headerImage: headerImg,

  excerpt: {
    en: "The machine knows the map, we feel the terrain.",
    de: "Die Maschine kennt die Karte, wir spüren das Gelände.",
  },

  content: {
    en: (
      <>
        <Subheading>
          A language model has read more than you ever will. It has also never
          been in the room.
        </Subheading>

        <P>
          At some point in my degree, I was asked to stop thinking about an
          object and simply hold it. To disengage from the idea of it - whatever
          category, affectation, or association it was - and to just encounter
          the material itself. Objects, it turns out, have what German material
          culture theory calls Eigensinn: a stubbornness, a way of pushing back
          against the meanings we project onto them. It was an unusual exercise.
          It was also training in something no optimization process can
          replicate: the capacity to meet something on its own terms.
        </P>

        <P>
          I am finishing a degree that sits at an awkward intersection. Too
          applied for pure academics, too theoretical for agencies, and
          sometimes too abstract altogether, dealing in concepts as ephemeral as
          humans themselves. It sits at the confluence of cultural theory,
          design thinking, and strategic communication. For a long time, I
          wasn't sure what to call what I was learning. I'm now fairly certain
          it's the thing everyone ought to be looking for.
        </P>

        <P>
          A conversation I keep having in industry confirms part of it. The
          capacities that are hardest to source right now are not technical ones
          — they are judgment under genuine uncertainty, especially when it's
          ethical and value-based, and the ability to read people and shifting
          contexts without reducing them to a data set. Skills that take
          intention and grounded presence to cultivate.
        </P>

        <P>
          Meeting something on its own terms, then, turns out to be its own
          discipline. There is an older strategic tradition that treats efficacy
          not as the successful imposition of a projected ideal outcome but as
          the art of reading what a situation is already becoming and moving
          with it (detailed by François Jullien in A Treatise on Efficacy). This
          is wayfinding rather than planning. And it describes what good
          strategic instinct actually looks like when the map runs out.
        </P>

        <P>
          But the terrain itself is never still. People, objects, capital, ideas
          are always in motion, and meaning transforms as it travels. This means
          being present with people and cultures as they actually are, to read a
          room without reducing it to a data set. Paying slow, non-extractive
          attention. You cannot model it from a distance. You have to be present
          in the current.
        </P>

        <P>
          The third move is to step back and assess how contexts have been
          framed. What culture actually is, who defined it, for whom, and what
          the frame leaves out — information that might be a part of AI's
          training data, yet lacking the real-world context to interrogate and
          reframe it. In an age where narratives are generated at scale, the
          capacity to ask whose story this is and what it presupposes is not a
          critical theory exercise. It is the work.
        </P>

        <P>
          This is, I'd argue, an inherently artistic epistemology. What artistic
          practice has always cultivated — attention to materials on their own
          terms, resistance to premature categorization, the willingness to be
          changed by an encounter — is precisely what becomes scarce in a world
          of generated output. The work of art is not the object produced. It is
          the quality of the encounters that produced it. That cannot be trained
          on.
        </P>

        <P>
          There is a caveat. These capacities develop through encounter, through
          accumulated presence in enough situations to learn how to read them.
          Which makes how you learn to pay attention matter more now than it
          perhaps ever did, at exactly the moment junior roles that once
          developed that attention are quietly disappearing. None of this
          arrived as career preparation. It came as rigorous inquiry, sometimes
          opaque, occasionally maddening. But what it built, cumulatively, is a
          way of encountering things without immediately collapsing them into
          what you already know.
        </P>

        <P>
          A language model has read more than you ever will. But you have read
          the room. You have held the object. You have sensed what a situation
          was becoming.
        </P>

        <P>For now, that's not nothing.</P>
      </>
    ),
    de: (
      <>
        <Subheading>
          A language model has read more than you ever will. It has also never
          been in the room.
        </Subheading>

        <P>
          At some point in my degree, I was asked to stop thinking about an
          object and simply hold it. To disengage from the idea of it - whatever
          category, affectation, or association it was - and to just encounter
          the material itself. Objects, it turns out, have what German material
          culture theory calls Eigensinn: a stubbornness, a way of pushing back
          against the meanings we project onto them. It was an unusual exercise.
          It was also training in something no optimization process can
          replicate: the capacity to meet something on its own terms.
        </P>

        <P>
          I am finishing a degree that sits at an awkward intersection. Too
          applied for pure academics, too theoretical for agencies, and
          sometimes too abstract altogether, dealing in concepts as ephemeral as
          humans themselves. It sits at the confluence of cultural theory,
          design thinking, and strategic communication. For a long time, I
          wasn't sure what to call what I was learning. I'm now fairly certain
          it's the thing everyone ought to be looking for.
        </P>

        <P>
          A conversation I keep having in industry confirms part of it. The
          capacities that are hardest to source right now are not technical ones
          — they are judgment under genuine uncertainty, especially when it's
          ethical and value-based, and the ability to read people and shifting
          contexts without reducing them to a data set. Skills that take
          intention and grounded presence to cultivate.
        </P>

        <P>
          Meeting something on its own terms, then, turns out to be its own
          discipline. There is an older strategic tradition that treats efficacy
          not as the successful imposition of a projected ideal outcome but as
          the art of reading what a situation is already becoming and moving
          with it (detailed by François Jullien in A Treatise on Efficacy). This
          is wayfinding rather than planning. And it describes what good
          strategic instinct actually looks like when the map runs out.
        </P>

        <P>
          But the terrain itself is never still. People, objects, capital, ideas
          are always in motion, and meaning transforms as it travels. This means
          being present with people and cultures as they actually are, to read a
          room without reducing it to a data set. Paying slow, non-extractive
          attention. You cannot model it from a distance. You have to be present
          in the current.
        </P>

        <P>
          The third move is to step back and assess how contexts have been
          framed. What culture actually is, who defined it, for whom, and what
          the frame leaves out — information that might be a part of AI's
          training data, yet lacking the real-world context to interrogate and
          reframe it. In an age where narratives are generated at scale, the
          capacity to ask whose story this is and what it presupposes is not a
          critical theory exercise. It is the work.
        </P>

        <P>
          This is, I'd argue, an inherently artistic epistemology. What artistic
          practice has always cultivated — attention to materials on their own
          terms, resistance to premature categorization, the willingness to be
          changed by an encounter — is precisely what becomes scarce in a world
          of generated output. The work of art is not the object produced. It is
          the quality of the encounters that produced it. That cannot be trained
          on.
        </P>

        <P>
          There is a caveat. These capacities develop through encounter, through
          accumulated presence in enough situations to learn how to read them.
          Which makes how you learn to pay attention matter more now than it
          perhaps ever did, at exactly the moment junior roles that once
          developed that attention are quietly disappearing. None of this
          arrived as career preparation. It came as rigorous inquiry, sometimes
          opaque, occasionally maddening. But what it built, cumulatively, is a
          way of encountering things without immediately collapsing them into
          what you already know.
        </P>

        <P>
          A language model has read more than you ever will. But you have read
          the room. You have held the object. You have sensed what a situation
          was becoming.
        </P>

        <P>For now, that's not nothing.</P>
      </>
    ),
  },
  footnotes: {
    en: [],
    de: [],
  },
  authorBio: {
    en: "Maham Zahid studies GWK (Gesellschafts- und Wirtschaftskommunikation) at the Universität der Künste Berlin, a degree at the intersection of cultural studies, strategic communication, and design thinking. The piece draws on François Julliens comparative philosophy of efficacy and propensity, John Urry and Mimi Shellers new mobilities paradigm, and the tradition of German material culture research. What connects these works is a shared understanding that the world is not static or calculable and that the capacity to encounter it with grounded presence is not only a human competency but an artistic one. As AI accelerates, these capacities are not rendered obsolete but made apparent. To en- counter a situation, a person, an idea, a material on its own terms may be the most essentially human thing we do.",
    de: "Maham Zahid studies GWK (Gesellschafts- und Wirtschaftskommunikation) at the Universität der Künste Berlin, a degree at the intersection of cultural studies, strategic communication, and design thinking. The piece draws on François Julliens comparative philosophy of efficacy and propensity, John Urry and Mimi Shellers new mobilities paradigm, and the tradition of German material culture research. What connects these works is a shared understanding that the world is not static or calculable and that the capacity to encounter it with grounded presence is not only a human competency but an artistic one. As AI accelerates, these capacities are not rendered obsolete but made apparent. To en- counter a situation, a person, an idea, a material on its own terms may be the most essentially human thing we do.",
  },
  keywords: {
    en: [
      "Encounter",
      "Eigensinn",
      "Material Culture",
      "Attention",
      "Judgment",
      "Uncertainty",
      "François Jullien",
      "Wayfinding",
      "Artistic Epistemology",
      "Strategic Communication",
      "Design Thinking",
      "Cultural Theory",
    ],
    de: [
      "Begegnung",
      "Eigensinn",
      "Materielle Kultur",
      "Aufmerksamkeit",
      "Urteilskraft",
      "Unsicherheit",
      "François Jullien",
      "Wayfinding",
      "Künstlerische Epistemologie",
      "Strategische Kommunikation",
      "Design Thinking",
      "Kulturtheorie",
    ],
  },
  documents: [
    {
      name: "Maham_Zahid.pdf",
      url: "/Maham_Zahid.pdf",
      doi: "https://doi.org/10.25624/kuenste-2491",
    },
  ],
};
