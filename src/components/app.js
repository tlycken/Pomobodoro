import React from 'react';
import Settings from './settings/popup';

export default (props) => (
  <div id="content">
    <h1>Hello, react!</h1>
    <p><Settings linkText={<i className="glyphicon glyphicon-wrench" />} /></p>
  </div>
);
