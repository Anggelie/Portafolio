import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos'; 
import './styles/index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} darkMode={darkMode} />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </div>
  );
};

export default App;
