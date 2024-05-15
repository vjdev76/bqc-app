import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
  return (
    <ButtonWrapper>
      <Button href="https://wa.me/+543516786671?text=Hola%20BQC,%20necesito%20hacer%20una%20consulta!" target="_blank" rel="noopener noreferrer">+ Info</Button>
    </ButtonWrapper>
  );
};

export default CallToAction;


const ButtonWrapper = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const Button = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  font-family: inherit;
  background-color:  #6c5ce7;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s;
  transition: background-color 0.3s ease;
  &:hover{
    background-color: #ffc900;
    color: #333;
    
  }  
`;


