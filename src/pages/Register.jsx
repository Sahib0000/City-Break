import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import "../styles/styles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (localStorage.getItem(username)) {
      setMessage({ type: "error", text: "User already exists." });
      return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    setMessage({ type: "success", text: "Registration successful!" });
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <PageWrapper isAuth={true} noBox={true}>
      <div className="auth-letter">
        <h1>Register</h1>
        <p className="subtitle">Create your account to get started</p>
        {message && <div className={`message ${message.type}`}>{message.text}</div>}
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Register;
