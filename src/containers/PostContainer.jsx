import React from "react";
import { Button } from "react-bootstrap";
import Post from "../components/Post";
import "../styles/containers/PostContainer.css";

const PostContainer = ({ title, btnTitle }) => {
  return (
    <section className="d-flex row">
      <h2 className="text-center">{title}</h2>
      <div className="container posts-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="text-center pt-4">
        <Button className="postBtn">{btnTitle}</Button>
      </div>
    </section>
  );
};

export default PostContainer;
