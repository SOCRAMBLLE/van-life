import { useContext, useEffect, useState } from "react";
import {
  Link,
  useSearchParams,
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext, useAuth } from "../lib/auth";
import { LoginUser } from "../lib/api";

export async function Action({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const pass = formData.get("password");
    const data = await LoginUser(email, pass);
    if (data) {
      return { success: true, user: data };
    }
    return { error: "Unknown error when trying to login" };
  } catch (err) {
    return { error: err.message || "Unknown error when trying to login" };
  }
}

export default function LoginPage() {
  const auth = useAuth();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const authData = useActionData();
  const [searchParams] = useSearchParams();
  const loginParams = searchParams.get("login");
  const redirectParams = searchParams.get("redirectTo");
  const [formStatus, setFormStatus] = useState(navigation.state);
  const [formError, setFormError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginSuccess = () => {
    const path = redirectParams || "/host";
    auth.signin(authData.user, () => navigate(path, { replace: true }));
  };

  const handleLogout = () => {
    auth.signout(() => navigate("/", { replace: true }));
  };

  useEffect(() => {
    if (authData?.success) {
      handleLoginSuccess();
    } else if (authData?.error) {
      setFormError(authData);
      setErrorMessage(authData.error);
    }
  }, [authData]);

  const handleChange = () => {
    setFormStatus("idle");
    setFormError(null);
  };

  if (!user) {
    return (
      <div className="login-page--container">
        {loginParams ? (
          <h1>
            {`You're not logged in.`}
            <br />
            Please sign in first.
          </h1>
        ) : (
          <h1>Sign in to your account</h1>
        )}
        {errorMessage && (
          <pre className="login-page--error-txt">{errorMessage}</pre>
        )}
        <Form method="post" onChange={handleChange} replace>
          <input name="email" type="email" placeholder="Email address" />
          <input name="password" type="password" placeholder="Password" />
          <button
            disabled={formStatus === "submitting" || !!formError}
            className={
              formStatus === "submitting" || formError ? "disabled" : ""
            }
          >
            {formStatus === "submitting"
              ? "Logging in..."
              : formError
              ? "Login failed"
              : "Log in"}
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
      <h2>You are logged in with the email:</h2>
      <i>{user.email}</i>
      <button className="login-page--logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
