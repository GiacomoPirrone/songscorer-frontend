import './App.css';

import Header from './Components/Header.js'
import Login from './Components/Login.js'
import Signup from './Components/Register.js'
import Home from './Components/Home.js'
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
