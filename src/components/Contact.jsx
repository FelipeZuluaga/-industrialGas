import React from 'react';
import './Contact.css';
import { Phone, Smartphone, MessageCircle } from 'lucide-react'; // Opcional

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        
        {/* Columna Izquierda: Info de Cobertura */}
        <div className="contact-info-side">
          <h3>Contáctanos</h3>
          <p>
            Brindamos soluciones efectivas y soporte técnico especializado en Bogotá y 
            municipios de Cundinamarca como Mosquera, Funza, Madrid, Zipaquirá, 
            Fusagasugá, Facatativá, Chía, Soacha, Girardot, Tocancipá, Gachancipá y 
            sus alrededores. ¡Contáctanos hoy y recibe atención inmediata!
          </p>
          
          <div className="contact-methods">
            <div className="method-item">
              <div className="icon-box"><Phone size={20} /></div>
              <span>PBX (Bogotá): 601 9395380</span>
            </div>
            <div className="method-item">
              <div className="icon-box"><Smartphone size={20} /></div>
              <span>Móvil: 3008501205</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Call to Action Grande */}
        <div className="contact-cta-side">
          <h2>LLÁMANOS Y PROGRAMA</h2>
          <h2 className="blue-text">TU VISITA TÉCNICA AL INSTANTE</h2>
          <p className="availability">
            <span className="dot">•</span> DISPONIBILIDAD PARA HOY MISMO
          </p>
        </div>
      </div>

      {/* Barra Inferior de Legales */}
      <div className="footer-bottom">
        <p>
          Respetamos y protegemos tu privacidad... Somos un servicio técnico independiente. 
          No estamos afiliados ni autorizados por Challenger.
        </p>
      </div>

      {/* Botón Flotante de WhatsApp (El azul de la esquina) */}
      <a href="https://wa.me/573008501205" className="whatsapp-float" target="_blank" rel="noreferrer">
        <div className="whatsapp-content">
          <span>Chat</span>
          <MessageCircle color="white" />
          <div className="online-dot"></div>
        </div>
      </a>
    </footer>
  );
};

export default Contact;