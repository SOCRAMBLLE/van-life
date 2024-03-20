import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="error-page--container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to={"/"}>
        <button>Return to home</button>
      </Link>
    </main>
  );
}
