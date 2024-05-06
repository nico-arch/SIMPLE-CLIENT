import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout";
//import process from "dotenv";

const UsersList = () => {
  //const API_URL_V1 = process.env.API_URL_V1;

  const getAllUsers = `${API_URL_V1}/all`;

  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    try {
      const res = await axios.get(getAllUsers);
      //console.log("Fetched data:", res.data.users); // Log fetched data
      setUsers(res.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //console.log(users);
  /*const renderedUsers = Object.values(users).map((user, index) => {
    return (
      <React.Fragment key={user.id}>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }); */

  return (
    <Layout>
      <h3 className="text-center mb-3">Users</h3>
      <Container>
        {Object.values(users).map((user, index) => (
          <React.Fragment key={user.id}>
            <Row className="justify-content-center">
              <Col lg={4}>
                <Card>
                  <Card.Body>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    {user.city && user.country && (
                      <p>
                        {user.city}, {user.country}
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        ))}
      </Container>
    </Layout>
  );
};

export default UsersList;
