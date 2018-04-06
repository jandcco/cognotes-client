import React from "react";
import PropTypes from "prop-types";
// import LogInForm from "../LogInForm/LogInForm";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar">
      {
        props.loggedIn ? 
        (
         <div>
           <Link to="/search" >Search Groups or Tags</Link>
           <Link to="/logout" >Log Out</Link>
         </div>
        ) :
        (
          <div>
           <Link to="/log-in" >Log In</Link>
           <Link to="/register" >Sign Up</Link>
           </div>
        )
      }
      
    </div>
  );
};

Navbar.propTypes = {
  loggedIn: PropTypes.bool
};
export default Navbar;