/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function VCardHost(props) {
  return (
    <Link to={`/host/editvan/${props.id}`}>
      <div className="host-vcard--container">
        <img src={props.imageUrl} />
        <div className="host-vcard--details">
          <h4>{props.name}</h4>
          <span>${props.price}/day</span>
        </div>
      </div>
    </Link>
  );
}
