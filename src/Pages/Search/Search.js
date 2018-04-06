import React from "react";
import PropTypes from "prop-types";

const Search = () => {
  return (
    <div className="group-search">
      <h1> Search </h1>
      <form>
        <input type="text" name="search-field" />
        <button>Search Note Tags</button>
        <button>Search Groups</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  loggedIn: PropTypes.bool
};
export default Search;