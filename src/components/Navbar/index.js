import React, { useState } from 'react';
import {
  Nav, NavLink, Bars, NavMenu, Close, PopUpNav,
} from './NavbarStyle';

function Navbar() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <Nav>
        {popUp
          ? (
            <>
              <Close onClick={() => setPopUp(false)} />
              <PopUpNav>
                <NavLink to="/" onClick={() => setPopUp(false)}>
                  Home
                </NavLink>
                <NavLink to="/country" activestyle="true" onClick={() => setPopUp(false)}>
                  Country
                </NavLink>
              </PopUpNav>
            </>
          )
          : <Bars onClick={() => setPopUp(true)} />}
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/country" activestyle="true">
            Country
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
