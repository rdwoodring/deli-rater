import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Delis from './Delis.js';
import './index.css';

import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="delis" component={Delis} />
    </Route>
  </Router>,
  // <App />,
  document.getElementById('root')
);
