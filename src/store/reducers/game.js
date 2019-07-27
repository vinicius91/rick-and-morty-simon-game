// @flow

import type { GameState } from '../../types/game';
import type { Action } from '../../types';

const gameInitialState = {
  score: 0,
  isStrict: false,
  currentIndex: 0,
  activeCharacter: 0,
  sequence: []
};

const game = (
  state: GameState = gameInitialState,
  action: Action
): GameState => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return state;
    default:
      return state;
  }
};

export default game;
