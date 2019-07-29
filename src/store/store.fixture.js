export const characterApiData = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    id: 3,
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  },
  {
    id: 4,
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }
];

export const charactersArray = [
  {
    id: 1,
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    id: 3,
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  },
  {
    id: 4,
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }
];

export const storeMock = {
  game: {
    score: 0,
    isActive: false,
    isOn: false,
    isError: false,
    isUserStep: false,
    isMachineStep: false,
    currentIndex: 0,
    activeCharacter: 0,
    sequence: [],
    ids: []
  },
  characters: { characters: [], loading: false }
};
