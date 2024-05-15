import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/testeo.jpg';
const ImageGrid = () => {

  const mediaItems = [
    { id: 1, type: 'image', src: banner, alt: 'Zona de Cobertura BQC-' },
    { id: 2, type: 'image', src: 'src/assets/images/gallery/gallery2.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 3, type: 'image', src: 'src/assets/images/gallery/gallery3.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 4, type: 'video', src: 'src/assets/videos/BQC.mp4', alt: 'Video de ejemplo' },
    { id: 5, type: 'image', src: 'src/assets/images/gallery/gallery10.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 6, type: 'image', src: 'src/assets/images/gallery/gallery7.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 7, type: 'image', src: 'src/assets/images/gallery/gallery8.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 8, type: 'image', src: 'src/assets/images/gallery/gallery4.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 9, type: 'image', src: 'src/assets/images/gallery/gallery9.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 10, type: 'image', src: 'src/assets/images/gallery/gallery11.jpg', alt: 'Zona de Cobertura BQC' },
    { id: 11, type: 'image', src: 'src/assets/images/gallery/gallery5.jpg', alt: 'Zona de Cobertura BQC' },
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





