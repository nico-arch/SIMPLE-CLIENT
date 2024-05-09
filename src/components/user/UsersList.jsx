import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service";
import { toast } from "react-toastify";
//import process from "dotenv";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await userService.retrieveAllUsers();
      //console.log("Fetched data:", res.data.users); // Log fetched data
      setUsers(res.data.users);
    } catch (error) {
      if (error.response?.data?.status === false) {
        //No user found message
        const userNotFoundMessage = error.response.data.message;
        setErrorMessage(userNotFoundMessage);
        toast.warn(userNotFoundMessage);
        console.error(userNotFoundMessage);
      } else {
        const serverIsDownMessage =
          "The server is down, please try again later";
        setErrorMessage(serverIsDownMessage);
        toast.error(serverIsDownMessage);
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {errorMessage ? (
        <>
          <h3 className="text-center text-danger fw-bold mb-3">
            {errorMessage}
          </h3>
        </>
      ) : (
        <>
          <h3 className="text-center mb-3">Users</h3>
          <Container>
            {Object.values(users).map((user, index) => (
              <React.Fragment key={user.id}>
                <Row className="justify-content-center">
                  <Col lg={4}>
                    <Card className="mt-2">
                      <Card.Body>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        {user.city && user.country && (
                          <p>
                            {user.city}, {user.country}
                          </p>
                        )}
                        <Button
                          variant="secondary"
                          as={NavLink}
                          to={`edit/${user.id}`}
                        >
                          Edit user
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </React.Fragment>
            ))}
          </Container>
        </>
      )}
    </Layout>
  );
};

export default UsersList;
