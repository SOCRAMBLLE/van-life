import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const isLoggedIn = searchParams.get("login");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-page--container">
      {isLoggedIn ? (
        <h1>
          {`You're not logged in.`}
          <br />
          Please sign in first.
        </h1>
      ) : (
        <h1>Sign in to your account</h1>
      )}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Sign in</button>
      </form>
      <p className="login-page--signup-text">
        {"Don't"} have an account? <Link to="/signup">Create one now</Link>
      </p>
    </div>
  );
}
