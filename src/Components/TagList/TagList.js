import React from "react";
import PropTypes from "prop-types";

const TagList = (props) => {
  return (
    <div className="tag-list">
      {props.tags.map(tag => <span className="tag" key={tag._id}>tag.text</span>)}
    </div>
  );
};

TagList.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.array
};

export default TagList;
