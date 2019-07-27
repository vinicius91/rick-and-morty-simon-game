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

const character = (state: Characters = [], action: Action): Characters => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return [...state, createCharacter(action.id, action.text)];
    default:
      return state;
  }
};

export default character;
