import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero1.png'; // Asegúrate de que la ruta sea correcta

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        
        {/* Columna Izquierda: Información */}
        <div className="hero-text-side">
          <h1 className="hero-title">
            ESPECIALISTAS EN <br />
            <span className="highlight">CALENTADORES Y GASODOMÉSTICOS</span>
          </h1>
          
          <p className="hero-subtitle">
            SERVICIO TÉCNICO PROFESIONAL <br />
            Y MANTENIMIENTO PREVENTIVO
          </p>

          <p className="hero-description">
            Reparación de: Lavadoras, Secadoras, Neveras, Estufas, Calentadores, Chimeneas, Hornos
          </p>
          
          <div className="hero-actions">
            <div className="hero-badge">
              <span>SERVICIO DE EMERGENCIA 24/7</span>
            </div>
            <button className="cta-button">Solicitar Servicio</button>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="hero-image-side">
          <img src={heroImg} alt="Servicio Técnico Marcas Colombia" className="hero-main-img" />
        </div>

      </div>
    </section>
  );
};

export default Hero;