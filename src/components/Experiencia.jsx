import React from 'react';
import './Experiencia.css';
import tecnicoImg from '../assets/mantenimiento.png'; // Asegúrate de tener esta imagen

const Experiencia = () => {
  return (
    <section className="seccion-experiencia">
      <div className="contenedor-flex">
        
        {/* Lado Izquierdo: Imagen con cuadros superpuestos */}
        <div className="columna-imagen">
          <div className="cuadro-info superior">
            <h4>20 Años de Experiencia</h4>
            <p>El cliente está muy contento con los procedimientos de diagnóstico aplicados.</p>
          </div>
          
          <img src={tecnicoImg} alt="Técnico reparando horno" className="imagen-principal" />
          
          <div className="cuadro-info inferior">
            <h4>Equipo Profesional</h4>
            <p>Nuestros clientes son muy importantes y serán informados por el técnico en el proceso.</p>
          </div>
        </div>

        {/* Lado Derecho: Lista de beneficios */}
        <div className="columna-beneficios">
          <h3>Somos un Equipo Basado en la Mejor Reparación y Mantenimiento a Domicilio</h3>
          
          <ul className="lista-checks">
            <li><span className="check">✓</span> Garantía Efectiva</li>
            <li><span className="check">✓</span> Factura Escrita</li>
            <li><span className="check">✓</span> Repuestos Originales de Bodega</li>
            <li><span className="check">✓</span> Personal Calificado</li>
            <li><span className="check">✓</span> Equipo Profesional</li>
            <li><span className="check">✓</span> Certificados Sena</li>
          </ul>

          <button className="boton-servicio">Solicitar Servicio</button>
        </div>

      </div>
    </section>
  );
};

export default Experiencia;