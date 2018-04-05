import React from "react";
import PropTypes from "prop-types";
import LogInForm from "../../Components/LogInForm/LogInForm";
const LogIn = (props) => {
  return (
    <div>
      <h1> Log In </h1>
      <LogInForm setWebToken={props.setWebToken} />
    </div>
  );
};

LogIn.propTypes = {
  loggedIn: PropTypes.bool
};
export default LogIn;