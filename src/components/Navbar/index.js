// components/Navbar/index.js

import React from "react"
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          {/* <NavLink to="/ActLes09">Activity-01</NavLink>
          <NavLink to="Page3/">Quiz3</NavLink> */}
          <NavLink to="/Pset1">Pset1</NavLink>
          <NavLink to="/Act01">Act01</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
