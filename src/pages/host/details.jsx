/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetails(props) {
  const [currentVan, setcurrentVan] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setcurrentVan(data.vans));
  }, [id]);
  return (
    <>
      {currentVan ? (
        <p className="host-van--details">
          <strong>Name: </strong>
          {currentVan.name}
          <br />
          <br />
          <strong>Category: </strong>
          <span>{currentVan.type}</span>
          <br />
          <br />
          <strong>Description: </strong>
          {currentVan.description}
          <br />
          <br />
          <strong>Visibility: </strong>
          {props.isVisible}
        </p>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
