import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import TypeButton from "../../components/type-button";
import { getHostVans } from "../../lib/getVans";

export function loader({ params }) {
  return getHostVans(params.id);
}

export default function EditVanDetails() {
  const currentVan = useLoaderData();
  return (
    <div className="host-editvans--page">
      <span className="van-detail--backbutton">
        ⬅ <Link to="..">Back to all vans</Link>
      </span>
      {currentVan ? (
        <div className="host-editvans-van--container">
          <div className="host-editvans-van--header">
            <img src={currentVan.imageUrl} />
            <div>
              <TypeButton filter={currentVan.type} />
              <h2>{currentVan.name}</h2>
              <h3>
                ${currentVan.price}
                <span className="price-tag--day">/day</span>
              </h3>
            </div>
          </div>
          <nav className="host-editvans-van--nav">
            <NavLink
              end
              className={({ isActive }) => isActive && "active"}
              to="."
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
}
