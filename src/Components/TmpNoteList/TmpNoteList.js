import React from "react";
import Note from "../Note/Note";
import {Link} from "react-router-dom";
import axios from "axios";
const TmpNoteList = (props) => {
  let notes;
  if (props.notes){
    notes = props.notes.map((note) => {
      return (
        <div key={note._id}>
          <p> {note.title} </p>
          <Link to={`/notes/edit/${note._id}`} > Edit </Link>
          <button onClick={async () => {
            await axios.delete(`http://localhost:3001/note/${note._id}?token=${props.token}`);
          }}> Delete </button>
        </div>
      );
    });
  } else {
    notes = null;
  }

  return (
    notes
  );
};

export default TmpNoteList;