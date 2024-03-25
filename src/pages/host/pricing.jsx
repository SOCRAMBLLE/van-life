import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <>
      {van ? (
        <h3 className="host-van--details-price">
          ${van.price}
          <span className="price-tag--day">/day</span>
        </h3>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
