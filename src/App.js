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
import Dashboard from "./Pages/Dashboard/Dashboard";
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
      loggedIn: true
    })
    this.setState({
      token
    });
  }

  clearWebToken(){
    console.log(`Token removed from client`);
    this.setState({
      loggedIn: false
    })
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
            <Navbar  loggedIn={this.state.loggedIn}/>
            {/* <div className="navbar">
            <LogIn setWebToken={this.setWebToken}/>
            <Register />
            </div> */}
            <Route exact path="/" component={Home} />
            <Route path="/log-in" component={()=>
              <LogIn setWebToken={this.setWebToken} />
            } />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;