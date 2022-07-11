import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/post.css";
import { BiLike } from "react-icons/bi";
import { IconContext } from "react-icons";

const Post = () => {
  return (
    <Card className="container bg-light">
      <Card.Body className="">
        <Card.Title className="card-title">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad soluta
          saepe inventore non autem reprehenderit, accusantium voluptatum, vitae
          iste recusandae aut minima vero sequi labore enim incidunt veniam.
          Delectus, aperiam.
        </Card.Title>
        {/* <IconContext.Provider
          
        > */}
          <a className="card-icon">
            <BiLike value={{ color: "A27B5C"}}/>
          </a>
        {/* </IconContext.Provider> */}
      </Card.Body>
      <Card.Img
        variant="top"
        src="https://miro.medium.com/max/1400/1*k7jmNNboDV1eTL51Jnyo2w.jpeg"
      />
    </Card>
  );
};

export default Post;
