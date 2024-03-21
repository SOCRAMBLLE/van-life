import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav--brand">
        <NavLink to="/">#VANLIFE</NavLink>
      </div>
      <div className="nav--pages">
        <NavLink to="/host" className={({ isActive }) => isActive && "active"}>
          Host
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive && "active"}>
          About
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => isActive && "active"}>
          Vans
        </NavLink>
        <NavLink
          to="/login"
          className={`nav--login ${({ isActive }) => isActive && "active"}`}
        >
          <img src="./images/avatar-icon.png" />
        </NavLink>
      </div>
    </nav>
  );
}
