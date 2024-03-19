import { useEffect, useState } from "react";
import VCardHost from "../../components/vanCard-host";

export default function EditVans() {
  const [vansData, setVansData] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);
  return (
    <>
      <h1>Your listed vans</h1>
      <div className="host-editvans--container">
        {vansData ? (
          vansData.map((van) => (
            <VCardHost
              id={van.id}
              key={van.id}
              imageUrl={van.imageUrl}
              name={van.name}
              price={van.price}
            />
          ))
        ) : (
          <h2 className="loading">Loading...</h2>
        )}
      </div>
    </>
  );
}
