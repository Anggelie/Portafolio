import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

// Importar todas las imágenes de la galería
import AnggelieyparejaImg from '/images/Anggelieypareja.png';
import AnggelieImg from '/images/Anggelie.png';
import CharlaImg from '/images/charla.png';
import MuseoImg from '/images/museo.png';
import HaruImg from '/images/Haru.png';
import AnimeImg from '/images/anime.png';
import PaisajeImg from '/images/paisaje.png';
import FotoImg from '/images/foto.png';
import UvgEdificioImg from '/images/UVGEDIFICIO.png';
import SnkImg from '/images/snk.png';
import PlatoImg from '/images/plato.png';
import SemanasantaImg from '/images/semanasanta.png';
import CbImg from '/images/cb.png';
import FamiliacImg from '/images/familiac.png';
import KoiImg from '/images/koi.png';
import GraduacionbachImg from '/images/graduacionbach.png';
import AmigosImg from '/images/Amigos.png';
import GuateImg from '/images/guate.png';
import VacasImg from '/images/vacas.png';
import CarreraImg from '/images/carrera.png';
import ProtoImg from '/images/Proto.png';
import ClasebdImg from '/images/clasebd.png';
import AmigosuniImg from '/images/amigosuni.png';
import BanderasImg from '/images/Banderas.png';
import CuadrosImg from '/images/cuadros.png';
import FloresImg from '/images/flores.png';
import ClaseImg from '/images/clase.png';
import HaritoImg from '/images/Harito.png';
import ComiditaImg from '/images/comidita.png';
import CuvgImg from '/images/cuvg.png';

const SobreMi = () => {
  return (
    <div className="sobre-mi-container">
      <nav style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#8b5d99', fontWeight: 'bold' }}>← Volver al portafolio</Link>
      </nav>
      <h1>Mis momentos favoritos y algunas cosas que me gustan</h1>
      <div className="gallery">
        <img src={AnggelieyparejaImg} alt="Anggelie y pareja" />
        <img src={AnggelieImg} alt="Selfie" />
        <img src={CharlaImg} alt="Charla UVG" />
        <img src={MuseoImg} alt="Museo" />
        <img src={HaruImg} alt="Golden Retriever" />
        <img src={AnimeImg} alt="kiminitodoke" />
        <img src={PaisajeImg} alt="Paisaje" />
        <img src={FotoImg} alt="Vela roja" />
        <img src={UvgEdificioImg} alt="Edificio UVG" />
        <img src={SnkImg} alt="snk" />
        <img src={PlatoImg} alt="plato" />
        <img src={SemanasantaImg} alt="ss" />
        <img src={CbImg} alt="Cb" />
        <img src={FamiliacImg} alt="Familiacumpleaños" />
        <img src={KoiImg} alt="koi" />
        <img src={GraduacionbachImg} alt="Graduación" />
        <img src={AmigosImg} alt="Amigos" />
        <img src={GuateImg} alt="Cuadro Guatemala" />
        <img src={VacasImg} alt="manzanal" />
        <img src={CarreraImg} alt="uvg" />
        <img src={ProtoImg} alt="Prototipo" />
        <img src={ClasebdImg} alt="bd" />
        <img src={AmigosuniImg} alt="Jamigos" />
        <img src={BanderasImg} alt="Banderas" />
        <img src={CuadrosImg} alt="cuadros" />
        <img src={FloresImg} alt="Flores" />
        <img src={ClaseImg} alt="Clase UVG" />
        <img src={HaritoImg} alt="Harito" />
        <img src={ComiditaImg} alt="comidita" />
        <img src={CuvgImg} alt="uvg" />
      </div>
    </div>
  );
};

export default SobreMi;