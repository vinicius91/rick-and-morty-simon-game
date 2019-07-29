import { gameActionTypes } from '../../types/game';
import * as actions from './game';

describe('Game Actions creators', () => {
  it('Should create TOGGLE_GAME action', () => {
    const action = actions.createToggleGameAction();
    expect(action.type).toEqual(gameActionTypes.TOGGLE_GAME);
    expect(action.payload).toBe(undefined);
  });

  it('Should create ACTIVATE_CHARACTER action', () => {
    const action = actions.createActivateCharacterAction(1);
    expect(action.type).toEqual(gameActionTypes.ACTIVATE_CHARACTER);
    expect(action.payload).toBe(1);
  });

  it('Should create CLICK_CHARACTER action', () => {
    const action = actions.createClickCharacterAction(2);
    expect(action.type).toEqual(gameActionTypes.CLICK_CHARACTER);
    expect(action.payload).toBe(2);
  });
});
