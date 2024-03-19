/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function VanCard(props) {
  const [typecolor, setTypeColor] = useState("");

  useEffect(() => {
    if (props.filter === "simple") {
      setTypeColor("orange");
    } else if (props.filter === "rugged") {
      setTypeColor("green");
    } else {
      setTypeColor("black");
    }
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="van--card">
      <img src={props.imgSrc} />
      <div className="van--details-container">
        <div className="van--name">
          <h5>{props.vanName}</h5>
          <span className={`van--type ${typecolor}`}>
            {capitalizeFirstLetter(props.filter)}
          </span>
        </div>
        <h5 className="van--price">
          ${props.price}
          <br />
          <span>/day</span>
        </h5>
      </div>
    </div>
  );
}
