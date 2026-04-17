import React from 'react';
import './Experiencia.css';
import tecnicoImg from '../assets/mantenimiento.png'; // Asegúrate de tener esta imagen

const Experiencia = () => {
  // Datos de contacto (Asegúrate de que coincidan con los de tu Hero)
  const phone_number = "573001234567"; 
  const whatsapp_message = "Hola, me gustaría solicitar un servicio técnico a domicilio.";
  const formatted_whatsapp_url = `https://wa.me/${phone_number}?text=${encodeURIComponent(whatsapp_message)}`;

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

          {/* Cambiamos el <button> por un <a> para permitir la navegación */}
          <a 
            href={formatted_whatsapp_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="boton-servicio"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Solicitar Servicio
          </a>
        </div>

      </div>
    </section>
  );
};

export default Experiencia;