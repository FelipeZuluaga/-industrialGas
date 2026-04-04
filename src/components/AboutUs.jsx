import React from 'react';
import './AboutUs.css';
// Importa tus imágenes
//import contactImg from '../../assets/call-center.jpg'; 
//import techImg1 from '../../assets/tecnico-reparacion.jpg';
//import techImg2 from '../../assets/tecnico-mantenimiento.jpg';
//import techImg3 from '../../assets/tecnico-instalacion.jpg';

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Texto Introductorio */}
      <div className="about-intro">
        <h2>CENTRO DE REPARACIÓN INMEDIATA</h2>
        <p>
          Con más de 30 años de experiencia, nos hemos consolidado como el aliado de confianza de miles de familias colombianas...
        </p>
        <p className="bold-text">
          ¿Tu lavadora, secadora, nevera, refrigerador, calentador de agua, estufa, horno o campana extractora necesitan reparación?
        </p>
      </div>

      {/* Banner de Contacto */}
      <div className="contact-banner">
        <div className="banner-image">
          <img alt="Atención al cliente" />
        </div>
        <div className="banner-info">
          <div className="banner-header">
            <h3>LLÁMANOS YA MISMO</h3>
            <h2>¡RESPONDEMOS AL INSTANTE!</h2>
            <p>CONTAMOS CON PERSONAL ALTAMENTE CALIFICADO PARA LA REPARACIÓN Y MANTENIMIENTO.</p>
          </div>
          <div className="banner-numbers">
            <div className="number-box">
              <span>LÍNEA FIJA</span>
              <p>601 9395380</p>
            </div>
            <div className="number-box">
              <span>MÓVIL</span>
              <p>3008501205</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Beneficios/Servicios */}
      <div className="benefits-grid">
        <div className="benefit-item">
          <div className="img-container">
            <img alt="Reparación" />
            <div className="benefit-label blue-bg">EQUIPO TÉCNICO PROFESIONAL</div>
          </div>
          <h4>REPARACIÓN</h4>
          <p>Contamos con técnicos especializados y utilizamos solo repuestos originales.</p>
        </div>

        <div className="benefit-item">
          <div className="img-container">
            <img alt="Mantenimiento" />
            <div className="benefit-label dark-blue-bg">ATENCIÓN INMEDIATA</div>
          </div>
          <h4>MANTENIMIENTO PREVENTIVO</h4>
          <p>Realizamos mantenimiento preventivo y correctivo con garantía técnica.</p>
        </div>

        <div className="benefit-item">
          <div className="img-container">
            <img alt="Instalación" />
            <div className="benefit-label blue-bg">SERVICIO GARANTIZADO</div>
          </div>
          <h4>INSTALACIÓN PROFESIONAL</h4>
          <p>Deja la instalación de tus equipos en manos de profesionales expertos.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;