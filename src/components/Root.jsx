import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import font from '../assets/misfits.ttf';
import sky from '../assets/sky.jpg';

import Simon from './Simon/Simon';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Misfits";
    src: url(${font});
    font-weight: 600;
    font-style: normal;
  }
  h3 {
    font-family: "Misfits";
  }

  body {
    background-image: url(${sky});
    
  }

  #root {
    height: 100vh;
    display: flex;
  }

  
`;

const Root = ({ store }) => (
  <Provider store={store}>
    <GlobalStyle />
    <Simon />
  </Provider>
);

export default Root;
