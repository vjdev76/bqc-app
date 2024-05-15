import React from 'react';
import styled from 'styled-components';
import bannerImageUrl from '../assets/images/banner.png';

const BannerImage = ({ imageUrl = '', altText }) => {
  console.log('banner=>', bannerImageUrl);
  return (
    <ImageContainer>
      <Image src={bannerImageUrl} alt={altText} />
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


