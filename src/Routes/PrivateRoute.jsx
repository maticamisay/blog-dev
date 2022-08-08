import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <>
      {loading ? (
        isLoggedIn ? (
          children
        ) : (
          <Navigate to={"/login"} replace />
        )
      ) : (
        "cargando"
      )}
    </>
  );
};
export default PrivateRoute;
