import React from 'react';
import { Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
            <Navbar className="mt-5" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >Let's Go</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <Nav.Link > <Link to="/home">Home</Link> </Nav.Link> 
      <Nav.Link >  </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    );
};

export default Header;