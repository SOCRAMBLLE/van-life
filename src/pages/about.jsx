import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="aboutpage--container">
      <img className="aboutpage--headerimg" src="./images/about.png" />
      <section>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="aboutpage--buttoncontainer">
          <h4>
            Your destination is waiting. <br />
            Your van is ready.
          </h4>
          <Link to="/vans">
            <button>Explore our vans</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
