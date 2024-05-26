import "./Navber.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiGlobe } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";




const Navber = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="nav">
      <Container>
        <Navbar.Brand href="#home">
        <img src="images/logo.png" alt="" className="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="li_link">Home</Nav.Link>
            <Nav.Link href="#features" className="li_link">About us</Nav.Link>
            <Nav.Link href="#features" className="li_link">Tornament</Nav.Link>
            <Nav.Link href="#features" className="li_link">Store</Nav.Link>
            <Nav.Link href="#features" className="li_link">Team</Nav.Link>
            <Nav.Link href="#features" className="li_link">FAQ</Nav.Link>
            <Nav.Link href="#features" className="li_link">Contact Us</Nav.Link>
          </Nav>
          <div className="flex">
            <CiGlobe  className="nav_icon fast" />
            <div className="sign">
              <a href="#">
              <IoIosLogOut  className="nav_icon" />
              <span>
              Sign In
              </span>
              </a>
            </div>
            <CiSearch className="nav_icon last" />

            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}

export default Navber