import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import "../styles/styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localStorage.getItem(username);
    if (!user) {
      setMessage({ type: "error", text: "User does not exist." });
      return;
    }

    const storedPassword = JSON.parse(user).password;
    if (storedPassword === password) {
      setMessage({ type: "success", text: "Login successful!" });
      localStorage.setItem("loggedInUser", username);
      setTimeout(() => navigate("/"), 800);
    } else {
      setMessage({ type: "error", text: "Incorrect password." });
    }
  };

  return (
    <PageWrapper isAuth={true} noBox={true}>
      <div className="auth-letter">
        <h1>Login</h1>
        <p className="subtitle">Welcome back! Please log in to continue.</p>
        {message && <div className={`message ${message.type}`}>{message.text}</div>}
        <form onSubmit={handleLogin} className="auth-form">
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
          <button type="submit">Login</button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Login;
