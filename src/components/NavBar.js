import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import './StyleNavBar.css';

const NavBar = () => {
    return (
<Navbar className="FondoNavBar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">La Naranja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;