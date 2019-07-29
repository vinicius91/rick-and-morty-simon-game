import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickCharacter } from '../store/actions/game';
import { fetchCharacters } from '../store/actions/character';
import CharactersComponent from '../components/Characters/Characters';

import type { State } from '../types/index';

const mapStateToProps = (state: State) => {
  return {
    characters: state.characters.characters,
    isUserStep: state.game.isUserStep,
    loading: state.characters.loading,
    activeCharacter: state.game.activeCharacter
  };
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
