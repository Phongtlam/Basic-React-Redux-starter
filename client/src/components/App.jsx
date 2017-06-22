import React from 'react';
import Chessboard from './Chessboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <h1>DeepSubs!!!!</h1>
        <Chessboard />
      </div>
    );
  }
}


export default App;
