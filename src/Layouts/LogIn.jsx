import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginServices from "../services/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // error state
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(username, password);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginServices.login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user);
    } catch (e) {
      setErrorMessage("Wrong credentials");
      setUsername("");
      setPassword("");
      // quitamos el error después de 5 segundos
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center my-5 login-container">
        <Col lg={8} md={8} sm={10} xs={10}>
          <h1 className="text-center">
            ¡Bienvenido nuevamente! <br />
            Inicia sesión
          </h1>
          <Form
            className="d-flex align-items-center justify-content-center row"
            onSubmit={handleLogin}
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
    </>
  );
};

export default Login;
