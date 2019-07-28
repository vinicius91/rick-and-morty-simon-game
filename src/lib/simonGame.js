// @flow

type Ids = Array<number>;

export const getRandomNumberFromArray = (ids: Ids): number => {
  const min = 0;
  const max = ids.length - 1;
  const index = Math.floor(Math.random() * (+max - +min)) + +min;
  return ids[index];
};

const addItemToSequence = (
  quantity: number,
  ids: Ids,
  sequence: Array<number> = []
) => {
  if (quantity > sequence.length) {
    sequence.push(getRandomNumberFromArray(ids));
    return addItemToSequence(quantity, ids, sequence);
  }
  return sequence;
};

export const generateSequence = (score: number, ids: Ids): Ids => {
  const quantity = score + 1;
  return addItemToSequence(quantity, ids);
};
