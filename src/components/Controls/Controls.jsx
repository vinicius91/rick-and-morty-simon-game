// @flow

import * as React from 'react';
import {
  ScoreWrapper,
  Score,
  Label,
  Wrapper,
  ToggleWrapper,
  SwitchWrapper,
  Switch,
  BtnWrapper,
  StartBtn,
  StrictBtn,
  BtnLabel,
  ActionsWrapper
} from './Controls.styles';

type Props = {
  score: number,
  isStrict: boolean,
  isActive: boolean,
  isOn: boolean,
  toggleGame: () => void,
  toggleGameMode: () => void,
  startGame: () => void
};
const Controls = (props: Props) => {
  const {
    score,
    isStrict,
    isActive,
    isOn,
    toggleGame,
    toggleGameMode,
    startGame
  } = props;
  return (
    <Wrapper>
      <ScoreWrapper>
        <Score active={isOn}>{score ? score.toFixed(0) : '--'}</Score>
        <Label>COUNT</Label>
      </ScoreWrapper>
      <ActionsWrapper>
        <BtnWrapper>
          <StartBtn active={isActive} onClick={startGame} />
          <BtnLabel>START</BtnLabel>
        </BtnWrapper>
        <BtnWrapper>
          <StrictBtn active={isStrict} onClick={toggleGameMode} />
          <BtnLabel>STRICT</BtnLabel>
        </BtnWrapper>
        <ToggleWrapper>
          <Label>OFF</Label>
          <SwitchWrapper onClick={toggleGame}>
            <Switch active={isOn} />
          </SwitchWrapper>
          <Label>ON</Label>
        </ToggleWrapper>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default Controls;