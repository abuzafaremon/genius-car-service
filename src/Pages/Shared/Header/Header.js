import logo from '../../../images/logo.png'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='w-50' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#experts">Experts</Nav.Link>
              {user && <>
                <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              </>}
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {user ? <button className='btn btn-link text-light text-decoration-none' onClick={handleSignOut}>Sign out</button> :
                <Nav.Link as={Link} eventKey={2} to="/login">
                  Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;