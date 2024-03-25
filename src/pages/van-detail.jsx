import { Link, useLoaderData, useLocation } from "react-router-dom";
import TypeButton from "../components/type-button";
import { getVans } from "../lib/api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const { state } = useLocation();
  const currentVan = useLoaderData();

  const search = state?.search || "";

  return (
    <main className="van-detail--container">
      <span className="van-detail--backbutton">
        ⬅{" "}
        <Link to={`..${search}`}>
          {`Back to ${state.type ? state.type : "all"} vans`}
        </Link>
      </span>
      <img src={currentVan.imageUrl} />
      <div className="van-detail--details">
        <TypeButton filter={currentVan.type} />
        <h2>{currentVan.name}</h2>
        <h4>
          ${currentVan.price}
          <span>/day</span>
        </h4>
        <p>{currentVan.description}</p>
      </div>
      <button>Rent this van</button>
    </main>
  );
}
