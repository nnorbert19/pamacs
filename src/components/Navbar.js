import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <div className="Header d-flex flex-row align-items-center justify-content-center sticky-top">
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
      </div>
    </>
  );
}

export default Navbar;
