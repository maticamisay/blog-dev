import React from "react";
import { Card } from "react-bootstrap";
import '../styles/tags.css'

const Tags = ({ title }) => {
  return (
    <section className="d-flex container m-auto mt-5 tags-container">
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
