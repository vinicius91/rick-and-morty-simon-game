// @flow

import { characterActionTypes } from '../../types/character';

import { getCharacters } from '../../lib/characterService';

import type { CharacterAction, Characters } from '../../types/character';

// Action Creators

export const createFetchCharactersStartAction = (): CharacterAction => ({
  type: characterActionTypes.FETCH_CHARACTER_START
});

export const createFetchCharactersSuccessAction = (
  payload: Characters
): CharacterAction => ({
  type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload
});

export const createFetchCharactersErrorAction = (
  payload: string
): CharacterAction => ({
  type: characterActionTypes.FETCH_CHARACTER_ERROR,
  payload
});

// Async Actions

export const fetchCharacters = (): CharacterAction => {
  return dispatch => {
    dispatch(createFetchCharactersStartAction());
    return getCharacters()
      .then((fetchedCharacters: Characters) =>
        dispatch(createFetchCharactersSuccessAction(fetchedCharacters))
      )
      .catch(err => dispatch(createFetchCharactersErrorAction(err.message)));
  };
};
