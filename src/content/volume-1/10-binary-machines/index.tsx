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

// 02. BEITRAGS-DATEN UND INHALT DEFINIEREN
export const article: Article = {
  id: "art-10",
  volume: "Volume 1",
  title: {
    en: "Binary Machines, Quantum Playground?",
    de: "Binary Machines, Quantum Playground?",
  },
  author: "Zrinka Štimac",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2500",

  headerImage: headerImg,
  headerVideo: headerVid,

  excerpt: {
    en: "Playing fluid quantum melodies on rigid binary keys.",
    de: "Fluide Quantenmelodien auf starren binären Tasten spielen.",
  },

  content: {
    en: (
      <>
        <Subheading>Abstract</Subheading>
        <P>
          What kind of reality do our language machines draw us into? Binary
          language models are not neutral: they tend to reproduce substantialist
          worldviews, even when explaining quantum physics. This article argues
          that aesthetic and pedagogic intervention can reshape these defaults.
          Drawing on Cassirer, Barad, and Bohr, it presents Symphony of the
          Spheres — a co-creative epistemic artifact developed with AI that
          translates names, historical numerological systems, and color theories
          into context-dependent tunes. The result is a performative instrument
          for quantum-relational thinking: non-linear, contextual,
          participatory. Binary machines, it turns out, can be cracked open.
        </P>

        <Subheading>1. Binary machines cracking open</Subheading>
        <P>
          On the cusp of the quantum age, everything vibrates more intensely,
          more dangerously, more inspiringly. We work with binary language
          models that operate with numbers and statistical probabilities
          formulated by humans and are trained on huge corpora of human language
          and logic. They predict the next character and the next word. They use
          binary combinations to generate content that we may like or not. By
          now, they are also routinely deployed in contexts of conflict and
          warfare.
        </P>
        <P>
          They have become a new building block in the field of symbolic forms
          <Fn n={1} /> such as language, art, science, and myths, and are
          simultaneously reshaping cultural meaning. Their mode of operation is
          definitely not superimposed or entangled. They simulate uncertainty
          but remain grounded in deterministic binarity. They reproduce
          everything they have been given to process, thereby repeating and
          stabilizing it.
        </P>
        <P>
          How can they be used as a quantum playground? This paper presents an
          example of this kind of play.
        </P>

        <Subheading>
          2. What is hidden in a plane site (and in plain sight)?
        </Subheading>
        <P>
          As we know, LLMs are neither neutral nor objective machines, despite
          all the efforts of their manufacturers. When they serve as educational
          media to answer students' questions about quantum technologies,
          generate explanations, and provide examples, they convey worldviews:
          whether reality consists of separate, stable objects (substantial
          ontology), or whether we and the world are fundamentally relational,
          emergent, and co-constituted (quantum relationality, ontological
          designs).
          <Fn n={2} /> Crucially, quantum-relational thinking differs from
          classical relationality: where the latter connects pre-existing
          entities, the former insists that entities themselves emerge through
          relation: there is no A before the encounter with B.
          <Fn n={3} />
        </P>
        <P>
          My research on quantum technology in German school textbooks and youth
          non-fiction reveals a certain pattern.
          <Fn n={4} /> When it comes to quantum technology, educational media
          implicitly raise fundamental questions: What is reality? What does
          observation mean? However, they offer little guidance on how young
          people can process quantum-relational questions and integrate them
          into a coherent worldview. In other words, ontological anchoring of
          this relational worldview is missing.
        </P>
        <P>
          Students learn that the quantum world is “counterintuitive,” “beyond
          common sense,” and even “strange”. The relational, nonlinear thinking
          skills that would be required in this context are rarely promoted.
          <Fn n={5} /> Quantum physicists themselves reflect this.
          <Fn n={6} />
        </P>
        <P>
          Parallel to this, LLMs naturally reproduce these positions. When asked
          to explain quantum mechanics, many models default to classical
          metaphors: strange rules of quantum physics, particles as billiard
          balls, superposition as “being in two places at once.” Only when
          challenged with irritating or rather, inspiring prompts do they open
          up to other ways of interpreting the subject.
        </P>
        <P>
          But if we assume that knowledge and being are intertwined, and that
          observers and the observed bring each other into being
          <Fn n={7} />, then we can see the bigger picture. For art of all sorts
          already embodies the relational thinking that is so urgently needed
          for the quantum age.
        </P>
        <P>
          What is missing is a reinterpretation of quantum technologies as
          invitations to quantum-relational thinking. All this means that our
          new task is to teach not only students but also LLMs how to play
          quantum glass bead games.
        </P>

        <Subheading>
          3. Symphony of the Spheres: an aesthetic-epistemic intervention
        </Subheading>
        <P>
          How does a name sound across human history? I developed Symphony of
          the Spheres to find out: it combines letters, numbers, tones, and
          colors. Each letter has a numerical equivalent, while numbers
          correspond to tones (frequencies). Every era, every culture had its
          own keys for this convergence.
        </P>
        <P>
          With the support of AI coding assistant lovable.dev, this idea became
          reality. I provided the concept and infrastructure: links to harmonic
          systems, letter-number correspondences in Gematria and Chinese
          cosmology, tone-frequency assignments. The AI offered further
          historical examples as well as Newton's color theories as a sensory
          level extension. Later, I added Goethe's color theory as a cultural
          artifact.
        </P>
        <P>
          Symphony of the Spheres enacts interconnectedness, emergence,
          complementarity, participation in content, structure, and method
          alike. Learners enter it, and in doing so become co-creators of the
          knowledge and meaning that emerge. What results is not solely a
          didactic instrument, but a performative epistemic artifact where
          knowledge is experienced as relation, resonance, and response.
        </P>
        <P>
          From a philosophical perspective, this represents a convergence of
          symbolic forms as Cassirer conceived them. From an educational
          perspective, it enacts what Bohr emphasized: complementarity not as
          paradox, but as epistemic principle.
        </P>
        <P>
          Here is what users experience: They enter a text, perhaps their own
          name, a poem, or one sentence only in the interface (see below).
        </P>

        <ArticleImage
          src={img1}
          alt="Symphony of the Spheres interface"
          caption=""
        />

        <P>
          They choose an epoch: Chinese number symbology, Indian numerology,
          Persian tradition, Hebrew Gematria — or ASCII, the numerical code of
          the digital age itself. Those systems have been translated into
          acoustic experience.
        </P>

        <ArticleImage src={img2} alt="Epoch selection" caption="" />

        <P>
          In the third step, one can choose between color theory by Newton or by
          Goethe. The first is spectral, objective in the sense of physics, and
          prismatic. The latter is phenomenological and subjective. But they are
          also complementary.
        </P>

        <ArticleImage src={img3} alt="Color theory selection" caption="" />

        <P>
          And finally, a specific tune unfolds, a numerical signature made
          audible: strange, even alien, as if forgotten matter has been breathed
          into life.
        </P>

        <ArticleImage src={img4} alt="Audible numerical signature" caption="" />

        <P>
          Enter the same text again, choose a different era, and a different
          tune emerges. Each historical era, as an independent cultural
          knowledge system, can be heard and thus experienced. Although it may
          sound dissonant, it offers insight into different sonic landscapes
          rather than mere entertainment.
        </P>
        <P>
          The deeper achievement is epistemic, and possibly ontological: the
          listener constructs meaning through the experienced superposition of
          letters, numbers, tones, and colors. This meaning-making enacts an
          epistemic and paradigmatic bridge at historical, cultural, and
          technical levels:
        </P>
        <P>
          • Cultural knowledge codes reality differently (historical
          epistemology), since there is no “natural” connection between the
          dimensions of meaning. And yet, each system is internally consistent.
        </P>
        <P>
          • Complementarity occurs when the same text is floating through
          different times and gets irrevocably different tunes.
        </P>
        <P>
          • The contrast of different epochs, colors, and texts enables
          emergence and learning about difference.
        </P>
        <P>
          • Paradigmatically, it demonstrates that a classical tool, a binary
          LLM, and deterministic correspondence tables can together constitute
          an epistemic intervention that cultivates quantum-relational thinking,
          if designed to do so.
        </P>
        <P>
          The connection to quantum mechanics lies in the fact that the tool is
          a metaphor for quantum encoding. This structure is homologous to
          quantum measurement:
        </P>

        <ArticleImage src={img5} alt="Quantum encoding metaphor" caption="" />

        <P>
          Transformative potential can be observed here: deterministic media
          enable non-deterministic competencies. Students practice quantum
          thinking: a mode of thought that embraces quantum relationality,
          complementarity, and contextual emergence, rather than linear
          causality and fixed identity. This is a first step in preparation for
          a quantum worldview without a single formula, enabling an exercise in
          quantum-relational competence.
        </P>
        <P>
          Symphony of the Spheres can cultivate three competencies that go
          beyond traditional teaching methods:
        </P>
        <P>
          • Contextual emergence: different historical eras produce different
          tunes (meaning depends on the context in which it is measured)
        </P>
        <P>
          • Quantum-relational ontology: input and framework bring emergence
          (observers and the observed constitute each other)
        </P>
        <P>
          • Complementarity as epistemic humility (tolerance of ambiguity, e.g.
          OECD Report 2030).
        </P>
        <P>
          The tool offers an aesthetic rehearsal space for quantum-relational
          thinking — what Schiller called aesthetic education: not bridging the
          gap between sensing and thinking, but enabling the transition between
          them. The practice happens effortlessly, through play and perception,
          not explanation.
          <Fn n={8} />
        </P>
        <P>
          Whether Symphony of the Spheres actually shifts ontological defaults
          or merely aestheticizes them remains an open and empirically urgent
          question.
        </P>

        <Subheading>4. What does this show?</Subheading>
        <P>
          Symphony of the Spheres reveals that the boundary between binary
          machines and quantum-relational imagination is not fixed. It can be
          shaped and molded by our ideas, our design, our suggestions, the
          questions we ask, and the games we play with machines.
        </P>
        <P>
          But it reveals something even deeper: that human perception,
          evaluation, and action have always been quantum-like.
          <Fn n={9} /> Quantum physics now provides us with a scientific
          vocabulary to describe how reality consists not of things, but of
          quantum relations. Artists, poets, guardians of inner knowledge,
          indigenous knowledge systems, and contemplative traditions have always
          cultivated this knowledge. Symphony of the Spheres is a window into
          this, revealing that cultures across history have thought
          quantum-relationally long before physics had the language for it.
        </P>

        <Subheading>5. Why do we have to intervene?</Subheading>
        <P>
          Educational policy documents, curriculum standards, and AI-driven
          learning platforms and emerging quantum technology policies are
          currently being written by international organizations — the UN, the
          EU, the OECD — without asking the ontological question: What kind of
          human being are we inscribing into students, and into machines? If
          artists do not enter this space, the default will remain: a
          predominantly substantialist, passive learner, trained to consume a
          pre-given world rather than co-create an emergent one.
        </P>
        <P>
          Symphony of the Spheres hopefully shows that another way is possible:
          creative questions posed to AI remind us of our own quantum-relational
          potential — and slowly reshape the machines that shape our world.
        </P>

        <Subheading>6. Epilog</Subheading>
        <P>
          Before you finish reading, try Symphony of the Spheres:
          https://symphony-of-the-spheres.lovable.app/
        </P>
        <P>
          © Zrinka Štimac, 2025. CC BY-NC-ND 4.0. Enter your name. Choose an
          epoch. Listen. What has emerged that did not exist before — between
          you, the tool, and the worlds?
        </P>
      </>
    ),
    de: (
      <>
        <Subheading>Abstract</Subheading>
        <P>
          What kind of reality do our language machines draw us into? Binary
          language models are not neutral: they tend to reproduce substantialist
          worldviews, even when explaining quantum physics. This article argues
          that aesthetic and pedagogic intervention can reshape these defaults.
          Drawing on Cassirer, Barad, and Bohr, it presents Symphony of the
          Spheres — a co-creative epistemic artifact developed with AI that
          translates names, historical numerological systems, and color theories
          into context-dependent tunes. The result is a performative instrument
          for quantum-relational thinking: non-linear, contextual,
          participatory. Binary machines, it turns out, can be cracked open.
        </P>

        <Subheading>1. Binary machines cracking open</Subheading>
        <P>
          On the cusp of the quantum age, everything vibrates more intensely,
          more dangerously, more inspiringly. We work with binary language
          models that operate with numbers and statistical probabilities
          formulated by humans and are trained on huge corpora of human language
          and logic. They predict the next character and the next word. They use
          binary combinations to generate content that we may like or not. By
          now, they are also routinely deployed in contexts of conflict and
          warfare.
        </P>
        <P>
          They have become a new building block in the field of symbolic forms
          <Fn n={1} /> such as language, art, science, and myths, and are
          simultaneously reshaping cultural meaning. Their mode of operation is
          definitely not superimposed or entangled. They simulate uncertainty
          but remain grounded in deterministic binarity. They reproduce
          everything they have been given to process, thereby repeating and
          stabilizing it.
        </P>
        <P>
          How can they be used as a quantum playground? This paper presents an
          example of this kind of play.
        </P>

        <Subheading>
          2. What is hidden in a plane site (and in plain sight)?
        </Subheading>
        <P>
          As we know, LLMs are neither neutral nor objective machines, despite
          all the efforts of their manufacturers. When they serve as educational
          media to answer students' questions about quantum technologies,
          generate explanations, and provide examples, they convey worldviews:
          whether reality consists of separate, stable objects (substantial
          ontology), or whether we and the world are fundamentally relational,
          emergent, and co-constituted (quantum relationality, ontological
          designs).
          <Fn n={2} /> Crucially, quantum-relational thinking differs from
          classical relationality: where the latter connects pre-existing
          entities, the former insists that entities themselves emerge through
          relation: there is no A before the encounter with B.
          <Fn n={3} />
        </P>
        <P>
          My research on quantum technology in German school textbooks and youth
          non-fiction reveals a certain pattern.
          <Fn n={4} /> When it comes to quantum technology, educational media
          implicitly raise fundamental questions: What is reality? What does
          observation mean? However, they offer little guidance on how young
          people can process quantum-relational questions and integrate them
          into a coherent worldview. In other words, ontological anchoring of
          this relational worldview is missing.
        </P>
        <P>
          Students learn that the quantum world is “counterintuitive,” “beyond
          common sense,” and even “strange”. The relational, nonlinear thinking
          skills that would be required in this context are rarely promoted.
          <Fn n={5} /> Quantum physicists themselves reflect this.
          <Fn n={6} />
        </P>
        <P>
          Parallel to this, LLMs naturally reproduce these positions. When asked
          to explain quantum mechanics, many models default to classical
          metaphors: strange rules of quantum physics, particles as billiard
          balls, superposition as “being in two places at once.” Only when
          challenged with irritating or rather, inspiring prompts do they open
          up to other ways of interpreting the subject.
        </P>
        <P>
          But if we assume that knowledge and being are intertwined, and that
          observers and the observed bring each other into being
          <Fn n={7} />, then we can see the bigger picture. For art of all sorts
          already embodies the relational thinking that is so urgently needed
          for the quantum age.
        </P>
        <P>
          What is missing is a reinterpretation of quantum technologies as
          invitations to quantum-relational thinking. All this means that our
          new task is to teach not only students but also LLMs how to play
          quantum glass bead games.
        </P>

        <Subheading>
          3. Symphony of the Spheres: an aesthetic-epistemic intervention
        </Subheading>
        <P>
          How does a name sound across human history? I developed Symphony of
          the Spheres to find out: it combines letters, numbers, tones, and
          colors. Each letter has a numerical equivalent, while numbers
          correspond to tones (frequencies). Every era, every culture had its
          own keys for this convergence.
        </P>
        <P>
          With the support of AI coding assistant lovable.dev, this idea became
          reality. I provided the concept and infrastructure: links to harmonic
          systems, letter-number correspondences in Gematria and Chinese
          cosmology, tone-frequency assignments. The AI offered further
          historical examples as well as Newton's color theories as a sensory
          level extension. Later, I added Goethe's color theory as a cultural
          artifact.
        </P>
        <P>
          Symphony of the Spheres enacts interconnectedness, emergence,
          complementarity, participation in content, structure, and method
          alike. Learners enter it, and in doing so become co-creators of the
          knowledge and meaning that emerge. What results is not solely a
          didactic instrument, but a performative epistemic artifact where
          knowledge is experienced as relation, resonance, and response.
        </P>
        <P>
          From a philosophical perspective, this represents a convergence of
          symbolic forms as Cassirer conceived them. From an educational
          perspective, it enacts what Bohr emphasized: complementarity not as
          paradox, but as epistemic principle.
        </P>
        <P>
          Here is what users experience: They enter a text, perhaps their own
          name, a poem, or one sentence only in the interface (see below).
        </P>

        <ArticleImage
          src={img1}
          alt="Symphony of the Spheres interface"
          caption=""
        />

        <P>
          They choose an epoch: Chinese number symbology, Indian numerology,
          Persian tradition, Hebrew Gematria — or ASCII, the numerical code of
          the digital age itself. Those systems have been translated into
          acoustic experience.
        </P>

        <ArticleImage src={img2} alt="Epoch selection" caption="" />

        <P>
          In the third step, one can choose between color theory by Newton or by
          Goethe. The first is spectral, objective in the sense of physics, and
          prismatic. The latter is phenomenological and subjective. But they are
          also complementary.
        </P>

        <ArticleImage src={img3} alt="Color theory selection" caption="" />

        <P>
          And finally, a specific tune unfolds, a numerical signature made
          audible: strange, even alien, as if forgotten matter has been breathed
          into life.
        </P>

        <ArticleImage src={img4} alt="Audible numerical signature" caption="" />

        <P>
          Enter the same text again, choose a different era, and a different
          tune emerges. Each historical era, as an independent cultural
          knowledge system, can be heard and thus experienced. Although it may
          sound dissonant, it offers insight into different sonic landscapes
          rather than mere entertainment.
        </P>
        <P>
          The deeper achievement is epistemic, and possibly ontological: the
          listener constructs meaning through the experienced superposition of
          letters, numbers, tones, and colors. This meaning-making enacts an
          epistemic and paradigmatic bridge at historical, cultural, and
          technical levels:
        </P>
        <P>
          • Cultural knowledge codes reality differently (historical
          epistemology), since there is no “natural” connection between the
          dimensions of meaning. And yet, each system is internally consistent.
        </P>
        <P>
          • Complementarity occurs when the same text is floating through
          different times and gets irrevocably different tunes.
        </P>
        <P>
          • The contrast of different epochs, colors, and texts enables
          emergence and learning about difference.
        </P>
        <P>
          • Paradigmatically, it demonstrates that a classical tool, a binary
          LLM, and deterministic correspondence tables can together constitute
          an epistemic intervention that cultivates quantum-relational thinking,
          if designed to do so.
        </P>
        <P>
          The connection to quantum mechanics lies in the fact that the tool is
          a metaphor for quantum encoding. This structure is homologous to
          quantum measurement:
        </P>

        <ArticleImage src={img5} alt="Quantum encoding metaphor" caption="" />

        <P>
          Transformative potential can be observed here: deterministic media
          enable non-deterministic competencies. Students practice quantum
          thinking: a mode of thought that embraces quantum relationality,
          complementarity, and contextual emergence, rather than linear
          causality and fixed identity. This is a first step in preparation for
          a quantum worldview without a single formula, enabling an exercise in
          quantum-relational competence.
        </P>
        <P>
          Symphony of the Spheres can cultivate three competencies that go
          beyond traditional teaching methods:
        </P>
        <P>
          • Contextual emergence: different historical eras produce different
          tunes (meaning depends on the context in which it is measured)
        </P>
        <P>
          • Quantum-relational ontology: input and framework bring emergence
          (observers and the observed constitute each other)
        </P>
        <P>
          • Complementarity as epistemic humility (tolerance of ambiguity, e.g.
          OECD Report 2030).
        </P>
        <P>
          The tool offers an aesthetic rehearsal space for quantum-relational
          thinking — what Schiller called aesthetic education: not bridging the
          gap between sensing and thinking, but enabling the transition between
          them. The practice happens effortlessly, through play and perception,
          not explanation.
          <Fn n={8} />
        </P>
        <P>
          Whether Symphony of the Spheres actually shifts ontological defaults
          or merely aestheticizes them remains an open and empirically urgent
          question.
        </P>

        <Subheading>4. What does this show?</Subheading>
        <P>
          Symphony of the Spheres reveals that the boundary between binary
          machines and quantum-relational imagination is not fixed. It can be
          shaped and molded by our ideas, our design, our suggestions, the
          questions we ask, and the games we play with machines.
        </P>
        <P>
          But it reveals something even deeper: that human perception,
          evaluation, and action have always been quantum-like.
          <Fn n={9} /> Quantum physics now provides us with a scientific
          vocabulary to describe how reality consists not of things, but of
          quantum relations. Artists, poets, guardians of inner knowledge,
          indigenous knowledge systems, and contemplative traditions have always
          cultivated this knowledge. Symphony of the Spheres is a window into
          this, revealing that cultures across history have thought
          quantum-relationally long before physics had the language for it.
        </P>

        <Subheading>5. Why do we have to intervene?</Subheading>
        <P>
          Educational policy documents, curriculum standards, and AI-driven
          learning platforms and emerging quantum technology policies are
          currently being written by international organizations — the UN, the
          EU, the OECD — without asking the ontological question: What kind of
          human being are we inscribing into students, and into machines? If
          artists do not enter this space, the default will remain: a
          predominantly substantialist, passive learner, trained to consume a
          pre-given world rather than co-create an emergent one.
        </P>
        <P>
          Symphony of the Spheres hopefully shows that another way is possible:
          creative questions posed to AI remind us of our own quantum-relational
          potential — and slowly reshape the machines that shape our world.
        </P>

        <Subheading>6. Epilog</Subheading>
        <P>
          Before you finish reading, try Symphony of the Spheres:
          https://symphony-of-the-spheres.lovable.app/
        </P>
        <P>
          © Zrinka Štimac, 2025. CC BY-NC-ND 4.0. Enter your name. Choose an
          epoch. Listen. What has emerged that did not exist before — between
          you, the tool, and the worlds?
        </P>
      </>
    ),
  },
  footnotes: {
    en: [
      "Cassirer, E. (1923–1929). The Philosophy of Symbolic Forms. Yale University Press.",
      "Willis, A.-M. (2006). Ontological designing. Design Philosophy Papers, 4(2), 69–92. https://doi.org/10.2752/144871306X13966268131514; Escobar, A. (2022). Designs for the pluriverse. DIID, 1(75). https://doi.org/10.30682/diid7521d",
      "Štimac, Z. (2026). Epistemic Openings Without Ontological Closure: Toward a Theoretical Framework for Quantum thinking in Education. Journal on AI Policy and Complex Systems Vol 10, No 1 Winter 2025; Cf. also Štimac, Z. (2024). In Search of Lost Relations: Educational Approaches in the Light of Quantum Mechanical Equivalents. Journal on AI Policy and Complex Systems, 9(1). https://doi.org/10.18278/jpcs.9.1.3",
      "See project: https://www.gei.de/en/research/projects/neue-menschenbilder-neues-denken-quantentechnologie-als-herausforderung-der-bildung",
      "Examples from educational media: Universum Physik (2024, p. 265, Cornelsen) instructs students to calculate the de Broglie wavelength for Usain Bolt’s world record (95 kg, 100m in 9.58s): Here quantum formalism is applied as calculation exercise, without ontological reflection. Baur, M. (2020). Licht und Atome. Tessloff: the world of quanta is a strange one (p. 4), crazy particles (p. 22) — wonder without grounding.",
      "Barad, K. (2007). Meeting the Universe Halfway. Duke University Press.; Bohm, D. (1980). Wholeness and the Implicate Order. Routledge.; Rovelli, C. (2021). Helgoland. Penguin.",
      "Wheeler, J.A. (1983). Law Without Law. In Wheeler & Zurek (Eds.), Quantum Theory and Measurement. Princeton University Press.; Barad, K. (2007), each in a different way.",
      "Schiller, F. (1795). On the Aesthetic Education of Man, Letters 15 and 19. Oxford University Press, 1982 (trans. Wilkinson & Willoughby). https://projekt-gutenberg.org/authors/friedrich-schiller/books/friedrich-schiller-ueber-die-aesthetische-erziehung-des-menschen/",
      "Busemeyer, J.R. & Bruza, P. (2012). Quantum Models of Cognition and Decision. Cambridge University Press.; Khrennikov, A. (2010). Ubiquitous Quantum Structure. Springer",
    ],
    de: [
      "Cassirer, E. (1923–1929). The Philosophy of Symbolic Forms. Yale University Press.",
      "Willis, A.-M. (2006). Ontological designing. Design Philosophy Papers, 4(2), 69–92. https://doi.org/10.2752/144871306X13966268131514; Escobar, A. (2022). Designs for the pluriverse. DIID, 1(75). https://doi.org/10.30682/diid7521d",
      "Štimac, Z. (2026). Epistemic Openings Without Ontological Closure: Toward a Theoretical Framework for Quantum thinking in Education. Journal on AI Policy and Complex Systems Vol 10, No 1 Winter 2025; Cf. also Štimac, Z. (2024). In Search of Lost Relations: Educational Approaches in the Light of Quantum Mechanical Equivalents. Journal on AI Policy and Complex Systems, 9(1). https://doi.org/10.18278/jpcs.9.1.3",
      "See project: https://www.gei.de/en/research/projects/neue-menschenbilder-neues-denken-quantentechnologie-als-herausforderung-der-bildung",
      "Examples from educational media: Universum Physik (2024, p. 265, Cornelsen) instructs students to calculate the de Broglie wavelength for Usain Bolt’s world record (95 kg, 100m in 9.58s): Here quantum formalism is applied as calculation exercise, without ontological reflection. Baur, M. (2020). Licht und Atome. Tessloff: the world of quanta is a strange one (p. 4), crazy particles (p. 22) — wonder without grounding.",
      "Barad, K. (2007). Meeting the Universe Halfway. Duke University Press.; Bohm, D. (1980). Wholeness and the Implicate Order. Routledge.; Rovelli, C. (2021). Helgoland. Penguin.",
      "Wheeler, J.A. (1983). Law Without Law. In Wheeler & Zurek (Eds.), Quantum Theory and Measurement. Princeton University Press.; Barad, K. (2007), each in a different way.",
      "Schiller, F. (1795). On the Aesthetic Education of Man, Letters 15 and 19. Oxford University Press, 1982 (trans. Wilkinson & Willoughby). https://projekt-gutenberg.org/authors/friedrich-schiller/books/friedrich-schiller-ueber-die-aesthetische-erziehung-des-menschen/",
      "Busemeyer, J.R. & Bruza, P. (2012). Quantum Models of Cognition and Decision. Cambridge University Press.; Khrennikov, A. (2010). Ubiquitous Quantum Structure. Springer",
    ],
  },
  authorBio: {
    en: 'Dr. Zrinka Štimac is a Senior Research Fellow at the Leibniz Institute for Educational Media | Georg Eckert Institute in Braunschweig, where she investigates how analogue and digital educational media reproduce, or can transform, dominant ontological assumptions. Her current project "New Humans? New Thinking? Quantum Technology as a Challenge for Education" (funded by Zukunft Niedersachsen) explores relational thinking and epistemic oscillations in educational contexts.',
    de: 'Dr. Zrinka Štimac is a Senior Research Fellow at the Leibniz Institute for Educational Media | Georg Eckert Institute in Braunschweig, where she investigates how analogue and digital educational media reproduce, or can transform, dominant ontological assumptions. Her current project "New Humans? New Thinking? Quantum Technology as a Challenge for Education" (funded by Zukunft Niedersachsen) explores relational thinking and epistemic oscillations in educational contexts.',
  },
  keywords: {
    en: [
      "Large Language Models",
      "Ontology",
      "Quantum Relationality",
      "Complementarity",
      "Niels Bohr",
      "Ernst Cassirer",
      "Karen Barad",
      "Aesthetic Education",
      "Friedrich Schiller",
      "Educational Media",
      "Co-Creation",
      "Symphony of the Spheres",
    ],
    de: [
      "Sprachmodelle",
      "Ontologie",
      "Quantenrelationalität",
      "Komplementarität",
      "Niels Bohr",
      "Ernst Cassirer",
      "Karen Barad",
      "Ästhetische Erziehung",
      "Friedrich Schiller",
      "Bildungsmedien",
      "Ko-Kreation",
      "Symphony of the Spheres",
    ],
  },
  documents: [
    {
      name: "Binary_Machines.pdf",
      url: "/Binary_Machines.pdf",
      doi: "https://doi.org/10.25624/kuenste-2500",
    },
  ],
};
