import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const MySlider = ({ images, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <StyledSliderContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
      <SlickSlider {...settings}>
        {images.map((image, index) => (
          <StyledSlide key={index}>
            <StyledImage src={image} alt={`Slide ${index}`} />
          </StyledSlide>
        ))}
      </SlickSlider>
    </StyledSliderContainer>
  );
};

export default MySlider;

const StyledSliderContainer = styled.div`
  margin-top: 2rem; 
  margin-bottom: 2rem; 
  max-width: 100%; 
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const StyledTitle = styled.h3`
  text-align: center;
`;

const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px; 
`;

const StyledImage = styled.img`
  width: 100%; 
  height: 100%; 
`;














