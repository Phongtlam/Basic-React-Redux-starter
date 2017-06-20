import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import first_action from '../redux/actions/first_action';
import Main from './Main';


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
        <h1>HOT RELOAD</h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({first_action}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

