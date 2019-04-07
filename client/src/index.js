import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import New from './components/New'
import Init from './components/Init'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/new" component={New} />
      <Route path="/init" component={Init} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

