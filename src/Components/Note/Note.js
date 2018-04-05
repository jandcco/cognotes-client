import React from "react";
import PropTypes from "prop-types";

const Note = (props) => {
  return (
    <div className="note">
      <p> {props.text} </p>
    </div>
  );
};

Note.propTypes = {
  text: PropTypes.string
};
export default Note;