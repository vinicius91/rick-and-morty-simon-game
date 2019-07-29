import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toggleGame,
  toggleGameMode,
  initializeGame,
  nextStageGame
} from '../store/actions/game';

import ControlsComponent from '../components/Controls/Controls';

import type { State } from '../types/index';

const mapStateToProps = (state: State) => {
  const {
    score,
    isStrict,
    isActive,
    isOn,
    ids,
    isError,
    sequence,
    isMachineStep,
    isUserStep
  } = state.game;

  return {
    score,
    isStrict,
    isActive,
    isOn,
    ids,
    isError,
    sequence,
    isMachineStep,
    isUserStep,
    loading: state.characters.loading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleGame,
      toggleGameMode,
      initializeGame,
      nextStageGame
    },
    dispatch
  );

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlsComponent);

export default ControlsContainer;
