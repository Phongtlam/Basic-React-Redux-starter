import React from 'react';
import Board from 'react-chessdiagram';

import styles from '../styles/styles'

class Chessboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <Board
        fen={this.state.board}
        squareSize={styles.chessBoard.squareSize}
      />
    );
  }
}

export default Chessboard;

// need to import board and do move validation HotModuleReplacementPlugin
// testing
