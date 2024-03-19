import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="host-layout">
      <div className="nav--pages">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => isActive && "active"}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => isActive && "active"}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/editvan"
          className={({ isActive }) => isActive && "active"}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => isActive && "active"}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
