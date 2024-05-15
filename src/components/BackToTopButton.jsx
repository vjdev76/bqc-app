import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <ButtonContainer onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
            <ButtonText>&#8593;</ButtonText>
        </ButtonContainer>
    );
};

export default BackToTopButton;


const ButtonContainer = styled.div`
  position: fixed;
  bottom: 4%;
  left: 2%;
  background-color: #555;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
`;

