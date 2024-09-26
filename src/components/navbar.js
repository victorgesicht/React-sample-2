
import {Navbar, Nav, Container} from 'react-bootstrap';


export const NavBar =()=>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <span>
      You are not wondering what I watch and rewatch I bet...<br></br>
        <Navbar.Brand href="#home">Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Silicon-Valley</Nav.Link> <br></br>
            <Nav.Link href="#link">Pluto</Nav.Link> <br></br>
            <Nav.Link href="#link">Hiro Shishigami</Nav.Link> <br></br>
            <Nav.Link href="#link">Naruto</Nav.Link> <br></br>
          
          </Nav>
        </Navbar.Collapse>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;