import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createClickCharacterAction } from '../store/actions/game';
import { fetchCharacters } from '../store/actions/character';
import CharactersComponent from '../components/Characters/Characters';

import type { State } from '../types/index';
import type { SimonProps } from '../types/simon';

const gameProps: SimonProps = [
  {
    base: '#5fd382',
    dark: '#4ca868',
    sound: 'https://simongame.s3.amazonaws.com/simonSound1.mp3'
  },
  {
    base: '#dc5245',
    dark: '#b04137',
    sound: 'https://simongame.s3.amazonaws.com/simonSound2.mp3'
  },
  {
    base: '#e6e564',
    dark: '#cfce5a',
    sound: 'https://simongame.s3.amazonaws.com/simonSound3.mp3'
  },
  {
    base: '#038fe4',
    dark: '#0272b6',
    sound: 'https://simongame.s3.amazonaws.com/simonSound4.mp3'
  }
];

const mapStateToProps = (state: State) => {
  return {
    characters: state.characters.characters,
    isUserStep: state.game.isUserStep,
    loading: state.characters.loading,
    activeCharacter: state.game.activeCharacter,
    gameProps
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickCharacter: createClickCharacterAction,
      fetchCharacters
    },
    dispatch
  );

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersComponent);

export default CharactersContainer;
