import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="homepage--container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. <br />
        Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="vans" className="homepage--button">
        <button>Find your van</button>
      </Link>
    </main>
  );
}
