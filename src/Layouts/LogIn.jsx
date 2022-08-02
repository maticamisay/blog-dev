import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../context/LoginContext";

const Login = () => {
  const { username, setUsername, password, setPassword, handleLogin } =
    useContext(LoginContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username,password);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center my-5 login-container">
      <Col lg={8} md={8} sm={10} xs={10}>
        <h1 className="text-center">
          ¡Bienvenido nuevamente! <br />
          Inicia sesión
        </h1>
        <Form
          className="d-flex align-items-center justify-content-center row"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Ingresa tu usuario"
              onChange={({ target }) => setUsername(target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={({ target }) => setPassword(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantener sesión iniciada" />
          </Form.Group>
          <Link to={"/register"} className="mb-1">
            ¿Primera vez? ¡Registrate grátis!
          </Link>
          <Link to={"/passwordForgotten"} className="mb-3">
            Olvidé mi contraseña
          </Link>
          <Col lg={8} xs={12} className="d-flex row justify-content-center">
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
