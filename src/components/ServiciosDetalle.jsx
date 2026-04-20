import React, { useState } from 'react'; // Paso 1: Importar useState
import './ServiciosDetalle.css';
import { FaBriefcase, FaTools, FaHammer, FaTimes } from 'react-icons/fa'; // Añadimos icono de cerrar
import videoVisitaTecnica from '../assets/visita_tecnica.mp4';
import videoMantenimiento from '../assets/Mantenimiento.mp4';
import videoreparacion from '../assets/reparacion.mp4';

const ServiciosDetalle = () => {
  // Paso 2: Estado para el video actual
  const [videoActivo, setVideoActivo] = useState(null);

  const phone_number = "573107727491"; 

  const getWhatsAppUrl = (servicio) => {
    const message = `Hola, me gustaría agendar una visita para el servicio de: ${servicio}`;
    return `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;
  };

  // Función para abrir el video
  const abrirVideo = (url) => {
    setVideoActivo(url);
  };

  // Función para cerrar el video
  const cerrarVideo = () => {
    setVideoActivo(null);
  };

  return (
    <section className="seccion-servicios-completa">
      
      {/* Banner de Estadísticas (Sin cambios) */}
      <div className="banner-estadisticas">
        <div className="overlay-oscuro">
          <div className="contenedor-stats">
            <div className="stat-item">
              <span className="numero">157+</span>
              <span className="etiqueta">Profesionales</span>
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
        <div className="tarjeta-azul" onClick={() => abrirVideo(videoVisitaTecnica)}>
          <FaBriefcase className="icono-servicio" />
          <h4>Visita Técnica</h4>
          <ul className="lista-detalles">
            <li>• Revisión General</li>
            <li>• Prueba Eléctrica</li>
            <li>• Prueba Mecánica</li>
            <li>• Servicio en 40 Minutos</li>
          </ul>
          <a href={getWhatsAppUrl("Visita Técnica")} target="_blank" rel="noopener noreferrer" className="btn-agendar" onClick={(e) => e.stopPropagation()}>
            Agendar Visita
          </a>
        </div>

        {/* Tarjeta 2: Mantenimiento */}
        <div className="tarjeta-azul" onClick={() => abrirVideo(videoMantenimiento)}>
          <FaTools className="icono-servicio" />
          <h4>Mantenimiento</h4>
          <ul className="lista-detalles">
            <li>• Cotizar</li>
            <li>• Limpieza de Tarjetas</li>
            <li>• Destape de Ductos</li>
            <li>• Desplazamiento de Humedad del Sistema</li>
            <li>• Limpieza de Polvo</li>
          </ul>
          <a href={getWhatsAppUrl("Mantenimiento")} target="_blank" rel="noopener noreferrer" className="btn-agendar" onClick={(e) => e.stopPropagation()}>
            Agendar Visita
          </a>
        </div>

        {/* Tarjeta 3: Reparación */}
        <div className="tarjeta-azul" onClick={() => abrirVideo(videoreparacion)}>
          <FaHammer className="icono-servicio" />
          <h4>Reparación</h4>
          <ul className="lista-detalles">
            <li>• Cotizar | Calentador</li>
            <li>• Lavadora | Secadora</li>
            <li>• Nevecon | Nevera</li>
            <li>• Estufa | Horno</li>
          </ul>
          <a href={getWhatsAppUrl("Reparación")} target="_blank" rel="noopener noreferrer" className="btn-agendar" onClick={(e) => e.stopPropagation()}>
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