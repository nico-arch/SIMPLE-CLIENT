import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "./Layout";

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

      if (res.data?.status) {
        // Success message and clear the data
        const userId = res.data.user.id;
        toast.success(`User id:${userId} created successfully!`);

        //alert("User created successfully!");

        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        // Error message
        toast.warn("Error creating user!");
      }
    } catch (error) {
      const fixCap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

      const getErrorMessage = (error) => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;

        //Optional Chaining Operator ES6
        const message = body[0]?.message;
        return fixCap(message);
        //return message[0].toUpperCase() + message.substring(1);
      };

      toast.error(getErrorMessage(error));

      //console.log(payLoad);
      //console.error(error);
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(elName) => setName(elName.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(elEmail) => setEmail(elEmail.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(elCity) => setCity(elCity.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                onChange={(elCountry) => setCountry(elCountry.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitForm}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;
