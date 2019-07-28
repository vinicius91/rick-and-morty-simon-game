import characterReducer from './character';
import { characterActionTypes } from '../../types/character';
import { charactersArray, storeMock } from '../store.fixture';

describe('Character Reducer', () => {
  it('Should handle the FETCH_CHARACTER_START action', () => {
    const fetchStartState = characterReducer(storeMock.characters, {
      type: characterActionTypes.FETCH_CHARACTER_START
    });
    expect(fetchStartState.characters).toEqual([]);
    expect(fetchStartState.loading).toEqual(true);
  });

  it('Should handle the FETCH_CHARACTER_SUCCESS action', () => {
    const fetchStartState = characterReducer(storeMock.characters, {
      type: characterActionTypes.FETCH_CHARACTER_START
    });

    const fetchStartSuccess = characterReducer(fetchStartState, {
      type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
      payload: charactersArray
    });
    expect(fetchStartSuccess.characters).toEqual(charactersArray);
    expect(fetchStartSuccess.loading).toEqual(false);
  });

  it('Should handle the FETCH_CHARACTER_ERROR action', () => {
    const fetchStartState = characterReducer(storeMock.characters, {
      type: characterActionTypes.FETCH_CHARACTER_START
    });

    const fetchStartSuccess = characterReducer(fetchStartState, {
      type: characterActionTypes.FETCH_CHARACTER_ERROR
    });
    expect(fetchStartSuccess.characters).toEqual([]);
    expect(fetchStartSuccess.loading).toEqual(false);
  });
});
