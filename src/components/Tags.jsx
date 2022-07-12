import React from "react";
import { Card } from "react-bootstrap";

const Tags = ({ title }) => {
  return (
    <section className="tags-container">
      <Card className="bg-light tags">
        <Card.Body className="">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="tags-link">tag1</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="tags-link">tag2</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="tags-link">tag3</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="tags-link">tag4</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="tags-link">tag5</a>

        </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Tags;
