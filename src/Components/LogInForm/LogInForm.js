import React from "react";
import {withRouter } from "react-router-dom";
import axios from "axios";

class LogInForm extends React.Component{
  constructor(props){
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleLoginSubmission (event) {
    event.preventDefault();
    console.log(process.env);
    const res = await axios.post("http://cognotes.herokuapp.com/login",{
      email: this.state.email,
      password: this.state.password
    });
    this.props.setWebToken(res.data.token);
    const dashboard = {
      pathname: "/dashboard"
    };
    this.props.history.push(dashboard);
  }
  render(){
    return(
      <form>
        <p> Log In </p>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          onChange={this.handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password"
          onChange={this.handleInputChange}/>
        <button type="submit" onClick={this.handleLoginSubmission}>Submit</button>
      </form>
    );
   
  }
}

export default withRouter(LogInForm);