import React from "react";
import { Container } from "react-bootstrap";
import TopNavigation from "./TopNavigation";
import { ToastContainer } from "react-toastify";
import { createGlobalStyle } from "styled-components";

const BackgroundColor = createGlobalStyle`
body{
      background-color: #f2f2f2;
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="mb-5">
        <BackgroundColor />
        <ToastContainer position="bottom-center" />
        <TopNavigation />
        <Container className="mt-5">{children}</Container>
      </Container>
    </>
  );
};

export default Layout;
