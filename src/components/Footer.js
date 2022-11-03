import React from "react";

function Footer() {
  return (
    <>
      <footer className="page-footer footer  w-100 d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 px-4 d-flex align-items-center">
          <a href="/" className="text-decoration-none ">
            LOGO
          </a>
          <span className="">© 2022 cégnév</span>
        </div>

        <ul className="nav col-md-4 px-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">email cím</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
