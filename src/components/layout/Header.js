import React from "react";
import { Link, NavLink } from "react-router-dom";

// import Link from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="navbar Nav navbar-expand-lg fixed-top text-muted bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-center">Developoment</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-primary me-auto text-light mx-auto mb-2 mb-lg-0">
              {/*<li className="nav-item">*/}
              {/*    <NavLink className="nav-link" to="/" style={*/}
              {/*        ({ isActive }) => ({*/}
              {/*        color: isActive ? 'black' : 'gray' })*/}
              {/*    }*/}
              {/*>*/}
              {/*        Home 1*/}
              {/*    </NavLink>*/}
              {/*</li>*/}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/news"
                >
                  News
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
