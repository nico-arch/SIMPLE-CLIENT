import Layout from "../layout/Layout";
import { Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
      <h3 className="text-center">About the App</h3>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <p>
            This React app can retrieve user information, create new users, edit
            existing user details, and remove users. It is designed to fetch
            users' information from the API project:{" "}
            <a href="https://github.com/nico-arch/API-SIMPLE">
              https://github.com/nico-arch/API-SIMPLE.
            </a>
            <br />
            The source code for this React app can be found at its repository on
            GitHub:{" "}
            <a href="https://github.com/nico-arch/SIMPLE-CLIENT">
              https://github.com/nico-arch/SIMPLE-CLIENT
            </a>
            .
          </p>

          <p>
            It was created to showcase fetching
            and displaying data in a React.js application.
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutUs;
