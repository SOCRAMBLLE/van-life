import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <>
      {currentVan ? (
        <div className="host-editvans-van--photo-container">
          <img src={currentVan.imageUrl} />
        </div>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
