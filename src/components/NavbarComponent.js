import React, { useState } from "react";
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
      <Navbar expand="lg" variant="dark" className="mb-3 w-100 Header">
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'lg'`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$'lg'`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'lg'`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#action1">Kezdőlap</Nav.Link>
                <Nav.Link href="#action2">Rólunk</Nav.Link>
                <Nav.Link href="#action2">Kutyáink</Nav.Link>
                <Nav.Link href="#action2">Hírek</Nav.Link>

                <NavDropdown
                  title="Kölykök"
                  id={`offcanvasNavbarDropdown-expand-$'lg'`}
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item href="#action3">
                    Tervezett alom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Elérhető kölykök
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Almok</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Galéria</Nav.Link>
                <Nav.Link href="#action2">Puli</Nav.Link>
                <Nav.Link href="#action2">Kapcsolat</Nav.Link>
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
