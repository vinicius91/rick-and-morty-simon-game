import {
  generateSequence,
  getRandomNumberFromArray,
  iterateSequence
} from './simonGame';

describe('Simon Game Structure', () => {
  it('Should tet a random number from array', () => {
    const arrayOne = [1, 2, 3, 4];
    const arrayTwo = [7, 25, 32, 40];
    const arrayThree = [51, 118, 29, 36];

    const randomOneOne = getRandomNumberFromArray(arrayOne);
    const randomOneTwo = getRandomNumberFromArray(arrayOne);

    const randomTwoOne = getRandomNumberFromArray(arrayTwo);
    const randomTwoTwo = getRandomNumberFromArray(arrayTwo);

    const randomThreeOne = getRandomNumberFromArray(arrayThree);
    const randomThreeTwo = getRandomNumberFromArray(arrayThree);

    expect(arrayOne).toContain(randomOneOne);
    expect(arrayOne).toContain(randomOneTwo);
    expect(arrayOne).not.toContain(randomTwoOne);
    expect(arrayOne).not.toContain(randomThreeTwo);

    expect(arrayTwo).toContain(randomTwoOne);
    expect(arrayTwo).toContain(randomTwoTwo);
    expect(arrayTwo).not.toContain(randomOneOne);
    expect(arrayTwo).not.toContain(randomThreeOne);

    expect(arrayThree).toContain(randomThreeOne);
    expect(arrayThree).toContain(randomThreeTwo);
    expect(arrayThree).not.toContain(randomTwoTwo);
    expect(arrayThree).not.toContain(randomOneTwo);
  });

  it('Should create a Sequence with length relative to current score', () => {
    const ids = [1, 2, 3, 4];

    const sequenceOne = generateSequence(10, ids);
    const sequenceTwo = generateSequence(7, ids);
    const sequenceThree = generateSequence(20, ids);
    const sequenceFour = generateSequence(0, ids);
    const sequenceFive = generateSequence(1, ids);

    expect(sequenceOne).toBeTruthy();
    expect(sequenceOne.length).toBe(11);
    expect(sequenceTwo).toBeTruthy();
    expect(sequenceTwo.length).toBe(8);
    expect(sequenceThree).toBeTruthy();
    expect(sequenceThree.length).toBe(21);
    expect(sequenceFour).toBeTruthy();
    expect(sequenceFour.length).toBe(1);
    expect(sequenceFive).toBeTruthy();
    expect(sequenceFive.length).toBe(2);
  });
});
