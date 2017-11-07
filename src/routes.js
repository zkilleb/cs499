import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Contact from './components/views/App';

export default (
  <Route path='/' component={App}>
  <Route path='contact' component={Contact} />
  </Route>
);