// @flow

import { characterActionTypes } from '../../types/character';

import { getCharacters } from '../../lib/characterService';

import type {
  CharacterAction,
  Character,
  Characters
} from '../../types/character';

export const addCharacter = (payload: Character): CharacterAction => ({
  type: characterActionTypes.ADD_CHARACTER,
  payload
});

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

export const fetchCharacters = (): CharacterAction => {
  return dispatch => {
    dispatch({ type: characterActionTypes.FETCH_CHARACTER_START });
    getCharacters([5, 6, 7, 8])
      .then((fetchedCharacters: Characters) =>
        dispatch(fetchCharactersSuccess(fetchedCharacters))
      )
      .catch(err => dispatch(fetchCharactersError(err.message)));
  };
};
