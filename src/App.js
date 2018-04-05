import React, { Component} from "react";
import Message from "./Components/Message/Message.js";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import getUsers from "./actions/getUsers";
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
        <LogIn setWebToken={this.setWebToken}/>
        <Register />
        <h1> Hello, World! </h1>
        <Message message="Welcome to the react-starter. Start hacking away!" />
        <button onClick={() => {
          getUsers(this.state.token);
        }}>Get Users</button>
      </div>
    );
  }
}

export default App;