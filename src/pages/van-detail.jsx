import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TypeButton from "../components/type-button";

export default function VanDetail() {
  const [currentVan, setcurrentVan] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setcurrentVan(data.vans));
  }, [id]);

  return (
    <main className="van-detail--container">
      <span className="van-detail--backbutton">
        ⬅ <Link to="/vans">Back to all vans</Link>
      </span>
      {currentVan ? (
        <>
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
        </>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </main>
  );
}
