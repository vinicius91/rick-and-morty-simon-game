import gameReducer from './game';
import { storeMock } from '../store.fixture';
import {
  toggleGame,
  startGame,
  activateCharacter,
  createSetGameStepAction,
  clickCharacter
} from '../actions/game';
import { generateSequence } from '../../lib/simonGame';

describe('Game Reducer', () => {
  it('Should handle the TOGGLE_GAME action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isOn).toEqual(false);
    const finalState = gameReducer(initalState, toggleGame());
    expect(finalState.isOn).toEqual(true);
  });

  it('Should handle the START_GAME action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isActive).toEqual(false);
    const finalState = gameReducer(initalState, startGame());
    expect(finalState.isActive).toEqual(true);
  });

  it('Should handle the ACTIVATE_CHARACTER action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.activeCharacter).toEqual(0);
    const finalState = gameReducer(initalState, activateCharacter(1));
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
    const action = clickCharacter(1);
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
    const action = clickCharacter(2);
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
    const action = clickCharacter(2);
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
