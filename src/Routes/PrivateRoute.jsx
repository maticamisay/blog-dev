import React from "react";
import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};
export default PrivateRoute;
