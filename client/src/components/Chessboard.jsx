import React from 'react';
import Board from 'react-chessdiagram';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { startNewGame } from '../redux/actions/index';
import styles from '../styles/styles';


const Chessboard = props => (
  <Board
    fen={props.boardState}
    squareSize={styles.board.size}
    lightSquareColor={styles.board.light}
    darkSquareColor={styles.board.dark}
  />
);

const mapStateToProps = ({ board }) => {
  const { boardState } = board;
  return {
    boardState,
  };
};

Chessboard.propTypes = {
  boardState: propTypes.string,
};
Chessboard.defaultProps = {
  boardState: '',
};

export default connect(mapStateToProps, { startNewGame })(Chessboard);
