/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Character from './character/Character';
import Controls from './controls/Controls';
import { Wrapper, Line } from './Simon.styles';
import { gameActions } from '../../store/actions/game';

class Simon extends Component {
  state = {
    controls: {
      score: 0,
      isStrict: false,
      isActive: false,
      isOn: false
    }
  };

  gameToggleHandler = () => {
    this.setState(state => ({
      controls: {
        ...state.controls,
        isOn: !state.controls.isOn
      }
    }));
  };

  startClickHandler = () => {
    this.props.startGame();
  };

  strictClickHandler = () => {
    this.setState(state => ({
      controls: {
        ...state.controls,
        isStrict: !state.controls.isStrict
      }
    }));
  };

  characterClickHandler = (id: number) => {
    console.log('Clicked character with Id: ', id);
  };

  renderCharacters = (characters, simonColors) => {
    if (
      characters &&
      simonColors &&
      characters.length > 0 &&
      simonColors.length > 0
    ) {
      return characters.map((character, i) => (
        <Character
          imageUrl={character.imageUrl}
          id={character.id}
          key={character.id}
          color={simonColors[i].base}
          colorDark={simonColors[i].dark}
          active={false}
          characterClickHandler={this.characterClickHandler}
        />
      ));
    }
  };

  render() {
    const simonColors = [
      {
        base: '#5fd382',
        dark: '#4ca868'
      },
      {
        base: '#dc5245',
        dark: '#b04137'
      },
      {
        base: '#e6e564',
        dark: '#cfce5a'
      },
      {
        base: '#038fe4',
        dark: '#0272b6'
      }
    ];

    const {
      characters,
      game,
      toggleGame,
      toggleGameMode,
      startGame
    } = this.props;
    const { score, isStrict, isActive, isOn } = game;

    return (
      <Wrapper>
        <Line>
          <Controls
            score={score}
            isStrict={isStrict}
            isActive={isActive}
            isOn={isOn}
            strictClickHandler={toggleGameMode}
            startClickHandler={startGame}
            gameToggleHandler={toggleGame}
          />
        </Line>
        <Line>{this.renderCharacters(characters, simonColors)}</Line>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  gameActions
)(Simon);
