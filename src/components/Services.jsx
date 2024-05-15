import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import obrador from '../assets/images/category-services/construction-storage.png';
import baño from '../assets/images/category-services/portable-toilet.png';
import ducha from '../assets/images/category-services/on-the-go-shower-solution.png';
import modulo from '../assets/images/category-services/housing-module.png';

const servicesData = [
  {
    title: 'Alquiler de Baños Químicos',
    description: 'Desde pequeñas obras hasta proyectos de construcción de gran envergadura, ofrecemos soluciones de baños portátiles que aumentarán la comodidad y la eficiencia. La opción de baño ideal para cualquier entorno laboral.',
    image: baño,
  },
  {
    title: 'Alquiler de Obradores',
    description: 'Contamos con obradores móviles para satisfacer las necesidades de tu obra o proyecto. Meticulosamente construidos con chapa y caños estructurales, asegurando la durabilidad y la seguridad de tu equipo mientras trabajan.',
    image: obrador,
  },
  {
    title: 'Alquiler de Duchas Portátiles',
    description: 'Las duchas portátiles proporcionan comodidad y conveniencia donde sea que las necesites, ya sea en una obra, evento o incluso en campamentos. Nuestras duchas garantizan una experiencia de baño limpia y cómoda.',
    image: ducha,
  },
  /*{
    title: 'Módulos Habitacionales',
    description: 'Nuestros módulos habitacionales ofrecen una solución cómoda y segura para alojamiento temporal. Perfectos para eventos, proyectos de construcción y más, nuestros módulos están equipados con todo lo necesario para una estancia confortable.',
    image: modulo,
  },*/
];

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Title>Nuestros Servicios</Title>
      <ServicesCards>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.image}
          />
        ))}
      </ServicesCards>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`  
  
  background-color: #6c5ce7;
  border-radius: 10px;
`;

const ServicesCards = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 9rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr); 
    padding: 2rem; 
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;  
  padding-top: 3rem;
`;