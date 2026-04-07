import React from 'react';
// Importamos los componentes de Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los módulos necesarios (Paginación y Autoplay)
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Efecto de desvanecimiento suave

import './Hero.css';

// Importamos tus imágenes de assets
import imgEstufa from '../assets/estufa.png';
import imgNevera from '../assets/nevera.png';

const Hero = () => {
  
  // Datos de contacto (Reemplaza con los reales)
  const phone_number = "573001234567"; // Número completo con indicativo de país (sin +)
  const whatsapp_message = "Hola, necesito soporte técnico para un gasodoméstico.";
  const formatted_whatsapp_url = `https://wa.me/${phone_number}?text=${encodeURIComponent(whatsapp_message)}`;
  const call_url = `tel:+${phone_number}`;

  return (
    <section className="hero-container">
      
      {/* --- EL CARRUSEL DE FONDO --- */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slicePerView={1}
        effect={'fade'} // Desvanecimiento suave entre imágenes
        speed={1000} // Velocidad de la transición
        loop={true} // Bucle infinito
        autoplay={{
          delay: 5000, // Cambia cada 5 segundos
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Puntos de paginación
        className="hero-swiper-background"
      >
        {/* Slide 1: Estufa */}
        <SwiperSlide className="hero-slide">
          <div 
            className="slide-image-bg" 
            style={{ backgroundImage: `url(${imgEstufa})` }}
          ></div>
          <div className="hero-overlay"></div> {/* Capa oscura por slide */}
        </SwiperSlide>

        {/* Slide 2: Nevera */}
        <SwiperSlide className="hero-slide">
          <div 
            className="slide-image-bg" 
            style={{ backgroundImage: `url(${imgNevera})` }}
          ></div>
          <div className="hero-overlay"></div>
        </SwiperSlide>
      </Swiper>
      {/* ------------------------------- */}


      {/* --- EL CONTENIDO FIJO (SIEMPRE CENTRADO) --- */}
      <div className="hero-content">
        <p className="hero-top-label">Servicio Técnico Especializado en Bogotá</p>
        
        <h1 className="hero-title">
          Reparación y Mantenimiento de<br />
          <span className="highlight">Gasodomésticos y Línea Blanca</span>
        </h1>
        
        <p className="hero-description">
          Técnicos expertos en Estufas, Calentadores, Hornos, Chimeneas, Lavadoras y Neveras.<br />
          <strong>Atención inmediata y garantía por escrito.</strong>
        </p>
        
        <div className="hero-actions">
          {/* Botón de WhatsApp con enlace real */}
          <a 
            href={formatted_whatsapp_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <i className="fab fa-whatsapp"></i> Chat WhatsApp
          </a>

          {/* Botón de Llamada con enlace real */}
          <a href={call_url} className="btn-secondary">
            <i className="fas fa-phone-alt"></i> Llamar y Agendar
          </a>
        </div>

        <div className="hero-emergency-tag">
          <i className="fas fa-history"></i> SERVICIO DE EMERGENCIA 24/7
        </div>
      </div>
      {/* --------------------------------------------- */}

    </section>
  );
};

export default Hero;