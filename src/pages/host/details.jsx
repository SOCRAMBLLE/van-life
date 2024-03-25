/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(props) {
  const { van } = useOutletContext();
  return (
    <>
      {van ? (
        <p className="host-van--details">
          <strong>Name: </strong>
          {van.name}
          <br />
          <br />
          <strong>Category: </strong>
          <span>{van.type}</span>
          <br />
          <br />
          <strong>Description: </strong>
          {van.description}
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
