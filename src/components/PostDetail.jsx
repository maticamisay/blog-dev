import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import postService from "../services/posts";
import "../styles/postDetail.css";
const PostDetail = () => {
  const { postId } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      setData(initialPosts.find((post) => post.id == postId));
    });
  }, [postId]);
  function createMarkup(value) {
    return { __html: value };
  }
  return (
    <Container className="post-detail">
      <h1
        dangerouslySetInnerHTML={createMarkup(data.title)}
        className="post-detail-title"
      ></h1>
      <p
        dangerouslySetInnerHTML={createMarkup(data.content)}
        className="post-detail-content"
      />
    </Container>
  );
};

export default PostDetail;
