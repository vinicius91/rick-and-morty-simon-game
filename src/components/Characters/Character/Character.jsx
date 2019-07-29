// @flow

import * as React from 'react';
import { RegularCharacter, ActiveCharacter } from './Character.styles';

type Props = {
  id: number,
  active: boolean,
  imageUrl: string,
  color: string,
  colorDark: string,
  enabled: boolean,
  sound: string,
  characterClickHandler: (id: number) => void
};

const onClickHandler = (isEnabled, callback, id, audioRef) => {
  if (isEnabled) {
    callback(id);
    if (audioRef && audioRef.play) {
      audioRef.play();
    }
  }
};

const Character = (props: Props) => {
  let audioRef: ?HTMLAudioElement;
  const {
    characterClickHandler,
    active,
    imageUrl,
    color,
    colorDark,
    id,
    sound,
    enabled
  } = props;
  if (active) {
    return (
      <ActiveCharacter
        color={color}
        colorDark={colorDark}
        img={imageUrl}
        onClick={() => characterClickHandler(id)}
      >
        <audio src={sound} autoPlay />
      </ActiveCharacter>
    );
  }
  return (
    <RegularCharacter
      color={color}
      colorDark={colorDark}
      img={imageUrl}
      enabled={enabled}
      onClick={() =>
        onClickHandler(enabled, characterClickHandler, id, audioRef)
      }
    >
      <audio
        src={sound}
        ref={(ref: ?HTMLAudioElement) => {
          audioRef = ref;
        }}
      />
    </RegularCharacter>
  );
};

export default Character;
