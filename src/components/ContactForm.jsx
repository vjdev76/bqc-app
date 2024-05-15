import React from 'react';
import styled from 'styled-components';

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const telefono = e.target.telefono.value;
    const consulta = e.target.consulta.value;

    const whatsappMessage = `Hola, mi nombre es ${nombre}, mi consulta es la siguiente: ${consulta}`;
    const whatsappLink = `https://wa.me/+543516786671?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <Overlay>
      <FormContainer>
        <CloseButton onClick={onClose}>X</CloseButton> {/* Botón de cierre dentro del formulario */}
        <Form onSubmit={handleSubmit}>
          <HeaderText>¿Necesitas soluciones móviles para tu proyecto o evento?</HeaderText>
          <Input type="text" name="nombre" placeholder="Nombre y Apellido" required />
          <Input type="tel" name="telefono" placeholder="Número de Teléfono" required />
          <Textarea name="consulta" placeholder="Consulta" required />
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormContainer>
    </Overlay>
  );
};

export default ContactForm;


const Overlay = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(108, 92, 231, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: white; 
  padding: 20px;
  border-radius: 10px;
  position: relative; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.p`
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  font-family: inherit;
  &::placeholder {
    color: #333;    
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  height: 150px;
  border-radius: 10px;
  font-family: inherit;
  &::placeholder {
    color: #333;    
  }
`;

const SubmitButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;





