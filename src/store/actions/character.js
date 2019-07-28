// @flow

import { characterActionTypes } from '../../types/character';

import { getCharacters } from '../../lib/characterService';

import type { CharacterAction, Characters } from '../../types/character';

export const fetchCharactersSuccess = (
  payload: Characters
): CharacterAction => ({
  type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload
});

export const fetchCharactersError = (payload: string): CharacterAction => ({
  type: characterActionTypes.FETCH_CHARACTER_ERROR,
  payload
});

export function fetchCharacters(): CharacterAction {
  return dispatch => {
    dispatch({ type: characterActionTypes.FETCH_CHARACTER_START });
    return getCharacters([5, 6, 7, 8])
      .then((fetchedCharacters: Characters) =>
        dispatch(fetchCharactersSuccess(fetchedCharacters))
      )
      .catch(err => dispatch(fetchCharactersError(err.message)));
  };
}
