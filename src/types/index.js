// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { CharacterState, CharacterAction } from './character';

import type { GameState, GameAction } from './game';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
  characters: CharacterState,
  game: GameState
};

export type Action = ReduxInitAction | CharacterAction | GameAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
