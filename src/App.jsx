import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
console.log("App tutut component is rendering"); // Agrega esta línea
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos'; 
import './styles/index.css';



const App = () => {
  console.log("App component is rendering"); // Agrega esta línea
  const [darkMode, setDarkMode] = useState(false);
  console.log("App s component is rendering"); // Agrega esta línea

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
console.log("App dudcomponent is rendering"); // Agrega esta línea
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
