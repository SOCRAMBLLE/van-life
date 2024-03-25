import {
  Await,
  Link,
  NavLink,
  Outlet,
  defer,
  useLoaderData,
} from "react-router-dom";
import TypeButton from "../../components/type-button";
import { getHostVan } from "../../lib/api";
import { Suspense } from "react";

export async function loader({ params }) {
  return defer({ van: getHostVan(params.id) });
}

export default function EditVanDetails() {
  const currentVan = useLoaderData();

  function vanDetail(van) {
    return (
      <div className="host-editvans-van--container">
        <div className="host-editvans-van--header">
          <img src={van.imageUrl} />
          <div>
            <TypeButton filter={van.type} />
            <h2>{van.name}</h2>
            <h3>
              ${van.price}
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
        <Outlet context={{ van }} />
      </div>
    );
  }

  return (
    <div className="host-editvans--page">
      <span className="van-detail--backbutton">
        ⬅ <Link to="..">Back to all vans</Link>
      </span>
      <Suspense fallback={<h3 className="loading">Loading...</h3>}>
        <Await resolve={currentVan.van}>{vanDetail}</Await>
      </Suspense>
    </div>
  );
}
