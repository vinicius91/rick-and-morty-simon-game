// @flow

import React, { Component } from 'react';
import { Wrapper } from './Characters.styles';
import Character from './Character/Character';
import type { Characters } from '../../types/character';

import Loading from './Loading/Loading';

type ClickHandlerFunction = (id: number) => void;
type fetchCharactersFunction = () => void;
type simonProp = {
  base: string,
  dark: string,
  sound: any
};

type SimonProps = Array<simonProp>;

type CharactersProps = {
  characters: Characters,
  loading: boolean,
  isUserStep: boolean,
  activeCharacter: number,
  clickCharacter: ClickHandlerFunction,
  fetchCharacters: fetchCharactersFunction
};

const gameProps: SimonProps = [
  {
    base: '#5fd382',
    dark: '#4ca868',
    sound: 'https://simongame.s3.amazonaws.com/simonSound1.mp3'
  },
  {
    base: '#dc5245',
    dark: '#b04137',
    sound: 'https://simongame.s3.amazonaws.com/simonSound2.mp3'
  },
  {
    base: '#e6e564',
    dark: '#cfce5a',
    sound: 'https://simongame.s3.amazonaws.com/simonSound3.mp3'
  },
  {
    base: '#038fe4',
    dark: '#0272b6',
    sound: 'https://simongame.s3.amazonaws.com/simonSound4.mp3'
  }
];

const renderCharacters = (
  characters: Characters,
  simonProps: SimonProps,
  handler: ClickHandlerFunction,
  activeCharacter: number,
  enabled: boolean
) => {
  if (
    characters &&
    simonProps &&
    characters.length > 0 &&
    simonProps.length > 0
  ) {
    return characters.map((character, i) => (
      <Character
        imageUrl={character.imageUrl}
        id={character.id}
        key={character.id}
        enabled={enabled}
        color={simonProps[i].base}
        colorDark={simonProps[i].dark}
        sound={simonProps[i].sound}
        active={character.id === activeCharacter}
        characterClickHandler={handler}
      />
    ));
  }
  return '';
};

class CharactersComponent extends Component<CharactersProps> {
  componentDidMount() {
    const { fetchCharacters } = this.props;
    fetchCharacters();
  }

  render() {
    const {
      characters,
      clickCharacter,
      activeCharacter,
      loading,
      isUserStep
    } = this.props;
    return (
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          renderCharacters(
            characters,
            gameProps,
            clickCharacter,
            activeCharacter,
            isUserStep
          )
        )}
      </Wrapper>
    );
  }
}

export default CharactersComponent;
