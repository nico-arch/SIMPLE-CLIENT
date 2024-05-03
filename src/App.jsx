import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import RetrieveUser from "./components/RetrieveUser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { createGlobalStyle } from "styled-components";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const BackgroundColor = createGlobalStyle`
body{
      background-color: #f2f2f2;
}
`;

const App = () => {
  return (
    <>
      {/* React ⚛️ + Vite ⚡ + Replit */}
      <BackgroundColor />
      <Container fluid className="mt-4 mb-3">
        <ToastContainer position="bottom-center" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/user/:id" element={<RetrieveUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
