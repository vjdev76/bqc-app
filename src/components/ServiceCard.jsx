import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

const ServiceCard = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isFlipped]);

  const flipDirection = 'horizontal';
  const flipSpeedFrontToBack = 0.8;
  const flipSpeedBackToFront = 0.8;

  return (
    <ReactCardFlip
      flipDirection={flipDirection}
      isFlipped={isFlipped}
      flipSpeedFrontToBack={flipSpeedFrontToBack}
      flipSpeedBackToFront={flipSpeedBackToFront}
    >
      <CardContainerFront>
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <DetailsContainer>
          <Title>{title}</Title>
          <Button onClick={flipCard}>Saber más</Button>
        </DetailsContainer>
      </CardContainerFront>
      <CardContainerBack>
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <DetailsContainer>
          <Description>{description}</Description>
        </DetailsContainer>
      </CardContainerBack>
    </ReactCardFlip>
  );
};

export default ServiceCard;


const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.40);
  overflow: hidden;
  min-height: 356px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fff
`;

const CardContainerFront = styled(CardContainer)``;

const CardContainerBack = styled(CardContainer)``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h4`
  margin: 0 0 8px;
  color: #333;
  text-align: center;  
`;

const Description = styled.p`
  margin: 0;
  color: #666;
`;

const Button = styled.button`
  font-family: inherit;
  display: block;
  margin: 10px auto 0 auto;
  padding: 8px 16px;
  background-color: #6c5ce7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5b4abd;
  }
`;





