import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchCharacters } from './character';
import { characterActionTypes } from '../../types/character';
import { characterApiData, charactersArray, storeMock } from '../store.fixture';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('Character Actions', () => {
  const store = mockStore(storeMock);

  it('Should have an empty characters array', () => {
    expect(store.getActions()).toEqual([]);
    const { characters, loading } = store.getState().characters;
    expect(characters).toEqual([]);
    expect(loading).toBeFalsy();
  });

  it('Should fetch characters from API', () => {
    const data = characterApiData;
    const resp = { data };
    axios.get.mockResolvedValue(resp);

    expect(store.getActions()).toEqual([]);

    const expectedAction = [
      { type: characterActionTypes.FETCH_CHARACTER_START },
      {
        type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
        payload: charactersArray
      }
    ];

    return store.dispatch(fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
