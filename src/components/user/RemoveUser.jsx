import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service";
import { getErrorMessage } from "../../helpers/string.helper";
import { Button, Form, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const RemoveUser = () => {
  const DELAY_BEFORE_REDIRECTION_MS = 2000; //Milliseconds
  const { userId } = useParams();
  const navigate = useNavigate();
  //const [user, setUser] = useState({});

  const submitAction = async (event) => {
    event.preventDefault();
    try {
      const res = await userService.removeUser(userId);

      if (res.data?.status) {
        //const message = res.data.message;
        toast.success(`User ${userId} has been deleted successfully!`);
      } else {
        toast.warn(`User ${userId} couldn't be removed!`);
      }

      setTimeout(() => {
        //window.location.href = "/";
        navigate("/", { replace: true });
      }, DELAY_BEFORE_REDIRECTION_MS);
    } catch (error) {
      toast.error(`User ${userId} cannot be removed`);
      console.log(error);
    }
  };

  const cancelAction = () => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }

    //window.location.href = "/";
  };

  return (
    <>
      <Layout>
        <h4 className="text-center">
          Are you sure to delete this user #{`${userId}`}?
        </h4>
        <Row className="justify-content-center">
          <Col md={3}>
            <Form className="mt-4 text-center">
              <Button
                variant="secondary"
                onClick={cancelAction}
                className="m-1"
              >
                No
              </Button>

              <Button variant="danger" onClick={submitAction} className="m-1">
                Yes
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default RemoveUser;
