import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe('Characters Component', () => {
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
