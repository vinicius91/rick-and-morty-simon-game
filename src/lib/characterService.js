// @flow

import Axios from 'axios';

import type { Character } from '../types/character';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = (
  ids?: number[] = [1, 2, 3, 4]
): Promise<Array<Character>> => {
  const params: string = `${ids.reduce(
    (prv, crr) => `${prv}${prv !== '[' ? ',' : ''}${crr.toFixed(0)}`,
    '['
  )}]`;

  return Axios.get(`${baseUrl}${params}`).then(response =>
    response.data.map(item => ({ id: item.id, imageUrl: item.image }))
  );
};
