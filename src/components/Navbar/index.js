import React, { useState } from 'react';
import {
  Nav, NavLink, Bars, NavMenu, Close, PopUpNav
} from './NavbarStyle';

function Navbar() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <Nav>
        {popUp ? 
        <>
          <Close onClick={() => setPopUp(false)} />
          <PopUpNav>
            <NavLink to="/" onClick={() => setPopUp(false)}>
              Home
            </NavLink>
            <NavLink to="/details" activestyle="true" onClick={() => setPopUp(false)}>
              Details
            </NavLink>
            <NavLink to="/contact-us" activestyle="true" onClick={() => setPopUp(false)}>
              Contact us
            </NavLink>
          </PopUpNav>
        </> 
        : <Bars onClick={() => setPopUp(true)} />}
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/details" activestyle="true">
            Details
          </NavLink>
          <NavLink to="/contact-us" activestyle="true">
            Contact us
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
