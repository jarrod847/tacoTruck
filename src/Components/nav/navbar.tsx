import React from "react";
import truck from "../../imgs/truck.png";
import { NavBarDiv } from "../styles/navStyles";

const NavBar = () => {
  return (
    <NavBarDiv>
      <img src={truck} />
    </NavBarDiv>
  );
};

export default NavBar;
