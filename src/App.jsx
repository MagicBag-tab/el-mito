import { useEffect, useRef } from 'react';
import './App.css';
import olympusClouds from './assets/olympus_clouds.jpg';
import chimpHuman from './assets/chimp_human.jpg';
import achillesMyth from './assets/achilles_myth.jpg';
import yinYangArt from './assets/yin_yang_art.jpg';

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="infographic-container">
      
      {/* Decorative background particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => <div key={i} className="particle"></div>)}
      </div>

      <header className="hero" style={{ backgroundImage: `url(${olympusClouds})` }}>
        <div className="olympus-overlay"></div>
        <div className="glass-panel animate-on-scroll fade-in-up">
          <div className="css-sun"></div>
          <h1>Los orígenes del ser humano y del mito</h1>
          <p className="subtitle">El despertar de la consciencia humana</p>
          <div className="question-box">
            <h2>¿Por qué los seres humanos creamos mitos y qué revelan sobre nuestra esencia?</h2>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="intro-block center animate-on-scroll fade-in-up">
            <h2>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              ¿Qué es el Mito?
            </h2>
            <p className="lead">La materia del mito es la materia de nuestra propia vida, de nuestro cuerpo y ambiente. Es una narrativa viva que nos sintoniza con el universo (p. 6).</p>
            <p className="transition-text">¿Cómo pasamos del puro instinto a esta consciencia mítica?</p>
        </div>
      </section>

      <section className="section">
        <div className="modern-layout">
          <div className="image-container animate-on-scroll fade-in-left">
            <img src={chimpHuman} alt="Evolución y Mito" className="full-art-img" />
            <div className="css-shape dots-pattern"></div>
          </div>
          
          <div className="text-card animate-on-scroll fade-in-right delay-1">
            <h2>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Origen y Necesidad
            </h2>
            <p>El mito marca la evolución de la consciencia. Un chimpancé reacciona al trueno con miedo, pero no le da un sentido trascendente.</p>
            <div className="quote-inline">
              <strong>"Hay dos tipos de seres humanos. Está el animal humano que es práctico y está el humano humano que es sensible al llamado de lo divinamente superfluo..."</strong> <span className="page-ref">(p. 13)</span>
            </div>
            <p>Al dejar de ser solo "prácticos", los primeros humanos buscaron sentido a la muerte y al universo. Así nació el mito.</p>
            <p className="transition-text">Para asimilar esta nueva sensibilidad, nacieron sus funciones vitales.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="center-title animate-on-scroll fade-in-up">
           <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           Las Funciones del Mito
        </h2>
        <div className="cards-container">
          <div className="card animate-on-scroll fade-in-up delay-1">
            <h3>Psicológicas y Religiosas</h3>
            <p>El mito reconecta al individuo con el asombro originario. Ayuda a la psique a madurar, separándose de dependencias infantiles para integrarse al incomprensible misterio del cosmos (p. 6).</p>
          </div>
          <div className="card animate-on-scroll fade-in-up delay-2">
            <h3>Sociales y Culturales</h3>
            <p>Reconcilia a la comunidad con su entorno natural, estableciendo ritos para aceptar que "la vida vive matando" y honrar el sacrificio vital mediante ceremonias y arte comunitario (p. 16).</p>
          </div>
        </div>
        <p className="transition-text center-transition animate-on-scroll fade-in-up delay-3">Estas funciones se hicieron comprensibles al encarnarse en relatos heroicos.</p>
      </section>

      <section className="section">
        <div className="modern-layout alt">
          <div className="image-container animate-on-scroll fade-in-right">
            <img src={achillesMyth} alt="Peleo y Thetis" className="full-art-img" />
            <div className="css-shape square-behind"></div>
          </div>
          
          <div className="text-card animate-on-scroll fade-in-left delay-1">
            <h2>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              El Ejemplo de Aquiles
            </h2>
            <p>Los mitos materializan energías duales. El matrimonio de Thetis (diosa inmortal) y Peleo (humano terrenal), padres de Aquiles, es la metáfora perfecta de nuestra propia dualidad:</p>
            <div className="quote-inline">
              <strong>"...la energía vital y la conciencia, incorporadas en un cuerpo temporal; la conciencia y la vida comprometidas en el campo del tiempo..."</strong> <span className="page-ref">(p. 26)</span>
            </div>
            <p>La diosa representa el misterio trascendente y la energía libre; el humano simboliza la cruda realidad física que nos ancla al tiempo.</p>
            <p className="transition-text">Esta comprensión de los opuestos no se limitó solo a Grecia.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="modern-layout">
          <div className="image-container animate-on-scroll fade-in-left">
             <div className="css-shape circle-behind-gold"></div>
             <img src={yinYangArt} alt="Yin Yang" className="full-art-img" />
          </div>

          <div className="text-card animate-on-scroll fade-in-right delay-1">
            <h2>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              Conexión Contemporánea
            </h2>
            <p>El ciclo del Yin y Yang en Oriente nos muestra cómo las fuerzas opuestas coexisten inseparablemente, más allá de juicios morales.</p>
            <div className="quote-inline">
              <strong>"Las dos manos... el bien y el mal juntos... La dimensión mística está más allá del bien y el mal. La dimensión ética está en el campo del bien y el mal."</strong> <span className="page-ref">(p. 27)</span>
            </div>
            <p>Hoy usamos este antiguo debate para crear <strong>nuevas historias</strong> (la eterna danza entre luz y oscuridad en el cine) y para buscar el <strong>equilibrio emocional</strong> (*mindfulness* y aceptación de nuestras contradicciones).</p>
          </div>
        </div>
      </section>

      <footer className="footer animate-on-scroll fade-in-up">
        <h2>Referencias Bibliográficas</h2>
        <ul className="references-list">
          <li>Campbell, J. (s. f.). «En el comienzo: orígenes del hombre y del mito» (cap. 1, pp. 6-30), en <em>Los mitos</em>. [Edición utilizada en el curso].</li>
        </ul>
        <div className="student-info">
          <p>Elaborado por: <strong>[Tu_Apellido] [Tu_Nombre]</strong></p>
          <p>Curso: Mitología Greco-Romana</p>
        </div>
      </footer>
    </div>
  )
}

export default App
