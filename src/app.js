import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

import AppContainer from './containers/AppContainer';
import UsecaseList from './components/UsecaseList';
import UsecaseCard from './components/UsecaseCard';
import AddUsecase from './components/AddUsecase';
import NoMatch from './components/NoMatch';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const routes =
  <Route path="/" component={AppContainer}>
    <IndexRoute component={UsecaseList} />
    <Route path="addUsecase" component={AddUsecase} />
    <Route path="*" component={NoMatch} />
  </Route>


ReactDOM.render(
  <Router history={browserHistory}  routes={routes} />,
  document.getElementById('app')
);

console.log("MEAN Stack test project started");
