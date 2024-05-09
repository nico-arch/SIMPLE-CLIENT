import Layout from "../layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Layout>
      <h3 className="text-center">Email me</h3>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          Contact me at{" "}
          <span className="fst-italic">
            <a href={`mailto:${YOUR_EMAIL}`}>{YOUR_EMAIL}</a>
          </span>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
