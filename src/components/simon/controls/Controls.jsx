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
  score?: number,
  isStrict?: boolean,
  isActive?: boolean,
  isOn?: boolean,
  strictClickHandler: () => void,
  startClickHandler: () => void,
  gameToggleHandler: () => void
};
const Controls = (props: Props) => {
  const {
    score,
    isStrict,
    isActive,
    isOn,
    strictClickHandler,
    startClickHandler,
    gameToggleHandler
  } = props;
  return (
    <Wrapper>
      <ScoreWrapper>
        <Score active={isOn}>{score ? score.toFixed(0) : '--'}</Score>
        <Label>COUNT</Label>
      </ScoreWrapper>
      <ActionsWrapper>
        <BtnWrapper>
          <StartBtn active={isActive} onClick={startClickHandler} />
          <BtnLabel>START</BtnLabel>
        </BtnWrapper>
        <BtnWrapper>
          <StrictBtn active={isStrict} onClick={strictClickHandler} />
          <BtnLabel>STRICT</BtnLabel>
        </BtnWrapper>
        <ToggleWrapper>
          <Label>OFF</Label>
          <SwitchWrapper onClick={gameToggleHandler}>
            <Switch active={isOn} />
          </SwitchWrapper>
          <Label>ON</Label>
        </ToggleWrapper>
      </ActionsWrapper>
    </Wrapper>
  );
};

Controls.defaultProps = {
  score: 0,
  isStrict: false,
  isActive: false,
  isOn: false
};

export default Controls;
