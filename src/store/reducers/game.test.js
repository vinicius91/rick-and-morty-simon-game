import gameReducer from './game';
import { storeMock } from '../store.fixture';
import {
  toggleGame,
  toggleGameMode,
  startGame,
  activateCharacter
} from '../actions/game';

describe('Game Reducer', () => {
  it('Should handle the TOGGLE_GAME action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isOn).toEqual(false);
    const finalState = gameReducer(initalState, toggleGame());
    expect(finalState.isOn).toEqual(true);
  });

  it('Should handle the TOGGLE_GAME_MODE action', () => {
    const initalState = gameReducer(storeMock.game, {});
    expect(initalState.isStrict).toEqual(false);
    const finalState = gameReducer(initalState, toggleGameMode());
    expect(finalState.isStrict).toEqual(true);
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
});
