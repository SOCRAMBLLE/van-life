import { useContext, useEffect, useState } from "react";
import {
  Link,
  useSearchParams,
  Form,
  useActionData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { AuthContext, LoginUser, useAuth } from "../lib/auth";

export async function Action({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const pass = formData.get("password");
    console.log(email, pass);
    const data = await LoginUser({ email: email, password: pass });
    console.log("data: ", data);
    if (data) {
      return { success: true };
    }
    return { error: "Unknown error when trying to login" };
  } catch (err) {
    return { error: err.message || "Unknown error when trying to login" };
  }
}

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const authData = useActionData();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("login");
  const [formStatus, setFormStatus] = useState(false);
  const [formError, setFormError] = useState(null);
  console.log("formError:", formError);

  const handleLoginSuccess = () => {
    auth.signin(() => navigate("/host", { replace: true }));
  };

  const handleLogout = () => {
    auth.signout(() => navigate("/", { replace: true }));
  };

  useEffect(() => {
    if (authData?.success) {
      handleLoginSuccess();
    } else if (authData?.error) {
      setFormError(authData);
    }
  }, [authData]);

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

  if (!user) {
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
          <pre className="login-page--error-txt">{formError.error}</pre>
        )}
        <Form method="post">
          <input name="email" type="email" placeholder="Email address" />
          <input name="password" type="password" placeholder="Password" />
          <button
            disabled={formStatus}
            className={formStatus ? "disabled" : ""}
          >
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
  return (
    <div className="login-page--container">
      <h1>Welcome!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
