import { useEffect } from 'react';
import './App.css';
import olympusClouds from './assets/olympus_clouds.jpg';
import chimpHuman from './assets/chimp_human.jpg';
import achillesMyth from './assets/achilles_myth.jpg';
import yinYangArt from './assets/yin_yang_art.jpg';
import cosmicMyth from './assets/cosmic_myth_collage.jpg';
import firstBurial from './assets/first_burial_ritual.png';
import eastWestDuality from './assets/east_west_duality.png';

const DEPLOY_URL = 'https://origen-del-hombre-y-el-mito.netlify.app/';

function App() {
  useEffect(() => {
    const restoreTitle = () => { document.title = 'Los orígenes del ser humano y del mito'; };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = document.querySelectorAll('[data-reveal]');
    let observer;

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
      revealElements.forEach((element) => observer.observe(element));
    }

    window.addEventListener('afterprint', restoreTitle);
    return () => {
      observer?.disconnect();
      window.removeEventListener('afterprint', restoreTitle);
    };
  }, []);

  const exportPdf = () => {
    document.title = 'Estrada_Sarah_Infografia1';
    window.print();
  };

  return (
    <>
      <aside className="export-bar" aria-label="Opciones de entrega">
        <div><span>Exportar a PDF</span><strong>Estrada_Sarah_Infografia1.pdf</strong></div>
        <button type="button" onClick={exportPdf}><span aria-hidden="true"></span> Descargar PDF</button>
      </aside>

      <main className="infographic">
        <header className="hero" style={{ '--clouds': `url(${olympusClouds})` }}>
          <span className="orbit orbit-one" aria-hidden="true" />
          <span className="orbit orbit-two" aria-hidden="true" />
          <div className="constellation" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="hero-copy" data-reveal="left">
            <p className="eyebrow">Entendiendo el mito y su importancia para el desarrollo del ser humano</p>
            <h1>Los orígenes<br />del ser humano<br /><em>y del mito</em></h1>
            <p className="hero-intro">Antes de entender la mitología, hay que conocer el origen del mito, y para hacerlo, se debe de entender el origen del ser humano.</p>
          </div>
          <div className="hero-art" aria-hidden="true" data-reveal="right">
            <span className="sun-disc" />
            <img src={cosmicMyth} alt="" />
          </div>
        </header>

        <section className="myth-opening">
          <div className="chapter-mark"><span>01</span><small>El Humano</small></div>
          <div className="opening-copy" data-reveal="up">
            <p className="kicker">¿Qué es un mito?</p>
            <h2>Una historia que vuelve habitable el misterio</h2>
            <p>Un mito surge cuando una experiencia difícil de explicar necesita adquirir un significado para quienes la viven. No es una fantasía antigua ni una explicación científica fallida, es otra forma de conocer.</p>
            <p>Según Campbell, el mito no habla de hechos históricos. Habla de la experiencia humana: el cuerpo, el entorno, la muerte, el paso del tiempo etc. Y sostiene que el mito funciona como un símbolo que conecta al individuo con algo más grande que él mismo, con el cosmos y con su propia comunidad. En ese sentido, su función no es explicar el mundo, sino ayudar a vivir en él.</p>
          </div>
          <blockquote data-reveal="right">
            "La materia del mito es la materia de nuestra vida, la materia de nuestro cuerpo y de nuestro ambiente".
            <cite>Joseph Campbell, p. 7</cite>
          </blockquote>
          <div className="star-cluster" aria-hidden="true">✦ · ✧ · ✦</div>
        </section>

        <section className="evolution">
          <div className="evolution-image" data-reveal="left">
            <span className="arch arch-a" aria-hidden="true" />
            <span className="arch arch-b" aria-hidden="true" />
            <img src={chimpHuman} alt="Un chimpancé frente a la figura de un ser humano" />
          </div>
          <div className="evolution-copy" data-reveal="right">
            <div className="chapter-mark"><span>02</span><small>El salto interior</small></div>
            <p className="kicker">Origen y necesidad</p>
            <h2>Sobrevivir dejó de ser suficiente</h2>
            <p>Para explicar el origen del mito, Campbell parte de una comparación entre el comportamiento animal y el humano. Explica que un chimpancé también reacciona ante el trueno con miedo, y que algunos incluso realizan algo parecido a una danza frente a fenómenos que no comprenden. Sin embargo, esa reacción termina ahí, no genera nada más.</p>
            <p>El <i>animal humano</i>, según Campbell, comparte esas necesidades biológicas básicas. Pero el <i>humano humano</i> tiene algo distinto: la sensibilidad y el poder preguntarse qué significa la experiencia que está viviendo. La diferencia, no es simplemente la inteligencia, sino la capacidad de darle un significado simbólico a la experiencia.</p>
            <blockquote>"Hay dos tipos de seres humanos. Está el animal humano que es práctico y está el humano humano..." <cite>Campbell, p. 13</cite></blockquote>
            <p className="bridge">Y en esa brecha entre lo que se siente y lo que se puede explicar, comienza el mito.</p>
          </div>
        </section>

        <section className="functions">
          <div className="functions-heading" data-reveal="up">
            <div className="chapter-mark light"><span>03</span><small>Los primeros rituales</small></div>
            <p className="kicker">¿Cuándo empezó el mito?</p>
            <h2>Con el cráneo de un oso y una tumba</h2>
            <p>Campbell sitúa los primeros indicios de pensamiento mítico en los hallazgos arqueológicos más antiguos relacionados con la muerte y los rituales. Los entierros neanderthales y los santuarios de oso representan la primera evidencia de que el ser humano comenzó a relacionarse simbólicamente con la muerte y con la naturaleza.</p>
          </div>
          <article className="burial-story" data-reveal="left">
            <figure>
              <img src={firstBurial} alt="Primeros humanos realizando un entierro ritual con flores y pigmento ocre" />
              <figcaption>Del duelo al rito · 60 000 a. C. aprox.</figcaption>
            </figure>
            <div className="burial-copy">
              <p className="kicker">El primer entierro y el culto al oso</p>
              <p>El autor describe que algunos neanderthales enterraban a sus muertos en posición fetal, rodeados de flores, plantas medicinales y herramientas. además de usar ocre rojo sobre el cuerpo. Ese gesto sugiere que para ellos la muerte no era el fin, sino que <i>algo de esta persona todavía continúa</i>.</p>
              <p>El segundo ejemplo es el culto al oso. Campbell explica que en ciertas cuevas se encontraron cráneos de oso organizados cuidadosamente, lo que indica que este animal no era visto únicamente como presa. Para Campbell, el cazador no veía al oso únicamente como un recurso ya que después de cazarlo, existían rituales mediante los cuales se agradecía su sacrificio y se respetaba su espíritu, con la esperanza de que pudiera regresar al mundo natural.</p>
              <p className="magic-note">Sin embargo, estos ritos no pretendían explicar la muerte. Eran una forma de relacionarse con lo que no tiene explicación.</p>
            </div>
          </article>
          <div className="function-orbit" data-reveal="right">
            <span className="orbit-line" aria-hidden="true" />
            <article className="function social"><span>✦</span><h3>Social</h3><p>Transmite valores, crea identidad y fortalece la memoria colectiva. Permite que una comunidad se reconozca a sí misma en momentos de cambio o pérdida.</p></article>
            <article className="function religious"><span>☼</span><h3>Religiosa</h3><p>Conecta al individuo con lo sagrado y hace posible convivir con lo que no puede explicarse racionalmente. No para eliminar el misterio, sino para acercarse a él.</p></article>
            <article className="function psychological"><span>◐</span><h3>Psicológica</h3><p>Según Campbell, el mito acompaña los momentos difíciles del desarrollo humano: el miedo, la pérdida, las crisis personales. Ayuda a atravesarlos dándoles un marco de sentido.</p></article>
            <article className="function cultural"><span>⌘</span><h3>Cultural</h3><p>Conserva conocimientos, tradiciones y símbolos que mantienen viva la identidad de una civilización a través del tiempo y los cambios.</p></article>
            <div className="orbit-center"><b>MITO</b><small>sentido compartido</small></div>
          </div>
          <p>Estas funciones no actúan por separado. En la práctica, un rito funerario es al mismo tiempo un acto social, religioso, psicológico y cultural.</p>
        </section>

        <section className="thetis">
          <div className="thetis-art" data-reveal="left">
            <span className="gold-moon" aria-hidden="true" />
            <img className="thetis-main" src={achillesMyth} alt="Thetis y Peleo, padres de Aquiles" />
            <img className="thetis-layer" src={cosmicMyth} alt="Collage cósmico de símbolos griegos" />
          </div>
          <div className="thetis-copy" data-reveal="right">
            <div className="chapter-mark"><span>04</span><small>Mitología<a href=""></a></small></div>
            <p className="kicker">Aquiles y su madre Thetis</p>
            <h2>Dos tipos de energía</h2>
            <p>Para ilustrar cómo el mito encarna ideas abstractas en personajes concretos, Campbell analiza el mito griego de Thetis y Peleo. El autor señala que Thetis no debe entenderse simplemente como la madre de Aquiles, sino como una representación de la energía creadora de la naturaleza. Su capacidad de transformarse en serpiente, en león, en fuego o en agua simboliza una fuerza que no puede fijarse en una sola forma.</p>
            <p>Aquiles representa la tensión entre la condición humana y la aspiración a lo divino. Hereda algo de la energía inmortal de su madre, pero está destinado a morir como su padre mortal. Esa dualidad explica por qué este mito sigue siendo una representación tan poderosa de la experiencia humana.</p>
            <blockquote>"La diosa es la personificación materna de ambas energías". <cite>Campbell, p. 26</cite></blockquote>
            <p className="bridge">El héroe griego no es invencible: es contradictorio. Y esa contradicción es lo que lo hace humano.</p>
          </div>
        </section>

        <section className="duality">
          <div className="duality-copy" data-reveal="left">
            <div className="chapter-mark light"><span>05</span><small>En la actualidad</small></div>
            <p className="kicker">Yin y yang</p>
            <h2>Complementos.</h2>
            <p>En la última parte del capítulo, Campbell compara la manera en que Oriente y Occidente han interpretado la dualidad entre el bien y el mal. El símbolo del yin y el yang no plantea que ambas fuerzas sean iguales, sino que son dependientes entre sí.</p>
            <div className="culture-examples">
              <article><span>Oriente</span><p>En el pensamiento chino, la sombra no es el enemigo sino una parte necesaria del conjunto. El taichí, la medicina tradicional y el feng shui reflejan esta idea. La armonía no se logra eliminando un extremo, sino manteniendo un equilibrio entre los dos.</p></article>
              <article><span>Occidente</span><p>En la tradición occidental, el conflicto entre el bien y el mal suele presentarse como una decisión moral. Hay una caída, una culpa y, en muchos casos, una posibilidad de redención. Esto aparece desde las tragedias griegas hasta relatos modernos como lo son el camino del héroe o producciones contemporáneas.</p></article>
            </div>
            <p className="campbell-contrast">Campbell observa que Oriente tiende a hablar de ignorancia e iluminación, mientras que Occidente imagina con más frecuencia una deuda, una caída y la posibilidad de redención.</p>
            <blockquote>"La dimensión mística está más allá del bien y el mal". <cite>Campbell, p. 27</cite></blockquote>
            <p className="closing-thought">Campbell concluye que el mito sigue siendo una herramienta para interpretar la experiencia humana. Aunque las sociedades cambien, las preguntas sobre la muerte, el origen, el sufrimiento y el sentido de la vida continúan presentes, por lo que los mitos conservan su vigencia.</p>
          </div>
          <div className="duality-art" data-reveal="right">
            <span className="halo halo-one" aria-hidden="true" />
            <span className="halo halo-two" aria-hidden="true" />
            <img className="east-west-image" src={eastWestDuality} alt="Diálogo visual entre el equilibrio oriental y el conflicto moral occidental" />
            <img className="yin-medallion" src={yinYangArt} alt="Representación artística del yin y yang" />
          </div>
        </section>

        <footer className="footer">
          <div className="reference">
            <span>Fuente principal</span>
            <p>Campbell, J. (s. f.). «En el comienzo: orígenes del hombre y del mito» (cap. 1, pp. 5–30), en <i>Los mitos</i>. [Edición utilizada en el curso].</p>
            <small>Imagenes generadas con IA como apoyo de diseño.</small>
          </div>
          <div className="student"><span>Elaborado por</span><strong>Sarah Rachel<br />Estrada Bonilla</strong><small>Mitología greco-romana</small></div>
          <div className="deploy"><span>Versión digital</span><a href={DEPLOY_URL} target="_blank" rel="noreferrer">origen-del-hombre-y-el-mito.netlify.app ↗</a></div>
        </footer>
      </main>
    </>
  );
}

export default App;
