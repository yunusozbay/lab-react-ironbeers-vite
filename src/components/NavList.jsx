import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/beers"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            AllBeers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-beer"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Randombeer
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-beer">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Newbeer
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList