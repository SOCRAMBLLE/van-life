import { useEffect, useState } from "react";
import VCardHost from "../../components/vanCard-host";
import { getVans } from "../../lib/getVans";

export default function EditVans() {
  const [vansData, setVansData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      try {
        const data = await getVans();
        setVansData(data);
      } catch (err) {
        setError(err);
      }
    }
    loadVans();
  }, []);

  if (error) {
    return <h1 className="loading">There was an error: {error.message}</h1>;
  }
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
