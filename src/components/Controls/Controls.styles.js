import styled, { keyframes, css } from 'styled-components';

const wrapperBackground = css`
  background: #e2e2e2;
  background: -moz-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  );
  background: linear-gradient(
    135deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 );
`;

export const Wrapper = styled.div`
  ${wrapperBackground}
  margin: 10px;
  min-height: 60px;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);
`;

export const ScoreWrapper = styled.div`
  @media (max-width: 480px) {
    margin: 0px 15px;
  }
  flex-grow: 0;
  text-align: center;
`;

export const Score = styled.h1`
  color: ${props => (props.active ? '#dc0d29' : '#222')};
  transition: color 0.2s ease-in 0.1s;
  padding: 0px;
  font-size: 3em;
  height: 60px;
  width: 60px;
  background-color: #32050c;
  position: relative;
  border: 4px solid #222;
  border-radius: 10px;
  margin: auto;
`;

export const Label = styled.h3`
  @media (max-width: 400px) {
    font-size: 0.7em;
  }
  display: inline-block;
  color: #222;
  font-size: 1em;
  text-align: center;
  margin: 5px;
`;

export const ActionsWrapper = styled.div`
  flex-grow: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin-left: 10px;
`;

export const ToggleWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0;
`;

export const SwitchWrapper = styled.div`
  width: 60px;
  height: 30px;
  background-color: #32050c;
  border-radius: 2px;
  cursor: pointer;
`;

const toggleColor = keyframes`
  from {
    background-color: #dc5245;
  }
  to {
    background-color: #5fd382;
  }
`;

const toggleAnimation = css`
  transform: translateX(29px);
  animation: ${toggleColor} 1s both;
`;

export const Switch = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  background-color: #dc5245;
  border-radius: 4px;
  border: 2px solid #333;
  transition: transform 0.2s ease-in 0.1s;

  ${props => (props.active ? toggleAnimation : '')}
`;

export const BtnWrapper = styled.div`
  flex-grow: 0;
  margin: 5px 10px;
  display: inline-block;
`;

const activeButtonMixin = css`
  cursor: pointer;

  :active {
    width: 19px;
    height: 19px;
    margin-bottom: 1px;
  }
`;

export const ActionBtn = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 100%;
  border: 4px solid #333;
  box-shadow: 0px 2px 3px #222;
  margin: auto;
  top: -5px;

  ${props => (props.enabled ? activeButtonMixin : '')}
`;

export const BtnLabel = styled(Label)`
  display: block;
  margin: auto;
  font-size: 0.9em;
`;

export const StartBtn = styled(ActionBtn)`
  background-color: #9f0f17;
  ${props =>
    props.active
      ? ` box-shadow: 0 0 5px #fff, 
    inset 0 0 5px #fff, 
    0 0 10px #9f0f17,
    inset 0 0 10px #9f0f17;`
      : ''}
`;
