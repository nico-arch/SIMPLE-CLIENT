import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  return (
    <>
      <Navbar bg="Light" variant="Light" className="mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Simple Client
          </Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-end">
            <Nav.Link as={NavLink} to="/create">
              Create User
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/user/:userId">
              Get User
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
