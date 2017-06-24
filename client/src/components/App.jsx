import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firstActionAsync } from '../redux/actions/index';

const App = props => (
  <div>
    <button type="button" onClick={props.firstActionAsync}>firstAction</button>
    <Link to="/list">Go to List Component</Link>
  </div>
);

App.defaultProps = {
  firstActionAsync: propTypes.func,
};

App.propTypes = {
  firstActionAsync: propTypes.func,
};

export default connect(null, { firstActionAsync })(App);
