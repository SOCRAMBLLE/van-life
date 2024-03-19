import { useEffect, useState } from "react";
import VanCard from "../components/vanCard";
import createServer from "../server";

export default function Vans() {
  const [vansData, setVansData] = useState();

  useEffect(() => {
    createServer;
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
    console.log(vansData);
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
      <section className="vanspage--vanscontainer">
        {vansData.map((van) => (
          <VanCard
            key={van.id}
            filter={van.type}
            imgSrc={van.imageUrl}
            vanName={van.name}
            price={van.price}
          />
        ))}
      </section>
    </main>
  );
}
