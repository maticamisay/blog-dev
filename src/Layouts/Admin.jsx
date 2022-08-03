import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LoginContext from "../context/LoginContext";

const Admin = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Container className="d-flex justify-content-center my-5 login-container">
      {isLoggedIn ? (
        <>
          <Container className="text-center">
            <h1 className="text-center">Admin Panel</h1>
            <h2>¿Que deseas hacer?</h2>
            <Container className="d-grid pt-3">
              <Row className="justify-content-center">
                <Col 
                className="row gap-3"
                lg={6} md={8} sm={10} xs={12}
                >
                  <Button variant="outline-primary">Crear un nuevo Post</Button>
                  <Button variant="outline-dark">Ver mis Posts</Button>
                  <Button variant="outline-primary">Ver mi perfil</Button>
                  <Button variant="outline-dark">Ver mis notas</Button>
                </Col>
              </Row>
            </Container>
          </Container>
        </>
      ) : (
        <h1 className="text-center">
          Tiene que iniciar sesión para ver este contenido
        </h1>
      )}
    </Container>
  );
};

export default Admin;
