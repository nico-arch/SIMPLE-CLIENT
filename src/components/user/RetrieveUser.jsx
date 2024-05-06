import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "../layout/Layout";
import * as userService from "../../service/user.service";

const RetrieveUser = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const res = await userService.retriveUser(userId);
      //console.log("Fetched data:", res.data.user); // Log fetched data
      console.log("Fetched data:", res);
      //setUser(res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <>
      <Layout>
        <h3 className="text-center mb-3">User</h3>
        {user ? (
          <Row className="justify-content-center">
            <Col lg={6}>
              <Card>
                <Card.Body className="text-center">
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
        ) : (
          <div className="text-center text-danger fw-bold">
            User cannot be found
          </div>
        )}
      </Layout>
    </>
  );
};

export default RetrieveUser;
