import React from "react";
import styled from "styled-components";

const Faq = () => {
    return <div>
        <FaqContainer id="faq">
            <Title>Preguntas Frecuentes</Title>
            <StyledDetails>
                <ToggleSummary>¿De que material estan construidos los baños químicos y cuales son sus características principales?</ToggleSummary>
                <p>Nuestros baños están fabricados por rotomoldeo en plástico de alta densidad con filtro UV, hechos en una sola pieza, cuentan con asiento y tapa, puerta con traba de media vuelta interior con indicador libre/ocupado.
                    <ul>
                        <li>Colores: Amarillo – Violeta – Rojo.</li>
                        <li>Medidas: 1,10mt x 1,10mt x 2,20m.</li>
                        <li>Inodoro: construido en plástico de alta densidad.</li>
                        <li>Capacidad del tanque sanitario: 220 lts.</li>
                        <li>Incluye conducto de ventilación exterior.</li>
                    </ul>
                </p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Que incluye el alquiler de un baño químico?</ToggleSummary>
                <p>El alquiler incluye el traslado del baño, limpieza/desagote una (1) vez por semana, el químico y el papel higiénico.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Se pueden solicitar limpiezas adicionales del baño químico?</ToggleSummary>
                <p>Es posible programar limpiezas adicionales las veces que sea necesario.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Pueden precisar a qué hora pasarán a realizar la entrega /retiro ó limpieza en el caso de un baño químico?</ToggleSummary>
                <p> Nuestro rango horario de servicios es de 8 a 17 hs, se coordina previamente para que esté presente una persona responsable de recibir/entregar el o los baños, obrador o ducha.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Cual es la zona de cobertura?</ToggleSummary>
                <p>Baños Químicos Calamuchita, centraliza sus operaciones en Villa del Dique y brinda sus servicios en todo el Valle de Calamuchita y alrededores.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿De qué forma se puede abonar?</ToggleSummary>
                <p>Los medios de pago que recibimos son: efectivo, transferencia ó deposito bancario.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿En que momento se abona el alquiler del baño químico y/o obrador?</ToggleSummary>
                <p>En ambos servicios el pago es por adelantado, una vez acreditado el pago se procede a coordinar la entrega.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Hacen entregas en el día?</ToggleSummary>
                <p>Normalmente las entregas se realizan en 24hs, pero hay casos en que se puede entregar en el mismo día, todo dependerá de la distancia, condición del terreno y carga operativa al momento de la contratación.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿El baño se puede colocar en cualquier lugar de mi casa/obra??</ToggleSummary>
                <p>El baño puede colocarse en cualquier lugar del terreno pero se buscará que quede colocado en un lugar propicio para su posterior desagote.</p>
            </StyledDetails>
            <StyledDetails>
                <ToggleSummary>¿Cual es el tamaño de los obradores y de que material estan fabricados?</ToggleSummary>
                <p>Los obradores tienen medidas de 3 mts x 2 mts y estan construidos de caño estructural y chapa, sin piso, son desmontables y se arman en el lugar, los mismos cuentan con puerta y se pueden cerrar con candado.</p>
            </StyledDetails>

        </FaqContainer>
    </div>;
};

export default Faq;


const FaqContainer = styled.div`
    background-color: #6c5ce7;    
    padding: 1rem;
    margin-top: 5rem;
    margin-bottom: 3rem;    
    border-radius: 10px;
`;

const ToggleSummary = styled.summary`
  list-style: none;
  font-weight: 500;
  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    content: "+";
    padding-right: 1rem;
  }
`;

const StyledDetails = styled.details`
  background: #fff;
  padding: 0.5rem;
  margin: 1rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: #555;
  max-width: 1280px;
  font-weight: 700;
  &[open] > ${ToggleSummary}::before {
    content: "-";
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  margin-top:0.5rem; 
  margin-bottom: 1rem; 
`;