import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <Navbar expand="md" variant="dark" className="w-100 Header sticky-top">
        <Container fluid>
          <Navbar.Brand className="px-2">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'sm'`} />
          <Navbar.Offcanvas
            className="offcanvas-lg"
            id={`offcanvasNavbar-expand-$'md'`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$'sm'`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Kezdőlap
                </Nav.Link>
                <Nav.Link as={Link} to="/rolunk">
                  Rólunk
                </Nav.Link>
                <Nav.Link as={Link} to="/kutyaink">
                  Kutyáink
                </Nav.Link>
                <Nav.Link as={Link} to="/hirek">
                  Hírek
                </Nav.Link>

                <NavDropdown
                  title="Kölykök"
                  id={`offcanvasNavbarDropdown1-expand-$'sm'`}
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item as={Link} to="/tervezett-alom">
                    Tervezett alom
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/elerheto-kolykok">
                    Elérhető kölykök
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/almok">
                    Almok
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/galeria">
                  Galéria
                </Nav.Link>
                <Nav.Link as={Link} to="/kapcsolat">
                  Kapcsolat
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

/*<div className="Header d-flex flex-row align-items-center justify-content-center sticky-top">
        <div className="Logo p-2"> logo</div>
        <div className="Navbar d-flex flex-column m-1">
          <ul class="navbar xl d-flex flex-row justify-content-evenly align-items-center list-unstyled p-0 m-0">
            <li>
              <a href="#">Kezdőlap</a>
            </li>
            <li>
              <a href="#">Rólunk</a>
            </li>
            <li>
              <a href="#">Kutyáink</a>
            </li>
            <li className="dropdown">
              <span>Kölykök</span>
              <div className="dropdown-content m-0 p-0">
                <ul className="w-100 m-0 p-0">
                  <li>
                    <a
                      className="justify-content-center align-items-center d-flex"
                      href="#"
                    >
                      Tervezett alom
                    </a>
                  </li>
                  <li>
                    <a
                      className="justify-content-center align-items-center d-flex"
                      href="#"
                    >
                      Elérhető kölykök
                    </a>
                  </li>
                  <li>
                    <a
                      className="justify-content-center align-items-center d-flex"
                      href="#"
                    >
                      Almok
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Hírek</a>
            </li>
            <li>
              <a href="#">Puli</a>
            </li>
            <li>
              <a href="#">Galéria</a>
            </li>
            <li>
              <a href="#">Kapcsolat</a>
            </li>
          </ul>
        </div>
      </div>*/
