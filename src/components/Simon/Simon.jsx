import React from 'react';
import { Wrapper, Line, Title } from './Simon.styles';
import ControlsContainer from '../../containers/Controls';
import CharactersContainer from '../../containers/Characters';

const Simon = () => (
  <Wrapper>
    <Line>
      <Title>Rick and Morty</Title>
      <Title>Simon Game</Title>
    </Line>
    <Line>
      <ControlsContainer />
    </Line>
    <CharactersContainer />
  </Wrapper>
);

export default Simon;
