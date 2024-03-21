// import { useState } from "react";
import VCardHost from "../../components/vanCard-host";
import { getHostVans } from "../../lib/getVans";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  return getHostVans();
}

export default function EditVans() {
  // const [error, setError] = useState(null);
  const vansData = useLoaderData();

  // if (error) {
  //   return <h1 className="loading">There was an error: {error.message}</h1>;
  // }
  return (
    <>
      <h1>Your listed vans</h1>
      <div className="host-editvans--container">
        {vansData.map((van) => (
          <VCardHost
            id={van.id}
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
          />
        ))}
      </div>
    </>
  );
}
