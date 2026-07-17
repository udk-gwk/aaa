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
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
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
  id: "art-6",
  volume: "Volume 1",
  title: {
    en: "Motivational Speech",
    de: "Motivational Speech",
  },
  author: "Luis Küffner et al.",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2492",

  headerImage: headerImg,

  excerpt: {
    en: "A digital mirror reflecting the soundtrack of toxic self-exploitation.",
    de: "Ein digitaler Spiegel für den Soundtrack der toxischen Selbstausbeutung.",
  },

  content: {
    en: (
      <>
        <P>
          Amid the increasing popularity of fitness and entrepreneurship in
          Western subcultures, clips of motivational speech receive millions of
          views across social media. Usually, these audiovisual artifacts show
          male business leaders, authors, and other influential figures
          narrating strategies for success. Paired with epic, emotional
          background music, these videos function as vehicles for
          self-motivation and goal pursuit. With a primarily male target group,
          success is often tied to wealth, professional growth, or appeal to
          women, while obstructed by weakness, fragility, or discontinuity.
          Motivational speech thus emerges from a society of self-optimization
          and an ethos of constant productivity, self-isolation, competition,
          and meritocracy.
        </P>

        <P>
          To illustrate the work ethic reflected in motivational speech,
          examples of motivational quotes identified across various social media
          platforms include the following:
        </P>

        <P> – “do or die”</P>
        <P> – “do it alone”</P>
        <P> – “don’t complain, enjoy your pain”</P>
        <P> – “nobody is coming to save you”</P>
        <P> – “become dangerous”</P>
        <P> – “reject weakness, embrace discipline”</P>
        <P> – “nobody cares, work harder”</P>
        <P> – “take it personal”</P>
        <P> – “kill the boy”</P>

        <P>
          Focusing on the human voice as the primary medium within this
          audiovisual subculture, its characteristic prosodic patterns play a
          decisive role in the appearance and perception of motivational speech.
          With Motivational Speech Synthesis, we therefore aim to
        </P>

        <P>
          1. replicate those prosodic features by introducing a novel approach
          to control them through a one-dimensional scale
        </P>
        <P>
          2. while creating a space for artistic reflection to extract the
          underlying attitudes of this subculture as a whole.
        </P>

        <P>
          Since both motivational speech and machine learning techniques build
          on generalization and an anticipated forward process, their
          correlation allows us to engage both through mutual artistic
          reflection. Motivated by this and inspired by advances in emotional
          speech synthesis, we developed a novel framework for emotional
          controlled text-to-speech (TTS) generation built on web-scraped
          motivational speech.
        </P>

        <P>
          Emotional control is achieved through the one-dimensional motivational
          factor, enabling fine-grained intensity control over prosody during
          inference. Through dimensionality reduction, we map a
          three-dimensional emotional representation of speech onto a
          one-dimensional scale from 0 (low motivational factor) to 1 (high
          motivational factor).
        </P>

        <P>
          Reflecting the notion of social mobility found within capitalist
          ideologies such as motivational speech subcultures, the proposed
          motivational factor aligns with attitudes like “The harder you work,
          the more you can get”. Despite this asserted emphasis on individual
          determination, which is also manifested by the American Dream, OECD
          (Organisation for Economic Co-operation and Development) data suggests
          that income, education, and occupational status are still rather
          strongly shaped by one’s family background
          <Fn n={1} />. Given this, a child born into a low-income family in the
          US would take an estimated five generations to earn average income
          <Fn n={2} />. Rather than exposing people consuming motivational
          speech, we reveal and criticize the circumstances and mindsets behind
          narratives that arrive as symptoms of a society driven by
          self-optimization, growth, and success. By questioning how we define
          “success”, Motivational Speech Synthesis addresses our work ethic and
          how we approach goals and challenges in life.
        </P>

        <Subheading>Related Work</Subheading>

        <P>
          Although many state-of-the-art models in emotion-aware text-to-speech
          and speech emotion recognition—such as XTTS-v2
          <Fn n={3} />, MetaVoice
          <Fn n={4} />, Parler-TTS
          <Fn n={5} />, or StyleTTS 2<Fn n={6} />
          —produce high-quality speech, few generate speech with specific
          emotional inflections. Voice cloning has reached a high level of
          sophistication, yet integrating prosodic variation into TTS systems
          remains critical for synthesized, human-like speech.
        </P>

        <P>
          The model proposed by Cho et al.
          <Fn n={7} /> allows emotion intensity control along with style
          transfer, while EmoKnob
          <Fn n={8} /> provides fine-grained emotion modulation by extending the
          voice cloning-based TTS model MetaVoice. The authors constructed a
          speaker representation space for systematic modeling and comparison of
          speaker characteristics. An emotional embedding is created by
          extracting an emotion direction vector, obtained by computing the
          normalized difference between the emotional and neutral embeddings of
          the same speaker. Subsequently, this embedding is added to the speaker
          representation space.
        </P>

        <P>
          One accessible model that explores transformer-based architectures for
          improving SER by embedding analyzed speech into a 3D emotional space
          is a fine-tuned version of wav2vec 2.0
          <Fn n={9} />. Another approach we examined is emotion2vec
          <Fn n={10} />, which provides a high-dimensional speech emotion
          representation model in addition to a SER foundation model classifying
          emotions into discrete categories. Due to limited availability of
          labeled data for emotion recognition
          <Fn n={11} />, both models use self-supervised learning frameworks.
          Here, a common approach uses pretrained self-supervised models, such
          as wav2vec 2.0
          <Fn n={12} />, trained on large-scale speech datasets and fine-tuned
          for emotion recognition tasks
          <Fn n={13} />. This methodology overcomes data scarcity by utilizing
          rich representations learned from vast amounts of unlabeled speech
          data, thereby improving SER performance.
        </P>

        <Subheading>Method Preprocessing</Subheading>

        <P>
          Since artistically reflecting motivational speech through its prosody
          is specific in both technical domain and data sourcing, we needed a
          dataset accurately representing motivational speech as a subcultural
          artifact. Given this, the absence of professional training data, and
          our non-commercial artistic interests, we sourced data from social
          media platforms like YouTube, where motivational speeches exhibit a
          consistent structure, often including dramatic instrumental music. To
          capture only the speech, we employed a multi-stage preprocessing
          pipeline (see Figure 1). After collecting YouTube audio dedicated to
          motivational content, speech components were isolated using the music
          source separation algorithm Demucs
          <Fn n={14} />. Once separated, the extracted speech undergoes further
          refinement, including speech enhancement via ai-coustics’ proprietary
          model called Lark
          <Fn n={15} /> and transcription via Whisper
          <Fn n={16} />. During development, we compiled a motivational speech
          dataset comprising 414,024 data points with a total duration of
          approximately 371 hours.
        </P>

        <P>
          After evaluating text-to-speech (TTS) models capable of emotional
          conditioning, we based our architecture on established approaches.
          Many contemporary models use higher-dimensional emotional
          representations, such as those produced by the aforementioned SER
          models
          <Fn n={17} />, to generate expressive speech. This allows
          implementation of our motivational factor without developing a new TTS
          architecture. With appropriate dimensionality reduction,
          higher-dimensional emotional representations can be mapped onto a
          one-dimensional motivational factor. Our factor ranges continuously
          from 0, indicating low motivational prosody intensity, to 1,
          indicating high motivational prosody intensity. The derived
          motivational factor can then serve indirectly as a user-specified
          input condition during inference.
        </P>

        <P>
          In the domain of SER, emotions are primarily represented in two ways:
          as discrete categories (e.g., happy, sad, angry)
          <Fn n={18} /> or as positions in a continuous emotion space usually
          defined by three dimensions: valence, arousal, and dominance. The
          scales within this 3D emotion model range from negative to positive
          emotions (valence), calm to stimulated emotions (arousal), and
          submissive to dominant emotions (dominance)
          <Fn n={19} />. As our proposed motivational factor does not fit into
          any of these discrete categories, but rather lives within the
          continuous space, our research focused on architectures that operate
          with this approach.
        </P>

        <P>
          With the three-dimensional VAD space as our high-dimensional
          representation, we projected our motivational speech corpus onto it
          using the inference model proposed by Wagner et al.
          <Fn n={20} />. To represent our motivational factor as a single
          dimension, we therefore reduced these three dimensions into one by
          applying the UMAP (Uniform Manifold Approximation and Projection)
          <Fn n={21} /> algorithm, resulting in the desired projection ranging
          from 0 to 1.
        </P>

        <P>
          In our approach, speaker embeddings, which encode speaker style within
          a high-dimensional feature space, are provided during inference to
          guide synthesis. By mapping distinct speaker embeddings to their
          fitting motivational factor and averaging them to discrete steps,
          these embeddings can also indirectly represent different motivational
          factors. During inference, an averaged speaker embedding nearest to
          the specified motivational input value is selected to guide speech
          generation (see Figure 2). In our implementation, we adopted EmoKnob
          <Fn n={22} />
          as our TTS model and computed averaged speaker embeddings in
          increments of 0.05. For each increment, a representative speaker
          embedding was obtained by calculating the mean of the k-nearest
          neighbor (kNN=) embeddings within the speaker embedding space.
        </P>

        <Subheading>Discussion and Conclusion</Subheading>

        <P>
          Our research introduced and evaluated a method for synthesizing
          motivational speech using averaged speaker embeddings within a
          modified existing model architecture. By compressing dimensional
          emotional relationships into a single motivational intensity scale,
          the method enables adjustment of motivational prosody in synthesized
          speech. Our EmoKnob-based architecture generates averaged speaker
          embeddings, constituting a lightweight modification of the existing
          MetaVoice model without computationally intensive training or
          fine-tuning. We hope that our proposed architecture will inspire
          future research in emotion-specific speech synthesis across various
          tasks and domains.
        </P>

        <P>
          Figure 3 visualizes a subset of audio data points that were randomly
          selected along the motivational factor dimension and projected into
          VAD space. The distribution follows a curvilinear trajectory from
          lower valence, arousal, and dominance toward higher arousal and
          dominance. This latent structure corresponds to the pattern captured
          by UMAP and reduced to a single dimension, supporting its use for
          representing the data along one motivational factor.
        </P>

        <P>
          Now what to do with these technical achievements? Nothing is won when
          motivational speech and its disruptive attitudes towards work and
          success are merely reproduced through a novel TTS model. Artistic
          tension emerges when disclosure and attitude collide. Through exposure
          and exaggeration of the absurdity of motivational speech, the work
          acts as a critical mirror to societies and subcultures fueling
          self-exploitation, self-isolation, and toxic forms of masculinity for
          so-called work-life success, which appears rather illusory. By
          parameterizing emotional persuasion, motivation appears not as an
          authentic force but as a reproducible sociocultural symbol. This
          deconstruction is achieved through a demonstration video, which
          conveys the visual and auditive language of motivational speech
          videos, while the narrated content reveals a fact-based
          counter-perspective. Through the appropriation of the subculture from
          its broadcast channels and its reinsertion into the same cultural
          space through short video content across social media, we examine its
          transformation of social and economic pressure into personal affect.
          Imperatives such as “nobody cares, work harder”, “reject weakness,
          embrace discipline”, and “don’t complain, enjoy your pain” falsely
          suggest a direct correlation of social mobility to relentless
          commitment, effort, and quantity of work. While critical factors for
          social mobility are not individual hard work paired with continuity
          and dominance but rather family background, class, and access,
          alternative and less extreme approaches to working culture and goal
          pursuit prevent the long-term erosion of bodily and psychological
          well-being. In return, weakness, fragility, and discontinuity are not
          flaws but part of being human, encouraging conscious work rather than
          constant productivity.
        </P>

        <P>
          A project webpage
          <Fn n={23} /> accompanies this work, providing the artistic
          demonstration video, audio examples, an interactive visualization, a
          ready-to-run Collab demo, and access to the code repository
          <Fn n={24} /> containing the model source code.
        </P>

        <P>
          We gratefully acknowledge Berlin University of the Arts for supplying
          the computational resources, as well as ai-coustics for providing
          their speech-enhancement model to improve our dataset.
        </P>
      </>
    ),
    de: (
      <>
        <P>
          Amid the increasing popularity of fitness and entrepreneurship in
          Western subcultures, clips of motivational speech receive millions of
          views across social media. Usually, these audiovisual artifacts show
          male business leaders, authors, and other influential figures
          narrating strategies for success. Paired with epic, emotional
          background music, these videos function as vehicles for
          self-motivation and goal pursuit. With a primarily male target group,
          success is often tied to wealth, professional growth, or appeal to
          women, while obstructed by weakness, fragility, or discontinuity.
          Motivational speech thus emerges from a society of self-optimization
          and an ethos of constant productivity, self-isolation, competition,
          and meritocracy.
        </P>

        <P>
          To illustrate the work ethic reflected in motivational speech,
          examples of motivational quotes identified across various social media
          platforms include the following:
        </P>

        <P> – “do or die”</P>
        <P> – “do it alone”</P>
        <P> – “don’t complain, enjoy your pain”</P>
        <P> – “nobody is coming to save you”</P>
        <P> – “become dangerous”</P>
        <P> – “reject weakness, embrace discipline”</P>
        <P> – “nobody cares, work harder”</P>
        <P> – “take it personal”</P>
        <P> – “kill the boy”</P>

        <P>
          Focusing on the human voice as the primary medium within this
          audiovisual subculture, its characteristic prosodic patterns play a
          decisive role in the appearance and perception of motivational speech.
          With Motivational Speech Synthesis, we therefore aim to
        </P>

        <P>
          1. replicate those prosodic features by introducing a novel approach
          to control them through a one-dimensional scale
        </P>
        <P>
          2. while creating a space for artistic reflection to extract the
          underlying attitudes of this subculture as a whole.
        </P>

        <P>
          Since both motivational speech and machine learning techniques build
          on generalization and an anticipated forward process, their
          correlation allows us to engage both through mutual artistic
          reflection. Motivated by this and inspired by advances in emotional
          speech synthesis, we developed a novel framework for emotional
          controlled text-to-speech (TTS) generation built on web-scraped
          motivational speech.
        </P>

        <P>
          Emotional control is achieved through the one-dimensional motivational
          factor, enabling fine-grained intensity control over prosody during
          inference. Through dimensionality reduction, we map a
          three-dimensional emotional representation of speech onto a
          one-dimensional scale from 0 (low motivational factor) to 1 (high
          motivational factor).
        </P>

        <P>
          Reflecting the notion of social mobility found within capitalist
          ideologies such as motivational speech subcultures, the proposed
          motivational factor aligns with attitudes like “The harder you work,
          the more you can get”. Despite this asserted emphasis on individual
          determination, which is also manifested by the American Dream, OECD
          (Organisation for Economic Co-operation and Development) data suggests
          that income, education, and occupational status are still rather
          strongly shaped by one’s family background
          <Fn n={1} />. Given this, a child born into a low-income family in the
          US would take an estimated five generations to earn average income
          <Fn n={2} />. Rather than exposing people consuming motivational
          speech, we reveal and criticize the circumstances and mindsets behind
          narratives that arrive as symptoms of a society driven by
          self-optimization, growth, and success. By questioning how we define
          “success”, Motivational Speech Synthesis addresses our work ethic and
          how we approach goals and challenges in life.
        </P>

        <Subheading>Related Work</Subheading>

        <P>
          Although many state-of-the-art models in emotion-aware text-to-speech
          and speech emotion recognition—such as XTTS-v2
          <Fn n={3} />, MetaVoice
          <Fn n={4} />, Parler-TTS
          <Fn n={5} />, or StyleTTS 2<Fn n={6} />
          —produce high-quality speech, few generate speech with specific
          emotional inflections. Voice cloning has reached a high level of
          sophistication, yet integrating prosodic variation into TTS systems
          remains critical for synthesized, human-like speech.
        </P>

        <P>
          The model proposed by Cho et al.
          <Fn n={7} /> allows emotion intensity control along with style
          transfer, while EmoKnob
          <Fn n={8} /> provides fine-grained emotion modulation by extending the
          voice cloning-based TTS model MetaVoice. The authors constructed a
          speaker representation space for systematic modeling and comparison of
          speaker characteristics. An emotional embedding is created by
          extracting an emotion direction vector, obtained by computing the
          normalized difference between the emotional and neutral embeddings of
          the same speaker. Subsequently, this embedding is added to the speaker
          representation space.
        </P>

        <P>
          One accessible model that explores transformer-based architectures for
          improving SER by embedding analyzed speech into a 3D emotional space
          is a fine-tuned version of wav2vec 2.0
          <Fn n={9} />. Another approach we examined is emotion2vec
          <Fn n={10} />, which provides a high-dimensional speech emotion
          representation model in addition to a SER foundation model classifying
          emotions into discrete categories. Due to limited availability of
          labeled data for emotion recognition
          <Fn n={11} />, both models use self-supervised learning frameworks.
          Here, a common approach uses pretrained self-supervised models, such
          as wav2vec 2.0
          <Fn n={12} />, trained on large-scale speech datasets and fine-tuned
          for emotion recognition tasks
          <Fn n={13} />. This methodology overcomes data scarcity by utilizing
          rich representations learned from vast amounts of unlabeled speech
          data, thereby improving SER performance.
        </P>

        <Subheading>Method Preprocessing</Subheading>

        <P>
          Since artistically reflecting motivational speech through its prosody
          is specific in both technical domain and data sourcing, we needed a
          dataset accurately representing motivational speech as a subcultural
          artifact. Given this, the absence of professional training data, and
          our non-commercial artistic interests, we sourced data from social
          media platforms like YouTube, where motivational speeches exhibit a
          consistent structure, often including dramatic instrumental music. To
          capture only the speech, we employed a multi-stage preprocessing
          pipeline (see Figure 1). After collecting YouTube audio dedicated to
          motivational content, speech components were isolated using the music
          source separation algorithm Demucs
          <Fn n={14} />. Once separated, the extracted speech undergoes further
          refinement, including speech enhancement via ai-coustics’ proprietary
          model called Lark
          <Fn n={15} /> and transcription via Whisper
          <Fn n={16} />. During development, we compiled a motivational speech
          dataset comprising 414,024 data points with a total duration of
          approximately 371 hours.
        </P>

        <P>
          After evaluating text-to-speech (TTS) models capable of emotional
          conditioning, we based our architecture on established approaches.
          Many contemporary models use higher-dimensional emotional
          representations, such as those produced by the aforementioned SER
          models
          <Fn n={17} />, to generate expressive speech. This allows
          implementation of our motivational factor without developing a new TTS
          architecture. With appropriate dimensionality reduction,
          higher-dimensional emotional representations can be mapped onto a
          one-dimensional motivational factor. Our factor ranges continuously
          from 0, indicating low motivational prosody intensity, to 1,
          indicating high motivational prosody intensity. The derived
          motivational factor can then serve indirectly as a user-specified
          input condition during inference.
        </P>

        <P>
          In the domain of SER, emotions are primarily represented in two ways:
          as discrete categories (e.g., happy, sad, angry)
          <Fn n={18} /> or as positions in a continuous emotion space usually
          defined by three dimensions: valence, arousal, and dominance. The
          scales within this 3D emotion model range from negative to positive
          emotions (valence), calm to stimulated emotions (arousal), and
          submissive to dominant emotions (dominance)
          <Fn n={19} />. As our proposed motivational factor does not fit into
          any of these discrete categories, but rather lives within the
          continuous space, our research focused on architectures that operate
          with this approach.
        </P>

        <P>
          With the three-dimensional VAD space as our high-dimensional
          representation, we projected our motivational speech corpus onto it
          using the inference model proposed by Wagner et al.
          <Fn n={20} />. To represent our motivational factor as a single
          dimension, we therefore reduced these three dimensions into one by
          applying the UMAP (Uniform Manifold Approximation and Projection)
          <Fn n={21} /> algorithm, resulting in the desired projection ranging
          from 0 to 1.
        </P>

        <P>
          In our approach, speaker embeddings, which encode speaker style within
          a high-dimensional feature space, are provided during inference to
          guide synthesis. By mapping distinct speaker embeddings to their
          fitting motivational factor and averaging them to discrete steps,
          these embeddings can also indirectly represent different motivational
          factors. During inference, an averaged speaker embedding nearest to
          the specified motivational input value is selected to guide speech
          generation (see Figure 2). In our implementation, we adopted EmoKnob
          <Fn n={22} />
          as our TTS model and computed averaged speaker embeddings in
          increments of 0.05. For each increment, a representative speaker
          embedding was obtained by calculating the mean of the k-nearest
          neighbor (kNN=) embeddings within the speaker embedding space.
        </P>

        <Subheading>Discussion and Conclusion</Subheading>

        <P>
          Our research introduced and evaluated a method for synthesizing
          motivational speech using averaged speaker embeddings within a
          modified existing model architecture. By compressing dimensional
          emotional relationships into a single motivational intensity scale,
          the method enables adjustment of motivational prosody in synthesized
          speech. Our EmoKnob-based architecture generates averaged speaker
          embeddings, constituting a lightweight modification of the existing
          MetaVoice model without computationally intensive training or
          fine-tuning. We hope that our proposed architecture will inspire
          future research in emotion-specific speech synthesis across various
          tasks and domains.
        </P>

        <P>
          Figure 3 visualizes a subset of audio data points that were randomly
          selected along the motivational factor dimension and projected into
          VAD space. The distribution follows a curvilinear trajectory from
          lower valence, arousal, and dominance toward higher arousal and
          dominance. This latent structure corresponds to the pattern captured
          by UMAP and reduced to a single dimension, supporting its use for
          representing the data along one motivational factor.
        </P>

        <P>
          Now what to do with these technical achievements? Nothing is won when
          motivational speech and its disruptive attitudes towards work and
          success are merely reproduced through a novel TTS model. Artistic
          tension emerges when disclosure and attitude collide. Through exposure
          and exaggeration of the absurdity of motivational speech, the work
          acts as a critical mirror to societies and subcultures fueling
          self-exploitation, self-isolation, and toxic forms of masculinity for
          so-called work-life success, which appears rather illusory. By
          parameterizing emotional persuasion, motivation appears not as an
          authentic force but as a reproducible sociocultural symbol. This
          deconstruction is achieved through a demonstration video, which
          conveys the visual and auditive language of motivational speech
          videos, while the narrated content reveals a fact-based
          counter-perspective. Through the appropriation of the subculture from
          its broadcast channels and its reinsertion into the same cultural
          space through short video content across social media, we examine its
          transformation of social and economic pressure into personal affect.
          Imperatives such as “nobody cares, work harder”, “reject weakness,
          embrace discipline”, and “don’t complain, enjoy your pain” falsely
          suggest a direct correlation of social mobility to relentless
          commitment, effort, and quantity of work. While critical factors for
          social mobility are not individual hard work paired with continuity
          and dominance but rather family background, class, and access,
          alternative and less extreme approaches to working culture and goal
          pursuit prevent the long-term erosion of bodily and psychological
          well-being. In return, weakness, fragility, and discontinuity are not
          flaws but part of being human, encouraging conscious work rather than
          constant productivity.
        </P>

        <P>
          A project webpage
          <Fn n={23} /> accompanies this work, providing the artistic
          demonstration video, audio examples, an interactive visualization, a
          ready-to-run Collab demo, and access to the code repository
          <Fn n={24} /> containing the model source code.
        </P>

        <P>
          We gratefully acknowledge Berlin University of the Arts for supplying
          the computational resources, as well as ai-coustics for providing
          their speech-enhancement model to improve our dataset.
        </P>
      </>
    ),
  },
  footnotes: {
    en: [
      "1. https://motivational-speech-synthesis.com/",
      "2. OECD, A Broken Social Elevator? How to Promote Social Mobility (OECD, 2018), https://doi.org/10.1787/9789264301085-en.",
      "3. OECD, A Broken Social Elevator? How to Promote Social Mobility (OECD, 2018), https://doi.org/10.1787/9789264301085-en.",
      "4. https://github.com/coqui-ai/TTS",
      "5. https://github.com/metavoiceio/metavoice-src",
      "6. Yoach Lacombe et al., Parler-TTS, GitHub, 2024, https://github.com/huggingface/parler-tts.",
      "7. Yinghao Aaron Li et al., StyleTTS 2: Towards Human-Level Text-to-Speech Through Style Diffusion and Adversarial Training with Large Speech Language Models, arXiv, 2023, https://doi.org/10.48550/arXiv.2306.07691.",
      "8. Deok-Hyeon Cho et al., EmoSphere++: Emotion-Controllable Zero-Shot Text-to-Speech via Emotion-Adaptive Spherical Vector, arXiv, 2024, https://doi.org/10.48550/arXiv.2411.02625.",
      "9. Haozhe Chen et al., EmoKnob: Enhance Voice Cloning with Fine-Grained Emotion Control, arXiv, 2024, https://doi.org/10.48550/arXiv.2410.00316.",
      '10. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585.',
      '11. Ziyang Ma et al., "Emotion2vec: Self-Supervised Pre-Training for Speech Emotion Representation," Findings of the Association for Computational Linguistics ACL 2024 (Bangkok, Thailand; virtual meeting), Association for Computational Linguistics, 2024, 15747–60, https://doi.org/10.18653/v1/2024.findings-acl.931.',
      '12. Swapna Mol George and P. Muhamed Ilyas, "A Review on Speech Emotion Recognition: A Survey, Recent Advances, Challenges, and the Influence of Noise," Neurocomputing 568 (February 2024): 127015, https://doi.org/10.1016/j.neucom.2023.127015.',
      '13. Alexei Baevski et al., "Wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations," Advances in Neural Information Processing Systems 33 (2020): 12449–60.',
      "14. Leonardo Pepino et al., Emotion Recognition from Speech Using Wav2vec 2.0 Embeddings, arXiv, 2021, https://doi.org/10.48550/arXiv.2104.03502.",
      '15. Simon Rouard et al., "Hybrid Transformers for Music Source Separation," ICASSP 23, 2023.',
      "16. https://developers.ai-coustics.com/documentation",
      "17. Alec Radford et al., Robust Speech Recognition via Large-Scale Weak Supervision, arXiv, 2022, https://doi.org/10.48550/ARXIV.2212.04356.",
      '18. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585; Ziyang Ma et al., "Emotion2vec: Self-Supervised Pre-Training for Speech Emotion Representation," Findings of the Association for Computational Linguistics ACL 2024 (Bangkok, Thailand; virtual meeting), Association for Computational Linguistics, 2024, 15747–60, https://doi.org/10.18653/v1/2024.findings-acl.931.',
      '19. Paul Ekman, "An Argument for Basic Emotions," Cognition & Emotion 6, nos. 3-4 (1992): 169–200.',
      '20. Gyanendra K. Verma and Uma Shanker Tiwary, "Affect Representation and Recognition in 3D Continuous Valence–Arousal–Dominance Space," Multimedia Tools and Applications 76, no. 2 (2017): 2159–83, https://doi.org/10.1007/s11042-015-3119-y.',
      '21. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585.',
      "22. Leland McInnes et al., UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction, 2020, https://arxiv.org/abs/1802.03426.",
      "23. Haozhe Chen et al., EmoKnob: Enhance Voice Cloning with Fine-Grained Emotion Control, arXiv, 2024, https://doi.org/10.48550/arXiv.2410.00316.",
      "24. https://motivational-speech-synthesis.com/",
      "25. https://github.com/MotivationalSpeechSynthesis/motivational-speech-synthesis/",
    ],
    de: [
      "1. https://motivational-speech-synthesis.com/",
      "2. OECD, A Broken Social Elevator? How to Promote Social Mobility (OECD, 2018), https://doi.org/10.1787/9789264301085-en.",
      "3. OECD, A Broken Social Elevator? How to Promote Social Mobility (OECD, 2018), https://doi.org/10.1787/9789264301085-en.",
      "4. https://github.com/coqui-ai/TTS",
      "5. https://github.com/metavoiceio/metavoice-src",
      "6. Yoach Lacombe et al., Parler-TTS, GitHub, 2024, https://github.com/huggingface/parler-tts.",
      "7. Yinghao Aaron Li et al., StyleTTS 2: Towards Human-Level Text-to-Speech Through Style Diffusion and Adversarial Training with Large Speech Language Models, arXiv, 2023, https://doi.org/10.48550/arXiv.2306.07691.",
      "8. Deok-Hyeon Cho et al., EmoSphere++: Emotion-Controllable Zero-Shot Text-to-Speech via Emotion-Adaptive Spherical Vector, arXiv, 2024, https://doi.org/10.48550/arXiv.2411.02625.",
      "9. Haozhe Chen et al., EmoKnob: Enhance Voice Cloning with Fine-Grained Emotion Control, arXiv, 2024, https://doi.org/10.48550/arXiv.2410.00316.",
      '10. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585.',
      '11. Ziyang Ma et al., "Emotion2vec: Self-Supervised Pre-Training for Speech Emotion Representation," Findings of the Association for Computational Linguistics ACL 2024 (Bangkok, Thailand; virtual meeting), Association for Computational Linguistics, 2024, 15747–60, https://doi.org/10.18653/v1/2024.findings-acl.931.',
      '12. Swapna Mol George and P. Muhamed Ilyas, "A Review on Speech Emotion Recognition: A Survey, Recent Advances, Challenges, and the Influence of Noise," Neurocomputing 568 (February 2024): 127015, https://doi.org/10.1016/j.neucom.2023.127015.',
      '13. Alexei Baevski et al., "Wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations," Advances in Neural Information Processing Systems 33 (2020): 12449–60.',
      "14. Leonardo Pepino et al., Emotion Recognition from Speech Using Wav2vec 2.0 Embeddings, arXiv, 2021, https://doi.org/10.48550/arXiv.2104.03502.",
      '15. Simon Rouard et al., "Hybrid Transformers for Music Source Separation," ICASSP 23, 2023.',
      "16. https://developers.ai-coustics.com/documentation",
      "17. Alec Radford et al., Robust Speech Recognition via Large-Scale Weak Supervision, arXiv, 2022, https://doi.org/10.48550/ARXIV.2212.04356.",
      '18. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585; Ziyang Ma et al., "Emotion2vec: Self-Supervised Pre-Training for Speech Emotion Representation," Findings of the Association for Computational Linguistics ACL 2024 (Bangkok, Thailand; virtual meeting), Association for Computational Linguistics, 2024, 15747–60, https://doi.org/10.18653/v1/2024.findings-acl.931.',
      '19. Paul Ekman, "An Argument for Basic Emotions," Cognition & Emotion 6, nos. 3-4 (1992): 169–200.',
      '20. Gyanendra K. Verma and Uma Shanker Tiwary, "Affect Representation and Recognition in 3D Continuous Valence–Arousal–Dominance Space," Multimedia Tools and Applications 76, no. 2 (2017): 2159–83, https://doi.org/10.1007/s11042-015-3119-y.',
      '21. Johannes Wagner et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap," IEEE Transactions on Pattern Analysis and Machine Intelligence 45, no. 9 (2023): 10745–59, https://doi.org/10.1109/TPAMI.2023.3263585.',
      "22. Leland McInnes et al., UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction, 2020, https://arxiv.org/abs/1802.03426.",
      "23. Haozhe Chen et al., EmoKnob: Enhance Voice Cloning with Fine-Grained Emotion Control, arXiv, 2024, https://doi.org/10.48550/arXiv.2410.00316.",
      "24. https://motivational-speech-synthesis.com/",
      "25. https://github.com/MotivationalSpeechSynthesis/motivational-speech-synthesis/",
    ],
  },
  authorBio: {
    en: "Luis Küffner is a sound and media artist, abstracting underlying patterns and sociocultural contexts of technologies, collective dynamics, and symbolic systems. Rearticulating compositional strategies from electroacoustic music into dense, hypnotic, temporal forms and physical objects, he investigates the digital voice in generative and algorithmic synthesis processes. His installations, musical performances, and electronic pieces have been presented across venues and festivals, such as Kunstpalast Düsseldorf, silent green Berlin, International Computer Music Conference Seoul, Goethe-Insitute Bangkok, and Blurred Edges Festival Hamburg.",
    de: "Als Klang- und Medienkünstler abstrahiert Luis Küffner zugrunde liegende Muster und soziokulturelle Kontexte von Technologien, kollektiven Dynamiken und symbolischen Systemen. Indem er kompositorische Strategien elektroakustischer Musik in dichte, hypnotische zeitliche Formen und physische Objekte überführt, untersucht er die digitale Stimme in generativen und algorithmischen Syntheseprozessen. Seine Installationen, musikalischen Performances und elektronischen Stücke wurden unter anderem in Institutionen und auf Festivals wie Kunstpalast Düsseldorf, silent green Berlin, International Computer Music Conference Seoul, Goethe-Institut Bangkok und Blurred Edges Festival Hamburg präsentiert.",
  },
  keywords: {
    en: [
      "Text-to-Speech",
      "Speech Synthesis",
      "Speech Emotion Recognition",
      "Prosody",
      "Motivational Speech",
      "Self-Optimization",
      "Meritocracy",
      "Social Mobility",
      "Toxic Masculinity",
      "Hustle Culture",
      "Machine Learning",
      "Media Art",
    ],
    de: [
      "Text-to-Speech",
      "Sprachsynthese",
      "Emotionserkennung",
      "Prosodie",
      "Motivationsrhetorik",
      "Selbstoptimierung",
      "Meritokratie",
      "Soziale Mobilität",
      "Toxische Männlichkeit",
      "Hustle Culture",
      "Machine Learning",
      "Medienkunst",
    ],
  },
  documents: [
    {
      name: "Motivational_Speech_Synthesis.pdf",
      url: "/Motivational_Speech_Synthesis.pdf",
      doi: "https://doi.org/10.25624/kuenste-2492",
    },
  ],
};
