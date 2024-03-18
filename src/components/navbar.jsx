/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./components.css";
import { useState } from "react";

export default function Navbar() {
  const [activePage, setActivePage] = useState("home");

  return (
    <nav>
      <div className="nav--brand">
        <Link to="/" onClick={() => setActivePage("home")}>
          #VANLIFE
        </Link>
      </div>
      <div className="nav--pages">
        <Link
          to="/about"
          className={activePage == "about" ? "active" : ""}
          onClick={() => setActivePage("about")}
        >
          About
        </Link>
        <Link
          to="/vans"
          className={activePage == "vans" ? "active" : ""}
          onClick={() => setActivePage("vans")}
        >
          Vans
        </Link>
      </div>
    </nav>
  );
}
