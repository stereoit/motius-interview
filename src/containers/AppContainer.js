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
    this.fetchUsecases = this.fetchUsecases.bind(this)
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

  // send data to backend server
  // on success the server will return new Usecase
  // then set state to rerender new data
  addUsecase(usecase) {
      // console.log("Adding new usecase ", JSON.stringify(usecase, null, 4));
      let {router} = this.props

      // sanity checks on provided model
      usecase.milestones = usecase.milestones || []

      this.storeUsecase(usecase)

      // show index page
      router.push("/")
  }


  // load the Usecases from remote
  fetchUsecases() {
    fetch('/api/usecases').then( response => {
      return response.json().then( usecases => {
        this.setState({
          usecases: usecases,
          loading: false
        })
      });
    });
  }

  // Store one usecase on the server
  storeUsecase(usecase) {
    // console.log("Storing usecase: ", usecase);
    let fetchUsecases = this.fetchUsecases

    this.setState({loading: true})

    fetch("/api/usecases/",  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(usecase)
    })
    .then(function(res){
      fetchUsecases()
    })
    .catch(function(res){ console.log(res) })
  }

  componentDidMount() {
    this.fetchUsecases()
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
