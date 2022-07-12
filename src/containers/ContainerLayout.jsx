import React from "react";
import { Button } from "react-bootstrap";

const ContainerLayout = ({ children, title, btnTitle }) => {
  return (
    <section className="container-lg mx-3 mt-5">
      <h1 className="text-center">{title}</h1>
      <div className="grid gap-3">{children}</div>

      <div className="row text-center">
        <div className="pt-4 grid container">
          <div className="g-col-sm-4"></div>
          <Button className="g-col-12 g-col-md-4 g-col-lg-4">{btnTitle}</Button>
        </div>
      </div>
    </section>
  );
};

export default ContainerLayout;
