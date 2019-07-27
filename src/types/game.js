// @Flow
import type { Id } from './character';

export type Score = number;

export type IsStrict = boolean;

export type CurrentIndex = number;

export type ActiveCharacter = number;

export type Sequence = Array<number>;

export type GameState = {
  +score: Score,
  +isStrict: IsStrict,
  +currentIndex: CurrentIndex,
  +activeCharacter: ActiveCharacter,
  +sequence: Sequence
};

export type GameAction =
  | {
      type: 'START_GAME'
    }
  | {
      type: 'PLAY_SEQUENCE'
    }
  | {
      type: 'START_USER_STAGE'
    }
  | {
      type: 'ACTIVATE_CHARACTER',
      +id: Id
    }
  | {
      type: 'CLICK_CHARACTER',
      +id: Id
    }
  | {
      type: 'WIN_SEQUENCE'
    }
  | {
      type: 'LOSE_SEQUENCE'
    }
  | {
      type: 'RESET_GAME'
    };
