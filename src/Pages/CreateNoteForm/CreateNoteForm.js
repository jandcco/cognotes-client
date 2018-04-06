import React from "react";
import {withRouter } from "react-router-dom";
import axios from "axios";

class CreateNoteForm extends React.Component{
  constructor(props){
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNoteSubmission = this.handleNoteSubmission.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleNoteSubmission (event) {
    event.preventDefault();
    const res = await axios.post("http://cognotes.herokuapp.com/note",{
      title: this.state.title,
      text: this.state.text,
      token: this.props.token
    });
    console.log(res);
    const dashboard = {
      pathname: "/dashboard"
    };
    this.props.history.push(dashboard);
  }
  render(){
    return(
      <form>
        <p> Create a New Note</p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleInputChange}/>
        <label htmlFor="text">Text</label>
        <input
          type="textarea"
          name="text"
          onChange={this.handleInputChange}/>
        <button type="submit" onClick={this.handleNoteSubmission}>Submit</button>
      </form>
    );

  }
}

export default withRouter(CreateNoteForm);