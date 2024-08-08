// Loader.js
import React from 'react';
import { HashLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader color="#2fb8a7"/>
    </LoaderContainer>
  );
};

export default Loader;
