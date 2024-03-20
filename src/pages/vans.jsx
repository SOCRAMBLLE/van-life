import { useEffect, useState } from "react";
import VanCard from "../components/vanCard";
import { useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vansData, setVansData] = useState(null);
  const [vanFilter, setVanFilter] = useSearchParams();

  const typeFilter = vanFilter.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const filteredVans = typeFilter
    ? vansData?.filter((van) => van.type === typeFilter)
    : vansData;

  // function genNewFilterParam(key, value) {
  //   const filterParam = new URLSearchParams(vanFilter);
  //   if (!value) {
  //     filterParam.delete(key);
  //   } else {
  //     filterParam.set(key, value);
  //   }
  //   return `?${filterParam.toString()}`;
  // }

  function handleFilterChange(key, value) {
    setVanFilter((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <main className="vanspage--container">
      <h2>Explore our van options</h2>
      <div className="vanspage--filter">
        <div className="vanspage--filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`simple ${typeFilter === "simple" && "active"}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`luxury ${typeFilter === "luxury" && "active"}`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`rugged ${typeFilter === "rugged" && "active"}`}
          >
            Rugged
          </button>
        </div>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="vanspage--filter-clear"
          >
            Clear filter
          </button>
        )}
      </div>
      {vansData ? (
        <section className="vanspage--vanscontainer">
          {filteredVans.map((van) => (
            <VanCard
              id={van.id}
              key={van.id}
              filter={van.type}
              imgSrc={van.imageUrl}
              vanName={van.name}
              price={van.price}
              searchParams={{ search: `?${vanFilter.toString()}` }}
            />
          ))}
        </section>
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </main>
  );
}
