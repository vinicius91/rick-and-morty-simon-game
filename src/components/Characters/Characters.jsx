// @flow

import React, { Component } from 'react';
import { Wrapper } from './Characters.styles';
import Character from './Character/Character';
import type { Characters } from '../../types/character';

type ClickHandlerFunction = (id: number) => void;

type Color = {
  base: string,
  dark: string
};

type Colors = Array<Color>;

type CharactersProps = {
  characters: Characters,
  clickCharacter: ClickHandlerFunction
};

const simonColors: Colors = [
  {
    base: '#5fd382',
    dark: '#4ca868'
  },
  {
    base: '#dc5245',
    dark: '#b04137'
  },
  {
    base: '#e6e564',
    dark: '#cfce5a'
  },
  {
    base: '#038fe4',
    dark: '#0272b6'
  }
];

const renderCharacters = (
  characters: Characters,
  colors: Colors,
  handler: ClickHandlerFunction
) => {
  if (
    characters &&
    simonColors &&
    characters.length > 0 &&
    simonColors.length > 0
  ) {
    return characters.map((character, i) => (
      <Character
        imageUrl={character.imageUrl}
        id={character.id}
        key={character.id}
        color={simonColors[i].base}
        colorDark={simonColors[i].dark}
        active={false}
        characterClickHandler={handler}
      />
    ));
  }

  return '';
};

class CharactersComponent extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    const { characters, clickCharacter } = this.props;
    return (
      <Wrapper>
        {renderCharacters(characters, simonColors, clickCharacter)}
      </Wrapper>
    );
  }
}

export default CharactersComponent;
