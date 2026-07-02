import React from "react";

function Register() {

  const register = (e) => {
    e.preventDefault();
    alert("Registration Successful");
  };

  return (
    <form onSubmit={register}>
      <h2>Register</h2>

      <input type="text" placeholder="First Name" /><br /><br />

      <input type="text" placeholder="Last Name" /><br /><br />

      <input type="email" placeholder="Email" /><br /><br />

      <input type="tel" placeholder="Phone Number" /><br /><br />

      <input type="password" placeholder="Password" /><br /><br />

      <input type="password" placeholder="Confirm Password" /><br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;