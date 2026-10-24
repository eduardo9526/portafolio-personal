import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// PROPS: nombre, descripcion, github (todas con valor por defecto)
export function Introduccion({
  nombre = 'Pedro',
  descripcion = 'Estudiante de Informática Duoc UC | Entusiasta de la Tecnología',
  github = 'https://github.com/pedrohacker20',
}) {
  return (
    <section id="introduccion" className="py-5 text-white bg-primary bg-gradient text-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250"
              alt={`Foto profesional de ${nombre}`}
              className="rounded-circle img-thumbnail mb-3 shadow"
              style={{ width: '160px', height: '160px', objectFit: 'cover' }}
            />
            <h1 className="fw-bold display-5">{nombre}</h1>
            <p className="lead text-light">{descripcion}</p>
            <p className="text-light opacity-75">
              <a href={github} target="_blank" rel="noreferrer" className="text-white text-decoration-underline">
                {github}
              </a>
            </p>
            <p className="px-md-5">
              ¡Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes! Explora y conoce más sobre mi trabajo en desarrollo de software.
            </p>
            <div className="d-flex justify-content-center gap-3 fs-3 mt-4">
              <a href="#contacto" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#contacto" className="text-white"><i className="bi bi-twitter-x"></i></a>
              <a href="#contacto" className="text-white"><i className="bi bi-linkedin"></i></a>
              <a href={github} target="_blank" rel="noreferrer" className="text-white"><i className="bi bi-github"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}