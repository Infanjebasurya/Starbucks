import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label>USERNAME</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Email ID or Mobile Number"
            required
          />
        </div>

        <div className="input-group">
          <label>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button onClick={handleLogin} className="login-button" disabled>
          Login
        </button>
      </form>
      <div className="options">
        <a href="#">SignUp</a>
        <a href="#">Get Help</a>
      </div>
      <div className="whatsapp-login">
        <a href="#">Continue Here</a>
      </div>
    </div>
  );
};

export default Login;
