import React from 'react';
import './ServiciosDetalle.css';
// Importa tus iconos (puedes usar react-icons o imágenes locales)
import { FaBriefcase, FaTools, FaHammer } from 'react-icons/fa'; 

const ServiciosDetalle = () => {
  return (
    <section className="seccion-servicios-completa">
      
      {/* 1. Franja de Estadísticas (Banner con fondo de circuito) */}
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

      {/* 2. Cuadrícula de Tarjetas de Precio/Servicio */}
      <div className="contenedor-tarjetas">
        
        {/* Tarjeta 1: Visita Técnica */}
        <div className="tarjeta-azul">
          <FaBriefcase className="icono-servicio" />
          <h4>Visita Técnica</h4>
          <ul className="lista-detalles">
            <li>• Revisión General</li>
            <li>• Prueba Eléctrica</li>
            <li>• Prueba Mecánica</li>
            <li>• Servicio en 40 Minutos</li>
          </ul>
          <button className="btn-agendar">Agendar Visita</button>
        </div>

        {/* Tarjeta 2: Mantenimiento */}
        <div className="tarjeta-azul">
          <FaTools className="icono-servicio" />
          <h4>Mantenimiento</h4>
          <ul className="lista-detalles">
            <li>• Cotizar</li>
            <li>• Limpieza de Tarjetas</li>
            <li>• Destape de Ductos</li>
            <li>• Desplazamiento de Humedad del Sistema</li>
            <li>• Limpieza de Polvo, Sistema Electromecánico</li>
          </ul>
          <button className="btn-agendar">Agendar Visita</button>
        </div>

        {/* Tarjeta 3: Reparación */}
        <div className="tarjeta-azul">
          <FaHammer className="icono-servicio" />
          <h4>Reparación</h4>
          <ul className="lista-detalles">
            <li>• Cotizar | Calentador</li>
            <li>• Lavadora | Secadora</li>
            <li>• Nevecon | Nevera</li>
            <li>• Estufa | Horno</li>
          </ul>
          <button className="btn-agendar">Agendar Visita</button>
        </div>

      </div>
    </section>
  );
};

export default ServiciosDetalle;