// @flow

import { gameActionTypes } from '../../types/game';
import {
  generateSequence,
  iterateSequence,
  cancelSequence
} from '../../lib/simonGame';
import type {
  GameAction,
  Sequence,
  Ids,
  SetGameStepPayload
} from '../../types/game';

// Action Creators

export const createToggleGameAction = (): GameAction => {
  cancelSequence();
  return {
    type: gameActionTypes.TOGGLE_GAME
  };
};

export const createStartGameAction = (): GameAction => {
  return {
    type: gameActionTypes.START_GAME
  };
};

export const createActivateCharacterAction = (payload: number): GameAction => ({
  type: gameActionTypes.ACTIVATE_CHARACTER,
  payload
});

export const createClickCharacterAction = (payload: number): GameAction => ({
  type: gameActionTypes.CLICK_CHARACTER,
  payload
});

export const createSetGameStepAction = (
  payload: SetGameStepPayload
): GameAction => ({
  type: gameActionTypes.SET_GAME_STEP,
  payload
});

// Async Actions

export const playSequence = (sequence: Sequence): GameAction => {
  return dispatch => {
    dispatch({
      type: gameActionTypes.PLAY_SEQUENCE
    });
    iterateSequence(sequence, (id: number) => {
      dispatch(createActivateCharacterAction(id));
    });
  };
};

export const initializeGame = (ids: Ids): GameAction => {
  cancelSequence();
  return dispatch => {
    const sequence: Sequence = generateSequence(0, ids);
    dispatch(createStartGameAction());
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
