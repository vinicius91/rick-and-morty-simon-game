// @flow

import * as React from 'react';
import { RegularCharacter, ActiveCharacter } from './Character.styles';

type Props = {
  id: number,
  imageUrl: string,
  color: string,
  colorDark: string,
  active: boolean,
  characterClickHandler: (id: number) => void
};

const Character = (props: Props) => {
  const {
    characterClickHandler,
    active,
    imageUrl,
    color,
    colorDark,
    id
  } = props;
  if (active) {
    return (
      <ActiveCharacter
        color={color}
        colorDark={colorDark}
        img={imageUrl}
        onClick={() => characterClickHandler(id)}
      />
    );
  }
  return (
    <RegularCharacter
      color={color}
      colorDark={colorDark}
      img={imageUrl}
      onClick={() => characterClickHandler(id)}
    />
  );
};

export default Character;
