import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

// Importar todas las imágenes de tecnologías
import HtmlImg from '/images/HTML.png';
import CssImg from '/images/CSS.png';
import PythonImg from '/images/Phyton.png';
import JavaScriptImg from '/images/JavaScript.png';
import KotlinImg from '/images/kotlin.png';
import PostgresImg from '/images/PGADMIN.png';

const Tecnologias = () => {
  return (
    <div className="technologias-container">
      <nav className="tecnologias-nav">
        <Link to="/" className="volver-link">← Volver al portafolio</Link>
      </nav>
      <h1 className="tecnologias-title">Tecnologías que he aprendido</h1>
      <div className="tecnologias-gallery">
        {[
          { src: HtmlImg, alt: 'HTML', info: 'Estructura semántica web' },
          { src: CssImg, alt: 'CSS', info: 'Estilos modernos y responsivos' },
          { src: PythonImg, alt: 'Python', info: 'Automatización y scripts' },
          { src: JavaScriptImg, alt: 'JavaScript', info: 'Interactividad dinámica' },
          { src: KotlinImg, alt: 'Kotlin', info: 'Desarrollo de apps Android' },
          { src: PostgresImg, alt: 'PostgreSQL', info: 'Bases de datos relacionales' },
        ].map((tech, i) => (
          <div className="tech-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={tech.src} alt={tech.alt} />
              </div>
              <div className="flip-card-back">
                <p>{tech.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/proyectos" className="btn normal" style={{ marginTop: '3rem' }}>
        Proyectos
      </Link>
    </div>
  );
};

export default Tecnologias;