// @flow

import type { Ids, Sequence } from '../types/game';

let timeoutRef = [];

export const getRandomNumberFromArray = (ids: Ids): number => {
  const min = 0;
  const max = ids.length;
  const index = Math.floor(Math.random() * (+max - +min)) + +min;
  return ids[index];
};

const addItemToSequence = (
  quantity: number,
  ids: Ids,
  sequence?: Sequence = []
) => {
  if (quantity > sequence.length) {
    sequence.push(getRandomNumberFromArray(ids));
    return addItemToSequence(quantity, ids, sequence);
  }
  return sequence;
};

export const generateSequence = (
  score: number,
  ids: Ids,
  sequence?: Sequence = []
): Ids => {
  const quantity = score + 1;
  return addItemToSequence(quantity, ids, sequence);
};

export const iterateSequence = (
  sequence: Sequence,
  callback: (id: number) => void
) => {
  sequence.forEach((item, i) => {
    const activate = setTimeout(() => callback(item), (i + 1) * 1500);
    setTimeout(() => callback(0), (i + 1.5) * 1500);
    timeoutRef.push(activate);
  });
};

export const cancelSequence = () => {
  timeoutRef.forEach(timeoutId => clearTimeout(timeoutId));
  timeoutRef = [];
};

export const isCorrectClick = (
  sequence: Sequence,
  currentIndex: number,
  id: number
): boolean => {
  if (sequence[currentIndex] === id) {
    return true;
  }
  cancelSequence();
  return false;
};
