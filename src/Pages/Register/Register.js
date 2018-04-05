import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
const Register = () => {
  return (
    <div>
      <h1> Sign Up </h1>
      <RegisterForm />
    </div>
  );
};

Register.propTypes = {
  loggedIn: PropTypes.bool
};
export default Register;