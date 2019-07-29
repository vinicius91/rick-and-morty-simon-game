// @flow

import React, { Component } from 'react';
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
  BtnLabel,
  ActionsWrapper
} from './Controls.styles';
import type { Ids } from '../../types/character';
import type { ControlsProps } from '../../types/controls';

class ControlsComponent extends Component<ControlsProps> {
  audioRef: ?HTMLAudioElement;

  componentDidUpdate() {
    const {
      isMachineStep,
      isUserStep,
      score,
      ids,
      sequence,
      nextStageGame,
      isError
    } = this.props;
    if (isMachineStep && !isUserStep) {
      nextStageGame(score, ids, sequence);
    }
    if (isError) {
      if (this.audioRef && this.audioRef.play) {
        this.audioRef.play();
      }
    }
  }

  handleStartClick = (ids: Ids) => {
    const { isOn, initializeGame } = this.props;
    if (isOn) {
      initializeGame(ids);
    }
  };

  render() {
    const errorSound = 'https://simongame.s3.amazonaws.com/errorSound.mp3';
    const { score, isActive, isOn, ids, loading, toggleGame } = this.props;
    if (!loading) {
      return (
        <Wrapper>
          <audio
            ref={(audio: ?HTMLAudioElement) => {
              this.audioRef = audio;
            }}
            src={errorSound}
          />
          <ScoreWrapper>
            <Score active={isOn}>{score ? score.toFixed(0) : '--'}</Score>
            <Label>COUNT</Label>
          </ScoreWrapper>
          <ActionsWrapper>
            <BtnWrapper>
              <StartBtn
                active={isActive}
                enabled={isOn}
                onClick={() => this.handleStartClick(ids)}
              />
              <BtnLabel>START</BtnLabel>
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
    }
    return <div />;
  }
}

export default ControlsComponent;
