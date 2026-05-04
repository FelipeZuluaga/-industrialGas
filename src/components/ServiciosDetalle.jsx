import React, { useState } from 'react'; 
import './ServiciosDetalle.css';
import { FaBriefcase, FaTools, FaHammer, FaTimes, FaPlayCircle } from 'react-icons/fa'; // Añadimos FaPlayCircle para un icono visual


import videoVisitaTecnica from '../assets/visita_tecnica.mp4';
import videoMantenimiento from '../assets/manteni.mp4';
import videoreparacion from '../assets/reparacion.mp4';




const ServiciosDetalle = () => {
  const [videoActivo, setVideoActivo] = useState(null);
  const phone_number = "573107727491"; 

  const getWhatsAppUrl = (servicio) => {
    const message = `Hola, me gustaría agendar una visita para el servicio de: ${servicio}`;
    return `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;
  };

  const abrirVideo = (url) => {
    setVideoActivo(url);
  };

  const cerrarVideo = () => {
    setVideoActivo(null);
  };

  return (
    <section className="seccion-servicios-completa">
      {/* Banner de Estadísticas */}
      <div className="banner-estadisticas">
        <div className="overlay-oscuro">
          <div className="contenedor-stats">
            <div className="stat-item">
              <span className="numero">+25</span>
              <span className="etiqueta">Profesionales a tu servicio</span>
            </div>
            <div className="stat-item">
              <span className="numero">982+</span>
              <span className="etiqueta">Mantenimientos</span>
            </div>
            <div className="stat-item">
              <span className="numero">810+</span>
              <span className="etiqueta">Servicios</span>
            </div>
            <div className="stat-item">
              <span className="numero">504+</span>
              <span className="etiqueta">Instalaciones</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor-tarjetas">
        {/* Tarjeta 1: Visita Técnica */}
        <div className="tarjeta-azul"> {/* Quitamos el onClick de aquí */}
          <FaBriefcase className="icono-servicio" />
          <h4>Visita Técnica</h4>
          <ul className="lista-detalles">
            <li>• Revisión General</li>
            <li>• Prueba Eléctrica</li>
            <li>• Prueba Mecánica</li>
            <li>• Servicio en 40 Minutos</li>
          </ul>
          
          {/* Nuevo Botón Conoce Más */}
          <button className="btn-conoce-mas" onClick={() => abrirVideo(videoVisitaTecnica)}>
             <FaPlayCircle /> Conoce nuestros servicios
          </button>

          <a href={getWhatsAppUrl("Visita Técnica")} target="_blank" rel="noopener noreferrer" className="btn-agendar">
            Agendar Visita
          </a>
        </div>

        {/* Tarjeta 2: Mantenimiento */}
        <div className="tarjeta-azul">
          <FaTools className="icono-servicio" />
          <h4>Mantenimiento</h4>
          <ul className="lista-detalles">
            <li>• Limpieza de Tarjetas</li>
            <li>• Destape de Ductos</li>
            <li>• Desplazamiento de Humedad del Sistema</li>
            <li>• Limpieza de Polvo</li>
          </ul>

          <button className="btn-conoce-mas" onClick={() => abrirVideo(videoMantenimiento)}>
             <FaPlayCircle /> Conoce nuestros servicios
          </button>

          <a href={getWhatsAppUrl("Mantenimiento")} target="_blank" rel="noopener noreferrer" className="btn-agendar">
            Agendar Visita
          </a>
        </div>

        {/* Tarjeta 3: Reparación */}
        <div className="tarjeta-azul">
          <FaHammer className="icono-servicio" />
          <h4>Reparación</h4>
          <ul className="lista-detalles">
            <li>• Calentador</li>
            <li>• Estufa</li>
            <li>• Horno</li>
            <li>• Chimenea</li>
          </ul>

          <button className="btn-conoce-mas" onClick={() => abrirVideo(videoreparacion)}>
             <FaPlayCircle /> Conoce nuestros servicios
          </button>

          <a href={getWhatsAppUrl("Reparación")} target="_blank" rel="noopener noreferrer" className="btn-agendar">
            Agendar Visita
          </a>
        </div>
      </div>

      {/* Modal del Video */}
      {videoActivo && (
        <div className="modal-video-overlay" onClick={cerrarVideo}>
          <div className="modal-video-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="btn-cerrar-modal" onClick={cerrarVideo}>
              <FaTimes />
            </button>
            <video controls autoPlay className="video-reproductor">
              <source src={videoActivo} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiciosDetalle;