import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const App = (props) => (
  <div className="root">
    Hello, react!
  </div>
);

App.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  settings: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default App;
