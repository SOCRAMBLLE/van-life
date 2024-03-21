import { useState } from "react";
import { Link, useSearchParams, Form, useActionData } from "react-router-dom";
import { LoginUser } from "../lib/auth";

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const pass = formData.get("password");

  try {
    const data = await LoginUser({ email: email, password: pass });
    console.log(data.token);
    return data.token;
  } catch (err) {
    return err;
  }
}

export default function LoginPage() {
  const authData = useActionData();
  console.log("authData: ", authData);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("login");
  const [formStatus, setFormStatus] = useState(false);
  const [formError, setFormError] = useState(null);
  console.log(formError);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setFormError(null);
  //   setFormStatus(true);
  //   console.log("LoginFormData: ", loginFormData);
  //   try {
  //     const res = await LoginUser(loginFormData);
  //     console.log(res);
  //     setFormStatus(false);
  //   } catch (err) {
  //     console.log("catch error:", err);
  //     setFormError(err);
  //   }
  // }

  // function handleChange(e) {
  //   setFormStatus(false);
  //   setFormError(null);
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login-page--container">
      {params ? (
        <h1>
          {`You're not logged in.`}
          <br />
          Please sign in first.
        </h1>
      ) : (
        <h1>Sign in to your account</h1>
      )}
      {formError && (
        <pre className="login-page--error-txt">{formError.message}</pre>
      )}
      <Form method="post">
        <input
          name="email"
          // onChange={handleChange}
          type="email"
          placeholder="Email address"
          // value={loginFormData.email}
        />
        <input
          name="password"
          // onChange={handleChange}
          type="password"
          placeholder="Password"
          // value={loginFormData.password}
        />
        <button disabled={formStatus} className={formStatus ? "disabled" : ""}>
          {formError
            ? "Login failed"
            : formStatus
            ? "Logging in..."
            : "Sign in"}
        </button>
      </Form>
      <p className="login-page--signup-text">
        {"Don't"} have an account? <Link to="/signup">Create one now</Link>
      </p>
    </div>
  );
}
