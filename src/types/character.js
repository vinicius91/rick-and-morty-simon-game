// @Flow

export type Id = number;

export type ImageUrl = string;

export type Character = {
  +id: Id,
  +imageUrl: ImageUrl
};

export type Characters = Array<Character>;

export type CharacterState = {
  +characters: Characters
};

export type CharacterAction = {
  type: 'ADD_CHARACTER',
  +id: Id,
  +imageUrl: ImageUrl
};
