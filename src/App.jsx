import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PubCrawl from "./pages/PubCrawl";
import Activity from "./pages/Activity";
import Hotel from "./pages/Hotel";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pubcrawl" element={<PubCrawl />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </>
  );
}
