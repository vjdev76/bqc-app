import React from 'react';
import styled from 'styled-components';
import desktopBannerImage from '../assets/images/banner-desktop.webp'; // Imagen de fondo para escritorio
import mobileBannerImage from '../assets/images/banner-mobile.webp'; // Imagen de fondo para dispositivos móviles
import logoImage from '../assets/images/logo.png'; // Importa la imagen del logo

const Banner = ({ altText }) => {
  return (
    <BannerContainer>
      <BackgroundImage alt={altText} />
      <Logo src={logoImage} alt="Logo de la empresa" />
      <Text>Descubre la solución completa<br /> para tus necesidades de higiene<br /> y confort con Baños Químicos Calamuchita.</Text>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(599 / 1331 * 100%); /* Proporciones de la imagen original */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${desktopBannerImage}); /* Imagen de fondo por defecto */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 768px) {
    background-image: url(${mobileBannerImage}); /* Cambia la imagen de fondo para dispositivos móviles */
  }
`;

const Logo = styled.img`
  width: 150px; /* ajusta el tamaño según tus necesidades */
  position: absolute;
  top: 1%; /* ajusta la posición vertical según tus necesidades */
  left: 1%; /* ajusta la posición horizontal según tus necesidades */
  z-index: 1; /* asegura que el logo esté sobre la imagen de fondo */
  
  @media (max-width: 768px) {
    display: none; /* Oculta el logo en dispositivos móviles */
  }
`;

const Text = styled.p`
  position: absolute;
  bottom: 10%; /* ajusta la posición vertical según tus necesidades */
  left: 3%; /* ajusta la posición horizontal según tus necesidades */
  color: #fff; /* color del texto */
  font-size: clamp(14px, 2vw, 42px); /* Texto responsivo con tamaño mínimo de 16px, tamaño preferido basado en el ancho de la ventana y tamaño máximo de 24px */
  font-weight: bold; /* peso de la fuente */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* sombra del texto */
  line-height: 1.2; /* Ajusta la altura de línea para que el texto se distribuya en dos líneas */
  z-index: 1; /* asegura que el texto esté sobre la imagen de fondo */
  @media (max-width: 768px) {
    bottom: 0;
    margin-top: 0;
    margin-bottom: 2px;
    font-weight: 600;
    br {
      display: none; /* Oculta los <br> en dispositivos móviles */
    }
  }
`;









