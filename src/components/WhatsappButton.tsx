import React from 'react';
import './WhatsappButton.css';  // Import the external CSS for the button

const WhatsappButton: React.FC = () => {
  return (
    <div className="whatsapp-btn-container">
      <a
        className="whatsapp-btn"
        href="https://wa.me/254758663405"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <span>Holla Me!</span>
    </div>
  );
};

export default WhatsappButton;
