import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Tecnologias = () => {
  return (
    <div className="technologias-container">
      <nav className="tecnologias-nav">
        <Link to="/" className="volver-link">← Volver al portafolio</Link>
      </nav>
      <h1 className="tecnologias-title">Tecnologías que he aprendido</h1>
      <div className="tecnologias-gallery">
        {[
          { src: '/images/HTML.png', alt: 'HTML', info: 'Estructura semántica web' },
          { src: '/images/CSS.png', alt: 'CSS', info: 'Estilos modernos y responsivos' },
          { src: '/images/Phyton.png', alt: 'Python', info: 'Automatización y scripts' },
          { src: '/images/JavaScript.png', alt: 'JavaScript', info: 'Interactividad dinámica' },
          { src: '/images/kotlin.png', alt: 'Kotlin', info: 'Desarrollo de apps Android' },
          { src: '/images/PGADMIN.png', alt: 'PostgreSQL', info: 'Bases de datos relacionales' },
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
