// @flow

import { gameActionTypes } from '../../types/game';
import { generateSequence, iterateSequence } from '../../lib/simonGame';
import type {
  GameAction,
  Sequence,
  Ids,
  SetGameStepPayload
} from '../../types/game';

export const toggleGame = (): GameAction => ({
  type: gameActionTypes.TOGGLE_GAME
});

export const toggleGameMode = (): GameAction => ({
  type: gameActionTypes.TOGGLE_GAME_MODE
});

export const startGame = (sequence: Sequence, ids: Ids): GameAction => {
  return {
    type: gameActionTypes.START_GAME,
    payload: {
      sequence,
      ids
    }
  };
};

export const activateCharacter = (payload: number): GameAction => ({
  type: gameActionTypes.ACTIVATE_CHARACTER,
  payload
});

export const playSequence = (sequence: Sequence): GameAction => {
  return dispatch => {
    dispatch({
      type: gameActionTypes.PLAY_SEQUENCE
    });
    iterateSequence(sequence, (id: number) => {
      dispatch(activateCharacter(id));
    });
  };
};

export const createSetGameStepAction = (
  payload: SetGameStepPayload
): GameAction => ({
  type: gameActionTypes.SET_GAME_STEP,
  payload
});

export const initializeGame = (ids: Ids): GameAction => {
  return dispatch => {
    const sequence: Sequence = generateSequence(0, ids);
    dispatch(startGame());
    dispatch(createSetGameStepAction({ sequence, ids }));
    return dispatch(playSequence(sequence));
  };
};

export const nextStageGame = (
  score: number,
  ids: Ids,
  oldSequence: Sequence
): GameAction => {
  return dispatch => {
    const sequence: Sequence = generateSequence(score, ids, oldSequence);
    dispatch(createSetGameStepAction({ sequence, ids }));
    return dispatch(playSequence(sequence));
  };
};

export const startUserStage = (): GameAction => ({
  type: gameActionTypes.START_USER_STAGE
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
