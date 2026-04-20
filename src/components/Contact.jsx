import React from 'react';
import './Contact.css';
import { Phone, Smartphone } from 'lucide-react'; // Mantenemos los otros iconos de Lucide
// Importamos el icono oficial de WhatsApp de react-icons
import { IoLogoWhatsapp } from 'react-icons/io5'; 

const Contact = () => {
  return (
    <footer className="contact-footer" id="contacto">
      <div className="contact-container">
        
        {/* Columna Izquierda: Info de Cobertura (Sin cambios) */}
        <div className="contact-info-side">
          <h3 className="gold-title">Contáctanos</h3>
          <p>
            Brindamos soluciones efectivas y soporte técnico especializado en Bogotá y 
            municipios de Cundinamarca como Mosquera, Funza, Madrid, Zipaquirá, 
            Fusagasugá, Facatativá, Chía, Soacha, Girardot, Tocancipá, Gachancipá y 
            sus alrededores. ¡Contáctanos hoy y recibe atención inmediata!
          </p>
          
          <div className="contact-methods">
            <div className="method-item">
              <div className="icon-box"><Smartphone size={20} /></div>
              <span>Móvil: <strong>310 7727 491</strong></span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Call to Action */}
        <div className="contact-cta-side">
          <h2>LLÁMANOS Y PROGRAMA</h2>
          <h2 className="blue-text">TU VISITA TÉCNICA AL INSTANTE</h2>
          
          {/* Aviso de disponibilidad con el icono OFICIAL de WhatsApp */}
          <p className="availability">
            <IoLogoWhatsapp className="whatsapp-icon-official" size={26} /> 
            <span>DISPONIBILIDAD PARA HOY MISMO</span>
          </p>
        </div>
      </div>

      {/* Barra Inferior de Legales (Sin cambios) */}
      <div className="footer-bottom">
        <p>
          Respetamos y protegemos tu privacidad... Somos un servicio técnico independiente. 
          Si estamos afiliados ni autorizados por Challenger.
        </p>
      </div>

      {/* Botón Flotante de WhatsApp (El de la esquina inferior) */}
      <a href="https://wa.me/573107727491" className="whatsapp-float" target="_blank" rel="noreferrer">
        <div className="whatsapp-content">
          {/* Actualizamos también el icono aquí para que sea el oficial */}
          <IoLogoWhatsapp size={22} color="white" />
          <div className="online-dot"></div>
        </div>
      </a>
    </footer>
  );
};

export default Contact;