import { gameActionTypes } from '../../types/game';
import * as actions from './game';
import { generateSequence } from '../../lib/simonGame';

describe('Game Actions', () => {
  it('Should create TOGGLE_GAME action', () => {
    const action = actions.toggleGame();
    expect(action.type).toEqual(gameActionTypes.TOGGLE_GAME);
    expect(action.payload).toBe(undefined);
  });

  it('Should create TOGGLE_GAME_MODE action', () => {
    const action = actions.toggleGameMode();
    expect(action.type).toEqual(gameActionTypes.TOGGLE_GAME_MODE);
    expect(action.payload).toBe(undefined);
  });

  it('Should create START_GAME action', () => {
    const ids = [1, 2, 3, 4];
    const sequence = generateSequence(0, ids);
    const action = actions.startGame(sequence, ids);
    expect(action.type).toEqual(gameActionTypes.START_GAME);
    expect(action.payload.ids).toEqual(ids);
    expect(action.payload.sequence).toEqual(sequence);
  });

  it.skip('Should create PLAY_SEQUENCE action', () => {
    const action = actions.playSequence([1, 4, 2, 3]);
    expect(action.type).toEqual(gameActionTypes.PLAY_SEQUENCE);
    expect(action.payload).toBe(undefined);
  });

  it('Should create START_USER_STAGE action', () => {
    const action = actions.startUserStage();
    expect(action.type).toEqual(gameActionTypes.START_USER_STAGE);
    expect(action.payload).toBe(undefined);
  });

  it('Should create ACTIVATE_CHARACTER action', () => {
    const action = actions.activateCharacter(1);
    expect(action.type).toEqual(gameActionTypes.ACTIVATE_CHARACTER);
    expect(action.payload).toBe(1);
  });

  it('Should create CLICK_CHARACTER action', () => {
    const action = actions.clickCharacter(2);
    expect(action.type).toEqual(gameActionTypes.CLICK_CHARACTER);
    expect(action.payload).toBe(2);
  });

  it('Should create WIN_SEQUENCE action', () => {
    const action = actions.winSequence();
    expect(action.type).toEqual(gameActionTypes.WIN_SEQUENCE);
    expect(action.payload).toBe(undefined);
  });

  it('Should create LOSE_SEQUENCE action', () => {
    const action = actions.loseSequence();
    expect(action.type).toEqual(gameActionTypes.LOSE_SEQUENCE);
    expect(action.payload).toBe(undefined);
  });

  it('Should create RESET_GAME action', () => {
    const action = actions.resetGame();
    expect(action.type).toEqual(gameActionTypes.RESET_GAME);
    expect(action.payload).toBe(undefined);
  });
});
