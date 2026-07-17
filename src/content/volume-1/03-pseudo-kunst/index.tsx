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
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
);
const img1 = getImg(
  "img1",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
);
const img2 = getImg(
  "img2",
  "https://cyberneticserendipity.net/tumblr_lnt5n9mumD1qmskiio1_500.jpg",
);

// 02. BEITRAGS-DATEN UND INHALT DEFINIEREN
export const article: Article = {
  id: "art-3",
  volume: "Volume 1",
  title: {
    en: "Pseudo-Kunst?",
    de: "Pseudo-Kunst?",
  },
  author: "Daniel Franke",
  date: "2026-07-18",
  doi: "https://doi.org/10.25624/kuenste-2497",

  headerImage: headerImg,

  excerpt: {
    en: "A perfect echo without a voice.",
    de: "Ein perfektes Echo ohne eigene Stimme.",
  },

  content: {
    en: (
      <>
        <BigQuote source="">
          Pseudo-Kunst kann als ästhetisches Äquivalent zu Harry Frankfurts
          Konzept des Bullshits verstanden werden.
        </BigQuote>
        <P>
          Wenn wir uns die rasante Entwicklung in der Automatisierung von
          Kreativprozessen durch Generative KI (GenKI), gekoppelt mit dem
          Phänomen von KI-Slop, vor Augen führen, dann stellt sich unweigerlich
          die Frage, ob und inwieweit auch die Kunst (so weit der Begriff
          überhaupt zu fassen sein mag und wie subjektiv seine individuelle
          Bedeutung auch ist) als solche durch Maschinen automatisiert werden
          könnte. Schon seit Jahrhunderten wird die menschliche Fantasie von der
          Vorstellung verzaubert, genau jenes technisch nachzubilden, was uns
          zutiefst menschlich macht, ob nun unsere Körper, unsere Intelligenz
          oder aber unsere Empfindungen – welche vor allem unverzichtbar für die
          Künste sind.
        </P>
        <P>
          In der aktuellen Entwicklung scheinen wir nun einen Punkt erreicht zu
          haben, an dem von GenKI erzeugte Werke phänomenologisch kaum noch von
          jenen menschlicher Schöpfer*innen zu unterscheiden sind – zumindest
          auf handwerklicher Ebene. Damit wirft die nahezu perfekte
          Automatisierung des Kreativprozesses vor allem eine Frage auf: die
          nach dessen Bedeutung und danach, was letztendlich noch mit dem Werk
          von wem und für wen transportiert wird. Denn wir müssen annehmen, dass
          das maschinelle Ersatzprodukt in seinem scheinbaren Wesen nicht das
          erfüllen kann – oder zumindest nur an der Oberfläche –, was bisher den
          Kern künstlerischen Schaffens ausgemacht hat: eine subjektive Absicht,
          eine tieferliegende (implizite) Vorstellung, wie auch der
          existenzielle Wunsch, sich auszudrücken und dabei vor allem verstanden
          zu werden.
        </P>
        <P>
          Diese entscheidende Position der Kunst als spezielle Form des
          intersubjektiven Miteinanders, die zugleich auch als Ausgangspunkt für
          eine vielschichtigere Diskussion kollektiv-menschlicher Lebensinhalte
          herangezogen werden könnte, gilt es nun unter diesen Umständen neu zu
          deuten: Ist der maschinengenerierte Ersatz unproblematisch und uns
          steht eine rosige Zukunft in der Ko-Kreation mit oder in der
          Erweiterung durch Maschinen bevor, wie es die Lager der Trans- und
          Posthumanisten*innen entwerfen, oder gilt es eine moderne Form des
          Humanismus zu verteidigen?
        </P>
        <P>
          Natürlich kann es nicht der Anspruch eines so kurzen Essays sein,
          jegliche Kategorien der Kunst zu diskutieren. Bezogen auf GenKI geht
          es hier ganz speziell um jene Strömung, die den Ansatz verfolgt, das
          Künstlerische als im Wesentlichen technisch und einer formalen Logik
          folgend zu verstehen, um es letztendlich als automatisierten,
          kulturindustriellen Kreativprozess anzuwenden.
        </P>
        <P>
          Der Literaturwissenschaftler M. H. Abrams unterscheidet vier
          Grundbeziehungen, die jeweils einen eigenen Blickwinkel auf das
          Kunstwerk eröffnen und so unterschiedliche Bewertungsmaßstäbe
          ermöglichen
          <Fn n={"1"} />. Diese sind die Mimetische, die Pragmatische, die
          Expressive und die Objektive Relation.
          <Fn n={"2"} />
        </P>
        <P>
          Während die ersten beiden für eine Analyse weniger interessant
          erscheinen, da Generative KI zum einen vor allem in der Nachahmung
          ihre Stärken offenbart und zum anderen in ihrer induktiven
          Formalisierung, vor allem auf die oberflächlichen Bedürfnisse der
          Betrachter*innen ausgerichtet werden kann (Sycophancy
          <Fn n={"3"} />
          ), sind die Letzteren für eine dialektische Abgrenzung interessanter.
          Zum einen ist die Expressive Relation als Gegenposition zu nennen, die
          vor allem die innere, implizite Welt des*der Künstler*in ins Zentrum
          stellt und dabei einen Formalismus grundlegend ablehnt.
        </P>
        <P>
          Kant hat in seiner Kritik der Urteilskraft
          <Fn n={"4"} /> 1790 bereits unsere moderne Vorstellung der Kunst
          (Zweckmäßigkeit ohne Zweck) formuliert und zudem klargestellt, dass
          wirkliche Kunst – er nennt sie die „schöne Kunst“ – sich niemals in
          Regeln fassen ließe. Ihm zufolge entzieht sich das Implizite der
          Kunst, was sie insbesondere von der Wissenschaft unterscheidet,
          jeglicher Explizierung: „[Die Regel] kann in keiner Formel abgefaßt
          zur Vorschrift dienen; denn sonst würde das Urteil über das Schöne
          nach Begriffen bestimmbar sein …”
          <Fn n={"5"} />
        </P>
        <P>
          Max Bense hält in der Mitte des 20. Jahrhunderts dagegen und
          formuliert seine Generative Ästhetik
          <Fn n={"6"} /> als Reaktion auf die Kybernetik, den Computer und die
          Informationstheorie. Seine Annahme kann als technische Konkretisierung
          der Objektiven Relation verstanden werden, die das Kunstwerk an sich
          betrachtet, ohne direkten Einfluss externer Faktoren. Jenes steht
          somit weder in mimetischer Beziehung zur Umwelt, noch ist sein
          primäres Ziel, den Betrachter*innen (emotional) zu adressieren, um zu
          gefallen oder einen inneren Zustand (der Künstler*innen) nach außen zu
          tragen. Die Generative Ästhetik fokussiert sich auf den Formalismus
          als Selbstzweck mit dem Ziel, die ästhetischen Information des
          Kunstwerks offenzulegen, um sie anschließend in maschinelle
          Operationen zu gießen. Das Ergebnis ist dabei nicht primär das Werk,
          sondern der Prozess seiner Entstehung – die Maschine, der Algorithmus.
          Die Künstler*innen werden eher wieder zu Handwerkern*innen oder
          Ingenieuren*innen im Sinne der traditionellen Techne (Τέχνη), welche
          später jedoch die tatsächlichen Ergebnisse ihrer Kreation ästhetisch
          kuratieren.
        </P>
        <ArticleImage
          src={img2}
          alt="Cybernetic Serendipity"
          caption="Franciszka Themerson, Cybernetic Serendipity, 1968, exhibition poster,
          ICA, London. Courtesy the artist and ICA, London –
          cyberneticserendipity.net"
        />
        <P>
          Jasia Reichardt hat dieser neuen Form künstlerischen Ausdrucks – der
          Computerkunst – 1968 mit ihrer Ausstellung Cybernetic Serendipity
          <Fn n={7} /> ein bleibendes Denkmal gesetzt. Die Ausstellung
          vereinigte viele Namen, die heute als Pionier*innen des Bereichs
          gelten, wie z. B. Frieder Nake oder Georg Nees. Harold Cohen war zwar
          nicht selbst Teil der Ausstellung, dennoch gilt er heute als einer der
          Begründer*innen der Generativen KI. Seine Zeichenmaschine AARON
          <Fn n={8} /> sollte allerdings nicht als reines Produkt des
          kybernetischen Formalismus verstanden werden, sondern als Ergebnis
          eines intimen Prozesses zwischen ihm und der Maschine, der sich über
          einen Zeitraum von 40 Jahren erstreckte. Sein Ziel war es, exakt das,
          was speziell seine persönliche Kunst ausmachte, auf die Maschine zu
          übertragen, in all seinen subjektiven und impliziten Facetten. AARON
          ist damit weniger Zeugnis eines technischen Reduktionismus, als
          vielmehr Experiment der Ko-Kreation zwischen Mensch und Maschine, das
          in Cohens Fall aber unter gänzlich individuellen Vorzeichen stand.
        </P>
        <P>
          Der wichtigste Punkt ist dabei, dass Cohen selbst zuvor bildender
          Künstler war und aus seiner Praxis heraus die Regeln für seine
          Maschine abgeleitet hat. Das stellt einen entscheidenden Unterschied
          zur heutigen Entwicklung dar. Mit Generativer KI werden die Regeln
          induktiv, d. h. statistisch aus Millionen von Vorbildern automatisch
          abgeleitet, was dazu führt, dass die Ergebnisse nicht nur genereller
          und folglich aus künstlerischer Perspektive beliebiger werden (sie
          repräsentieren nur den statistischen Durchschnitt, keine individuelle
          Position), sondern dass auch der grundlegende Kreativprozess an sich
          automatisiert wird und sich aufzulösen droht.
        </P>
        <P>
          Das ist der entscheidende Aspekt, in dem sich GenKI als Werkzeug nicht
          nur im Speziellen von Cohens Zeichenmaschine, sondern auch generell
          von Apparaten der Generativen Ästhetik unterscheidet. Diese
          funktionierten noch im Sinne ihrer Erschaffer*innen und ihnen war
          folglich in der Zusammenarbeit zu trauen. Selbst wenn sie Fehler
          produzierten, also nicht funktionierten, so konnte auf dieses
          Nichtfunktionieren – mit Zeit und kontinuierlichem Austausch –
          vertraut und auch reagiert werden. Es entstand eine vertrauenswürdige
          ‘Beziehung’.
        </P>
        <P>
          Diese Art des Vertrauens steht nun bei Generativer KI zur Debatte.
        </P>
        <P>
          Um dieses Vertrauen besser zu verstehen, können wir ein Konzept des
          Kinderpsychologen Donald Winnicott heranziehen
          <Fn n={9} />. Das Übergangsobjekt beschreibt ein Ersatzobjekt
          innerhalb der frühkindlichen Entwicklung, das dem Kind hilft, in der
          Not erst einmal seine innere Welt auf ein äußeres Objekt (Kuscheltier,
          Bettzipfel) zu projizieren, um dann in der projizierten Vorstellung,
          wenn sie funktioniert – Vertrauen aufbaut –, zugleich (in Bezug auf
          das ihm vorübergehend verloren gegangene Objekt, oft die Mutter) Trost
          zu finden, aber auch sein Selbst-Vertrauen zu entwickeln.
        </P>
        <P>
          Winnicott beschreibt, dass von diesem besonderen Objekt und seiner
          Eigenschaft die Urkraft menschlicher Illusion, zu fördern in unserem
          späteren Leben einiges erhalten bleibt und sich in einem intermediären
          Raum, der von Kunst, Kultur und Religion besiedelt ist, ausdrückt.
        </P>
        <P>
          Dieser Raum manifestiert sich dabei an einem Objekt der äußeren
          Realität, das zugleich aber unsere inneren, subjektiven Vorstellungen
          in jenem Sinne produktiv adressiert, dass unser Selbst wächst und wir
          lernen, uns gegenseitig besser zu verstehen. Genau das kann aber nur
          geschehen, wenn das künstlerische Objekt – wie das Übergangsobjekt für
          das Baby welches nicht verändert werden darf, wie Winnicott betont –
          nach unseren Vorstellungen funktioniert. Nur dann können wir ihm
          emotional vertrauen.
        </P>
        <P>
          Doch den Produkten der GenKI kann in diesem Sinne nicht emotional
          vertraut werden. Diese zeichnen sich vor allem durch ihre Beliebigkeit
          aus. Der Philosoph Harry Frankfurt hat für die sprachliche Form jener
          Beliebigkeit den Begriff „Bullshit” geprägt
          <Fn n={10} />. Eine Person, die schwafelt, ist demnach keine, die
          vorsätzlich lügt, sondern eine, die der Wahrheit gleichgültig
          gegenübersteht. Sprache wird bei ihr zum Selbstzweck; die Form
          triumphiert über den beliebigen Inhalt. Pseudo-Kunst kann als
          ästhetisches Äquivalent zu Harry Frankfurts Konzept des Bullshits
          verstanden werden.
        </P>
        <P>
          Sie erzeugt lediglich einen trügerischen Schein in Anlehnung an das
          griechische ψεῦδος (pséudos), das einen Gegenpol zu dem bildet, was
          Theodor W. Adorno als die Wahrheit der Kunst im ästhetischen Schein
          verortete
          <Fn n={11} />. Dieser Schein ist ihm folgend genau jener, der die
          Fantasie und Vorstellung im Winnicott’schen Sinne entwickelt und nicht
          im trügerischen Ersatz verkümmern lässt. Das Pseudo-Kunstwerk mag
          damit zwar auf formaler Ebene die Illusion der schönen Kunst erfüllen
          und auch vordergründig etwas an der Oberfläche transportieren, doch im
          Grunde entsteht keine wirkliche bedeutungsvolle Verbindung zwischen
          den Schaffenden und den Empfangenden. Das erwachsene Übergangsobjekt
          ist mit GenKI nicht eines, das emotional funktioniert, sondern eines,
          das versagt.
        </P>
        <ArticleImage src={img1} alt="Strachey Gedicht" caption="" />
        <P>
          Stracheys Reihe von Liebesgedichten aus dem Jahr 1953 gilt als eines
          der ersten computergenerierten Kunstwerke. Es wirkt wie ein
          unbeholfener Versuch und ist vielleicht gerade deshalb
          aufschlussreich. Es zeigt, woran eine Maschine scheitert, wenn ihr
          künstlerische Regeln vorgegeben werden – am starren Formalismus, der
          auch der Generativen Ästhetik anhaftet. Heute, gut siebzig Jahre
          später, können Maschinen ohne explizite Regeln fantastisch wirkende
          Gedichte schreiben, die niemand mehr phänomenologisch als
          maschinengeneriert identifizieren würde. Doch es bleibt ein innerlich
          trügerisches Gefühl der Leere. Was sich verändert hat, ist nicht nur
          die Finesse der Automatisierung durch die Maschine. Was sich
          insbesondere verändert hat, ist unsere Bereitschaft, den emotionalen
          Schein als das Wesentliche zu akzeptieren.
        </P>

        <P>
          Harold Cohen hat über vierzig Jahre mit AARON zusammengearbeitet –
          nicht weil die Maschine selbst weder Kunst erschaffen konnte noch
          sollte, sondern weil er als Künstler wusste, was er von ihr erwarten
          konnte, aber auch, was nicht. Und weil er diese Lücken mit seiner
          eigenen impliziten Note füllte.
        </P>

        <P>
          Dieses bedeutungsvolle Wissen lässt sich nicht rein statistisch
          induzieren. Es entsteht in der Praxis, im Scheitern, in der
          lebensgeschichtlichen Verankerung eines Subjekts. GenKI überspringt
          genau diese Genese. Damit ist nicht gesagt, dass mit GenKI keine
          interessanten Werke entstehen können – aber sie bleiben Pseudo-Kunst,
          solange sie nicht aus jener impliziten, verkörperten und individuellen
          Praxis erwachsen, die Cohen repräsentierte.
        </P>

        <P>
          Die eingangs aufgeworfene Frage – Technooptimismus oder Verteidigung
          eines modernen Humanismus? – lässt sich daher weder im
          transhumanistischen Sinn beantworten, der das Menschliche in der
          Technik aufzulösen versucht, noch in einem konservativen Sinn, der die
          Technik schlicht verdammt. Was es zu verteidigen gilt, ist nicht der
          Mensch an sich, sondern jener Raum des Dazwischen, in dem wir einander
          überhaupt erst als Menschen begegnen und uns gegenseitig verstehen
          lernen. Kunst, die diesen intermediären Raum bespielt, hat daran teil.
          Pseudo-Kunst, die ihn nur imitiert, leert ihn.
        </P>
      </>
    ),
   de: (
      <>
        <BigQuote source="">
          Pseudo-Kunst kann als ästhetisches Äquivalent zu Harry Frankfurts
          Konzept des Bullshits verstanden werden.
        </BigQuote>
        <P>
          Wenn wir uns die rasante Entwicklung in der Automatisierung von
          Kreativprozessen durch Generative KI (GenKI), gekoppelt mit dem
          Phänomen von KI-Slop, vor Augen führen, dann stellt sich unweigerlich
          die Frage, ob und inwieweit auch die Kunst (so weit der Begriff
          überhaupt zu fassen sein mag und wie subjektiv seine individuelle
          Bedeutung auch ist) als solche durch Maschinen automatisiert werden
          könnte. Schon seit Jahrhunderten wird die menschliche Fantasie von der
          Vorstellung verzaubert, genau jenes technisch nachzubilden, was uns
          zutiefst menschlich macht, ob nun unsere Körper, unsere Intelligenz
          oder aber unsere Empfindungen – welche vor allem unverzichtbar für die
          Künste sind.
        </P>
        <P>
          In der aktuellen Entwicklung scheinen wir nun einen Punkt erreicht zu
          haben, an dem von GenKI erzeugte Werke phänomenologisch kaum noch von
          jenen menschlicher Schöpfer*innen zu unterscheiden sind – zumindest
          auf handwerklicher Ebene. Damit wirft die nahezu perfekte
          Automatisierung des Kreativprozesses vor allem eine Frage auf: die
          nach dessen Bedeutung und danach, was letztendlich noch mit dem Werk
          von wem und für wen transportiert wird. Denn wir müssen annehmen, dass
          das maschinelle Ersatzprodukt in seinem scheinbaren Wesen nicht das
          erfüllen kann – oder zumindest nur an der Oberfläche –, was bisher den
          Kern künstlerischen Schaffens ausgemacht hat: eine subjektive Absicht,
          eine tieferliegende (implizite) Vorstellung, wie auch der
          existenzielle Wunsch, sich auszudrücken und dabei vor allem verstanden
          zu werden.
        </P>
        <P>
          Diese entscheidende Position der Kunst als spezielle Form des
          intersubjektiven Miteinanders, die zugleich auch als Ausgangspunkt für
          eine vielschichtigere Diskussion kollektiv-menschlicher Lebensinhalte
          herangezogen werden könnte, gilt es nun unter diesen Umständen neu zu
          deuten: Ist der maschinengenerierte Ersatz unproblematisch und uns
          steht eine rosige Zukunft in der Ko-Kreation mit oder in der
          Erweiterung durch Maschinen bevor, wie es die Lager der Trans- und
          Posthumanisten*innen entwerfen, oder gilt es eine moderne Form des
          Humanismus zu verteidigen?
        </P>
        <P>
          Natürlich kann es nicht der Anspruch eines so kurzen Essays sein,
          jegliche Kategorien der Kunst zu diskutieren. Bezogen auf GenKI geht
          es hier ganz speziell um jene Strömung, die den Ansatz verfolgt, das
          Künstlerische als im Wesentlichen technisch und einer formalen Logik
          folgend zu verstehen, um es letztendlich als automatisierten,
          kulturindustriellen Kreativprozess anzuwenden.
        </P>
        <P>
          Der Literaturwissenschaftler M. H. Abrams unterscheidet vier
          Grundbeziehungen, die jeweils einen eigenen Blickwinkel auf das
          Kunstwerk eröffnen und so unterschiedliche Bewertungsmaßstäbe
          ermöglichen
          <Fn n={"1"} />. Diese sind die Mimetische, die Pragmatische, die
          Expressive und die Objektive Relation.
          <Fn n={"2"} />
        </P>
        <P>
          Während die ersten beiden für eine Analyse weniger interessant
          erscheinen, da Generative KI zum einen vor allem in der Nachahmung
          ihre Stärken offenbart und zum anderen in ihrer induktiven
          Formalisierung, vor allem auf die oberflächlichen Bedürfnisse der
          Betrachter*innen ausgerichtet werden kann (Sycophancy
          <Fn n={"3"} />
          ), sind die Letzteren für eine dialektische Abgrenzung interessanter.
          Zum einen ist die Expressive Relation als Gegenposition zu nennen, die
          vor allem die innere, implizite Welt des*der Künstler*in ins Zentrum
          stellt und dabei einen Formalismus grundlegend ablehnt.
        </P>
        <P>
          Kant hat in seiner Kritik der Urteilskraft
          <Fn n={"4"} /> 1790 bereits unsere moderne Vorstellung der Kunst
          (Zweckmäßigkeit ohne Zweck) formuliert und zudem klargestellt, dass
          wirkliche Kunst – er nennt sie die „schöne Kunst“ – sich niemals in
          Regeln fassen ließe. Ihm zufolge entzieht sich das Implizite der
          Kunst, was sie insbesondere von der Wissenschaft unterscheidet,
          jeglicher Explizierung: „[Die Regel] kann in keiner Formel abgefaßt
          zur Vorschrift dienen; denn sonst würde das Urteil über das Schöne
          nach Begriffen bestimmbar sein …”
          <Fn n={"5"} />
        </P>
        <P>
          Max Bense hält in der Mitte des 20. Jahrhunderts dagegen und
          formuliert seine Generative Ästhetik
          <Fn n={"6"} /> als Reaktion auf die Kybernetik, den Computer und die
          Informationstheorie. Seine Annahme kann als technische Konkretisierung
          der Objektiven Relation verstanden werden, die das Kunstwerk an sich
          betrachtet, ohne direkten Einfluss externer Faktoren. Jenes steht
          somit weder in mimetischer Beziehung zur Umwelt, noch ist sein
          primäres Ziel, den Betrachter*innen (emotional) zu adressieren, um zu
          gefallen oder einen inneren Zustand (der Künstler*innen) nach außen zu
          tragen. Die Generative Ästhetik fokussiert sich auf den Formalismus
          als Selbstzweck mit dem Ziel, die ästhetischen Information des
          Kunstwerks offenzulegen, um sie anschließend in maschinelle
          Operationen zu gießen. Das Ergebnis ist dabei nicht primär das Werk,
          sondern der Prozess seiner Entstehung – die Maschine, der Algorithmus.
          Die Künstler*innen werden eher wieder zu Handwerkern*innen oder
          Ingenieuren*innen im Sinne der traditionellen Techne (Τέχνη), welche
          später jedoch die tatsächlichen Ergebnisse ihrer Kreation ästhetisch
          kuratieren.
        </P>
        <ArticleImage
          src={img2}
          alt="Cybernetic Serendipity"
          caption="Franciszka Themerson, Cybernetic Serendipity, 1968, exhibition poster,
          ICA, London. Courtesy the artist and ICA, London –
          cyberneticserendipity.net"
        />
        <P>
          Jasia Reichardt hat dieser neuen Form künstlerischen Ausdrucks – der
          Computerkunst – 1968 mit ihrer Ausstellung Cybernetic Serendipity
          <Fn n={7} /> ein bleibendes Denkmal gesetzt. Die Ausstellung
          vereinigte viele Namen, die heute als Pionier*innen des Bereichs
          gelten, wie z. B. Frieder Nake oder Georg Nees. Harold Cohen war zwar
          nicht selbst Teil der Ausstellung, dennoch gilt er heute als einer der
          Begründer*innen der Generativen KI. Seine Zeichenmaschine AARON
          <Fn n={8} /> sollte allerdings nicht als reines Produkt des
          kybernetischen Formalismus verstanden werden, sondern als Ergebnis
          eines intimen Prozesses zwischen ihm und der Maschine, der sich über
          einen Zeitraum von 40 Jahren erstreckte. Sein Ziel war es, exakt das,
          was speziell seine persönliche Kunst ausmachte, auf die Maschine zu
          übertragen, in all seinen subjektiven und impliziten Facetten. AARON
          ist damit weniger Zeugnis eines technischen Reduktionismus, als
          vielmehr Experiment der Ko-Kreation zwischen Mensch und Maschine, das
          in Cohens Fall aber unter gänzlich individuellen Vorzeichen stand.
        </P>
        <P>
          Der wichtigste Punkt ist dabei, dass Cohen selbst zuvor bildender
          Künstler war und aus seiner Praxis heraus die Regeln für seine
          Maschine abgeleitet hat. Das stellt einen entscheidenden Unterschied
          zur heutigen Entwicklung dar. Mit Generativer KI werden die Regeln
          induktiv, d. h. statistisch aus Millionen von Vorbildern automatisch
          abgeleitet, was dazu führt, dass die Ergebnisse nicht nur genereller
          und folglich aus künstlerischer Perspektive beliebiger werden (sie
          repräsentieren nur den statistischen Durchschnitt, keine individuelle
          Position), sondern dass auch der grundlegende Kreativprozess an sich
          automatisiert wird und sich aufzulösen droht.
        </P>
        <P>
          Das ist der entscheidende Aspekt, in dem sich GenKI als Werkzeug nicht
          nur im Speziellen von Cohens Zeichenmaschine, sondern auch generell
          von Apparaten der Generativen Ästhetik unterscheidet. Diese
          funktionierten noch im Sinne ihrer Erschaffer*innen und ihnen war
          folglich in der Zusammenarbeit zu trauen. Selbst wenn sie Fehler
          produzierten, also nicht funktionierten, so konnte auf dieses
          Nichtfunktionieren – mit Zeit und kontinuierlichem Austausch –
          vertraut und auch reagiert werden. Es entstand eine vertrauenswürdige
          ‘Beziehung’.
        </P>
        <P>
          Diese Art des Vertrauens steht nun bei Generativer KI zur Debatte.
        </P>
        <P>
          Um dieses Vertrauen besser zu verstehen, können wir ein Konzept des
          Kinderpsychologen Donald Winnicott heranziehen
          <Fn n={9} />. Das Übergangsobjekt beschreibt ein Ersatzobjekt
          innerhalb der frühkindlichen Entwicklung, das dem Kind hilft, in der
          Not erst einmal seine innere Welt auf ein äußeres Objekt (Kuscheltier,
          Bettzipfel) zu projizieren, um dann in der projizierten Vorstellung,
          wenn sie funktioniert – Vertrauen aufbaut –, zugleich (in Bezug auf
          das ihm vorübergehend verloren gegangene Objekt, oft die Mutter) Trost
          zu finden, aber auch sein Selbst-Vertrauen zu entwickeln.
        </P>
        <P>
          Winnicott beschreibt, dass von diesem besonderen Objekt und seiner
          Eigenschaft die Urkraft menschlicher Illusion, zu fördern in unserem
          späteren Leben einiges erhalten bleibt und sich in einem intermediären
          Raum, der von Kunst, Kultur und Religion besiedelt ist, ausdrückt.
        </P>
        <P>
          Dieser Raum manifestiert sich dabei an einem Objekt der äußeren
          Realität, das zugleich aber unsere inneren, subjektiven Vorstellungen
          in jenem Sinne produktiv adressiert, dass unser Selbst wächst und wir
          lernen, uns gegenseitig besser zu verstehen. Genau das kann aber nur
          geschehen, wenn das künstlerische Objekt – wie das Übergangsobjekt für
          das Baby welches nicht verändert werden darf, wie Winnicott betont –
          nach unseren Vorstellungen funktioniert. Nur dann können wir ihm
          emotional vertrauen.
        </P>
        <P>
          Doch den Produkten der GenKI kann in diesem Sinne nicht emotional
          vertraut werden. Diese zeichnen sich vor allem durch ihre Beliebigkeit
          aus. Der Philosoph Harry Frankfurt hat für die sprachliche Form jener
          Beliebigkeit den Begriff „Bullshit” geprägt
          <Fn n={10} />. Eine Person, die schwafelt, ist demnach keine, die
          vorsätzlich lügt, sondern eine, die der Wahrheit gleichgültig
          gegenübersteht. Sprache wird bei ihr zum Selbstzweck; die Form
          triumphiert über den beliebigen Inhalt. Pseudo-Kunst kann als
          ästhetisches Äquivalent zu Harry Frankfurts Konzept des Bullshits
          verstanden werden.
        </P>
        <P>
          Sie erzeugt lediglich einen trügerischen Schein in Anlehnung an das
          griechische ψεῦδος (pséudos), das einen Gegenpol zu dem bildet, was
          Theodor W. Adorno als die Wahrheit der Kunst im ästhetischen Schein
          verortete
          <Fn n={11} />. Dieser Schein ist ihm folgend genau jener, der die
          Fantasie und Vorstellung im Winnicott’schen Sinne entwickelt und nicht
          im trügerischen Ersatz verkümmern lässt. Das Pseudo-Kunstwerk mag
          damit zwar auf formaler Ebene die Illusion der schönen Kunst erfüllen
          und auch vordergründig etwas an der Oberfläche transportieren, doch im
          Grunde entsteht keine wirkliche bedeutungsvolle Verbindung zwischen
          den Schaffenden und den Empfangenden. Das erwachsene Übergangsobjekt
          ist mit GenKI nicht eines, das emotional funktioniert, sondern eines,
          das versagt.
        </P>
        <ArticleImage src={img1} alt="Strachey Gedicht" caption="" />
        <P>
          Stracheys Reihe von Liebesgedichten aus dem Jahr 1953 gilt als eines
          der ersten computergenerierten Kunstwerke. Es wirkt wie ein
          unbeholfener Versuch und ist vielleicht gerade deshalb
          aufschlussreich. Es zeigt, woran eine Maschine scheitert, wenn ihr
          künstlerische Regeln vorgegeben werden – am starren Formalismus, der
          auch der Generativen Ästhetik anhaftet. Heute, gut siebzig Jahre
          später, können Maschinen ohne explizite Regeln fantastisch wirkende
          Gedichte schreiben, die niemand mehr phänomenologisch als
          maschinengeneriert identifizieren würde. Doch es bleibt ein innerlich
          trügerisches Gefühl der Leere. Was sich verändert hat, ist nicht nur
          die Finesse der Automatisierung durch die Maschine. Was sich
          insbesondere verändert hat, ist unsere Bereitschaft, den emotionalen
          Schein als das Wesentliche zu akzeptieren.
        </P>

        <P>
          Harold Cohen hat über vierzig Jahre mit AARON zusammengearbeitet –
          nicht weil die Maschine selbst weder Kunst erschaffen konnte noch
          sollte, sondern weil er als Künstler wusste, was er von ihr erwarten
          konnte, aber auch, was nicht. Und weil er diese Lücken mit seiner
          eigenen impliziten Note füllte.
        </P>

        <P>
          Dieses bedeutungsvolle Wissen lässt sich nicht rein statistisch
          induzieren. Es entsteht in der Praxis, im Scheitern, in der
          lebensgeschichtlichen Verankerung eines Subjekts. GenKI überspringt
          genau diese Genese. Damit ist nicht gesagt, dass mit GenKI keine
          interessanten Werke entstehen können – aber sie bleiben Pseudo-Kunst,
          solange sie nicht aus jener impliziten, verkörperten und individuellen
          Praxis erwachsen, die Cohen repräsentierte.
        </P>

        <P>
          Die eingangs aufgeworfene Frage – Technooptimismus oder Verteidigung
          eines modernen Humanismus? – lässt sich daher weder im
          transhumanistischen Sinn beantworten, der das Menschliche in der
          Technik aufzulösen versucht, noch in einem konservativen Sinn, der die
          Technik schlicht verdammt. Was es zu verteidigen gilt, ist nicht der
          Mensch an sich, sondern jener Raum des Dazwischen, in dem wir einander
          überhaupt erst als Menschen begegnen und uns gegenseitig verstehen
          lernen. Kunst, die diesen intermediären Raum bespielt, hat daran teil.
          Pseudo-Kunst, die ihn nur imitiert, leert ihn.
        </P>
      </>
    ),
  },
  footnotes: {
    en: [
      "Abrams, M. H. (1980). The mirror and the lamp: Romantic theory and the critical tradition. Oxford University Press. (Originalwerk veröffentlicht 1953), S. 3 - 29",
      "Welche selbstredend durch eine fünfte – den Kontext – erweitert werden müsste.",
      "Äquivalent zu dem Prinzip bei Sprachmodellen - vgl. Sharma, M. et al. (2025). Towards understanding sycophancy in language models. arXiv. https://arxiv.org/abs/2310.13548",
      "Kant, I. (1922). Kritik der Urteilskraft (K. Vorländer, Hrsg.). F. Meiner. https://archive.org/details/kritikderurteils00kantuuoft (Originalwerk veröffentlicht 1790)",
      "Kant, I. (1922, 1790), § 47",
      "Bense, M. (1965). Projekte generativer Ästhetik. In M. Bense & E. Walther (Hrsg.), Computer-Grafik. Walther. https://www.computerkunst.org",
      "Cybernetic Serendipity. (o. D.). In Monoskop. Abgerufen am 5. Juli 2026, von https://monoskop.org/Cybernetic_Serendipity",
      "Cohen, H. (o. D.). AARON. Abgerufen am 5. Juli 2026, von https://www.aaronshome.com/aaron/index.html",
      "Winnicott, D. W. (2005). Playing and reality. Routledge. (Originalwerk veröffentlicht 1971)",
      "Frankfurt, H. G. (2005). On bullshit. Princeton University Press. (Originalwerk veröffentlicht 1986)",
      "Tränkle, S. (2021). Schein und Ausdruck. In A. Eusterschulte & S. Tränkle (Hrsg.), Theodor W. Adorno: Ästhetische Theorie (S. 105–121). De Gruyter. https://doi.org/10.1515/9783110672190",
      "Strachey (1953/1954), zitiert nach Cox, G. (2012). Das Herz der Maschine. In D. Link (Hrsg.), Machine Heart / Das Herz der Maschine. https://alpha60.de/art/love_letters/DavidLink_DasHerzDerMaschine_2012.pdf, S. 10.",
    ],
    de: [
      "Abrams, M. H. (1980). The mirror and the lamp: Romantic theory and the critical tradition. Oxford University Press. (Originalwerk veröffentlicht 1953), S. 3 - 29",
      "Welche selbstredend durch eine fünfte – den Kontext – erweitert werden müsste.",
      "Äquivalent zu dem Prinzip bei Sprachmodellen - vgl. Sharma, M. et al. (2025). Towards understanding sycophancy in language models. arXiv. https://arxiv.org/abs/2310.13548",
      "Kant, I. (1922). Kritik der Urteilskraft (K. Vorländer, Hrsg.). F. Meiner. https://archive.org/details/kritikderurteils00kantuuoft (Originalwerk veröffentlicht 1790)",
      "Kant, I. (1922, 1790), § 47",
      "Bense, M. (1965). Projekte generativer Ästhetik. In M. Bense & E. Walther (Hrsg.), Computer-Grafik. Walther. https://www.computerkunst.org",
      "Cybernetic Serendipity. (o. D.). In Monoskop. Abgerufen am 5. Juli 2026, von https://monoskop.org/Cybernetic_Serendipity",
      "Cohen, H. (o. D.). AARON. Abgerufen am 5. Juli 2026, von https://www.aaronshome.com/aaron/index.html",
      "Winnicott, D. W. (2005). Playing and reality. Routledge. (Originalwerk veröffentlicht 1971)",
      "Frankfurt, H. G. (2005). On bullshit. Princeton University Press. (Originalwerk veröffentlicht 1986)",
      "Tränkle, S. (2021). Schein und Ausdruck. In A. Eusterschulte & S. Tränkle (Hrsg.), Theodor W. Adorno: Ästhetische Theorie (S. 105–121). De Gruyter. https://doi.org/10.1515/9783110672190",
      "Strachey (1953/1954), zitiert nach Cox, G. (2012). Das Herz der Maschine. In D. Link (Hrsg.), Machine Heart / Das Herz der Maschine. https://alpha60.de/art/love_letters/DavidLink_DasHerzDerMaschine_2012.pdf, S. 10.",
    ],
  },
  authorBio: {
    en: "Daniel Franke (b. September 6, 1982) is an artist and artistic researcher working at the intersection of art, technology, and theory, with a focus on the impact of generative AI. As part of the MIDAP research project, he is currently a research associate at the newly established GenAI Lab at the Berlin University of the Arts (UdK). He previously studied Visual Communication and Media Art at the UdK, where he received his Meisterschüler degree in 2011. Furthermore, he is a doctoral candidate at Bauhaus-Universität Weimar, where he examines the human-machine relationship under the new paradigms of generative AI. In addition to his artistic and research practice, which is complemented by regular fellowships (CAC, Shanghai; NewNow, Essen), he has taught at various universities (HfG Karlsruhe, Leuphana University Lüneburg) and has held curatorial roles—including for the Shenzhen Animation Biennale and LEAP (Lab for Electronic Arts and Performance), which he co-founded.",
    de: "Daniel Franke (* 6. September 1982) ist Künstler und künstlerischer Forscher an der Schnittstelle von Kunst, Technologie und Theorie, mit Schwerpunkt auf den Auswirkungen generativer KI. Im Rahmen des Forschungsprojekts MIDAP ist er derzeit als forschender Mitarbeiter am neu initiierten GenKI-Labor der Universität der Künste (UdK) Berlin tätig. An der UdK studierte er zuvor Visuelle Kommunikation sowie Medienkunst und schloss dort 2011 als Meisterschüler ab. Darüber hinaus promoviert er an der Bauhaus-Universität Weimar, wo er das Verhältnis von Mensch und Maschine unter den veränderten Vorzeichen generativer KI untersucht. Neben seiner künstlerisch-forschenden Tätigkeit, die von regelmäßigen Fellowships begleitet wird (CAC, Shanghai; NewNow, Essen), lehrte er an verschiedenen Hochschulen (HfG Karlsruhe, Leuphana Uni. Lüneburg) und war kuratorisch tätig – unter anderem für die Shenzhen Animation Biennale und das LEAP (Lab for Electronic Arts and Performance), welches er mitbegründete.",
  },
  keywords: {
    en: [
      "Generative AI",
      "Pseudo-Art",
      "Bullshit",
      "Harry Frankfurt",
      "Generative Aesthetics",
      "Max Bense",
      "Harold Cohen",
      "AARON",
      "Transitional Object",
      "Winnicott",
      "Adorno",
      "AI Slop",
      "Humanism",
      "Philosophy of Art",
    ],
    de: [
      "Generative KI",
      "Pseudo-Kunst",
      "Bullshit",
      "Harry Frankfurt",
      "Generative Ästhetik",
      "Max Bense",
      "Harold Cohen",
      "AARON",
      "Übergangsobjekt",
      "Winnicott",
      "Adorno",
      "KI-Slop",
      "Humanismus",
      "Kunstphilosophie",
    ],
  },
  documents: [
    {
      name: "Daniel_Franke.pdf",
      url: "/Daniel_Franke.pdf",
      doi: "https://doi.org/10.25624/kuenste-2497",
    },
  ],
};
