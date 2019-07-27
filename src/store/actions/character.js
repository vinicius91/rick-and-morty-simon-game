// @flow
import { bindActionCreators } from 'redux';

import store from '../configureStore';
import type { CharacterAction, Character } from '../../types/character';

export const characterActionTypes = {
  ADD_CHARACTER: 'ADD_CHARACTER'
};

export const addCharacter = (payload: Character): CharacterAction => ({
  type: characterActionTypes.ADD_CHARACTER,
  payload
});

export const characterActions = bindActionCreators(
  {
    addCharacter
  },
  store.dispatch
);
