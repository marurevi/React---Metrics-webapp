import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarStyle';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
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
