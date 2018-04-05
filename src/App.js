import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import "./App.css";

class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      loggedIn: false,
      token: ''
    };
    this.setWebToken = this.setWebToken.bind(this);
    this.clearWebToken = this.clearWebToken.bind(this);
  }

  setWebToken(token){
    console.log(`Token ${token} set on client`);
    this.setState({
      token
    });
  }

  clearWebToken(){
    console.log(`Token removed from client`);
    if (this.state.token){
      this.setState({
        token: ""
      });
    }
  }
  render(){
    return(
      <div className="App">
        
        <Router>
          <div>
            <Navbar loggedIn={this.state.loggedIn}/>
            {/* <div className="navbar">
            <LogIn setWebToken={this.setWebToken}/>
            <Register />
            </div> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/log-in" component={LogIn} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;