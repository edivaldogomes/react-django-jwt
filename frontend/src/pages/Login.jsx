import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("El email: ", email);
    console.log("El password: ", password);
    loginUser(email, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <p>Sign to your account</p>
      <form action="" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Password</label>
        <input type="password" name="password" required />

        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
        <span>
          You don't have any account; <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
