import React from "react";
import { Container, Row } from "react-bootstrap";
import TagLayout from "../Layouts/TagLayout";

const ContainerTag = ({ children }) => {
  return <TagLayout>{children}</TagLayout>;
};

export default ContainerTag;
