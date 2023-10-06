import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "bisque" }}>
            <Container>
                <Navbar.Brand href="#home">Tienda Marolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Lacteos</Nav.Link>
                        <Nav.Link href="#link">Almacen</Nav.Link>
                        <Nav.Link href="#link">Limpieza</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar