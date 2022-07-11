import React from "react";
import Post from "../components/Post";
import "../styles/containers/ultimosPosts.css";

const UltimosPosts = () => {
  return (
    <section>
      <h2 className="text-center">Últimos posts</h2>
      <div className="container posts-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default UltimosPosts;
