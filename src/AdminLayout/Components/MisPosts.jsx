import React from "react";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

const MisPosts = () => {
  const { user } = useContext(LoginContext);
  console.log(user);
  return (
    <>
      <h1>{user.username}</h1>
      <div>MisPosts</div>
    </>
  );
};

export default MisPosts;
