import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <>
      {van ? (
        <div className="host-editvans-van--photo-container">
          <img src={van.imageUrl} />
        </div>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
