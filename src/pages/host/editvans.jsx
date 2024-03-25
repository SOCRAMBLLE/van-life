// import { useState } from "react";
import { Suspense } from "react";
import VCardHost from "../../components/vanCard-host";
import { getHostVans } from "../../lib/api";
import { Await, defer, useLoaderData } from "react-router-dom";

export function loader() {
  return defer({ vans: getHostVans() });
}

export default function EditVans() {
  const vansData = useLoaderData();

  function vansList(vans) {
    return (
      <div className="host-editvans--container">
        {vans.map((van) => (
          <VCardHost
            id={van.id}
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
          />
        ))}
      </div>
    );
  }
  return (
    <>
      <h1>Your listed vans</h1>
      <Suspense fallback={<h3 className="loading">Loading...</h3>}>
        <Await resolve={vansData.vans}>{vansList}</Await>
      </Suspense>
    </>
  );
}
