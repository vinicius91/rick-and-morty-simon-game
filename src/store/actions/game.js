// @flow

import { gameActionTypes } from '../../types/game';

import type { GameAction } from '../../types/game';

export const toggleGame = (): GameAction => ({
  type: gameActionTypes.TOGGLE_GAME
});

export const toggleGameMode = (): GameAction => ({
  type: gameActionTypes.TOGGLE_GAME_MODE
});

export const startGame = (): GameAction => ({
  type: gameActionTypes.START_GAME
});

export const playSequence = (): GameAction => ({
  type: gameActionTypes.PLAY_SEQUENCE
});

export const startUserStage = (): GameAction => ({
  type: gameActionTypes.START_USER_STAGE
});

export const activateCharacter = (payload: number): GameAction => ({
  type: gameActionTypes.ACTIVATE_CHARACTER,
  payload
});

export const clickCharacter = (payload: number): GameAction => ({
  type: gameActionTypes.CLICK_CHARACTER,
  payload
});

export const winSequence = (): GameAction => ({
  type: gameActionTypes.WIN_SEQUENCE
});

export const loseSequence = (): GameAction => ({
  type: gameActionTypes.LOSE_SEQUENCE
});

export const resetGame = (): GameAction => ({
  type: gameActionTypes.RESET_GAME
});
