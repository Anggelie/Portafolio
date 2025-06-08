import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Home = ({ toggleTheme, darkMode }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="home-container">
      <div className="theme-toggle">
        <button className="theme-button" onClick={toggleTheme}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>

      <div className="profile-popover-wrapper">
  <img src="/images/Anggelie.png" alt="Anggelie" className="profile-img" />
  <div className="profile-popover">
    <p>
      ¡Hola! Soy <strong>Anggelie</strong> <br /><br />
      Nací un 2 de agosto y desde entonces no he dejado de explorar el mundo con curiosidad.  
      Me apasiona capturar momentos con mi cámara y convertir ideas en código. 
      He trabajado con Banrural durante dos años, donde desarrollé habilidades de comunicación y trabajo en equipo. 
      Ahora estoy en constante búsqueda de nuevos retos que me hagan crecer como ingeniera.
    </p>
  </div>
  {[...Array(15)].map((_, i) => (
  <div key={i} className="star" style={{
    top: `${Math.random() * 50 + 100}px`,
    left: `${Math.random() * 180}px`,
    animationDelay: `${Math.random() * 2}s`
  }} />
))}

</div>


      <h1 className="cute-font">Anggelie Lizeth Velásquez Asencio</h1>
      <p>
        Estudiante de la Universidad del Valle de Guatemala<br />
        Ingeniería en Ciencias de la Computación y TI
      </p>

      <div className="spaced">
        <a href="mailto:anggelie01asenciosan@gmail.com" className="btn normal">Enviar correo</a>
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
