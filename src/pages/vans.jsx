import { useEffect, useState } from "react";
import VanCard from "../components/vanCard";

export default function Vans() {
  const [vansData, setVansData] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);
  return (
    <main className="vanspage--container">
      <h2>Explore our van options</h2>
      <div className="vanspage--filter">
        <div className="vanspage--filter-buttons">
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
        </div>
        <button className="vanspage--filter-clear">Clear filters</button>
      </div>
      {vansData ? (
        <section className="vanspage--vanscontainer">
          {vansData.map((van) => (
            <VanCard
              id={van.id}
              key={van.id}
              filter={van.type}
              imgSrc={van.imageUrl}
              vanName={van.name}
              price={van.price}
            />
          ))}
        </section>
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </main>
  );
}
