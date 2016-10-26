import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

/* AppContainer provides simple wrapper for global state and distribute the
 * Usecases data to children
 */
class AppContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      usecases: [],
      loading: true
    }

    this.addUsecase = this.addUsecase.bind(this)
  }

  // send data to backend server
  // on success the server will return new Usecase
  // then set state to rerender new data
  addUsecase(usecase) {
      console.log("Adding new usecase ", usecase);
  }

  // renders children and add several props to it
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        usecases: this.state.usecases,
        loading: this.state.loading,
        onAddUsecase: this.addUsecase
      });
    })
  }

  /* load the Usecases from remote */
  componentDidMount() {
    fetch('/api/usecases').then( response => {
      return response.json().then( usecases => {
        console.log("REPLY: ", usecases);
        this.setState({
          usecases: usecases,
          loading: false
        })
      });
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="navigation">
            <ul>
              <li><Link to="/">Usecases</Link></li>
              <li><Link to="/addUsecase">+Add</Link></li>
            </ul>
          </div>
          <div className="page-content">
            {this.renderChildren()}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}


export default AppContainer
