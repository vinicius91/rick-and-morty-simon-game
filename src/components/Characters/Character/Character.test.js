import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character Component', () => {
  const fixture = {
    id: 1,
    imageUrl: '#',
    color: '#ffffff',
    colorDark: '#000000',
    sound: '#',
    active: false,
    enabled: true,
    characterClickHandler: () => {}
  };

  it('Should render default Character', () => {
    const component = renderer.create(<Character {...fixture} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render default Active Character', () => {
    const customFixture = { ...fixture, active: true };
    const component = renderer.create(<Character {...customFixture} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render default Disabled Character', () => {
    const customFixture = { ...fixture, enabled: false };
    const component = renderer.create(<Character {...customFixture} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
