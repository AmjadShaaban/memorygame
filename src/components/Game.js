import React, { Component } from 'react';
import characters from './chars';
import Jumbotron from './Jumbotron';
import GameCards from './GameCards';

const shuffle = arr => {
  let remaining = arr.length,
    tempCard,
    randomCard;
  while (remaining) {
    randomCard = Math.floor(Math.random() * remaining--);
    tempCard = arr[remaining];
    arr[remaining] = arr[randomCard];
    arr[randomCard] = tempCard;
  }
  return arr;
};

class Game extends Component {
  state = {
    characters: shuffle(characters),
    score: 0,
    topScore: 0
  };

  handleCardClick = char => {
    if (!char.clicked) {
      char.clicked = true;
      this.CardNotClicked();
    } else {
      this.CardClicked();
    }
  };

  CardNotClicked = () => {
    const { score, topScore, characters } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;

    this.setState({
      characters: shuffle(characters),
      topScore: newTopScore,
      score: newScore
    });
  };

  CardClicked = () => {
    const resetCharList = this.state.characters.map(char => {
      char.clicked = false;
      return char;
    });
    this.setState({
      characters: shuffle(resetCharList),
      score: 0
    });
  };

  render() {
    return (
      <>
        <Jumbotron score={this.state.score} topScore={this.state.topScore} />

        <div style={userStyle}>
          <GameCards
            characters={this.state.characters}
            score={this.state.score}
            handleCardClick={this.handleCardClick}
          />
        </div>
      </>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,100px)',
  gridGap: '25px',
  alignItems: 'center'
};
export default Game;
