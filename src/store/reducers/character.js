// @flow

import { characterActionTypes } from '../../types/character';

import type { CharacterState, CharacterAction } from '../../types/character';

const charactersInitialState: CharacterState = {
  characters: [],
  loading: false
};

const characterReducer = (
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

export default characterReducer;
