import { Container } from "react-bootstrap";
import "./App.css";
import UsersList from "./components/UsersList";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <main>
      {/* React ⚛️ + Vite ⚡ + Replit */}
      <Container fluid className="mt-4 mb-3">
        <UsersList />
      </Container>
    </main>
  );
}
