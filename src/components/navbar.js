// import { useState } from "react";
import React from "react";

function Navbar(pro) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${pro.dark}`}>
      <div className={`navbar-brand ${pro.dark === "dark" ? "text-white" : ""}`} onClick={pro.darkmode} style={{cursor: 'pointer'}}>
        {pro.title}     
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <div className={`nav-link ${pro.dark === "dark" ? "text-white" : ""}`} style={{cursor: 'pointer'}}> 
              Home <span className="sr-only">(current)</span>
            </div>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${pro.dark === "dark" ? "text-white" : ""}`} href="/">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${pro.dark === "dark" ? "text-white" : ""}`} href="/">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${pro.dark === "dark" ? "text-white" : ""}`}
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${pro.dark === "dark" ? "text-white" : ""}`} href="/">
                Action
              </a>
              <a className={`dropdown-item ${pro.dark === "dark" ? "text-white" : ""}`} href="/">
                Another action
              </a>
              <a className={`dropdown-item ${pro.dark === "dark" ? "text-white" : ""}`} href="/">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Your Title Here",
};
// Navbar.prototype = {
//   title: React.PropTypes.string,
// };

export default Navbar;
