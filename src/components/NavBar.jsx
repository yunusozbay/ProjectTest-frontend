import * as React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul style={{display: "flex", gap: "50px", listStyle: "none"}}>
        <li>
          <NavLink
            to="/dogs"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All freaking dogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dogs/new"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            New dogo
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar