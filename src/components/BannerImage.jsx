import React from 'react';
import styled from 'styled-components';

const BannerImage = ({ imageUrl, altText }) => {
    return (
        <ImageContainer>
            <Image src={imageUrl} alt={altText} />
        </ImageContainer>
    );
};

export default BannerImage;


const ImageContainer = styled.div`
  display: block;
  
  @media (max-width: 768px) {
    display: none; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;


