import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import proyectosData from '../data/proyectos.json';

// PROPS: titulo (título de la sección), colorBadge (color de las etiquetas de tecnologías)
export function Proyectos({ titulo = 'Mis Proyectos', colorBadge = 'secondary' }) {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Carga dinámica de datos desde el archivo JSON
    setProyectos(proyectosData);
  }, []);

  return (
    <section id="proyectos" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">{titulo}</h2>
        <Row className="g-4">
          {proyectos.map((proyecto) => (
            <Col key={proyecto.id} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={proyecto.imagen}
                  alt={`Imagen del proyecto ${proyecto.titulo}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{proyecto.titulo}</Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {proyecto.descripcion}
                  </Card.Text>
                  <div className="mb-3">
                    {proyecto.tecnologias.map((tech, index) => (
                      <Badge bg={colorBadge} className="me-1 mb-1" key={index}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline-primary"
                    href={proyecto.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-100"
                  >
                    Ver Repositorio <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}