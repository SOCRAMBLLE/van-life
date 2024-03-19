import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function HostLayout() {
  const [actualPage, setActualPage] = useState("");

  let location = useLocation();
  useEffect(() => {
    let path = location.pathname;
    if (path.includes("income")) {
      setActualPage("income");
    } else if (path.includes("reviews")) {
      setActualPage("reviews");
    } else if (path.includes("editvan")) {
      setActualPage("editvan");
    } else {
      setActualPage("dashboard");
    }
  }, [location]);

  return (
    <div className="host-layout">
      <div className="nav--pages">
        <Link to="/host" className={actualPage == "dashboard" ? "active" : ""}>
          Dashboard
        </Link>
        <Link
          to="/host/income"
          className={actualPage == "income" ? "active" : ""}
        >
          Income
        </Link>
        <Link
          to="/host/editvan"
          className={actualPage == "editvan" ? "active" : ""}
        >
          Vans
        </Link>
        <Link
          to="/host/reviews"
          className={actualPage == "reviews" ? "active" : ""}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
