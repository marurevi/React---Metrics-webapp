import React from 'react';
import {
  Nav, NavLink, Bars, NavMenu,
} from './NavbarStyle';

function Navbar() {
  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/details" activeStyle>
            Details
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
          </NavLink>
        </NavMenu>

      </Nav>
    </div>
  );
}

export default Navbar;
