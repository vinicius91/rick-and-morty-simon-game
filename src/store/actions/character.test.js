import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchCharacters,
  createFetchCharactersStartAction,
  createFetchCharactersSuccessAction,
  createFetchCharactersErrorAction
} from './character';
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
      createFetchCharactersStartAction(),
      createFetchCharactersSuccessAction(charactersArray)
    ];

    return store.dispatch(fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('Should handle error while fetching', () => {
    store.clearActions();
    expect(store.getActions()).toEqual([]);
    const error = new Error('Custom error');
    const resp = { ...error, code: 500 };
    axios.get.mockResolvedValue(resp);

    const expectedAction = [
      createFetchCharactersStartAction(),
      createFetchCharactersErrorAction(
        "Cannot read property 'map' of undefined"
      )
    ];

    return store.dispatch(fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
