import React from "react";
import { Button, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const PostLayout = ({ children, title, titleBtn }) => {
  return (
    <Container className="post-layout text-center">
      <h2>{title}</h2>
      <Container>{children}</Container>
      <div className="btn-container">
        <Col lg={6} md={4} sm={12} xs={10} className="btn-container-col">
          <Button className="btn-more">{titleBtn}</Button>
        </Col>
      </div>
    </Container>
  );
};

export default PostLayout;
