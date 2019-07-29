// @flow

import Axios from 'axios';

import type { Character, Ids } from '../types/character';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

const getRandom = (min: number, max: number): number =>
  Math.floor(Math.random() * (+max - +min)) + +min;

const generateRandomIds = (min: number, max: number): Ids => {
  const ids = [];
  while (ids.length < 4) {
    const next = getRandom(min, max);
    if (!ids.some(x => x === next)) {
      ids.push(next);
    }
  }
  return ids;
};

export const getCharacters = (): Promise<Array<Character>> => {
  const ids = generateRandomIds(0, 200);
  const params: string = `${ids.reduce(
    (prv, crr) => `${prv}${prv !== '[' ? ',' : ''}${crr.toFixed(0)}`,
    '['
  )}]`;

  return Axios.get(`${baseUrl}${params}`).then(response =>
    response.data.map(item => ({ id: item.id, imageUrl: item.image }))
  );
};
