/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import TypeButton from "./type-button";

export default function VanCard(props) {
  return (
    <Link
      to={`/vans/${props.id}`}
      aria-label={`View details for ${props.vanName}, 
    priced at $${props.price} per day`}
    >
      <div className="van--card">
        <img src={props.imgSrc} />
        <div className="van--details-container">
          <div className="van--name">
            <h5>{props.vanName}</h5>
            <TypeButton filter={props.filter} />
          </div>
          <h5 className="van--price">
            ${props.price}
            <br />
            <span>/day</span>
          </h5>
        </div>
      </div>
    </Link>
  );
}
