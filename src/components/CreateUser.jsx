import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const CreateUser = () => {
  const createUserEndpoint = `${API_URL_V1}/add`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const payLoad = {
      name: name,
      email: email,
      city: city,
      country: country,
    };

    try {
      const res = await axios.post(createUserEndpoint, payLoad);

      if (res.data?.status === "OK") {
        // Success message and clear the data
        alert("User created successfully!");
        setName('');
        setEmail('');
        setCity('');
        setCountry('');
      } else {
        // Error message
      }
    } catch (error) {}
  };

  return (
    <Container className="mb-5 ">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitForm}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
