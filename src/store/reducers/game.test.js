import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { charactersArray, storeMock } from '../store.fixture';
import gameReducer from './game';
import {
  createSetGameStepAction,
  createStartGameAction,
  createToggleGameAction,
  createActivateCharacterAction,
  createClickCharacterAction,
  initializeGame,
  nextStageGame
} from '../actions/game';
import { createFetchCharactersSuccessAction } from '../actions/character';
import { generateSequence } from '../../lib/simonGame';

describe('Game Reducer Basic Actions', () => {
  it('Should handle the TOGGLE_GAME action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isOn).toEqual(false);
    const finalState = gameReducer(initalState, createToggleGameAction());
    expect(finalState.isOn).toEqual(true);
  });

  it('Should handle the START_GAME action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isActive).toEqual(false);
    const finalState = gameReducer(initalState, createStartGameAction());
    expect(finalState.isActive).toEqual(true);
  });

  it('Should handle the ACTIVATE_CHARACTER action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.activeCharacter).toEqual(0);
    const finalState = gameReducer(
      initalState,
      createActivateCharacterAction(1)
    );
    expect(finalState.activeCharacter).toEqual(1);
  });

  it('Should handle the SET_GAME_STEP action', () => {
    const ids = [1, 2, 3, 4];
    const sequence = generateSequence(10, ids);
    const action = createSetGameStepAction({ sequence, ids });
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.activeCharacter).toEqual(0);
    expect(initalState.ids).toEqual([]);
    expect(initalState.sequence).toEqual([]);
    const finalState = gameReducer(initalState, action);
    expect(finalState.sequence).toEqual(sequence);
    expect(finalState.ids).toEqual(ids);
  });
});

describe('Game Reducer Click Actions', () => {
  it('Should handle the correct click at start', () => {
    const ids = [1, 2, 3, 4];
    const sequence = [1, 3, 4, 5];
    const customFixture = {
      ...storeMock.game,
      ids,
      sequence,
      isActive: true,
      isOn: true,
      currentIndex: 0
    };
    const initalState = gameReducer(customFixture, {});
    expect(initalState.activeCharacter).toEqual(0);
    const action = createClickCharacterAction(1);
    const finalState = gameReducer(initalState, action);
    expect(finalState.sequence).toEqual(sequence);
    expect(finalState.ids).toEqual(ids);
    expect(finalState.currentIndex).toEqual(1);
    expect(finalState.isMachineStep).toEqual(true);
    expect(finalState.isUserStep).toEqual(true);
  });

  it('Should handle the correct click at end', () => {
    const ids = [1, 2, 3, 4];
    const sequence = [1, 3, 4, 2];
    const customFixture = {
      ...storeMock.game,
      score: 3,
      ids,
      sequence,
      isActive: true,
      isOn: true,
      currentIndex: 3
    };
    const initalState = gameReducer(customFixture, {});
    expect(initalState.activeCharacter).toEqual(0);
    const action = createClickCharacterAction(2);
    const finalState = gameReducer(initalState, action);
    expect(finalState.sequence).toEqual(sequence);
    expect(finalState.ids).toEqual(ids);
    expect(finalState.currentIndex).toEqual(0);
    expect(finalState.score).toEqual(4);
    expect(finalState.isMachineStep).toEqual(true);
    expect(finalState.isUserStep).toEqual(false);
  });

  it('Should handle the wrong click', () => {
    const ids = [1, 2, 3, 4];
    const sequence = [1, 3, 4, 2];
    const customFixture = {
      ...storeMock.game,
      ids,
      sequence,
      isActive: true,
      isOn: true,
      currentIndex: 0
    };
    const initalState = gameReducer(customFixture, {});
    expect(initalState.activeCharacter).toEqual(0);
    const action = createClickCharacterAction(2);
    const finalState = gameReducer(initalState, action);
    expect(finalState.sequence).toEqual([]);
    expect(finalState.ids).toEqual(ids);
    expect(finalState.currentIndex).toEqual(0);
    expect(finalState.score).toEqual(0);
    expect(finalState.isError).toEqual(true);
    expect(finalState.isActive).toEqual(false);
    expect(finalState.isUserStep).toEqual(false);
  });
});

describe('Game Reducer Game Flow', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(storeMock);
  const { game: baseState } = gameReducer(storeMock, {});
  const fixtureIds = [1, 2, 3, 4];

  it('Should capture FETCH_CHARACTER_SUCCESS action', () => {
    expect(baseState.ids).toEqual([]);
    expect(baseState.sequence).toEqual([]);
    const action = createFetchCharactersSuccessAction(charactersArray);
    store.dispatch(action);
    const reduced = store.getActions().reduce(gameReducer, baseState);
    expect(reduced.ids).toEqual(fixtureIds);
    expect(reduced.sequence).toEqual([]);
  });

  it('Should handle Initialize Game Async action', () => {
    const toggleAction = createToggleGameAction();
    const action = initializeGame(fixtureIds);
    store.dispatch(toggleAction);
    store.dispatch(action);
    const actions = store.getActions();
    expect(actions.length).toEqual(5);
    const reduced = actions.reduce(gameReducer, baseState);
    expect(reduced.ids).toEqual(fixtureIds);
    expect(reduced.sequence.length).toEqual(1);
    expect(reduced.score).toEqual(0);
    expect(reduced.currentIndex).toEqual(0);
    expect(reduced.isUserStep).toEqual(true);
    expect(reduced.isMachineStep).toEqual(false);
    expect(reduced.isError).toEqual(false);
    expect(reduced.isOn).toEqual(true);
    expect(reduced.isActive).toEqual(true);
  });

  it('Should win a game sequence', () => {
    const initalState = store.getActions().reduce(gameReducer, baseState);
    const nextItem = initalState.sequence[initalState.currentIndex];

    // Clicking the right item
    const action = createClickCharacterAction(nextItem);
    store.dispatch(action);
    const reduced = store.getActions().reduce(gameReducer, baseState);

    // Checking state
    expect(reduced.score).toEqual(1);
    expect(reduced.currentIndex).toEqual(0);
    expect(reduced.isError).toEqual(false);
    expect(reduced.isOn).toEqual(true);
    expect(reduced.isActive).toEqual(true);
    expect(reduced.isUserStep).toEqual(false);
    expect(reduced.isMachineStep).toEqual(true);
    expect(reduced.sequence.length).toEqual(1);
  });

  it('Start a new game sequence', () => {
    const initalState = store.getActions().reduce(gameReducer, baseState);

    // Check if is ready to start another sequence
    expect(initalState.isMachineStep).toEqual(true);
    expect(initalState.isUserStep).toEqual(false);

    // Trigger next stage
    const action = nextStageGame(
      initalState.score,
      initalState.ids,
      initalState.sequence
    );
    store.clearActions();
    store.dispatch(action);
    const reduced = store.getActions().reduce(gameReducer, initalState);

    // Checking state
    expect(reduced.score).toEqual(1);
    expect(reduced.currentIndex).toEqual(0);
    expect(reduced.isError).toEqual(false);
    expect(reduced.isOn).toEqual(true);
    expect(reduced.isActive).toEqual(true);
    expect(reduced.isUserStep).toEqual(true);
    expect(reduced.isMachineStep).toEqual(false);
    expect(reduced.sequence.length).toEqual(2);
  });
});
