import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const SobreMi = () => {
  return (
    <div className="sobre-mi-container">
      <nav style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#8b5d99', fontWeight: 'bold' }}>← Volver al portafolio</Link>
      </nav>
      <h1>Mis momentos favoritos</h1>
      <div className="gallery">
        <img src="/images/Anggelieypareja.png" alt="Anggelie y pareja" />
        <img src="/images/Anggelie.png" alt="Selfie" />
        <img src="/images/graduacionbach.png" alt="Graduación" />
        <img src="/images/charla.png" alt="Charla UVG" />
        <img src="/images/museo.png" alt="Museo" />
        <img src="/images/paisaje.png" alt="Paisaje" />
        <img src="/images/foto.png" alt="Vela roja" />
        <img src="/images/Haru.png" alt="Golden Retriever" />
        <img src="/images/UVGEDIFICIO.png" alt="Edificio UVG" />
        <img src="/images/Amigos.png" alt="Amigos" />
        <img src="/images/guate.png" alt="Cuadro Guatemala" />
        <img src="/images/flores.png" alt="Flores" />
        <img src="/images/clase.png" alt="Clase UVG" />
        <img src="/images/Proto.png" alt="Prototipo" />
        <img src="/images/Harito.png" alt="Harito" />
        <img src="/images/amigosuni.png" alt="Jamigos" />
        <img src="/images/Banderas.png" alt="Banderas" />
        <img src="/images/comidita.png" alt="comidita" />
        <img src="/images/clasebd.png" alt="bd" />
      </div>
    </div>
  );
};

export default SobreMi;
