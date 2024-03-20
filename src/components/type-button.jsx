/* eslint-disable react/prop-types */
export default function TypeButton(props) {
  return <span className={`van--type ${props.filter}`}>{props.filter}</span>;
}
