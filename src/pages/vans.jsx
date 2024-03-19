import { useEffect, useState } from "react";
import VanCard from "../components/vanCard";

export default function Vans() {
  const [vansData, setVansData] = useState(null);
  const [vanFilter, setVanFilter] = useState("all");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const filteredVans = () => {
    if (vanFilter === "all") {
      return vansData;
    } else {
      return vansData.filter((van) => van.type === vanFilter);
    }
  };
  console.log(vanFilter);
  return (
    <main className="vanspage--container">
      <h2>Explore our van options</h2>
      <div className="vanspage--filter">
        <div className="vanspage--filter-buttons">
          <button
            className={vanFilter === "simple" && "active"}
            onClick={() => setVanFilter("simple")}
          >
            Simple
          </button>
          <button
            className={vanFilter === "luxury" && "active"}
            onClick={() => setVanFilter("luxury")}
          >
            Luxury
          </button>
          <button
            className={vanFilter === "rugged" && "active"}
            onClick={() => setVanFilter("rugged")}
          >
            Rugged
          </button>
        </div>
        <button
          onClick={() => setVanFilter("all")}
          className="vanspage--filter-clear"
        >
          Clear filters
        </button>
      </div>
      {vansData ? (
        <section className="vanspage--vanscontainer">
          {filteredVans().map((van) => (
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
