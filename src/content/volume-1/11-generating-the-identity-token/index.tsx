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
  "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2850&auto=format&fit=crop",
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
  id: "art-11",
  volume: "Volume 1",
  title: {
    en: "Generating the Identity Token",
    de: "Generating the Identity Token",
  },
  author: "Julia Thomas",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2502",

  headerImage: headerImg,

  excerpt: {
    en: "A digital mirror measuring nothing but our own void.",
    de: "Ein digitaler Spiegel, der nur unsere eigene Leere misst.",
  },

  content: {
    en: (
      <>
        <Subheading>
          On the Measurement of the Self in the Age of Algorithmic Diagnosis
        </Subheading>

        <P>
          “비어 있는”: You are the living void. Re-substantiating the
          relinquished self that was never yours to begin with.
        </P>
        <Subheading>I. The Scene</Subheading>
        <P>
          An apparatus stands in the room, clinical in its coolness. Visitors
          insert a saliva tube; LEDs flash and a loading bar crawls across a
          screen with occult metrics: Karmic Debt 33%, Quantum Entanglement 80%,
          Family Trauma Score 45%. At the end a pulsating ink blob appears,
          generated from parameters like NARC 0.73 and OEDIPAL 0.89. A performer
          in a white coat notes the values, nods knowingly, and delivers a
          pseudoscientific interpretation. The visitor listens. She believes it.
        </P>
        <P>
          Despite the absurdity of the metrics and the impossibility of
          extracting an Oedipal Index from saliva, many visitors take the
          diagnosis seriously, not ironically but with a genuine willingness to
          recognize themselves in it. Developed for the exhibition “Helth”
          <Fn n={1} /> on postmodern self-optimization, the installation is a
          satire that exceeds its own boundaries: what it dramatizes is the way
          contemporary subjects have learned to administer themselves as objects
          of measurement and optimization, a self-executed form of biopower.
        </P>
        <Subheading>II. The Pathology of Health</Subheading>
        <P>
          But the satire works only because the impulse it mocks is real. Why
          are we now so preoccupied with optimizing ourselves? Consider
          orthorexia nervosa,
          <Fn n={2} /> a term coined in 1997 for an obsessive fixation on “pure”
          eating. What is remarkable is that the pursuit of wellness, taken to
          its extreme, produces illness: the orthorexic is not indifferent to
          health but too devoted to it; the sickness is an excess of the cure,
          health pursued until it harms.
        </P>
        <P>
          That such attention can become pathological, and has even been
          proposed for inclusion in the diagnostic manual,
          <Fn n={3} /> already shows that diagnosis does not merely describe a
          condition but helps constitute it. The question is not whether the
          measurement is valid, obviously not, but why we have become the kind
          of people for whom any measurement feels like an answer to who we are.
        </P>
        <Subheading>III. The Willingness to Be Diagnosed</Subheading>
        <P>
          Part of the answer lies in the authority we grant to measurement,
          which goes nearly unquestioned: what can be measured exists. The
          Quantified Self carries its motto in its name, self-knowledge through
          numbers, and Lupton
          <Fn n={4} /> describes how data comes to be considered “truer” than
          lived experience. The authority of the white coat is older, Foucault’s
          link between knowledge and power, though it is partly staging: props
          that establish authority before a word is spoken. The visitors know
          this and play along anyway, because a diagnosis promises explanation,
          classification, identity.
        </P>
        <Subheading>IV. Making Up People</Subheading>
        <P>
          But a diagnosis does more than promise; it produces. This is Hacking’s
          looping effect:
          <Fn n={5} /> diagnoses create the people they describe. These kinds of
          people are “moving targets,” because our investigations interact with
          and change them. The classic case is Multiple Personality Disorder,
          now Dissociative Identity Disorder; the renaming reshaped the
          symptoms, and the symptoms confirmed the diagnosis. The same logic
          echoes in algorithmic attribution: more than half of ADHD-related
          TikTok videos are scientifically inaccurate,
          <Fn n={6} /> yet many users report recognizing themselves. Alper et
          al.
          <Fn n={7} /> call this algorithmically mediated biographical
          illumination; TikTok does not merely inform its users, it shapes how
          they understand themselves.
        </P>
        <Subheading>V. Diagnosis Without Etiology</Subheading>
        <P>
          And it shapes without explaining anything, because psychiatric
          diagnosis is descriptive, not etiological: the DSM describes symptom
          clusters but does not explain causes. “Depression” says nothing about
          why one is depressed. Allen Frances,
          <Fn n={8} /> chair of the DSM-IV Task Force, warns of a “diagnostic
          exuberance” that confuses disorder with ordinary sadness; the deeper
          problem is reification, treating a descriptive convention as if it
          named natural entities. What purpose does diagnosis serve if it
          explains nothing? Billing, administration, research, treatment. In
          this sense, diagnosis functions as a tool of governance.
        </P>
        <Subheading>VI. From Discipline to Control</Subheading>
        <P>
          To see how it governs, trace the genealogy of power. Foucault
          described a shift from sovereign power, which punished the body, to
          disciplinary power, which produced docile bodies through observation:
          the Panopticon’s point was not that the guard always watched but that
          the inmate, never knowing, policed himself. Biopower extended this
          from the body to the population; life itself (health, productivity,
          reproduction) became the object of administration.
        </P>
        <P>
          Self-measurement marks a further turn. The disciplinary gaze required
          an external watcher, the biopolitical regime institutions; in
          self-measurement this externality collapses. The watcher is the app on
          the wrist, the clinic the saliva tube on the counter. We have
          internalized the warden so thoroughly that we pay to install him in
          our pockets. Neoliberalism, Foucault’s late lectures
          <Fn n={9} /> show, produces homo oeconomicus as “entrepreneur of
          himself.” Han
          <Fn n={10} /> names its affective form “psychopolitics”: power through
          positive incitement, experienced as freedom.
        </P>
        <P>
          Deleuze
          <Fn n={11} /> extends this: where discipline operated through
          enclosures, control operates through continuous modulation, and
          individuals become “dividuals.” Classical statistics sought the norm;
          algorithmic governance is devoid of relation to the norm; its goal is
          not normalization but prediction. Everyone is a risk profile, and the
          self-tracking subject is not only the addressee of biopower but its
          raw material.
        </P>
        <Subheading>VII. The Inductive Turn and Theory-Ladenness</Subheading>
        <P>
          That raw material feeds a new epistemology. In 2008 Chris Anderson
          proclaimed “The End of Theory”:
          <Fn n={12} /> with enough data the scientific method becomes obsolete,
          “correlation supersedes causation.” The parallel to psychiatry is
          striking: just as the DSM describes without explaining, Big Data
          correlates without understanding. But numbers do not speak for
          themselves; as Kuhn
          <Fn n={13} /> showed, there is no neutral observation language. The
          apps and wearables that quantify us are not neutral recorders but
          apparatuses that constitute phenomena: their categories (sleep
          quality, stress, productivity) precede the measurement. We do not
          discover who we are; we are fitted into prefabricated categories that
          echo a hegemonic system with its own incentives.
        </P>
        <Subheading>VIII. The Hidden Theory of Control</Subheading>
        <P>
          If no measurement is ever neutral, what theory underlies the
          supposedly theory-free inductive turn? Its function: control. A theory
          that explains can be contested: “you are depressed because of a
          chemical imbalance” invites counter-evidence. But take “you score 0.73
          on the depression index”: what is there to contest? The number simply
          is. By refusing to explain, the system immunizes itself against
          critique and hides its constitutive power.
        </P>
        <P>
          The deeper claim is that prediction is structurally identical with
          control. A model cannot predict an individual; it can only assign her
          to a class of similar cases and transfer the class’s behavior.
          Prediction is always prediction-in-groups: nothing can be said of you
          that was not first said of a cluster to which you were assimilated.
          And every model is built against an objective function: it minimizes a
          loss with respect to a target such as clickthrough, conversion,
          retention, or recidivism. Every “neutral” correlation is a correlation
          with respect to a criterion of success. The hidden theory is not in
          the categories the system reports; it is in the loss function it never
          reveals.
        </P>
        <P>
          To know is therefore to be able to modulate: a prediction that changes
          nothing is, by the system’s standards, a failed prediction. Knowledge
          and control are a single act, and to be datafied is to be reduced from
          a who to a what: a target, a profile. The groups produced are
          operational, not sociological: clusters that behave alike toward a
          target variable, sold to advertisers, insurers, lenders, campaigns.
          The looping effect now runs at industrial scale: the segment is built
          to be sold, the sale refines it, the subject is invited to recognize
          herself in its predicted preferences. The category that cannot be
          argued with cannot be refused, and the deficiency it names is one a
          market is already prepared to supply.
        </P>
        <P>
          There is therefore no innocent metric: the subject endlessly processed
          becomes not more known but more empty.
        </P>
        <Subheading>IX. Language Constitutes Its Object</Subheading>
        <P>
          This emptiness is no accident. Just as theory constitutes its object,
          the subject is constituted through language; there is no language-free
          self, and so algorithmic self-knowledge is structurally impossible:
          the self the apparatus claims to measure is already constituted by the
          categories that purport to describe it. The ADHD diagnosis shapes how
          one experiences one’s own attention; the subject becomes what it is
          named. Where Foucault’s clinic produced its hysterics over decades,
          the platform produces diagnostic identities in weeks: the mechanism is
          continuous, the time signature new.
        </P>
        <Subheading>X. The Closed Loop</Subheading>
        <P>
          The installation stages precisely this. It makes visible what
          algorithmic systems hide: the closed loop of measurement and
          constitution. The visitors find meaning because the readiness for
          self-recognition through external attribution is so deeply anchored
          that even obvious nonsense functions as a mirror. As Lacan
          <Fn n={14} /> understood, the subject is constituted through the gaze
          of the Other; we need something outside ourselves to tell us who we
          are. The installation offers the form of recognition without its
          substance: the apparatus of being-seen, but with no one who sees.
        </P>
        <P>
          Descartes’ “I think, therefore I am” becomes: I measure, therefore I
          am. I am what my trackers know about me, and they know me as an
          entrepreneur of myself. These metrics return as advertising and
          consumer categories, what Lupton calls exploited self-tracking: the
          same data with which I believe I am knowing myself categorizes me as a
          target audience. The Panopticon has been monetized, and the inmate has
          become the shareholder of his own surveillance.
        </P>
        <P>
          The subject is constitutively split, a stranger to itself by
          condition, not defect. Self-measurement promises to overcome this
          alienation but deepens it instead, not by conspiracy but by structural
          affinity: a subject at home in itself resists manipulation, while an
          uncertain subject, perpetually seeking itself, is available for
          management and consumption. Into each new gap flow the offers: the
          diagnosis with its drug, the personality type with its community. None
          of these can finally satisfy, because what the subject seeks is the
          Other who sees and is changed by the encounter. The circle closes:
          alienation produces neediness, neediness is filled with offers, the
          offers produce new alienation. The system does not invent our lack; it
          administers it. The visitor leaves clutching a token simultaneously
          hers and utterly foreign: processed, not met.
        </P>
        <Subheading>XI. Orthorexia</Subheading>
        <P>
          Orthorexia is where this logic becomes flesh, and it is no accident
          that it emerges precisely now. Eating disorders have always been about
          regaining control in times of change, but orthorexia is the disorder
          of the quantified self, speaking the language of optimization and
          purity rather than restriction and thinness. Orthorexics do not merely
          control food; they measure it, submitting the body to the same
          datafication that pervades every other domain. The subject whose
          coordinates (stable work, relationships, identity) are dissolving
          turns to the one domain that still seems manageable: the body and its
          numbers.
        </P>
        <P>
          But the coordinates dissolve because social bonds are dissolving in
          late modernity; we are increasingly alone, even as consciousness
          emerged from communication and is oriented toward it. Without the
          Other, there is no self, and what we receive instead is the
          pseudosocial, the form of connection without its substance. This is
          why we cling to measurement: the body remains, the step count remains,
          the health score remains, small dominions, pathetic perhaps, but ours.
          The visitor submits to absurd measurement not despite its absurdity
          but because any external attribution feels better than the void. The
          tragedy of the quantified self is not that measurement is inaccurate
          but that it is accepted as a substitute for what cannot be measured,
          and so the subject measures itself endlessly, hoping the next metric
          will tell it who it is, while the answer lies in an encounter no
          algorithm can provide. The installation knows this, and hands each
          visitor not a verdict but an empty token.
        </P>
        <P>비어 있는: empty, and therefore open.</P>
      </>
    ),
    de: (
      <>
        <Subheading>
          On the Measurement of the Self in the Age of Algorithmic Diagnosis
        </Subheading>

        <P>
          “비어 있는”: You are the living void. Re-substantiating the
          relinquished self that was never yours to begin with.
        </P>
        <Subheading>I. The Scene</Subheading>
        <P>
          An apparatus stands in the room, clinical in its coolness. Visitors
          insert a saliva tube; LEDs flash and a loading bar crawls across a
          screen with occult metrics: Karmic Debt 33%, Quantum Entanglement 80%,
          Family Trauma Score 45%. At the end a pulsating ink blob appears,
          generated from parameters like NARC 0.73 and OEDIPAL 0.89. A performer
          in a white coat notes the values, nods knowingly, and delivers a
          pseudoscientific interpretation. The visitor listens. She believes it.
        </P>
        <P>
          Despite the absurdity of the metrics and the impossibility of
          extracting an Oedipal Index from saliva, many visitors take the
          diagnosis seriously, not ironically but with a genuine willingness to
          recognize themselves in it. Developed for the exhibition “Helth”
          <Fn n={1} /> on postmodern self-optimization, the installation is a
          satire that exceeds its own boundaries: what it dramatizes is the way
          contemporary subjects have learned to administer themselves as objects
          of measurement and optimization, a self-executed form of biopower.
        </P>
        <Subheading>II. The Pathology of Health</Subheading>
        <P>
          But the satire works only because the impulse it mocks is real. Why
          are we now so preoccupied with optimizing ourselves? Consider
          orthorexia nervosa,
          <Fn n={2} /> a term coined in 1997 for an obsessive fixation on “pure”
          eating. What is remarkable is that the pursuit of wellness, taken to
          its extreme, produces illness: the orthorexic is not indifferent to
          health but too devoted to it; the sickness is an excess of the cure,
          health pursued until it harms.
        </P>
        <P>
          That such attention can become pathological, and has even been
          proposed for inclusion in the diagnostic manual,
          <Fn n={3} /> already shows that diagnosis does not merely describe a
          condition but helps constitute it. The question is not whether the
          measurement is valid, obviously not, but why we have become the kind
          of people for whom any measurement feels like an answer to who we are.
        </P>
        <Subheading>III. The Willingness to Be Diagnosed</Subheading>
        <P>
          Part of the answer lies in the authority we grant to measurement,
          which goes nearly unquestioned: what can be measured exists. The
          Quantified Self carries its motto in its name, self-knowledge through
          numbers, and Lupton
          <Fn n={4} /> describes how data comes to be considered “truer” than
          lived experience. The authority of the white coat is older, Foucault’s
          link between knowledge and power, though it is partly staging: props
          that establish authority before a word is spoken. The visitors know
          this and play along anyway, because a diagnosis promises explanation,
          classification, identity.
        </P>
        <Subheading>IV. Making Up People</Subheading>
        <P>
          But a diagnosis does more than promise; it produces. This is Hacking’s
          looping effect:
          <Fn n={5} /> diagnoses create the people they describe. These kinds of
          people are “moving targets,” because our investigations interact with
          and change them. The classic case is Multiple Personality Disorder,
          now Dissociative Identity Disorder; the renaming reshaped the
          symptoms, and the symptoms confirmed the diagnosis. The same logic
          echoes in algorithmic attribution: more than half of ADHD-related
          TikTok videos are scientifically inaccurate,
          <Fn n={6} /> yet many users report recognizing themselves. Alper et
          al.
          <Fn n={7} /> call this algorithmically mediated biographical
          illumination; TikTok does not merely inform its users, it shapes how
          they understand themselves.
        </P>
        <Subheading>V. Diagnosis Without Etiology</Subheading>
        <P>
          And it shapes without explaining anything, because psychiatric
          diagnosis is descriptive, not etiological: the DSM describes symptom
          clusters but does not explain causes. “Depression” says nothing about
          why one is depressed. Allen Frances,
          <Fn n={8} /> chair of the DSM-IV Task Force, warns of a “diagnostic
          exuberance” that confuses disorder with ordinary sadness; the deeper
          problem is reification, treating a descriptive convention as if it
          named natural entities. What purpose does diagnosis serve if it
          explains nothing? Billing, administration, research, treatment. In
          this sense, diagnosis functions as a tool of governance.
        </P>
        <Subheading>VI. From Discipline to Control</Subheading>
        <P>
          To see how it governs, trace the genealogy of power. Foucault
          described a shift from sovereign power, which punished the body, to
          disciplinary power, which produced docile bodies through observation:
          the Panopticon’s point was not that the guard always watched but that
          the inmate, never knowing, policed himself. Biopower extended this
          from the body to the population; life itself (health, productivity,
          reproduction) became the object of administration.
        </P>
        <P>
          Self-measurement marks a further turn. The disciplinary gaze required
          an external watcher, the biopolitical regime institutions; in
          self-measurement this externality collapses. The watcher is the app on
          the wrist, the clinic the saliva tube on the counter. We have
          internalized the warden so thoroughly that we pay to install him in
          our pockets. Neoliberalism, Foucault’s late lectures
          <Fn n={9} /> show, produces homo oeconomicus as “entrepreneur of
          himself.” Han
          <Fn n={10} /> names its affective form “psychopolitics”: power through
          positive incitement, experienced as freedom.
        </P>
        <P>
          Deleuze
          <Fn n={11} /> extends this: where discipline operated through
          enclosures, control operates through continuous modulation, and
          individuals become “dividuals.” Classical statistics sought the norm;
          algorithmic governance is devoid of relation to the norm; its goal is
          not normalization but prediction. Everyone is a risk profile, and the
          self-tracking subject is not only the addressee of biopower but its
          raw material.
        </P>
        <Subheading>VII. The Inductive Turn and Theory-Ladenness</Subheading>
        <P>
          That raw material feeds a new epistemology. In 2008 Chris Anderson
          proclaimed “The End of Theory”:
          <Fn n={12} /> with enough data the scientific method becomes obsolete,
          “correlation supersedes causation.” The parallel to psychiatry is
          striking: just as the DSM describes without explaining, Big Data
          correlates without understanding. But numbers do not speak for
          themselves; as Kuhn
          <Fn n={13} /> showed, there is no neutral observation language. The
          apps and wearables that quantify us are not neutral recorders but
          apparatuses that constitute phenomena: their categories (sleep
          quality, stress, productivity) precede the measurement. We do not
          discover who we are; we are fitted into prefabricated categories that
          echo a hegemonic system with its own incentives.
        </P>
        <Subheading>VIII. The Hidden Theory of Control</Subheading>
        <P>
          If no measurement is ever neutral, what theory underlies the
          supposedly theory-free inductive turn? Its function: control. A theory
          that explains can be contested: “you are depressed because of a
          chemical imbalance” invites counter-evidence. But take “you score 0.73
          on the depression index”: what is there to contest? The number simply
          is. By refusing to explain, the system immunizes itself against
          critique and hides its constitutive power.
        </P>
        <P>
          The deeper claim is that prediction is structurally identical with
          control. A model cannot predict an individual; it can only assign her
          to a class of similar cases and transfer the class’s behavior.
          Prediction is always prediction-in-groups: nothing can be said of you
          that was not first said of a cluster to which you were assimilated.
          And every model is built against an objective function: it minimizes a
          loss with respect to a target such as clickthrough, conversion,
          retention, or recidivism. Every “neutral” correlation is a correlation
          with respect to a criterion of success. The hidden theory is not in
          the categories the system reports; it is in the loss function it never
          reveals.
        </P>
        <P>
          To know is therefore to be able to modulate: a prediction that changes
          nothing is, by the system’s standards, a failed prediction. Knowledge
          and control are a single act, and to be datafied is to be reduced from
          a who to a what: a target, a profile. The groups produced are
          operational, not sociological: clusters that behave alike toward a
          target variable, sold to advertisers, insurers, lenders, campaigns.
          The looping effect now runs at industrial scale: the segment is built
          to be sold, the sale refines it, the subject is invited to recognize
          herself in its predicted preferences. The category that cannot be
          argued with cannot be refused, and the deficiency it names is one a
          market is already prepared to supply.
        </P>
        <P>
          There is therefore no innocent metric: the subject endlessly processed
          becomes not more known but more empty.
        </P>
        <Subheading>IX. Language Constitutes Its Object</Subheading>
        <P>
          This emptiness is no accident. Just as theory constitutes its object,
          the subject is constituted through language; there is no language-free
          self, and so algorithmic self-knowledge is structurally impossible:
          the self the apparatus claims to measure is already constituted by the
          categories that purport to describe it. The ADHD diagnosis shapes how
          one experiences one’s own attention; the subject becomes what it is
          named. Where Foucault’s clinic produced its hysterics over decades,
          the platform produces diagnostic identities in weeks: the mechanism is
          continuous, the time signature new.
        </P>
        <Subheading>X. The Closed Loop</Subheading>
        <P>
          The installation stages precisely this. It makes visible what
          algorithmic systems hide: the closed loop of measurement and
          constitution. The visitors find meaning because the readiness for
          self-recognition through external attribution is so deeply anchored
          that even obvious nonsense functions as a mirror. As Lacan
          <Fn n={14} /> understood, the subject is constituted through the gaze
          of the Other; we need something outside ourselves to tell us who we
          are. The installation offers the form of recognition without its
          substance: the apparatus of being-seen, but with no one who sees.
        </P>
        <P>
          Descartes’ “I think, therefore I am” becomes: I measure, therefore I
          am. I am what my trackers know about me, and they know me as an
          entrepreneur of myself. These metrics return as advertising and
          consumer categories, what Lupton calls exploited self-tracking: the
          same data with which I believe I am knowing myself categorizes me as a
          target audience. The Panopticon has been monetized, and the inmate has
          become the shareholder of his own surveillance.
        </P>
        <P>
          The subject is constitutively split, a stranger to itself by
          condition, not defect. Self-measurement promises to overcome this
          alienation but deepens it instead, not by conspiracy but by structural
          affinity: a subject at home in itself resists manipulation, while an
          uncertain subject, perpetually seeking itself, is available for
          management and consumption. Into each new gap flow the offers: the
          diagnosis with its drug, the personality type with its community. None
          of these can finally satisfy, because what the subject seeks is the
          Other who sees and is changed by the encounter. The circle closes:
          alienation produces neediness, neediness is filled with offers, the
          offers produce new alienation. The system does not invent our lack; it
          administers it. The visitor leaves clutching a token simultaneously
          hers and utterly foreign: processed, not met.
        </P>
        <Subheading>XI. Orthorexia</Subheading>
        <P>
          Orthorexia is where this logic becomes flesh, and it is no accident
          that it emerges precisely now. Eating disorders have always been about
          regaining control in times of change, but orthorexia is the disorder
          of the quantified self, speaking the language of optimization and
          purity rather than restriction and thinness. Orthorexics do not merely
          control food; they measure it, submitting the body to the same
          datafication that pervades every other domain. The subject whose
          coordinates (stable work, relationships, identity) are dissolving
          turns to the one domain that still seems manageable: the body and its
          numbers.
        </P>
        <P>
          But the coordinates dissolve because social bonds are dissolving in
          late modernity; we are increasingly alone, even as consciousness
          emerged from communication and is oriented toward it. Without the
          Other, there is no self, and what we receive instead is the
          pseudosocial, the form of connection without its substance. This is
          why we cling to measurement: the body remains, the step count remains,
          the health score remains, small dominions, pathetic perhaps, but ours.
          The visitor submits to absurd measurement not despite its absurdity
          but because any external attribution feels better than the void. The
          tragedy of the quantified self is not that measurement is inaccurate
          but that it is accepted as a substitute for what cannot be measured,
          and so the subject measures itself endlessly, hoping the next metric
          will tell it who it is, while the answer lies in an encounter no
          algorithm can provide. The installation knows this, and hands each
          visitor not a verdict but an empty token.
        </P>
        <P>비어 있는: empty, and therefore open.</P>
      </>
    ),
  },
  footnotes: {
    en: [
      "“Helth” (Culterim Veterinary, 2024, https://pascal.cc/helth).",
      "Steven Bratman coined the term in “Health Food Junkie,” Yoga Journal (1997). For proposed clinical criteria see Dunn, T. M., & Bratman, S. (2016). On orthorexia nervosa: A review of the literature and proposed diagnostic criteria. Eating Behaviors, 21, 11–17.",
      "American Psychiatric Association (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). Orthorexia is not a recognized DSM-5 diagnosis; only proposed criteria exist (Dunn & Bratman, 2016).",
      "Lupton, D. (2016). The Quantified Self. Cambridge: Polity Press.",
      "Hacking, I. (1995). The looping effects of human kinds. In D. Sperber, D. Premack, & A. J. Premack (Eds.), Causal Cognition. Oxford: Oxford University Press. See also Hacking, “Making Up People” (1986).",
      "Yeung, A., Ng, E., & Abi-Jaoude, E. (2022). TikTok and attention-deficit/hyperactivity disorder: A cross-sectional study of social media content quality. Canadian Journal of Psychiatry, 67(12),",
      "Alper, M., Rauchberg, J. S., Simpson, E., Guberman, J., & Feinberg, S. (2023). TikTok as algorithmically mediated biographical illumination: Autism, self-discovery, and platformed diagnosis on #autisktok. New Media & Society, 27(3), 1378–1396. (The study concerns autism; the concept is extended here to algorithmic self-attribution more broadly.)",
      "Frances, A. (2013). Saving Normal. New York: William Morrow.",
      "Foucault, M. (2008). The Birth of Biopolitics: Lectures at the Collège de France, 1978–1979. Basingstoke: Palgrave Macmillan.",
      "Han, B.-C. (2017). Psychopolitics: Neoliberalism and New Technologies of Power. London: Verso.",
      "Deleuze, G. (1992). Postscript on the societies of control. October, 59, 3–7.",
      "Anderson, C. (2008). The end of theory: The data deluge makes the scientific method obsolete. Wired.",
      "Kuhn, T. S. (1962). The Structure of Scientific Revolutions. Chicago: University of Chicago Press.",
      "Lacan, J. (1978). The Four Fundamental Concepts of Psychoanalysis (Seminar XI). New York: Norton. See also Écrits.",
    ],
    de: [
      "“Helth” (Culterim Veterinary, 2024, https://pascal.cc/helth).",
      "Steven Bratman coined the term in “Health Food Junkie,” Yoga Journal (1997). For proposed clinical criteria see Dunn, T. M., & Bratman, S. (2016). On orthorexia nervosa: A review of the literature and proposed diagnostic criteria. Eating Behaviors, 21, 11–17.",
      "American Psychiatric Association (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). Orthorexia is not a recognized DSM-5 diagnosis; only proposed criteria exist (Dunn & Bratman, 2016).",
      "Lupton, D. (2016). The Quantified Self. Cambridge: Polity Press.",
      "Hacking, I. (1995). The looping effects of human kinds. In D. Sperber, D. Premack, & A. J. Premack (Eds.), Causal Cognition. Oxford: Oxford University Press. See also Hacking, “Making Up People” (1986).",
      "Yeung, A., Ng, E., & Abi-Jaoude, E. (2022). TikTok and attention-deficit/hyperactivity disorder: A cross-sectional study of social media content quality. Canadian Journal of Psychiatry, 67(12),",
      "Alper, M., Rauchberg, J. S., Simpson, E., Guberman, J., & Feinberg, S. (2023). TikTok as algorithmically mediated biographical illumination: Autism, self-discovery, and platformed diagnosis on #autisktok. New Media & Society, 27(3), 1378–1396. (The study concerns autism; the concept is extended here to algorithmic self-attribution more broadly.)",
      "Frances, A. (2013). Saving Normal. New York: William Morrow.",
      "Foucault, M. (2008). The Birth of Biopolitics: Lectures at the Collège de France, 1978–1979. Basingstoke: Palgrave Macmillan.",
      "Han, B.-C. (2017). Psychopolitics: Neoliberalism and New Technologies of Power. London: Verso.",
      "Deleuze, G. (1992). Postscript on the societies of control. October, 59, 3–7.",
      "Anderson, C. (2008). The end of theory: The data deluge makes the scientific method obsolete. Wired.",
      "Kuhn, T. S. (1962). The Structure of Scientific Revolutions. Chicago: University of Chicago Press.",
      "Lacan, J. (1978). The Four Fundamental Concepts of Psychoanalysis (Seminar XI). New York: Norton. See also Écrits.",
    ],
  },
  authorBio: {
    en: "Julia Thomas is a ML Engineer and behavioral psychotherapist, PhD in clinical psychol- ogy and epidemiology in Basel, art practice for Semantic ai and philosophy lab residing at the beautiful Prachtsaal Studios e.V.",
    de: "Julia Thomas is a ML Engineer and behavioral psychotherapist, PhD in clinical psychol- ogy and epidemiology in Basel, art practice for Semantic ai and philosophy lab residing at the beautiful Prachtsaal Studios e.V.",
  },
  keywords: {
    en: [
      "Quantified Self",
      "Algorithmic Diagnosis",
      "Biopower",
      "Michel Foucault",
      "Ian Hacking",
      "Looping Effect",
      "Gilles Deleuze",
      "Societies of Control",
      "Orthorexia",
      "Datafication",
      "Jacques Lacan",
      "Installation Art",
      "Self-Optimization",
    ],
    de: [
      "Quantified Self",
      "Algorithmische Diagnose",
      "Biomacht",
      "Michel Foucault",
      "Ian Hacking",
      "Looping-Effekt",
      "Gilles Deleuze",
      "Kontrollgesellschaft",
      "Orthorexie",
      "Datafizierung",
      "Jacques Lacan",
      "Installation",
      "Selbstoptimierung",
    ],
  },
  documents: [
    {
      name: "Julia_Thomas.pdf",
      url: "/Julia_Thomas.pdf",
      doi: "https://doi.org/10.25624/kuenste-2502",
    },
  ],
};
