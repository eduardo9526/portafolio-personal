import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.mensaje) {
      setEnviado(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {enviado && (
              <Alert variant="success" onClose={() => setEnviado(false)} dismissible>
                ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Enviar Mensaje <i className="bi bi-send ms-1"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}