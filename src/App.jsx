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
import Layout from "./components/Layout";



const App = () => {
  return (
    <>
      {/* React ⚛️ + Vite ⚡ + Replit */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user/:userId" element={<RetrieveUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
