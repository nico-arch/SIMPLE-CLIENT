import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service";
import { getErrorMessage } from "../../helpers/string.helper";
import { NavLink } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const populateUserFields = async () => {
    try {
      const response = await userService.retriveUser(userId);

      if (response?.data.user) {
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setCity(response.data.user.city);
        setCountry(response.data.user.country);
      }
    } catch (error) {
      //console.error(error.message);
      toast.error(`User ${userId} couldn't be found.`);
      window.location.href = "/";
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const res = await userService.editUser(userId, payload);

      if (res.data?.status) {
        const username = res.data.user.name;
        toast.success(`${username} has been updated successfully!`);
      } else {
        toast.warn("Error updating user!");
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    populateUserFields();
  }, [userId]);

  return (
    <>
      <Layout>
        <h3 className="text-center">Edit User</h3>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(elName) => setName(elName.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(elEmail) => setEmail(elEmail.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(elCity) => setCity(elCity.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter country"
                  value={country}
                  onChange={(elCountry) => setCountry(elCountry.target.value)}
                />
              </Form.Group>

              <Button
                className="m-1"
                variant="primary"
                type="submit"
                onClick={submitForm}
              >
                Update
              </Button>

              <Button
                className="m-1"
                variant="danger"
                as={NavLink}
                to={`/remove/${userId}`}
              >
                Remove
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default EditUser;
