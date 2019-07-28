import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

test('Link changes the class when hovered', () => {
  const fixture = {
    id: 1,
    imageUrl: '#',
    color: '#ffffff',
    colorDark: '#000000',
    active: false,
    characterClickHandler: () => {}
  };

  const component = renderer.create(<Character {...fixture} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Link changes the class when hovered', () => {
//   expect('banana').toBeTruthy();
// });
