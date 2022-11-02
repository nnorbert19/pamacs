import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer w-100 m-0 p-0">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 m-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none ">
              LOGO
            </a>
            <span className="mb-3 mb-md-0">© 2022 cégnév</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">lakcím asdsa sadsa 231321</li>
            <li className="ms-3">email cím</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
