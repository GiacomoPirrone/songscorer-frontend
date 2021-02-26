import './App.css';

import React from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Login from './Components/Login.js'
import Signup from './Components/Register.js'
import Home from './Components/Home.js'
import SearchAlbum from './Components/SearchAlbum.js'
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cookies from 'js-cookie';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path:'/rate',
    component: SearchAlbum
  }
]


class App extends React.Component {

  constructor(props){
      super(props);
      this.handleLoggedInChange = this.handleLoggedInChange.bind(this);
      this.state = {
        //If there are cookies which contain a username then the user is logged in
          loggedIn: Cookies.get('username') ? true : false
        }
  }

  handleLoggedInChange = loggedIn => {
    this.setState({ loggedIn })
  }
  
  render() {
  return (
      <Router>
        <div className="App">
          <Header loggedIn={this.state.loggedIn} handleLoggedInChange={this.handleLoggedInChange}/>
          {routes.map(({ path, component: C}) => (
            <Route
              path={path} 
              exact
              component={C}
            />
          ))}
            <Route
              path="/login"
              render={(props) => <Login {...props} loggedIn={this.state.loggedIn} handleLoggedInChange={this.handleLoggedInChange} />} 
            />
            <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
