import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Proyectos = () => {
  return (
    <div className="technologias-container">
      <nav className="tecnologias-nav">
        <Link to="/tecnologias" className="volver-link">← Volver</Link>
      </nav>
      <h1 className="tecnologias-title">Algunos Proyectos</h1>

      <div className="tecnologias-gallery">
        <div className="tech-card">
          <img src="/images/raices.png" alt="Raíces de Vida" />
          <a className="btn normal" href="https://github.com/bar23354/Ra-ces-de-Vida" target="_blank" rel="noopener noreferrer">Repositorio</a>
        </div>
        <div className="tech-card">
          <img src="/images/sql.png" alt="Triggers SQL" />
          <a className="btn normal" href="https://github.com/Anggelie/Triggers.git" target="_blank" rel="noopener noreferrer">Repositorio</a>
        </div>
        <div className="tech-card">
          <img src="/images/calculadora.png" alt="Calculadora" />
          <a className="btn normal" href="https://github.com/Anggelie/Proyecto1-Calculadora.git" target="_blank" rel="noopener noreferrer">Repositorio</a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
