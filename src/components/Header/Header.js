import React from 'react';
import { Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
            <Navbar className="mt-5 container-fluid " sticky="top" collapseOnSelect expand="lg" bg="success" variant="dark">
  <Navbar.Brand > <h1>Let's Go</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav >
      <Nav.Link   > <Link to="/home">  <h5 className="nav-link" style={{color:'white', textDecoration:'none'}}>Home</h5></Link> </Nav.Link> 
      <Nav.Link >  </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    );
};

export default Header;