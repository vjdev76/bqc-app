import React from 'react';
import styled from 'styled-components';
import whatsappIcon from '../assets/images/whatsapp-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactInfo>
        <Logo src={whatsappIcon} alt="WhatsApp Logo" />
        <ContactText>
          <a href="https://wa.me/+543516786671?text=Hola%20BQC,%20necesito%20hacer%20una%20consulta!" target="_blank" rel="noopener noreferrer">
            3516786671
          </a>
        </ContactText>
        <SocialLink href="https://www.instagram.com/banosquimicoscalamuchita" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={instagramIcon} alt="Instagram Logo" />
          Instagram
        </SocialLink>
      </ContactInfo>
      <p>Derechos Reservados 2024 © Baños Químicos Calamuchita</p>
    </FooterWrapper>
  );
};

export default Footer;


const FooterWrapper = styled.footer`
  background-color: #ffc900;
  color: #333333;
  padding: 20px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center; 
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const ContactText = styled.p`
  margin: 0;
  a {
    color: inherit;   
  }
`;

const SocialLink = styled.a`
  color: #333333;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const SocialIcon = styled.img`
  width: 30px;
  margin-right: 5px;
`;
