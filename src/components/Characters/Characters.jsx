// @flow

import React, { Component } from 'react';
import { Wrapper } from './Characters.styles';
import Character from './Character/Character';
import type {
  Characters,
  CharactersProps,
  ClickCharacterHandler
} from '../../types/character';
import type { SimonProps } from '../../types/simon';

import Loading from './Loading/Loading';

const renderCharacters = (
  characters: Characters,
  simonProps: SimonProps,
  handler: ClickCharacterHandler,
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
      isUserStep,
      gameProps
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
