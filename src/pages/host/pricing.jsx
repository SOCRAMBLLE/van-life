import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanPricing() {
  const [vanPrice, setvanPrice] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setvanPrice(data.vans.price));
  }, [id]);
  return (
    <>
      {vanPrice ? (
        <h3 className="host-van--details-price">
          ${vanPrice}
          <span className="price-tag--day">/day</span>
        </h3>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
