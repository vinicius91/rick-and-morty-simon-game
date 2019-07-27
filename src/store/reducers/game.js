// @flow

import type { GameState } from '../../types/game';
import type { Action } from '../../types';
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
  action: Action
): GameState => {
  switch (action.type) {
    case gameActionTypes.TOGGLE_GAME:
      return { ...state, isOn: !state.isOn };
    case gameActionTypes.TOGGLE_GAME_MODE:
      return { ...state, isStrict: !state.isStrict };
    case gameActionTypes.START_GAME:
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
};

export default game;
