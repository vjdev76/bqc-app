import React from 'react';
import styled from 'styled-components';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';
import gallery7 from '../assets/images/gallery7.jpg';
import gallery8 from '../assets/images/gallery8.jpg';
import gallery9 from '../assets/images/gallery9.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
import gallery11 from '../assets/images/gallery11.jpg';
import video from '../assets/images/BQC.mp4';

const ImageGrid = () => {

  const mediaItems = [
    { id: 1, type: 'image', src: gallery1, alt: 'Zona de Cobertura BQC' },
    { id: 2, type: 'image', src: gallery2, alt: 'Zona de Cobertura BQC' },
    { id: 3, type: 'image', src: gallery3, alt: 'Zona de Cobertura BQC´' },
    { id: 4, type: 'video', src: video, alt: 'Video de ejemplo' },
    { id: 5, type: 'image', src: gallery10, alt: 'Zona de Cobertura BQC' },
    { id: 6, type: 'image', src: gallery7, alt: 'Zona de Cobertura BQC' },
    { id: 7, type: 'image', src: gallery8, alt: 'Zona de Cobertura BQC' },
    { id: 8, type: 'image', src: gallery4, alt: 'Zona de Cobertura BQC' },
    { id: 9, type: 'image', src: gallery9, alt: 'Zona de Cobertura BQC' },
    { id: 10, type: 'image', src: gallery11, alt: 'Zona de Cobertura BQC' },
    { id: 11, type: 'image', src: gallery5, alt: 'Zona de Cobertura BQC' },
  ];

  return (
    <StyledGrid id="gallery">
      {mediaItems.map(mediaItem => (
        <React.Fragment key={mediaItem.id}>
          {mediaItem.type === 'image' ? (
            <Image src={mediaItem.src} alt={mediaItem.alt} />
          ) : (
            <Video src={mediaItem.src} type="video/mp4" controls />
          )}
        </React.Fragment>
      ))}
    </StyledGrid>
  );
};

export default ImageGrid;


const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 10px; 
  margin: 0.5rem auto; 
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; 
`;

const Video = styled.video`
  width: 100%;
  border-radius: 10px;
  grid-row-end: span 2; 
`;





