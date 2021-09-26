import React from "react";

const Header = () => {
  return (
    <div className="mb-3 bg-dark">
      <h3 className="text-center text-white fw-bold">
        Company Builder <br />
        <span className="text-primary fs-6">
          (Hire Professionals As An Advisor For Your Company)
        </span>
      </h3>
      <h5 className="text-center text-danger fw-bold">
        Total Budget: 500 Million Dollar
      </h5>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto fs-6 fw-bold">
              <li className="nav-item">
                <a
                  className="nav-link text-white px-2"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="/employees">
                  Employees
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
