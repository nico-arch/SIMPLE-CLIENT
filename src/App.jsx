import { Container } from "react-bootstrap";
import "./App.css";
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";

import "bootstrap/dist/css/bootstrap.min.css";

import { createGlobalStyle } from "styled-components";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const BackgroundColor = createGlobalStyle`
body{
      background-color: #f2f2f2;
}
`;

export default function App() {
  return (
    <>
      {/* React ⚛️ + Vite ⚡ + Replit */}
      <BackgroundColor />
      <Container fluid className="mt-4 mb-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
