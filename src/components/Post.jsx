import React from "react";
import { Card } from "react-bootstrap";
import "../styles/post.css";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  function createMarkup(value) {
    return { __html: value };
  }
  const titleStart = post.title.indexOf(">");
  const titleEnd = post.title.indexOf(`/`);
  const titleSource = post.title.substring(titleStart + 1, titleEnd - 1);
  // const imgStart = post.content.indexOf("<img src=");
  // const imgEnd = post.content.indexOf(`">`);
  // const imgSource = post.content.substring(imgStart + 10, imgEnd);
  return (
    <Col lg={4} md={6} sm={10} xs={10}>
      <Link to={`/post/${post.id}`} className="post-link">
        <Card className="g-col-12 g-col-sm-6 g-col-md-4 g-col-lg-3 bg-primary post mt-5">
          <Card.Body className="post-body">
            <Card.Title
              className="post-title"
              dangerouslySetInnerHTML={createMarkup(titleSource)}
            ></Card.Title>
          </Card.Body>
          {/* <Card.Img variant="top" src={imgSource} /> */}
        </Card>
      </Link>
    </Col>
  );
};

export default Post;
