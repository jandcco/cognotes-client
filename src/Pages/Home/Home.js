import React from "react";
import PropTypes from "prop-types";
import Message from "../../Components/Message/Message";

const Home = () => {
  return (
    <div className="navbar">
      <h1> Cognotes </h1>
      <Message message="Welcome to Cognotes, a platform for sharing and comparing your notes!" />
    </div>
  );
};

Home.propTypes = {
  loggedIn: PropTypes.bool
};
export default Home;