
import { Link } from "react-router-dom";
import "../../styles/nav_bar.css";
import React, { useContext, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

export default function nav_bar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top bg-gradient">
        <div className="container-fluid justify-content-end">
          <Link className="navbar-brand navbar-right" to="/">
            Better&Beyond
          </Link>
          <ul className="nav navbar-nav navbar-right text-light">
            <li>
              <Link to="/login" >
                <span className="user-icon text-white" /><i className="fas fa-user fa-lg me-3 fa-fw"></i>
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler position-absolute top-1 start-0 m-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#4FD1C5"/>
          </button>
          <div
            className="offcanvas offcanvas-start text-light bg-dark"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-gradient">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <form className="d-flex">
                  <input
                    className="form-control me-2 bg-transparent text-white"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/private">
                    My Classes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/private">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/private">
                    Messages
                  </Link>
                </li>
                <li className="nav-item dropdown m-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </Link>
                  <ul
                    className="dropdown-menu bg-info"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Preferences
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg-info" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
