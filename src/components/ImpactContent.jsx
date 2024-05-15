import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const ImpactContent = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="Logo de la empresa" />
        <Title>Descubre la solución completa para tus necesidades de higiene y confort con Baños Químicos Calamuchita.</Title>
        <Paragraph>
          Como líderes en el alquiler de baños químicos, duchas y obradores en el Valle de Calamuchita, nos comprometemos a brindarte un servicio de calidad incomparable.
          <br />
          <br />
          Baños Químicos Calamuchita garantiza una higiene impecable para que puedas disfrutar completamente de tus eventos, proyectos y actividades al aire libre.
          <br />
          <br />
          Explora nuestra amplia zona de influencia en el Valle de Calamuchita y descubre por qué clientes privados y organismos públicos confían en BQC para proporcionar soluciones confiables y de alta calidad.
          <br />
          <br />
          Estamos enfocados en servir a una amplia gama de sectores, incluyendo obras de construcción, espectáculos musicales, balnearios, eventos deportivos, conciertos, ferias, fiestas patronales, entre otros.
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default ImpactContent;

const Wrapper = styled.div`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  float: left;
  margin-right: 20px; 
  width: 200px; 
  height: auto; 
`;

const Content = styled.div`
  overflow: hidden; 
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 0.2rem;
  color: #333;
`;

const Paragraph = styled.p`
  text-align: justify;
  color: #333;
`;



