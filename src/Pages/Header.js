import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">AlphaBit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Categories</Nav.Link>
            <Nav.Link href="/SubCat">Sub Categories</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
