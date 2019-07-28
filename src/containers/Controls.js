import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleGame, toggleGameMode, startGame } from '../store/actions/game';
import Controls from '../components/Controls/Controls';

const mapStateToProps = state => {
  const { score, isStrict, isActive, isOn } = state.game;
  return {
    score,
    isStrict,
    isActive,
    isOn
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleGame,
      toggleGameMode,
      startGame
    },
    dispatch
  );

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
