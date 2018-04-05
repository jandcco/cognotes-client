import React from "react";
import PropTypes from "prop-types";
// import LogInForm from "../LogInForm/LogInForm";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* <LogInForm loggedIn={props.loggedIn}/> */}
      <Link to="/log-in" >Log In</Link>
      <Link to="/register" >Sign Up</Link>
    </div>
  );
};

Navbar.propTypes = {
  loggedIn: PropTypes.bool
};
export default Navbar;