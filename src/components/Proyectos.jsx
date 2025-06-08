import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Proyectos = () => {
  return (
    <div className="proyectos-container">
      <nav className="proyectos-nav">
        <Link to="/" className="volver-link">← Volver</Link>
      </nav>
      <h1 className="proyectos-title">Algunos Proyectos</h1>
      <div className="proyectos-gallery">
        <a href="https://github.com/bar23354/Ra-ces-de-Vida" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/raices.png" alt="Raíces de Vida" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/Triggers.git" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/sql.png" alt="Triggers SQL" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/Proyecto1-Calculadora.git" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/calculadora.png" alt="Calculadora" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/FoundIt" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/FoundIt.png" alt="FoundIt" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/Proyecto-3-BD" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/database.png" alt="Database Proyecto 3" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/Lab07LazyState" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/app.png" alt="App Lazy State" />
          </div>
        </a>
        <a href="https://github.com/Anggelie/Lab05FrontendBasic" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <img src="/images/Front.png" alt="Frontend Básico" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
