import VanCard from "../components/vanCard";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../lib/getVans";
import { Suspense } from "react";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const [vanFilter, setVanFilter] = useSearchParams();
  const typeFilter = vanFilter.get("type");
  const vansData = useLoaderData();

  // filter for Links
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

  function vansList(vans) {
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    return (
      <section className="vanspage--vanscontainer">
        {filteredVans.map((van) => (
          <VanCard
            id={van.id}
            key={van.id}
            filter={van.type}
            imgSrc={van.imageUrl}
            vanName={van.name}
            price={van.price}
            searchParams={{
              search: `?${vanFilter.toString()}`,
              type: typeFilter,
            }}
          />
        ))}
      </section>
    );
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
      <Suspense fallback={<h3 className="loading">Loading...</h3>}>
        <Await resolve={vansData.vans}>{vansList}</Await>
      </Suspense>
    </main>
  );
}
