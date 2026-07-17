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
  "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop",
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
  id: "art-5",
  volume: "Volume 1",
  title: {
    en: "Skin in the Game",
    de: "Skin in the Game",
  },
  author: "Jana Möller-Herm",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2498",

  headerImage: headerImg,

  excerpt: {
    en: "Automating the author builds a scientific ghost town.",
    de: "Wer den Autor automatisiert, erbaut eine wissenschaftliche Geisterstadt.",
  },

  content: {
    en: (
      <>
        <Subheading>On AI and Accountability in Scientific Work</Subheading>
        <P>
          A few months ago, researchers developed an artificial intelligence
          (AI) system called the “AI Scientist”. They submitted three fully
          machine-generated manuscripts to a workshop of a top-tier machine
          learning conference and one of them passed the first round of peer
          review. The AI system had autonomously generated the idea, searched
          the literature, planned and run the experiment, analyzed the results,
          drafted the manuscripts, and even simulated peer review, end to end,
          with no human involvement at any decision point
          <Fn n={1} />. As a researcher who has spent her career making such
          decisions, one at a time, I find this moment unsettling. It may be a
          foretaste of AI aiding scientific discovery, but it deserves more than
          the cautious optimism with which it has often been greeted
          <Fn n={2} />.
        </P>
        <P>
          My concern is not that AI will write our papers for us. AI already
          does, in pieces, and much of that assistance is genuinely useful. My
          concern is that the very idea of a paper as a chain of accountable
          acts by someone who chose this question, this method, this
          interpretation, and who stakes their name on each of them is quietly
          being hollowed out. The growing literature on AI slop in academic
          publishing describes this from the symptom side: machine-generated
          text polluting journals, references that do not exist, reviews written
          by the same models that wrote the manuscripts under review
          <Fn n={3} />. I want to describe it from the cause side: what
          disappears when no one is left to make the small, accountable choices
          that constitute scholarly craft.
        </P>
        <P>
          The argument is simple: science needs skin in the game. By that I mean
          researchers who carry the cost of their own choices, who can be wrong,
          who can be criticized, who can defend a theoretical commitment because
          it is theirs. A research project, whether a survey study, a
          qualitative interview series, or a theoretical paper, is the product
          of countless choices made at every scale: which phenomenon is worth
          investigating, which theoretical lens to adopt, how to phrase an item
          in a questionnaire, which control variable to include, how to frame a
          finding in the discussion, which sentence to open the abstract with.
          Each one is small. Together they are the work.
        </P>
        <P>
          Ted Chiang, an American science fiction writer, has made a related
          point about art: what looks like creative output is in fact the
          cumulative weight of countless small decisions, and a prompt of a
          hundred words cannot stand in for the ten thousand decisions a short
          story requires
          <Fn n={4} />. He emphasizes that the “small-scale choices made during
          implementation” matter as much as the “large-scale choices made during
          conception”, and that the interrelationship between the two “is where
          artistry actually lies”. The same logic, I want to argue, applies to
          scientific work. Choices are epistemic and ethical. They are the place
          where a scholar commits.
        </P>
        <Subheading>Where the choices go</Subheading>
        <P>
          AI is no longer a hypothetical tool at the margins of academic work. I
          write from social science where AI can already assist at every stage
          of the workflow. At the ideation stage, researchers prompt large
          language models to brainstorm research questions, identify
          under-explored angles, or stress-test the novelty of a planned
          contribution. During the literature review, tools such as Elicit,
          Consensus, and Research Rabbit retrieve and synthesize prior work,
          while general-purpose models summarize papers, extract key findings,
          and draft related-work sections. Theory building, long considered the
          most distinctly human part of the craft, is increasingly supported by
          AI as well: models articulate mechanisms, generate hypotheses,
          formalize conceptual relationships, and surface analogies from
          adjacent literatures. At the data collection stage, AI drafts and
          refines survey items, generates interview questions, and even
          substitutes for human participants using synthetic respondents, also
          called “AI personas”
          <Fn n={5} />. Downstream, models write and debug analysis code, assist
          in qualitative coding, identify themes in interview transcripts, and
          produce initial interpretations of statistical output. During writing,
          they draft abstracts, restructure arguments, polish wording, and
          tailor manuscripts to the conventions of specific journals. Finally,
          AI has entered peer review from both sides: authors use it to
          anticipate reviewer concerns, while reviewers use it to summarize
          manuscripts and draft critiques.
        </P>
        <P>
          Each of these uses, taken alone, is defensible. Taken together, they
          describe a quiet migration. The small-scale choices that constitute
          scholarly craft are moving, one by one, out of the researcher's hands
          and into a system whose outputs look like ours but originate
          elsewhere. With The AI Scientist, that migration reaches its endpoint:
          a pipeline that closes the loop entirely, with no human decision-maker
          left inside.
        </P>
        <Subheading>The author who isn't there</Subheading>
        <P>
          It is tempting to describe such a system as an autonomous researcher.
          It is not. As computer scientist Jaron Lanier has argued, “there is no
          A.I.” in the strong sense. What we call AI is better understood as a
          form of “social collaboration” with the millions of humans whose
          texts, data, and judgments were absorbed into the training set, a
          collaboration the interface is designed to obscure
          <Fn n={6} />. The AI Scientist is not a new kind of scholar; it is a
          compressed, anonymized aggregate of human scholars, with their names
          stripped off and their accountability dissolved.
        </P>
        <P>
          Bender et al. sharpen this point from the linguistic side: the fluency
          we attribute to AI is itself an illusion of authorship
          <Fn n={7} />. Large language models, they argue, are “stochastic
          parrots”: systems that stitch together linguistic forms according to
          probability distributions in their training data without any
          real-world understanding of what they generate. Like a parrot that
          mimics human speech. The fluency and coherence of AI output invite
          readers to project understanding where there is none. In a research
          context, this matters. A paper is a claim that someone is making. When
          a paper is produced without an underlying claimant, the genre is
          preserved, but its function is hollowed out.
        </P>
        <Subheading>Science slop and the dead-science horizon</Subheading>
        <P>
          What this hollowing looks like in practice already has a name: “AI
          slop”. Low-effort, machine-generated content that imitates the surface
          of a genre without contributing to it has begun to appear in academic
          publishing under the label “science slop”. Recent reporting documents
          a wave of AI-generated manuscripts with flawed or fabricated citations
          entering the literature, particularly in fields with high publication
          pressure
          <Fn n={8} />. The harm is not only quantitative: AI slop pollutes the
          infrastructures researchers depend on
          <Fn n={9} />. Specifically, the massive increase in AI-generated
          research content overwhelms the peer-review process. Today, reviewing
          such submissions is more work than creating them. As a result,
          journals and their pool of reviewers increasingly lack the resources
          to separate quality research from AI-generated science slop.
        </P>
        <P>
          One way to see where this trajectory leads is to borrow a phrase from
          internet culture. The “dead internet” thesis holds that an increasing
          share of online activity is machine-generated content interacting with
          machine-generated content, with human participation reduced to
          ornament
          <Fn n={10} />. A “dead science” version of the same dynamic is not
          difficult to imagine: AI-assisted authors submitting AI-generated
          papers to AI-screened journals reviewed by AI-summarized reports. Each
          step is locally rational. The aggregate is a literature in which
          nobody is, in any meaningful sense, saying anything to anybody.
        </P>
        <P>
          Already in October 2025, researchers from Stanford University held the
          first Agents4Science conference, in which all of the papers were
          produced and reviewed by machines. In December 2025, a separate group
          launched a preprint repository, known as aiXiv
          <Fn n={2} />, that uses AI to review submissions and actively
          encourages machine-generated papers
          <Fn n={11} />.
        </P>
        <Subheading>Skin in the game</Subheading>
        <P>
          So what is the alternative to a literature without authors? It is not
          a refusal of AI. Used well, these tools genuinely extend what a
          researcher can do, and pretending otherwise would be dishonest. The
          alternative is to insist on what AI cannot supply: someone who has
          chosen, and who can be held to that choice.
        </P>
        <P>
          Science, on this view, is not primarily a corpus of findings. It is a
          chain of accountable acts. Researchers select a question because they
          believe it matters, design a study because they believe it will speak
          to that question, interpret a result because they have lived with the
          data long enough to know what it can and cannot bear, and sign their
          name because they are willing to be wrong in public. Each of these is
          an act in which something is at stake for the person performing it,
          what Nassim Taleb has called “skin in the game”
          <Fn n={12} />. AI systems, however capable, have no skin in any game.
          They face no personal consequences, they cannot be held accountable,
          they cannot be wrong in the way a scientist needs to be able to be
          wrong. This is not a deficit to be engineered away. Yet, these are the
          things responsibility is made of.
        </P>
        <P>
          This has a practical implication for scientists. The test is not
          whether AI was involved in producing a paper – it almost always will
          be – but whether a human author can, in good faith, stand behind every
          substantive choice the paper embodies. The question to ask of any
          AI-assisted step is: “Can I still defend this if pressed?” Where the
          answer is yes, the tool has served the craft. Where the answer is no,
          something has been outsourced that should not have been.
        </P>
        <P>
          I am writing this article because I think the choice between a living
          and a hollowed-out science is still ours. It will be made, or unmade,
          in the small choices each of us takes: which sentence to write
          ourselves, which result to interpret on our own, which review to draft
          without delegation. The signature on the paper is still ours to give.
          Whether we keep giving it, whether we mean it, is up to us.
        </P>
      </>
    ),
    de: (
      <>
        <Subheading>On AI and Accountability in Scientific Work</Subheading>
        <P>
          A few months ago, researchers developed an artificial intelligence
          (AI) system called the “AI Scientist”. They submitted three fully
          machine-generated manuscripts to a workshop of a top-tier machine
          learning conference and one of them passed the first round of peer
          review. The AI system had autonomously generated the idea, searched
          the literature, planned and run the experiment, analyzed the results,
          drafted the manuscripts, and even simulated peer review, end to end,
          with no human involvement at any decision point
          <Fn n={1} />. As a researcher who has spent her career making such
          decisions, one at a time, I find this moment unsettling. It may be a
          foretaste of AI aiding scientific discovery, but it deserves more than
          the cautious optimism with which it has often been greeted
          <Fn n={2} />.
        </P>
        <P>
          My concern is not that AI will write our papers for us. AI already
          does, in pieces, and much of that assistance is genuinely useful. My
          concern is that the very idea of a paper as a chain of accountable
          acts by someone who chose this question, this method, this
          interpretation, and who stakes their name on each of them is quietly
          being hollowed out. The growing literature on AI slop in academic
          publishing describes this from the symptom side: machine-generated
          text polluting journals, references that do not exist, reviews written
          by the same models that wrote the manuscripts under review
          <Fn n={3} />. I want to describe it from the cause side: what
          disappears when no one is left to make the small, accountable choices
          that constitute scholarly craft.
        </P>
        <P>
          The argument is simple: science needs skin in the game. By that I mean
          researchers who carry the cost of their own choices, who can be wrong,
          who can be criticized, who can defend a theoretical commitment because
          it is theirs. A research project, whether a survey study, a
          qualitative interview series, or a theoretical paper, is the product
          of countless choices made at every scale: which phenomenon is worth
          investigating, which theoretical lens to adopt, how to phrase an item
          in a questionnaire, which control variable to include, how to frame a
          finding in the discussion, which sentence to open the abstract with.
          Each one is small. Together they are the work.
        </P>
        <P>
          Ted Chiang, an American science fiction writer, has made a related
          point about art: what looks like creative output is in fact the
          cumulative weight of countless small decisions, and a prompt of a
          hundred words cannot stand in for the ten thousand decisions a short
          story requires
          <Fn n={4} />. He emphasizes that the “small-scale choices made during
          implementation” matter as much as the “large-scale choices made during
          conception”, and that the interrelationship between the two “is where
          artistry actually lies”. The same logic, I want to argue, applies to
          scientific work. Choices are epistemic and ethical. They are the place
          where a scholar commits.
        </P>
        <Subheading>Where the choices go</Subheading>
        <P>
          AI is no longer a hypothetical tool at the margins of academic work. I
          write from social science where AI can already assist at every stage
          of the workflow. At the ideation stage, researchers prompt large
          language models to brainstorm research questions, identify
          under-explored angles, or stress-test the novelty of a planned
          contribution. During the literature review, tools such as Elicit,
          Consensus, and Research Rabbit retrieve and synthesize prior work,
          while general-purpose models summarize papers, extract key findings,
          and draft related-work sections. Theory building, long considered the
          most distinctly human part of the craft, is increasingly supported by
          AI as well: models articulate mechanisms, generate hypotheses,
          formalize conceptual relationships, and surface analogies from
          adjacent literatures. At the data collection stage, AI drafts and
          refines survey items, generates interview questions, and even
          substitutes for human participants using synthetic respondents, also
          called “AI personas”
          <Fn n={5} />. Downstream, models write and debug analysis code, assist
          in qualitative coding, identify themes in interview transcripts, and
          produce initial interpretations of statistical output. During writing,
          they draft abstracts, restructure arguments, polish wording, and
          tailor manuscripts to the conventions of specific journals. Finally,
          AI has entered peer review from both sides: authors use it to
          anticipate reviewer concerns, while reviewers use it to summarize
          manuscripts and draft critiques.
        </P>
        <P>
          Each of these uses, taken alone, is defensible. Taken together, they
          describe a quiet migration. The small-scale choices that constitute
          scholarly craft are moving, one by one, out of the researcher's hands
          and into a system whose outputs look like ours but originate
          elsewhere. With The AI Scientist, that migration reaches its endpoint:
          a pipeline that closes the loop entirely, with no human decision-maker
          left inside.
        </P>
        <Subheading>The author who isn't there</Subheading>
        <P>
          It is tempting to describe such a system as an autonomous researcher.
          It is not. As computer scientist Jaron Lanier has argued, “there is no
          A.I.” in the strong sense. What we call AI is better understood as a
          form of “social collaboration” with the millions of humans whose
          texts, data, and judgments were absorbed into the training set, a
          collaboration the interface is designed to obscure
          <Fn n={6} />. The AI Scientist is not a new kind of scholar; it is a
          compressed, anonymized aggregate of human scholars, with their names
          stripped off and their accountability dissolved.
        </P>
        <P>
          Bender et al. sharpen this point from the linguistic side: the fluency
          we attribute to AI is itself an illusion of authorship
          <Fn n={7} />. Large language models, they argue, are “stochastic
          parrots”: systems that stitch together linguistic forms according to
          probability distributions in their training data without any
          real-world understanding of what they generate. Like a parrot that
          mimics human speech. The fluency and coherence of AI output invite
          readers to project understanding where there is none. In a research
          context, this matters. A paper is a claim that someone is making. When
          a paper is produced without an underlying claimant, the genre is
          preserved, but its function is hollowed out.
        </P>
        <Subheading>Science slop and the dead-science horizon</Subheading>
        <P>
          What this hollowing looks like in practice already has a name: “AI
          slop”. Low-effort, machine-generated content that imitates the surface
          of a genre without contributing to it has begun to appear in academic
          publishing under the label “science slop”. Recent reporting documents
          a wave of AI-generated manuscripts with flawed or fabricated citations
          entering the literature, particularly in fields with high publication
          pressure
          <Fn n={8} />. The harm is not only quantitative: AI slop pollutes the
          infrastructures researchers depend on
          <Fn n={9} />. Specifically, the massive increase in AI-generated
          research content overwhelms the peer-review process. Today, reviewing
          such submissions is more work than creating them. As a result,
          journals and their pool of reviewers increasingly lack the resources
          to separate quality research from AI-generated science slop.
        </P>
        <P>
          One way to see where this trajectory leads is to borrow a phrase from
          internet culture. The “dead internet” thesis holds that an increasing
          share of online activity is machine-generated content interacting with
          machine-generated content, with human participation reduced to
          ornament
          <Fn n={10} />. A “dead science” version of the same dynamic is not
          difficult to imagine: AI-assisted authors submitting AI-generated
          papers to AI-screened journals reviewed by AI-summarized reports. Each
          step is locally rational. The aggregate is a literature in which
          nobody is, in any meaningful sense, saying anything to anybody.
        </P>
        <P>
          Already in October 2025, researchers from Stanford University held the
          first Agents4Science conference, in which all of the papers were
          produced and reviewed by machines. In December 2025, a separate group
          launched a preprint repository, known as aiXiv
          <Fn n={2} />, that uses AI to review submissions and actively
          encourages machine-generated papers
          <Fn n={11} />.
        </P>
        <Subheading>Skin in the game</Subheading>
        <P>
          So what is the alternative to a literature without authors? It is not
          a refusal of AI. Used well, these tools genuinely extend what a
          researcher can do, and pretending otherwise would be dishonest. The
          alternative is to insist on what AI cannot supply: someone who has
          chosen, and who can be held to that choice.
        </P>
        <P>
          Science, on this view, is not primarily a corpus of findings. It is a
          chain of accountable acts. Researchers select a question because they
          believe it matters, design a study because they believe it will speak
          to that question, interpret a result because they have lived with the
          data long enough to know what it can and cannot bear, and sign their
          name because they are willing to be wrong in public. Each of these is
          an act in which something is at stake for the person performing it,
          what Nassim Taleb has called “skin in the game”
          <Fn n={12} />. AI systems, however capable, have no skin in any game.
          They face no personal consequences, they cannot be held accountable,
          they cannot be wrong in the way a scientist needs to be able to be
          wrong. This is not a deficit to be engineered away. Yet, these are the
          things responsibility is made of.
        </P>
        <P>
          This has a practical implication for scientists. The test is not
          whether AI was involved in producing a paper – it almost always will
          be – but whether a human author can, in good faith, stand behind every
          substantive choice the paper embodies. The question to ask of any
          AI-assisted step is: “Can I still defend this if pressed?” Where the
          answer is yes, the tool has served the craft. Where the answer is no,
          something has been outsourced that should not have been.
        </P>
        <P>
          I am writing this article because I think the choice between a living
          and a hollowed-out science is still ours. It will be made, or unmade,
          in the small choices each of us takes: which sentence to write
          ourselves, which result to interpret on our own, which review to draft
          without delegation. The signature on the paper is still ours to give.
          Whether we keep giving it, whether we mean it, is up to us.
        </P>
      </>
    ),
  },
  footnotes: {
    en: [
      "Lu, C., Lu, C., Lange, R. T., Yamada, Y., Hu, S., Foerster, J., ... & Clune, J. (2026). Towards end-to-end automation of AI research. Nature, 651(8107), 914-919.",
      "Wang, H., Fu, T., Du, Y., Gao, W., Huang, K., Liu, Z., ... & Zitnik, M. (2023). Scientific discovery in the age of artificial intelligence. Nature, 620(7972), 47-60.",
      "Andersen, R. (2026). Science is drowning in AI slop: Peer review has met its match. The Atlantic.",
      "Chiang, T. (2024). Why AI Isn’t Going to Make Art, The New Yorker, 31 August 2024.",
      "Arora, N., Chakraborty, I., & Nishimura, Y. (2025). AI–human hybrids for marketing research: Leveraging large language models (LLMs) as collaborators. Journal of Marketing, 89(2), 43-70.",
      "Lanier, J. (2023). There is no A.I., The New Yorker, 20 April 2023.",
      "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big?. In Proceedings of the 2021 ACM conference on fairness, accountability, and transparency, March(3-10), 610-623.",
      "Gibney, E. (2026). How AI slop is causing a crisis in computer science. Nature.",
      "van Rooij, I. (2025) AI slop and the destruction of knowledge. https://doi.org/10.5281/zenodo.16905560",
      "Walter, Y. (2025). Artificial influencers and the dead internet theory. AI & SOCIETY, 40(1), 239-240.",
      "Zhang, P., Hu, X., Huang, G., Qi, Y., Zhang, H., Li, X., ... & Liu, X. (2025). aixiv: A next-generation open access ecosystem for scientific discovery generated by ai scientists. arXiv preprint arXiv:2508.15126.",
      "Taleb, Nassim N. (2018). Skin in the game: Hidden asymmetries in daily life. Random House.",
    ],
    de: [
      "Lu, C., Lu, C., Lange, R. T., Yamada, Y., Hu, S., Foerster, J., ... & Clune, J. (2026). Towards end-to-end automation of AI research. Nature, 651(8107), 914-919.",
      "Wang, H., Fu, T., Du, Y., Gao, W., Huang, K., Liu, Z., ... & Zitnik, M. (2023). Scientific discovery in the age of artificial intelligence. Nature, 620(7972), 47-60.",
      "Andersen, R. (2026). Science is drowning in AI slop: Peer review has met its match. The Atlantic.",
      "Chiang, T. (2024). Why AI Isn’t Going to Make Art, The New Yorker, 31 August 2024.",
      "Arora, N., Chakraborty, I., & Nishimura, Y. (2025). AI–human hybrids for marketing research: Leveraging large language models (LLMs) as collaborators. Journal of Marketing, 89(2), 43-70.",
      "Lanier, J. (2023). There is no A.I., The New Yorker, 20 April 2023.",
      "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big?. In Proceedings of the 2021 ACM conference on fairness, accountability, and transparency, March(3-10), 610-623.",
      "Gibney, E. (2026). How AI slop is causing a crisis in computer science. Nature.",
      "van Rooij, I. (2025) AI slop and the destruction of knowledge. https://doi.org/10.5281/zenodo.16905560",
      "Walter, Y. (2025). Artificial influencers and the dead internet theory. AI & SOCIETY, 40(1), 239-240.",
      "Zhang, P., Hu, X., Huang, G., Qi, Y., Zhang, H., Li, X., ... & Liu, X. (2025). aixiv: A next-generation open access ecosystem for scientific discovery generated by ai scientists. arXiv preprint arXiv:2508.15126.",
      "Taleb, Nassim N. (2018). Skin in the game: Hidden asymmetries in daily life. Random House.",
    ],
  },
  authorBio: {
    en: "Jana Möller-Herm is Professor of Strategic Management at the Berlin University of the Arts (UdK Berlin). Her research focuses on marketing communication, particularly crisis communication, sustainability, and the use of artificial intelligence in advertising. Her award-winning work has been published in leading journals such as the International Journal of Research in Marketing, the Journal of Service Research, and the Journal of Business Research.",
    de: "Jana Möller-Herm is Professor of Strategic Management at the Berlin University of the Arts (UdK Berlin). Her research focuses on marketing communication, particularly crisis communication, sustainability, and the use of artificial intelligence in advertising. Her award-winning work has been published in leading journals such as the International Journal of Research in Marketing, the Journal of Service Research, and the Journal of Business Research.",
  },
  keywords: {
    en: [
      "Research Integrity",
      "Academic Accountability",
      "AI Slop",
      "Science Slop",
      "Dead Science",
      "Peer Review",
      "Authorship",
      "Skin in the Game",
      "Nassim Taleb",
      "Stochastic Parrots",
      "Scholarly Craft",
      "AI in Science",
    ],
    de: [
      "Wissenschaftsintegrität",
      "Verantwortung",
      "KI-Slop",
      "Science Slop",
      "Dead Science",
      "Peer Review",
      "Autorschaft",
      "Skin in the Game",
      "Nassim Taleb",
      "Stochastische Papageien",
      "Forschungshandwerk",
      "KI in der Wissenschaft",
    ],
  },
  documents: [
    {
      name: "Skin_in_the_Game.pdf",
      url: "/Skin_in_the_Game.pdf",
      doi: "https://doi.org/10.25624/kuenste-2498",
    },
  ],
};
