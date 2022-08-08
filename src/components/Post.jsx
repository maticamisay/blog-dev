import React from "react";
import { Card } from "react-bootstrap";
import "../styles/post.css";
import { BiLike } from "react-icons/bi";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Col lg={3} md={4} sm={6} xs={10}>
        <Link to={`/post/${post.id}`}>
        <Card className="g-col-12 g-col-sm-6 g-col-md-4 g-col-lg-3 bg-primary post mt-5">
          <Card.Body className="post-body">
            <Card.Title className="post-title"> {post.title}</Card.Title>
            <a className="post-icon">
              <BiLike value={{ color: "dcd7c9" }} />
            </a>
          </Card.Body>
          <Card.Img variant="top" src={post.imgSrc} />
        </Card>
    </Link>
      </Col>
  );
};

export default Post;
