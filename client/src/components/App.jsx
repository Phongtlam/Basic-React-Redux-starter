import React from 'react';

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
        <h1>Item List</h1>
      </div>
    );
  }
}

export default App;
