// @Flow

import type { Id } from './character';

export type CurrentIndex = number;

export type ActiveCharacter = number;

export type Sequence = Array<number>;

export type Ids = Array<number>;

export type SetGameStepPayload = {
  +sequence: Sequence,
  +ids: Ids
};

export type GameState = {
  +score: number,
  +isStrict: boolean,
  +isActive: boolean,
  +isOn: boolean,
  +isError: boolean,
  +isUserStep: boolean,
  +isMachineStep: boolean,
  +currentIndex: CurrentIndex,
  +activeCharacter: ActiveCharacter,
  +sequence: Sequence,
  +ids: Ids
};

export const gameActionTypes = {
  TOGGLE_GAME: 'TOGGLE_GAME',
  TOGGLE_GAME_MODE: 'TOGGLE_GAME_MODE',
  START_GAME: 'START_GAME',
  SET_GAME_STEP: 'SET_GAME_STEP',
  PLAY_SEQUENCE: 'PLAY_SEQUENCE',
  START_USER_STAGE: 'START_USER_STAGE',
  ACTIVATE_CHARACTER: 'ACTIVATE_CHARACTER',
  CLICK_CHARACTER: 'CLICK_CHARACTER',
  WIN_SEQUENCE: 'WIN_SEQUENCE',
  LOSE_SEQUENCE: 'LOSE_SEQUENCE',
  RESET_GAME: 'RESET_GAME'
};

export type GameAction =
  | {
      type: gameActionTypes.TOGGLE_GAME
    }
  | {
      type: gameActionTypes.TOGGLE_GAME_MODE
    }
  | {
      type: gameActionTypes.START_GAME
    }
  | {
      type: gameActionTypes.SET_GAME_STEP,
      payload: SetGameStepPayload
    }
  | {
      type: gameActionTypes.PLAY_SEQUENCE,
      payload: Sequence
    }
  | {
      type: gameActionTypes.START_USER_STAGE
    }
  | {
      type: gameActionTypes.ACTIVATE_CHARACTER,
      payload: Id
    }
  | {
      type: gameActionTypes.CLICK_CHARACTER,
      payload: Id
    }
  | {
      type: gameActionTypes.WIN_SEQUENCE
    }
  | {
      type: gameActionTypes.LOSE_SEQUENCE
    }
  | {
      type: gameActionTypes.RESET_GAME
    };
