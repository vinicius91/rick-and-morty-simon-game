// @flow

import type {
  Id,
  ImageUrl,
  Character,
  Characters
} from '../../types/character';
import type { Action } from '../../types';

const createCharacter = (id: Id, imageUrl: ImageUrl): Character => ({
  id,
  imageUrl
});

const charactersInitialState = [
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
];

const character = (
  state: Characters = charactersInitialState,
  action: Action
): Characters => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return [...state, createCharacter(action.id, action.text)];
    default:
      return state;
  }
};

export default character;
