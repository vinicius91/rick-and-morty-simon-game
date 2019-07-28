// @flow

import { characterActionTypes } from '../../types/character';

import type { CharacterState, CharacterAction } from '../../types/character';

const charactersInitialState: CharacterState = {
  characters: [
    {
      id: 1,
      imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      id: 3,
      imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
      id: 4,
      imageUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    }
  ],
  loading: false
};

const character = (
  state: CharacterState = charactersInitialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case characterActionTypes.FETCH_CHARACTER_START:
      return { ...state, loading: true };
    case characterActionTypes.FETCH_CHARACTER_SUCCESS:
      return { ...state, characters: action.payload, loading: false };
    case characterActionTypes.FETCH_CHARACTER_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default character;
