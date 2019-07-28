import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickCharacter } from '../store/actions/game';
import { fetchCharacters } from '../store/actions/character';
import CharactersComponent from '../components/Characters/Characters';

const mapStateToProps = state => {
  console.log(state);

  return state.characters;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickCharacter,
      fetchCharacters
    },
    dispatch
  );

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersComponent);

export default CharactersContainer;
