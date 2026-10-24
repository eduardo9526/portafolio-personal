import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import noticiasData from '../data/noticias.json';

// PROPS: titulo (título de la sección), limite (máximo de noticias a mostrar)
export function Noticias({ titulo = 'Últimas Noticias', limite = noticiasData.length }) {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData.slice(0, limite));
  }, [limite]);

  return (
    <section id="noticias" className="py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">{titulo}</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="mb-4 shadow-sm border-0 border-start border-primary border-4">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="mb-0 fw-bold">{noticia.titulo}</Card.Title>
                    <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{noticia.fecha}</small>
                  </div>
                  <Card.Text className="text-secondary">
                    {noticia.contenido}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}