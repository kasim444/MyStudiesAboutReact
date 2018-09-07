import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import News from './News';
import Profile from "./Profile";
import NotFound from "./NotFound";



class App extends Component {
  state = {
    loggedIn: false
  };
  onClick = () => {
    this.setState( prevState => ({ 
      loggedIn: !prevState.loggedIn
     }) );
  };
  render() {
  return <div className="App">
      <Router>
        <div>
          <NavLink activeClassName="activeLink" exact to="/">Home</NavLink><br />
          <NavLink activeClassName="activeLink" exact to="/news/1"> News</NavLink><br/>
          <NavLink activeClassName="activeLink" exact   to="/profile">Profile</NavLink><br />
          <NavLink activeClassName="activeLink" exact to="/contact">Contact</NavLink><br /><br />

          <input onClick={this.onClick} type="button" value= {this.state.loggedIn ? 'Log Out' : 'Log In'}/>
        <Switch>
          <Route path="/" exact strict render={() => {
              return <h1>Heyyo Home</h1>;
            }} />
          <Route path="/contact" exact strict render={() => {
              return <h1>Heyyo Contact</h1>;
            }} />
          <Route path="/profile" render={ () => (
          this.state.loggedIn ? (<Profile />) : (<Redirect to="/" />) )
          } />
          <Route path="/news/:id" component={News} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    </div>;
  }
}

export default App;
