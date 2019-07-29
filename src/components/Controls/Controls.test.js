import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('Controls Component', () => {
  const fixture = {
    score: 0,
    isActive: false,
    isOn: false,
    loading: false,
    isMachineStep: false,
    isUserStep: false,
    ids: [1, 2, 3, 4],
    isError: false,
    sequence: [1],
    toggleGame: () => {},
    initializeGame: () => {},
    nextStageGame: () => {}
  };

  it('Should render with default', () => {
    const component = renderer.create(<Controls {...fixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render toggle on', () => {
    const customFixture = { ...fixture, isOn: true };
    const component = renderer.create(<Controls {...customFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render without game active', () => {
    const customFixture = { ...fixture, isOn: true, isActive: true };
    const component = renderer.create(<Controls {...customFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render without game active and score', () => {
    const customFixture = { ...fixture, isOn: true, isActive: true, score: 10 };
    const component = renderer.create(<Controls {...customFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render blank with loading', () => {
    const customFixture = { ...fixture, loading: true };
    const component = renderer.create(<Controls {...customFixture} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
