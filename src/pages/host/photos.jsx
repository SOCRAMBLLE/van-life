import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanPhotos() {
  const [vanPhotos, setvanPhotos] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setvanPhotos(data.vans.imageUrl));
  }, [id]);
  console.log("vanPhotos: ", vanPhotos);
  return (
    <>
      {vanPhotos ? (
        <div className="host-editvans-van--photo-container">
          <img key={vanPhotos.indexOf()} src={vanPhotos} />
        </div>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}
