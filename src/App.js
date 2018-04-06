import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShowGroup from "./Pages/ShowGroup/ShowGroup";
import Search from "./Pages/Search/Search"
import CreateNoteForm from "./Pages/CreateNoteForm/CreateNoteForm";
import EditNote from "./Pages/EditNote/EditNote";
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
    this.setState({
      token,
      loggedIn: true
    });
  }

  clearWebToken(){
    if (this.state.token){
      this.setState({
        token: "",
        loggedIn: false
      });
    }
  }


  render(){
    return(
      <div className="App">
        
        <Router>
          <div>
            <Navbar  loggedIn={this.state.loggedIn}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/log-in" component={()=>
                <LogIn setWebToken={this.setWebToken} />
              } />
              <Route path="/register" component={Register} />
              <Route exact path="/dashboard/note/new" component={() =>
                <CreateNoteForm token={this.state.token} />
              } />

              <Route path="/dashboard" component={()=>
                <Dashboard token={this.state.token} />} />

              <Route path="/notes/edit/:id" render={() => <EditNote token={this.state.token} />} />
              <Route path="/search" component={Search} />
              <Route path="/group/:id" component={ShowGroup} />

            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;