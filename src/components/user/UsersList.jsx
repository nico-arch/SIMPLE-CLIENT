import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service";
import { toast } from "react-toastify";

import UserCard from "./UserCard";
//import { List } from "react-content-loader";
//import process from "dotenv";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
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
        //Network error
        const serverIsDownMessage =
          "The server is down, please try again later";
        setErrorMessage(serverIsDownMessage);
        toast.error(serverIsDownMessage);
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
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
          {isLoading ? (
            //if is loadind show the spinner
            <>
              <div className="text-center">
                <Spinner animation="grow" />
                {/* <List /> */}
              </div>
            </>
          ) : (
            //else show the users list
            <>
              <h3 className="text-center mb-3">Users</h3>
              <Container>
                <Row className="justify-content-center">
                  {Object.values(users).map((user, index) => (
                    <Col lg={4} key={user.id} className="p-1">
                      <UserCard user={user} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default UsersList;
