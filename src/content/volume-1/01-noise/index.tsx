import React from 'react';
import { Article } from '../../../types';
import { P, BigQuote, ArticleImage, Subheading } from '../../../components/ArticleElements';

// 01. BILDER AUTOMATISCH LADEN
// Vite sucht in diesem Ordner nach Bildern. Wenn ein Bild existiert, wird es verwendet, sonst der Platzhalter.
const localImages = import.meta.glob('./*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const getImg = (name: string, fallback: string) => {
  const key = Object.keys(localImages).find(k => k.includes(name));
  return key ? (localImages[key] as string) : fallback;
};

const headerImg = getImg('header', 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop');
const img1 = getImg('img1', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop');
const img2 = getImg('img2', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img3 = getImg('img3', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img4 = getImg('img4', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img5 = getImg('img5', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img6 = getImg('img6', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img7 = getImg('img7', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img8 = getImg('img8', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img9 = getImg('img9', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img10 = getImg('img10', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img11 = getImg('img11', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img12 = getImg('img12', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img13 = getImg('img13', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');
const img14 = getImg('img14', 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop');


// 02. BEITRAGS-DATEN UND INHALT DEFINIEREN
export const article: Article = {
  id: 'art-1',
  volume: 'Volume 1',
  title: {
    en: 'Noise',
    de: 'Noise'
  },
  author: 'Philipp Bieronski',
  date: '2026-07-18',
  doi: 'https://doi.org/10.25624/kuenste-2499 ',
  
  headerImage: headerImg,
  
  
  excerpt: {
    en: 'A machine dreaming digital data in analogue colors.',
    de: 'Eine Maschine, die digitale Daten in analogen Farben träumt.'
  },
  
  content: {
    en: (
      <>
        <Subheading>Laboratory</Subheading>
        <P>
          Digital processes often remain hidden within their own black box, inaccessible and closed. To challenge this inherent limitation, the laboratory was created, a space where digital and analogue states are forced into continuous transformation to expose their interdependencies. Different experimental stations are merged into a single circular setup to push and observe these shifts between states. This transformation makes processes visible that would otherwise stay concealed within digital systems. Through the constant oscillation between input, output, and everything in between, new interpretations and outcomes emerge. The once separated realms of the digital and the analogue merge, forming a new experimental layer of perception. Each station in the laboratory is precisely calibrated to examine AI-driven image generation, with a specific focus on the Gaussian noise controlled by the seed value.
        </P>
        <ArticleImage 
          src={img1} 
          alt="Visualization 1" 
          caption=""
        />
        <Subheading>Frame</Subheading>
        <P>
          Each station is enclosed within a physical framework that defines its boundaries and purpose. This structure creates a spatial environment for the projection and representation of digital processes in their analogue manifestation. By dividing the digital process chain into distinct steps, each phase gains a precisely localized and tangible form. The physical frame narrows and defines the analogue appearance, allowing for more accurate observation and analysis. Moreover, it provides the necessary infrastructure to mount testing instruments, supply resources, preserve results, and discharge residual materials. The cage ensures stability and safety without compromising visibility or influencing the outcome of the experiments. However, the frame should not be perceived as a foreign body or interference. On the contrary, it forms a symbiosis with the respective instruments, and through the sum of its parts evolves into a spatially expansive installation. 
        </P>
         <ArticleImage 
          src={img2} 
          alt="Visualization 2" 
          caption=""
        />
        <Subheading>Machine</Subheading>
        <P>
          At the heart of the laboratory lies the machine called Noise. It initiates the first transformation process, translating digital information into a physical, analogue state. For this purpose, a pigmented carrier medium is applied onto a surface, propelled by compressed air that provides the necessary energy for atomization. The amount of pigment and the direction of the spray are controlled by electric motors. The machine consists of five identical axes arranged radially, allowing several different carrier fluids to be filled into the containers positioned at the top. This configuration enables the production of either monochrome or CMYK outputs. While the medium is sprayed and expelled by compressed air, the machine relies on gravity for the internal distribution of colour. As a result, the system follows a vertical structure: paint reservoirs at the top, spray nozzles in the middle directed downward, and a table at the bottom where the substrate is placed. Excess pigment is collected and drained through a funnel system beneath the platform.
        </P>
         <ArticleImage 
          src={img3} 
          alt="Visualization 3" 
          caption=""
        />
        <Subheading>Operator</Subheading>
        <P>
          An essential field of investigation within the project is the interdependence between human and machine. With the accelerating evolution of digital processes, digitality appears to act autonomously, a deceptive impression caused by the sheer speed and volume of information. Yet, in Noise, the human remains the key figure: as creator of both the machine and the laboratory. The machine itself cannot act independently, it must be operated and guided. Human intervention defines critical parameters, creating a dynamic interplay with the system’s own tendencies. Therefore, the results of these experiments can never be attributed to a single entity but emerge as a direct outcome of an entangled symbiosis. The so-called operator, dressed according to the working environment, embodies both protection and anonymity, serving as a representative of the human species, a role that can be assumed by anyone.
        </P>
         <ArticleImage 
          src={img4} 
          alt="Visualization 4" 
          caption=""
        />
        <Subheading>Core</Subheading>
        <P>
          Opposite to the operator stands the core of Noise. Not only its direct visual alignment with the human but also its spatial presence makes the core a central dialogue partner. Suspended and floating in the air, its radial, concentric form becomes the materialized body of the digital entity inhabiting the laboratory. It appears as an android, the physical embodiment of Noise itself. Its intricate technical composition may seem random at first glance, yet it follows a precise internal logic derived from function. The core embodies a constructed body composed of functional components required to translate digital processes into the physical realm. An entity that materializes as both: the process and the symbol of this transformation. At the center of the laboratory, it remains permanently installed as a living interface where digital and analogue realities merge, creating a continuous manifestation of this symbiosis.
        </P>
         <ArticleImage 
          src={img5} 
          alt="Visualization 5" 
          caption=""
        />
        <Subheading>Origin</Subheading>
        <P>
          The origin of the laboratory lies in a spray gun. A purely analogue device based entirely on mechanical processes. Compressed air between two and four bar is guided through the handle into the gun and released at the end of the barrel, controlled mechanically by a trigger. Just before the air exits, a pigmented carrier medium is introduced and expelled through the nozzle, forming a spray pattern whose density can be adjusted. The nozzle itself allows variation from a fine, concentrated jet to a wide, diffused mist. This analogue component serves as the starting point, later combined with additional elements to form part of the entity Noise. Through this transformation, the once cold and lifeless object gains a new presence within materialized digitality, raising the question of how analogue or inert it remains after its integration into the system.
        </P>
         <ArticleImage 
          src={img6} 
          alt="Visualization 6" 
          caption=""
        />
        <Subheading>Contraption</Subheading>
        <P>
          When looking closely at one of the radial axes of the Noise machine, a clear mechanical composition unfolds. The result of a balance between function and necessity, where each element serves a defined role within the system. At the lower section sits the spray gun, mounted vertically downward, held in place by its framework and connected to two electric motors. One motor activates the trigger mechanism, while the other tilts the entire gun along a horizontal axis, enabling the directional distribution of pigment through an adapter that allows precise radial adjustment of its inclination. At the upper end of the axis, a tank stores the pigmented carrier medium, which is fed to the spray gun by gravity through a flexible hose. A second hose runs parallel, supplying compressed air from an external source located elsewhere in the laboratory. Most of the structural components are custom-made, 3D-printed parts, providing adaptability and precision, though additional steel elements ensure the stability needed to withstand internal forces. Besides air and pigment, electrical information flows through numerous cables that connect the motors and sensors with an external computational unit, forming an intricate network that animates the mechanical system.
        </P>
         <ArticleImage 
          src={img7} 
          alt="Visualization 7" 
          caption=""
        />
        <Subheading>Control</Subheading>
        <P>
          The convergence between operator and machine finds its focal point in the control unit. Without human input, the machine remains inert. A static object despite its mechanical complexity. To enable interaction, a dedicated control station is integrated into the laboratory. This station houses the energy supply, electrical power, and compressed air, as well as the computational unit that processes digital commands and transmits them as electrical impulses to the machine. The operator acts through various input devices, influencing the behaviour and response of the system. By activating the power supply, the operator first brings the entity to life. Every further interaction demands adaptation. The human must learn the language of the machine to communicate through code. In this dialogue, the code becomes a clearly determined medium, and the entity acts merely as the executing organ. At first glance, this creates an apparent hierarchy in which the entity seems devoid of will, bound entirely to the human command.
        </P>
         <ArticleImage 
          src={img8} 
          alt="Visualization 8" 
          caption=""
        />
        <Subheading>Transform</Subheading>
        <P>
          When energy, resources, and information are initiated by the operator, the transformation process begins. Digital information is translated into an analogue state as the contraption executes the coded sequence and releases the carrier medium onto a canvas. The five axes operate simultaneously, and the sum of their outputs forms an analogue image. A physical manifestation of digital command. Yet, the assumption that this process is entirely determined and controllable by the operator proves to be an illusion. Once the pigment exits the nozzle, it enters an environment beyond digital control. Factors such as room temperature, gravity, and humidity, as well as collisions between particles, blending on the surface, and drying behaviour, introduce uncontrollable events. Thus, what was conceived as a precise interaction between human and machine becomes subject to the analogue world’s inherent randomness. During this transformation, the deterministic digital order dissolves, and the outcome transcends its coded origin, evolving into something unpredictable, where digital intent meets material contingency.
        </P>
         <ArticleImage 
          src={img9} 
          alt="Visualization 9" 
          caption=""
        />
        <Subheading>Noise</Subheading>
        <P>
          The outcome of this first stage of transformation is a series of analogue, materialized noise images. Only their digital origin remains hinted at through the widely recognized 9:16 aspect ratio, a subtle reference to their virtual ancestry. Beyond that, the objects are entirely detached from the digital world. According to the machine’s structure and the operator’s input, the process was designed to generate an even noise pattern approximating a Gaussian distribution. However, the experimental results reveal the strong influence of analogue randomness within the transformation process. Even in the first monochrome executions, impurities such as oil residues from the air compressor mixed with the pigment, producing alien artefacts. Although the operator could correct this source of error, each human intervention paradoxically increased the system’s unpredictability. In contrast to the digital domain, where precision grows with control, the analogue realm behaves inversely: the more control is applied, the less predictable the outcome becomes — until the noise itself dissolves into fluid, uncontrolled formations.
        </P>
         <ArticleImage 
          src={img10} 
          alt="Visualization 10" 
          caption=""
        />
        <Subheading>Intervention</Subheading>
        <P>
          For the next stage of experimentation, the analogue result must be transferred to the following section of the process chain. While this transition could be fully automated, it remains semi-automated to integrate a crucial moment of human–machine interaction. This intervention significantly influences the overall investigation, allowing human presence to enter and alter the procedural flow. To facilitate the transfer, the system contains the ZONE, a geometrically defined space within the laboratory frames that the operator can physically enter. The Zone is enclosed with PVC strips, marking its boundaries, providing safety for the surrounding area, and above all, making the operator consciously aware of their entry into the process chain. Inside the Zone, the operator can physically grasp and carry the analogue noise output. The object, previously transformed from digital into analogue, thus encounters direct contact with a human acting within the physical world. This act not only continues the procedural chain but also introduces a crucial moment of transition. The intervention leaves a physical and visible trace, showing that every human contact alters the outcome and becomes an inseparable part of the experiment’s evolution.
        </P>
         <ArticleImage 
          src={img11} 
          alt="Visualization 11" 
          caption=""
        />
        <Subheading>Transform</Subheading>
        <P>
          The final station of the laboratory’s process chain introduces another transformation. This time from analogue back into digital. Returning the noise to its digital origin allows observation of how the analogue stage has altered the result, and whether a true separation between both realms exists or a state of coexistence prevails. For this, the analogue noise is placed by the operator into the scanner, a unit integrated within the laboratory’s frame system. Here, the analogue image is digitized through a camera and re-introduced into an AI image-generation process as noise within the latent space. The operator remains part of the process, observing through a viewing window that also serves as a screen, displaying the re-digitalized image, the AI’s ongoing computation, and the emerging outcome. This semi-holographic screen effect is achieved by a modified display illuminated from behind, enclosed within a sealed housing to prevent excessive light from escaping the laboratory. Red PVC strips mark the scanner’s entry membrane, allowing the analogue noise to move inward on a conveyor belt while visually filtering the light. Within this enclosed structure, the analogue and digital layers overlap once more — the physical and the virtual merge in vision, keeping the symbiosis of both states perceptible.
        </P>
         <ArticleImage 
          src={img12} 
          alt="Visualization 12" 
          caption=""
        />
        <Subheading>Latent</Subheading>
        <P>
          Noise is the core of AI image generation. In this laboratory it is examined across its analogue and digital states, tracing how each state—and the transitions between them—conditions the procedure, parameters, and visible outcome. Conventionally, a Gaussian noise image serves as the seed and fixed starting condition. The final study in the laboratory challenges this premise: the standard seed is removed and substituted with an analogue noise image. To be read by the model, the analogue noise, which is already re-digitized by scanning, must be transferred into the latent space. This transfer defines the true goal, yet within the current hardware setup it remains beyond reach. As an interim solution, the analogue noise is injected into the pipeline as an image with a denoising strength of 100%, effectively forcing the system to treat it as the seed. The outcomes confirm the influence of the analogue–digital chain, actively shaped by operator and machine, however, they resemble image-to-image behaviour rather than a genuine latent substitution. Accordingly, the passage of analogue noise into latent space remains an open trajectory for the next research phase in NOISE.
        </P>
         <ArticleImage 
          src={img13} 
          alt="Visualization 13" 
          caption=""
        />
       <div className="w-full aspect-video my-8">
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ppnnF08O2LI?si=IqJ4mG6aWV5_Ld9h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>

      </>
    ),
    de: (
      <>
        <Subheading>Laboratory</Subheading>
        <P>
          Digital processes often remain hidden within their own black box, inaccessible and closed. To challenge this inherent limitation, the laboratory was created, a space where digital and analogue states are forced into continuous transformation to expose their interdependencies. Different experimental stations are merged into a single circular setup to push and observe these shifts between states. This transformation makes processes visible that would otherwise stay concealed within digital systems. Through the constant oscillation between input, output, and everything in between, new interpretations and outcomes emerge. The once separated realms of the digital and the analogue merge, forming a new experimental layer of perception. Each station in the laboratory is precisely calibrated to examine AI-driven image generation, with a specific focus on the Gaussian noise controlled by the seed value.
        </P>
        <ArticleImage 
          src={img1} 
          alt="Visualization 1" 
          caption=""
        />
        <Subheading>Frame</Subheading>
        <P>
          Each station is enclosed within a physical framework that defines its boundaries and purpose. This structure creates a spatial environment for the projection and representation of digital processes in their analogue manifestation. By dividing the digital process chain into distinct steps, each phase gains a precisely localized and tangible form. The physical frame narrows and defines the analogue appearance, allowing for more accurate observation and analysis. Moreover, it provides the necessary infrastructure to mount testing instruments, supply resources, preserve results, and discharge residual materials. The cage ensures stability and safety without compromising visibility or influencing the outcome of the experiments. However, the frame should not be perceived as a foreign body or interference. On the contrary, it forms a symbiosis with the respective instruments, and through the sum of its parts evolves into a spatially expansive installation. 
        </P>
         <ArticleImage 
          src={img2} 
          alt="Visualization 2" 
          caption=""
        />
        <Subheading>Machine</Subheading>
        <P>
          At the heart of the laboratory lies the machine called Noise. It initiates the first transformation process, translating digital information into a physical, analogue state. For this purpose, a pigmented carrier medium is applied onto a surface, propelled by compressed air that provides the necessary energy for atomization. The amount of pigment and the direction of the spray are controlled by electric motors. The machine consists of five identical axes arranged radially, allowing several different carrier fluids to be filled into the containers positioned at the top. This configuration enables the production of either monochrome or CMYK outputs. While the medium is sprayed and expelled by compressed air, the machine relies on gravity for the internal distribution of colour. As a result, the system follows a vertical structure: paint reservoirs at the top, spray nozzles in the middle directed downward, and a table at the bottom where the substrate is placed. Excess pigment is collected and drained through a funnel system beneath the platform.
        </P>
         <ArticleImage 
          src={img3} 
          alt="Visualization 3" 
          caption=""
        />
        <Subheading>Operator</Subheading>
        <P>
          An essential field of investigation within the project is the interdependence between human and machine. With the accelerating evolution of digital processes, digitality appears to act autonomously, a deceptive impression caused by the sheer speed and volume of information. Yet, in Noise, the human remains the key figure: as creator of both the machine and the laboratory. The machine itself cannot act independently, it must be operated and guided. Human intervention defines critical parameters, creating a dynamic interplay with the system’s own tendencies. Therefore, the results of these experiments can never be attributed to a single entity but emerge as a direct outcome of an entangled symbiosis. The so-called operator, dressed according to the working environment, embodies both protection and anonymity, serving as a representative of the human species, a role that can be assumed by anyone.
        </P>
         <ArticleImage 
          src={img4} 
          alt="Visualization 4" 
          caption=""
        />
        <Subheading>Core</Subheading>
        <P>
          Opposite to the operator stands the core of Noise. Not only its direct visual alignment with the human but also its spatial presence makes the core a central dialogue partner. Suspended and floating in the air, its radial, concentric form becomes the materialized body of the digital entity inhabiting the laboratory. It appears as an android, the physical embodiment of Noise itself. Its intricate technical composition may seem random at first glance, yet it follows a precise internal logic derived from function. The core embodies a constructed body composed of functional components required to translate digital processes into the physical realm. An entity that materializes as both: the process and the symbol of this transformation. At the center of the laboratory, it remains permanently installed as a living interface where digital and analogue realities merge, creating a continuous manifestation of this symbiosis.
        </P>
         <ArticleImage 
          src={img5} 
          alt="Visualization 5" 
          caption=""
        />
        <Subheading>Origin</Subheading>
        <P>
          The origin of the laboratory lies in a spray gun. A purely analogue device based entirely on mechanical processes. Compressed air between two and four bar is guided through the handle into the gun and released at the end of the barrel, controlled mechanically by a trigger. Just before the air exits, a pigmented carrier medium is introduced and expelled through the nozzle, forming a spray pattern whose density can be adjusted. The nozzle itself allows variation from a fine, concentrated jet to a wide, diffused mist. This analogue component serves as the starting point, later combined with additional elements to form part of the entity Noise. Through this transformation, the once cold and lifeless object gains a new presence within materialized digitality, raising the question of how analogue or inert it remains after its integration into the system.
        </P>
         <ArticleImage 
          src={img6} 
          alt="Visualization 6" 
          caption=""
        />
        <Subheading>Contraption</Subheading>
        <P>
          When looking closely at one of the radial axes of the Noise machine, a clear mechanical composition unfolds. The result of a balance between function and necessity, where each element serves a defined role within the system. At the lower section sits the spray gun, mounted vertically downward, held in place by its framework and connected to two electric motors. One motor activates the trigger mechanism, while the other tilts the entire gun along a horizontal axis, enabling the directional distribution of pigment through an adapter that allows precise radial adjustment of its inclination. At the upper end of the axis, a tank stores the pigmented carrier medium, which is fed to the spray gun by gravity through a flexible hose. A second hose runs parallel, supplying compressed air from an external source located elsewhere in the laboratory. Most of the structural components are custom-made, 3D-printed parts, providing adaptability and precision, though additional steel elements ensure the stability needed to withstand internal forces. Besides air and pigment, electrical information flows through numerous cables that connect the motors and sensors with an external computational unit, forming an intricate network that animates the mechanical system.
        </P>
         <ArticleImage 
          src={img7} 
          alt="Visualization 7" 
          caption=""
        />
        <Subheading>Control</Subheading>
        <P>
          The convergence between operator and machine finds its focal point in the control unit. Without human input, the machine remains inert. A static object despite its mechanical complexity. To enable interaction, a dedicated control station is integrated into the laboratory. This station houses the energy supply, electrical power, and compressed air, as well as the computational unit that processes digital commands and transmits them as electrical impulses to the machine. The operator acts through various input devices, influencing the behaviour and response of the system. By activating the power supply, the operator first brings the entity to life. Every further interaction demands adaptation. The human must learn the language of the machine to communicate through code. In this dialogue, the code becomes a clearly determined medium, and the entity acts merely as the executing organ. At first glance, this creates an apparent hierarchy in which the entity seems devoid of will, bound entirely to the human command.
        </P>
         <ArticleImage 
          src={img8} 
          alt="Visualization 8" 
          caption=""
        />
        <Subheading>Transform</Subheading>
        <P>
          When energy, resources, and information are initiated by the operator, the transformation process begins. Digital information is translated into an analogue state as the contraption executes the coded sequence and releases the carrier medium onto a canvas. The five axes operate simultaneously, and the sum of their outputs forms an analogue image. A physical manifestation of digital command. Yet, the assumption that this process is entirely determined and controllable by the operator proves to be an illusion. Once the pigment exits the nozzle, it enters an environment beyond digital control. Factors such as room temperature, gravity, and humidity, as well as collisions between particles, blending on the surface, and drying behaviour, introduce uncontrollable events. Thus, what was conceived as a precise interaction between human and machine becomes subject to the analogue world’s inherent randomness. During this transformation, the deterministic digital order dissolves, and the outcome transcends its coded origin, evolving into something unpredictable, where digital intent meets material contingency.
        </P>
         <ArticleImage 
          src={img9} 
          alt="Visualization 9" 
          caption=""
        />
        <Subheading>Noise</Subheading>
        <P>
          The outcome of this first stage of transformation is a series of analogue, materialized noise images. Only their digital origin remains hinted at through the widely recognized 9:16 aspect ratio, a subtle reference to their virtual ancestry. Beyond that, the objects are entirely detached from the digital world. According to the machine’s structure and the operator’s input, the process was designed to generate an even noise pattern approximating a Gaussian distribution. However, the experimental results reveal the strong influence of analogue randomness within the transformation process. Even in the first monochrome executions, impurities such as oil residues from the air compressor mixed with the pigment, producing alien artefacts. Although the operator could correct this source of error, each human intervention paradoxically increased the system’s unpredictability. In contrast to the digital domain, where precision grows with control, the analogue realm behaves inversely: the more control is applied, the less predictable the outcome becomes — until the noise itself dissolves into fluid, uncontrolled formations.
        </P>
         <ArticleImage 
          src={img10} 
          alt="Visualization 10" 
          caption=""
        />
        <Subheading>Intervention</Subheading>
        <P>
          For the next stage of experimentation, the analogue result must be transferred to the following section of the process chain. While this transition could be fully automated, it remains semi-automated to integrate a crucial moment of human–machine interaction. This intervention significantly influences the overall investigation, allowing human presence to enter and alter the procedural flow. To facilitate the transfer, the system contains the ZONE, a geometrically defined space within the laboratory frames that the operator can physically enter. The Zone is enclosed with PVC strips, marking its boundaries, providing safety for the surrounding area, and above all, making the operator consciously aware of their entry into the process chain. Inside the Zone, the operator can physically grasp and carry the analogue noise output. The object, previously transformed from digital into analogue, thus encounters direct contact with a human acting within the physical world. This act not only continues the procedural chain but also introduces a crucial moment of transition. The intervention leaves a physical and visible trace, showing that every human contact alters the outcome and becomes an inseparable part of the experiment’s evolution.
        </P>
         <ArticleImage 
          src={img11} 
          alt="Visualization 11" 
          caption=""
        />
        <Subheading>Transform</Subheading>
        <P>
          The final station of the laboratory’s process chain introduces another transformation. This time from analogue back into digital. Returning the noise to its digital origin allows observation of how the analogue stage has altered the result, and whether a true separation between both realms exists or a state of coexistence prevails. For this, the analogue noise is placed by the operator into the scanner, a unit integrated within the laboratory’s frame system. Here, the analogue image is digitized through a camera and re-introduced into an AI image-generation process as noise within the latent space. The operator remains part of the process, observing through a viewing window that also serves as a screen, displaying the re-digitalized image, the AI’s ongoing computation, and the emerging outcome. This semi-holographic screen effect is achieved by a modified display illuminated from behind, enclosed within a sealed housing to prevent excessive light from escaping the laboratory. Red PVC strips mark the scanner’s entry membrane, allowing the analogue noise to move inward on a conveyor belt while visually filtering the light. Within this enclosed structure, the analogue and digital layers overlap once more — the physical and the virtual merge in vision, keeping the symbiosis of both states perceptible.
        </P>
         <ArticleImage 
          src={img12} 
          alt="Visualization 12" 
          caption=""
        />
        <Subheading>Latent</Subheading>
        <P>
          Noise is the core of AI image generation. In this laboratory it is examined across its analogue and digital states, tracing how each state—and the transitions between them—conditions the procedure, parameters, and visible outcome. Conventionally, a Gaussian noise image serves as the seed and fixed starting condition. The final study in the laboratory challenges this premise: the standard seed is removed and substituted with an analogue noise image. To be read by the model, the analogue noise, which is already re-digitized by scanning, must be transferred into the latent space. This transfer defines the true goal, yet within the current hardware setup it remains beyond reach. As an interim solution, the analogue noise is injected into the pipeline as an image with a denoising strength of 100%, effectively forcing the system to treat it as the seed. The outcomes confirm the influence of the analogue–digital chain, actively shaped by operator and machine, however, they resemble image-to-image behaviour rather than a genuine latent substitution. Accordingly, the passage of analogue noise into latent space remains an open trajectory for the next research phase in NOISE.
        </P>
         <ArticleImage 
          src={img13} 
          alt="Visualization 13" 
          caption=""
        />
       <div className="w-full aspect-video my-8">
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ppnnF08O2LI?si=IqJ4mG6aWV5_Ld9h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>

      </>
    )
  },
  footnotes: {
    en: [],
    de: []
  },
  authorBio: {
    en: 'Philipp Bieronski is a contributor to Volume 1.',
    de: 'Philipp Bieronski ist ein Beitragender für Volume 1.'
  },
  keywords: {
    en: [
      "Generative Art",
      "AI Image Generation",
      "Gaussian Noise",
      "Seed Value",
      "Latent Space",
      "Analogue-Digital",
      "Machine Aesthetics",
      "Laboratory Installation",
      "Human-Machine Interaction",
      "Material Contingency",
      "Media Art Berlin",
      "Digital Materiality",
    ],
    de: [
      "Generative Kunst",
      "KI-Bildgenerierung",
      "Gaußsches Rauschen",
      "Seed",
      "Latent Space",
      "Analog-Digital",
      "Maschinenästhetik",
      "Laborinstallation",
      "Mensch-Maschine-Interaktion",
      "Materialität",
      "Medienkunst Berlin",
      "Digitale Materialität",
    ]
  },
  documents: [
    {
      name: 'Philipp_Bieronski_2026.pdf',
      url: '/Philipp_Bieronski_2026.pdf',
      doi: '10.1234/aaa.v1.001'
    }
  ]
};
