import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const tecnologias = [
  {
    nombre: 'HTML',
    imagen: '/images/HTML.png',
    descripcion: 'Aprendí a estructurar contenido web correctamente.'
  },
  {
    nombre: 'CSS',
    imagen: '/images/CSS.png',
    descripcion: 'Sé diseñar con estilos modernos y responsivos.'
  },
  {
    nombre: 'Python',
    imagen: '/images/Phyton.png',
    descripcion: 'Automatizo tareas y desarrollo scripts con fluidez.'
  },
  {
    nombre: 'JavaScript',
    imagen: '/images/JavaScript.png',
    descripcion: 'Le doy interactividad a mis aplicaciones web.'
  },
  {
    nombre: 'Kotlin',
    imagen: '/images/kotlin.png',
    descripcion: 'He creado apps móviles en Android con esta herramienta.'
  },
  {
    nombre: 'PgAdmin',
    imagen: '/images/PGADMIN.png',
    descripcion: 'Gestiono bases de datos PostgreSQL de forma eficiente.'
  }
];

const Tecnologias = () => {
  return (
    <div className="technologias-container">
      <nav className="tecnologias-nav">
        <Link to="/" className="volver-link">← Volver al portafolio</Link>
      </nav>
      <h1 className="tecnologias-title">Tecnologías que he aprendido</h1>
      <div className="tecnologias-gallery">
        {tecnologias.map((tec, index) => (
          <div className="tech-card-wrapper" key={index}>
            <div className="tech-card">
              <img src={tec.imagen} alt={tec.nombre} />
              <div className="tooltip">{tec.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
