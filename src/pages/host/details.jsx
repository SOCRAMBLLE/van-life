/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(props) {
  const currentVan = useOutletContext();
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
