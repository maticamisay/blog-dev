import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/post.css";
import { BiLike } from "react-icons/bi";
import { IconContext } from "react-icons";

const Post = () => {
  return (
    <Card className="container bg-light post">
      <Card.Body className="post-body">
        <Card.Title className="post-title">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad soluta
          saepe inventore non autem reprehenderit, accusantium voluptatum, vitae
          iste recusandae aut minima vero sequi labore enim incidunt veniam.
          Delectus, aperiam.
        </Card.Title>
          <a className="post-icon">
            <BiLike value={{ color: "A27B5C"}}/>
          </a>
      </Card.Body>
      <Card.Img
        variant="top"
        src="https://miro.medium.com/max/1400/1*k7jmNNboDV1eTL51Jnyo2w.jpeg"
      />
    </Card>
  );
};

export default Post;
