import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Home = ({ toggleTheme, darkMode }) => {
  return (
    <div className="home-container">
      <div className="theme-toggle">
        <button className="theme-button" onClick={toggleTheme}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
      <img src="/images/Anggelie.png" alt="Anggelie" className="profile-img" />
      <h1 className="cute-font">Anggelie Lizeth Velásquez Asencio</h1>
      <p>Estudiante de la Universidad del Valle de Guatemala<br />Ingeniería en Ciencias de la Computación y TI</p>

      <div className="spaced">
        <a href="mailto:anggelie@uvg.edu.gt" className="btn normal">Enviar correo</a>
        <a href="https://github.com/Anggelie" target="_blank" rel="noopener noreferrer" className="btn normal">GitHub</a>
        <a href="https://www.linkedin.com/in/anggelie-velásquez-9b23aa22b" target="_blank" rel="noopener noreferrer" className="btn normal">LinkedIn</a>
      </div>

      <div className="spaced">
        <Link to="/sobre-mi" className="btn normal">Sobre mí</Link>
        <Link to="/tecnologias" className="btn normal">Tecnologías</Link>
      </div>
    </div>
  );
};

export default Home;