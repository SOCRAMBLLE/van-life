/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const authContext = createContext();

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function useAuth() {
  const context = useContext(authContext);
  console.log("useAuth :", context);
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
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
  console.log("ProvideAuth auth: ", auth);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function PrivateRoute({ children }) {
  let { user } = useAuth();
  const location = useLocation();
  console.log("PrivateRoute auth: ", user);
  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
