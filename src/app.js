import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UsecaseCard from './components/Usecase';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainComponent = ({props}) => (
  <div>
    Hello from MEAN Stack Test Project
    <UsecaseCard />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

console.log("MEAN Stack test project started");
