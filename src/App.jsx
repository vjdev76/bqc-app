import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import ImpactContent from "./components/ImpactContent";
import Services from './components/Services';
import ImageGrid from './components/ImageGrid';
import Footer from "./components/Footer";
import styled from 'styled-components';
import MySlider from './components/MySlider';
import WhatsAppButton from './components/WhatsappButton';
import ComunaLutti from '../src/assets/images/logos/Comuna-Lutti.png';
import ComunaVillaCiudadParque from '../src/assets/images/logos/Comuna-Villa-Ciudad-Parque.png';
import ComunaVillaQuillinzo from '../src/assets/images/logos/Comuna-Villa-Quillinzo.png';
import MunicipalidadBerrotaran from '../src/assets/images/logos/Municipalidad-Berrotaran.png';
import MunicipalidadVillaYacanto from '../src/assets/images/logos/Municipalidad-Villa-Yacanto.png';
import MunicipalidadLaCruz from '../src/assets/images/logos/Municipalidad-La-Cruz.png';
import MunicipalidadVillaDelDique from '../src/assets/images/logos/Municipalidad-Villa-del-Dique.png';
import MunicipalidadVillaRumipal from '../src/assets/images/logos/Municipalidad-Villa-Rumipal.png';
import MunicipalidadSRCalamuchita from '../src/assets/images/logos/Municipalidad-SRCalamuchita.png';
import MunicipalidadEmbalse from '../src/assets/images/logos/Municipalidad-Embalse.png';
import ComunaVillaAmancay from '../src/assets/images/logos/Comuna-Villa-Amancay.png';
import ComunaLosReartes from '../src/assets/images/logos/Comuna-Los-Reartes.png';
import MunicipalidadVGB from '../src/assets/images/logos/Municipalidad-VGB.png';
import PoliciaCordoba from '../src/assets/images/logos/Policia-de-Cordoba.png';
import MasterHouse from '../src/assets/images/logos/Master-House.png'
import Indusplast from '../src/assets/images/logos/Indusplast.png'
import Blackstone from '../src/assets/images/logos/Blackstone.png'
import Nasa from '../src/assets/images/logos/Nucleoelectrica-Argentina.png'
import DFSolucionesTecnologicas from '../src/assets/images/logos/DF-Soluciones-Tecnologicas.png'
import MarquezyAsoc from '../src/assets/images/logos/MarquezyAsoc.png'
import FCConstrucciones from '../src/assets/images/logos/FC-Construcciones.png'
import Welmod from '../src/assets/images/logos/Welmod.png'
import BackToTopButton from './components/BackToTopButton';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import BannerImage from './components/BannerImage';
// test

function App() {
  const images = [
    ComunaLutti,
    ComunaVillaCiudadParque,
    ComunaVillaQuillinzo,
    MunicipalidadBerrotaran,
    MunicipalidadVillaYacanto,
    MunicipalidadLaCruz,
    MunicipalidadVillaDelDique,
    MunicipalidadVillaRumipal,
    MunicipalidadSRCalamuchita,
    MunicipalidadEmbalse,
    ComunaVillaAmancay,
    ComunaLosReartes,
    MunicipalidadVGB,
    PoliciaCordoba,
    MasterHouse,
    Indusplast,
    Blackstone,
    Nasa,
    DFSolucionesTecnologicas,
    MarquezyAsoc,
    FCConstrucciones,
    Welmod
  ];

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
  };

  const bannerImageUrl = '../public/banner.png';

  return (
    <>
      <GlobalStyle />
      <Navbar onContactClick={toggleContactForm} /> {/* Pasar la función toggleContactForm al Navbar */}
      <BannerImage imageUrl={bannerImageUrl} />
      <MainContainer>
        <ImpactContent />
        <Services />
        <Faq />
        <ImageGrid />
      </MainContainer>
      <MySlider images={images} title="Organismos estatales y empresas que confían en nosotros" />
      {isContactFormOpen && <ContactForm onClose={() => setIsContactFormOpen(false)} />} {/* Renderizar el formulario si isContactFormOpen es true */}
      <WhatsAppButton />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif; 
    padding: 0; 
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

 
  * {
    scrollbar-width: thin;
    scrollbar-color: #6c5ce7 #f1f1f1;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
`;
