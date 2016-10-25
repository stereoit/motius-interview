import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import UsecaseCard from './components/UsecaseCard';
import NoMatch from './components/NoMatch';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const AppLayout = ({children}) => (
  <MuiThemeProvider>
    <div>
      <div className="navigation">
        <ul>
          <li><Link to="/">Usecases</Link></li>
          <li><Link to="/addUsecase">+Add</Link></li>
        </ul>
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  </MuiThemeProvider>
);

const Home = ({props}) => (
  <div>
    <h1>Available usecases</h1>
  </div>
);

const Usecase = ({props}) => {
  return (
    <UsecaseCard />
  )
}

const AddUsecase = ({props}) => {
  return (
    <div>
    <h1>Add new usecase</h1>
    </div>
  )
}


const routes =
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="addUsecase" component={AddUsecase} />
    <Route path="*" component={NoMatch} />
  </Route>


ReactDOM.render(
  <Router history={browserHistory}  routes={routes} />,
  document.getElementById('app')
);

console.log("MEAN Stack test project started");
