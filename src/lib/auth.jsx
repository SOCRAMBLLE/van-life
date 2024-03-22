/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

const fakeAuth = {
  isAuthenticated: JSON.parse(localStorage.getItem("loggedin") || false),
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedin")) ? "user" : null
  );

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      localStorage.setItem("loggedin", true);
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      localStorage.removeItem("loggedin");
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function PrivateRoute({ children }) {
  let { user } = useAuth();
  const location = useLocation();
  return user ? (
    children
  ) : (
    <Navigate to="/login?login=false" replace state={{ from: location }} />
  );
}

export async function LoginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }
