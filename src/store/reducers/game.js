// @flow

import type { GameState, GameAction, Ids } from '../../types/game';
import type { Character } from '../../types/character';
import { gameActionTypes } from '../../types/game';
import { characterActionTypes } from '../../types/character';
import { isCorrectClick } from '../../lib/simonGame';

const parseClickCharacterAction = (
  payload: number,
  state: GameState
): GameState => {
  const isCorrect = isCorrectClick(state.sequence, state.currentIndex, payload);
  if (isCorrect) {
    const currentIndex = state.currentIndex + 1;
    const isFinished = state.sequence.length <= currentIndex;
    if (isFinished) {
      const score = state.score + 1;
      return {
        ...state,
        score,
        currentIndex: 0,
        isUserStep: false,
        isMachineStep: true
      };
    }
    return {
      ...state,
      currentIndex,
      isMachineStep: true,
      isUserStep: true
    };
  }

  return {
    ...state,
    score: 0,
    isActive: false,
    isError: true,
    currentIndex: 0,
    sequence: [],
    isUserStep: false
  };
};

const gameInitialState: GameState = {
  score: 0,
  isStrict: false,
  isActive: false,
  isOn: false,
  isError: false,
  isUserStep: false,
  isMachineStep: false,
  currentIndex: 0,
  activeCharacter: 0,
  sequence: [],
  ids: []
};

const resetState = {
  score: 0,
  isError: false,
  isUserStep: false,
  isMachineStep: false,
  currentIndex: 0,
  activeCharacter: 0,
  sequence: []
};

const gameReducer = (
  state: GameState = gameInitialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case gameActionTypes.TOGGLE_GAME:
      return {
        ...state,
        ...resetState,
        isOn: !state.isOn,
        isStrict: false,
        isActive: false
      };
    case gameActionTypes.TOGGLE_GAME_MODE:
      return { ...state, ...resetState, isStrict: !state.isStrict };
    case gameActionTypes.START_GAME: {
      return { ...state, ...resetState, isActive: !state.isActive };
    }
    case gameActionTypes.SET_GAME_STEP: {
      const { sequence, ids } = action.payload;
      return {
        ...state,
        sequence,
        ids,
        isMachineStep: false,
        isUserStep: true
      };
    }
    case characterActionTypes.FETCH_CHARACTER_SUCCESS: {
      const ids: Ids = action.payload.map(
        (character: Character) => character.id
      );
      return { ...state, ids };
    }
    case gameActionTypes.ACTIVATE_CHARACTER:
      return { ...state, activeCharacter: action.payload };
    case gameActionTypes.CLICK_CHARACTER: {
      return parseClickCharacterAction(action.payload, state);
    }
    default:
      return state;
  }
};

export default gameReducer;
