import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./components.css";

export default function Navbar() {
  const [actualPage, setActualPage] = useState("");

  let location = useLocation();
  useEffect(() => {
    let path = location.pathname;
    if (path.includes("about")) {
      setActualPage("about");
    } else if (path.includes("vans")) {
      setActualPage("vans");
    } else if (path.includes("host")) {
      setActualPage("host");
    } else {
      setActualPage("");
    }
  }, [location]);

  return (
    <nav>
      <div className="nav--brand">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="nav--pages">
        <Link to="/host" className={actualPage == "host" ? "active" : ""}>
          Host
        </Link>
        <Link to="/about" className={actualPage == "about" ? "active" : ""}>
          About
        </Link>
        <Link to="/vans" className={actualPage == "vans" ? "active" : ""}>
          Vans
        </Link>
      </div>
    </nav>
  );
}
