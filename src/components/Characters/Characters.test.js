import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe('Characters Component', () => {
  const gameProps = [
    {
      base: '#5fd382',
      dark: '#4ca868',
      sound: 'https://simongame.s3.amazonaws.com/simonSound1.mp3'
    },
    {
      base: '#dc5245',
      dark: '#b04137',
      sound: 'https://simongame.s3.amazonaws.com/simonSound2.mp3'
    },
    {
      base: '#e6e564',
      dark: '#cfce5a',
      sound: 'https://simongame.s3.amazonaws.com/simonSound3.mp3'
    },
    {
      base: '#038fe4',
      dark: '#0272b6',
      sound: 'https://simongame.s3.amazonaws.com/simonSound4.mp3'
    }
  ];

  const charactersArray = [
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

  const fixture = {
    characters: charactersArray,
    loading: false,
    isUserStep: false,
    activeCharacter: 0,
    gameProps,
    clickCharacter: () => {},
    fetchCharacters: () => {}
  };

  it('Should render with 4 characters', () => {
    const component = renderer.create(<Characters {...fixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with loading', () => {
    const loadingFixture = { ...fixture, loading: true };
    const component = renderer.create(<Characters {...loadingFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render without characters', () => {
    const loadingFixture = { ...fixture, characters: [] };
    const component = renderer.create(<Characters {...loadingFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
