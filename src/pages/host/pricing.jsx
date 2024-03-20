import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <>
      {currentVan ? (
        <h3 className="host-van--details-price">
          ${currentVan.price}
          <span className="price-tag--day">/day</span>
        </h3>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
