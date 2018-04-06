import React, { Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import TmpNoteList from "../../Components/TmpNoteList/TmpNoteList";
class Dashboard extends Component{
  constructor (props){
    super(props);
    this.state = {
      notes: []
    };
  }
  async getUserNotes(){
    const notes = await axios.get(`http://localhost:3001/note?token=${this.props.token}`);
    console.log(notes);
    this.setState({
      notes: notes.data
    })
  }

  async componentDidMount(){
    await this.getUserNotes();
  }
  render(){
    return(
      <div className="dashboard">
        <p> Dashboard </p>
        {/* <button> New Note </button> */}
        <Link to="/dashboard/note/new" > New Note </Link>
        <TmpNoteList token={this.props.token} notes={this.state.notes}/>
      </div>
    );
  }
}

export default Dashboard;