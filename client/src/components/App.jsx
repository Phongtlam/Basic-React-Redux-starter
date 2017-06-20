import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import first_action from '../redux/actions/first_action';


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
        <h1>HOT RELOAD WORKS!</h1>
      </div>
    );
  }
}


export default App;
