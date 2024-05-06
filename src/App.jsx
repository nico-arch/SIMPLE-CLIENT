import "bootstrap/dist/css/bootstrap.min.css";
import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
