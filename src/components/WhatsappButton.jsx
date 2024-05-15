import React from 'react';
import styled, { keyframes } from 'styled-components';
import WhatsAppIcon from '../assets/images/whatsapp-button.png'; // Importa la imagen desde una ruta relativa

const WhatsAppButton = () => {
  return (
    <FloatingButton href="https://wa.me/+543516786671?text=Hola%20BQC,%20necesito%20hacer%20una%20consulta!" target="_blank" rel="noopener noreferrer">
      <WhatsAppIconComponent src={WhatsAppIcon} alt="WhatsApp Icon" />
    </FloatingButton>
  );
};

export default WhatsAppButton;


const WhatsAppIconComponent = styled.img`
  width: 48px;
  height: 48px;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;


const FloatingButton = styled.a`
  position: fixed;
  bottom: 4%;
  right: 2%;
  background-color: #00BB2D;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${blink} 2s ease-in-out infinite; 
`;