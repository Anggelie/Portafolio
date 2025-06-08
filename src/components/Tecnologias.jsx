import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'

const Tecnologias = () => {
  useEffect(() => {
    const root = document.documentElement
    const isDark = localStorage.getItem('theme') === 'dark'
    if (isDark) {
      root.classList.add('dark-mode')
    } else {
      root.classList.remove('dark-mode')
    }
  }, [])

  return (
    <div className="technologias-container">
      <nav className="tecnologias-nav">
        <Link to="/" className="volver-link">← Volver al portafolio</Link>
      </nav>
      <h1 className="tecnologias-title">Tecnologías que he aprendido</h1>
      <div className="tecnologias-gallery">
        <div className="tech-card">
          <img src="/images/HTML.png" alt="HTML" />
        </div>
        <div className="tech-card">
          <img src="/images/CSS.png" alt="CSS" />
        </div>
        <div className="tech-card">
          <img src="/images/Phyton.png" alt="Python" />
        </div>
        <div className="tech-card">
          <img src="/images/JavaScript.png" alt="JavaScript" />
        </div>
        <div className="tech-card">
          <img src="/images/kotlin.png" alt="Kotlin" />
        </div>
        <div className="tech-card">
          <img src="/images/PGADMIN.png" alt="PgAdmin" />
        </div>
      </div>
    </div>
  )
}

export default Tecnologias
