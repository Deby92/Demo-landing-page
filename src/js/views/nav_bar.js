import { Link } from "react-router-dom";
import "../../styles/nav_bar.css";
import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";

export default function nav_bar() {
  const [isOpen, setOpen] = useState(false);
  const { actions } = useContext(Context);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="containerr">
        <div className="header" />
          <input
            type="checkbox"
            className="openSidebarMenu"
            id="openSidebarMenu"
          />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1" />
              <div className="spinner horizontal" />
              <div className="spinner diagonal part-2" />
            </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner justify-content-end flex-grow-1 pe-3 mt-3 ms-3">
            <form className="d-flex">
              <input
                className="form-control me-2 bg-transparent text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
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
                Mis clases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar sesion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private">
                Mensages
              </Link>
            </li>
            <li className="nav-item dropdown m-3">
              <Link
                className="nav-link dropdown-toggle transition"
                to="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ajustes
              </Link>
              <ul
                className="dropdown-menu bg-info"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/preferences">
                    Preferencias
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/update">
                    Actualizar cuenta
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider bg-info" />
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => actions.handleLogout()}
                >
                  Cerrar sesion
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
