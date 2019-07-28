import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Simon from './Simon/Simon';

const GlobalStyle = createGlobalStyle`
  body {
    background: #45484d;
    background: -moz-linear-gradient(-45deg,  #45484d 0%, #000000 100%);
    background: -webkit-linear-gradient(-45deg,  #45484d 0%,#000000 100%);
    background: linear-gradient(135deg,  #45484d 0%,#000000 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=1 );
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
