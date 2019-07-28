// @flow

import type { GameState, GameAction } from '../../types/game';
import { gameActionTypes } from '../../types/game';

const gameInitialState: GameState = {
  score: 0,
  isStrict: false,
  isActive: false,
  isOn: false,
  currentIndex: 0,
  activeCharacter: 0,
  sequence: []
};

const game = (
  state: GameState = gameInitialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case gameActionTypes.TOGGLE_GAME:
      return { ...state, isOn: !state.isOn };
    case gameActionTypes.TOGGLE_GAME_MODE:
      return { ...state, isStrict: !state.isStrict };
    case gameActionTypes.START_GAME:
      return { ...state, isActive: !state.isActive };
    case gameActionTypes.ACTIVATE_CHARACTER:
      return { ...state, activeCharacter: action.payload };
    default:
      return state;
  }
};

export default game;
