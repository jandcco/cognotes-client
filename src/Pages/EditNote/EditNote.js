import React from "react";
import {withRouter } from "react-router-dom";
import axios from "axios";

class EditNote extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      text: "",
      title: ""
    })
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditSubmission = this.handleEditSubmission.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async componentDidMount(){
    await this.prepopulateFields();
  }

  async prepopulateFields(){
    console.log(this.props);
    const noteDetails = await axios.get(`http://localhost:3001/note?id=${this.props.match.params.id}`);
    console.log(noteDetails);
    this.content.value = noteDetails.data.text;
    this.title.value = noteDetails.data.title;
  }

  async handleEditSubmission (event) {
    event.preventDefault();
    console.log(this.content)
    const res = await axios.put(`http://localhost:3001/note/${this.props.match.params.id}`,{
      updatedTitle: this.title.value,
      updatedText: this.content.value,
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
        <p>Edit Note</p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleInputChange}
          ref={(input) => this.title = input}/>
        <label htmlFor="text">Text</label>
        <input
          type="textarea"
          name="text"
          onChange={this.handleInputChange}
          ref={(input) => this.content = input}/>
        <button type="submit" onClick={this.handleEditSubmission}>Submit</button>
      </form>
    );

  }
}

export default withRouter(EditNote);