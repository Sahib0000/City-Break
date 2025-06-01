import { useNavigate, useLocation } from "react-router-dom";
import "../styles/styles.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainLinks = [
    { path: "/", label: "Home" },
    { path: "/pubcrawl", label: "Pub Crawl" },
    { path: "/activity", label: "Activity" },
    { path: "/hotel", label: "Hotel" },
  ];

  const authLinks = [
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">City Break</div>

      <nav className="sidebar-nav">
        <div className="sidebar-main">
          {mainLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="sidebar-auth">
          {authLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
