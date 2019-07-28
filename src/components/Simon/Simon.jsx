import React from 'react';
import { Wrapper, Line } from './Simon.styles';
import ControlsContainer from '../../containers/Controls';
import CharactersContainer from '../../containers/Characters';

const Simon = () => (
  <Wrapper>
    <Line>
      <ControlsContainer />
    </Line>
    <CharactersContainer />
  </Wrapper>
);

export default Simon;
