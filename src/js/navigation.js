import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("currentUser");

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">CityBreak</div>
      <div className="nav-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/activity")}>Find an Activity</button>
        <button onClick={() => navigate("/hotel")}>Find a Hotel</button>
        <button onClick={() => navigate("/pubcrawl")}>Pub Crawl</button>
        {isLoggedIn && (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}
