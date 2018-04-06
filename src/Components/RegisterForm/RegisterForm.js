import React from "react";
import axios from "axios";
import productionBaseURI from "../../appConfig";
class Register extends React.Component{
  constructor(props){
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegisterSubmission = this.handleRegisterSubmission.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleRegisterSubmission (event) {
    event.preventDefault();
    try{
      const res = await axios.post(`http://cognotes.herokuapp.com/users`,{
        email: this.state.email,
        password: this.state.password,
        displayName: this.state.displayName
      });
      console.log(res);
    } catch (e){
      console.log(e);
    }
    
  }
  render(){
    return(
      <form>
        <p> Register </p>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          onChange={this.handleInputChange}/>
        <label htmlFor="displayName">Display Name</label>
        <input 
          type="text" 
          name="displayName"
          onChange={this.handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password"
          onChange={this.handleInputChange}/>
        <button type="submit" onClick={this.handleRegisterSubmission}>Submit</button>
      </form>
    );
   
  }
}

export default Register;