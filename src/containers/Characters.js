import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickCharacter } from '../store/actions/game';
import CharactersComponent from '../components/Characters/Characters';

const mapStateToProps = state => {
  console.log(state);

  return state.characters;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickCharacter
    },
    dispatch
  );

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersComponent);

export default CharactersContainer;
