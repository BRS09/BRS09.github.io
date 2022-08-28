import React from 'react';
import image from './image.png';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`
const ProfileImage = styled.img`
    border-radius: 1rem;
    width: 75%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`

const Image = () => {
  return (
      <Container>
          <ProfileImage src={image}></ProfileImage>
      </Container>
  );
};

export default Image;
