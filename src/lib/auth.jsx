/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
export const AuthContext = createContext();

const fakeAuth = {
  isAuthenticated: JSON.parse(localStorage.getItem("user") || false),
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
    JSON.parse(localStorage.getItem("user")) ? "user" : null
  );

  const signin = (user, cb) => {
    return fakeAuth.signin(() => {
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user.token));
      setUser(user);
      if (cb) cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      localStorage.removeItem("user");
      setUser(null);
      if (cb) cb();
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
    <Navigate
      to={`/login?login=false&redirectTo=${location.pathname}`}
      replace
      state={{ from: location }}
    />
  );
}

let currentUser = null;

const setCurrentUser = (user) => {
  currentUser = user;
};

export const GetCurrentUser = () => {
  return currentUser;
};

// export async function LoginUser(creds) {
//   const res = await fetch("/api/login", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();
//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   return data;
// }
