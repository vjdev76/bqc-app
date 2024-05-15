import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo-navbar.png';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <Nav isOpen={isOpen}>
      <Burger onClick={toggleNavbar} isOpen={isOpen}>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Burger>
      <Menu isOpen={isOpen}>
        <NavLink href="#" onClick={closeNavbar}>
          Home
        </NavLink>
        <NavLink href="#services" onClick={closeNavbar}>
          Servicios
        </NavLink>
        <NavLink href="#gallery" onClick={closeNavbar}>
          Galería
        </NavLink>
        <NavLink href="#faq" onClick={closeNavbar}>
          Preguntas Frecuentes
        </NavLink>
        <NavLink href="#" onClick={() => { onContactClick(); closeNavbar(); }}>
          Contacto
        </NavLink>
        {isOpen && <LogoImage src={logo} alt="Logo de la empresa" />}
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #333;  
  display: flex;  
  align-items: center;   
  margin: 0 auto;  
  justify-content: center;
  
  @media (max-width: 768px) {
    height: ${({ isOpen }) => (isOpen ? '100vh' : '60px')}; 
    position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')}; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;

const LogoImage = styled.img`
  max-width: 150px;
  height: auto; 
`;

const Burger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 30px;
    height: 20px;
    position: absolute;
    top: 1rem; 
    right: 2rem; 
    z-index: 1001; 
    .burger {
      width: 100%;
      height: 4px;
      background-color: white;
      position: absolute;
      left: 0;
      top: 50%;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: white;
        transition: all 0.3s;
      }
      &::before {
        top: ${({ isOpen }) => (isOpen ? '0' : '-10px')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'none')};
      }
      &::after {
        bottom: ${({ isOpen }) => (isOpen ? '0' : '-10px')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'none')};
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background-color: #333;
    position: absolute;
    align-items: center;
    top: 60px; 
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  
  @media (min-width: 769px) {
    flex: 1;
    justify-content: flex-end;
    max-width: 1280px;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  transition: all 0.3s;
  &:hover {
    background-color: #6c5ce7;    
  }

  @media (min-width: 769px) {
    flex-grow: 1;
    text-align: center;
  }
`;


