/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Character from './character/Character';
import Controls from './controls/Controls';
import { Wrapper, Line } from './Simon.styles';

class Simon extends Component {
  state = {
    controls: {
      score: 0,
      isStrict: false,
      isActive: false,
      isOn: false
    },
    characters: [
      {
        id: 1,
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
        id: 2,
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
      },
      {
        id: 3,
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
      },
      {
        id: 4,
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
      }
    ]
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
    this.setState(state => ({
      controls: {
        ...state.controls,
        isActive: !state.controls.isActive
      }
    }));
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

  renderCharacters = simonColors => {
    const { characters } = this.state;
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

    const { controls } = this.state;

    return (
      <Wrapper>
        <Line>
          <Controls
            {...controls}
            strictClickHandler={this.strictClickHandler}
            startClickHandler={this.startClickHandler}
            gameToggleHandler={this.gameToggleHandler}
          />
        </Line>
        <Line>{this.renderCharacters(simonColors)}</Line>
      </Wrapper>
    );
  }
}

export default Simon;
