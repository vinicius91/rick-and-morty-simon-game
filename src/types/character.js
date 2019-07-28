// @Flow

export type Id = number;

export type ImageUrl = string;

export type Character = {
  +id: Id,
  +imageUrl: ImageUrl
};

export type Characters = Array<Character>;

export type CharacterState = {
  +characters: Characters,
  +loading: boolean
};

export const characterActionTypes = {
  FETCH_CHARACTER_START: 'FETCH_CHARACTER_START',
  FETCH_CHARACTER_SUCCESS: 'FETCH_CHARACTER_SUCCESS',
  FETCH_CHARACTER_ERROR: 'FETCH_CHARACTER_ERROR'
};

export type CharacterAction =
  | {
      type: characterActionTypes.FETCH_CHARACTER_START
    }
  | {
      type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
      payload: Characters
    }
  | {
      type: characterActionTypes.FETCH_CHARACTER_ERROR,
      payload: string
    };
