import React from 'react';
import { Link } from 'react-router-dom';
import Chessboard from './Chessboard';

const App = () => (
  <div>
    <nav>
      <li><Link to="/chessboard">GAME</Link></li>
    </nav>
    <Chessboard />
  </div>
);


export default App;
