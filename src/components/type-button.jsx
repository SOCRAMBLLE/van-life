/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function TypeButton(props) {
  const [typecolor, setTypeColor] = useState("");

  useEffect(() => {
    if (props.filter === "simple") {
      setTypeColor("orange");
    } else if (props.filter === "rugged") {
      setTypeColor("green");
    } else {
      setTypeColor("black");
    }
  }, [props.filter]);

  return <span className={`van--type ${typecolor}`}>{props.filter}</span>;
}
