/** @format */

import React from "react";
import { HeaderFive } from "constants/fonts";
import { Link } from "react-router-dom";
import logo from "assets/logo-small.png";
import { HeaderMain, Logo, RightContainer } from "./styles";

const Header = () => (
  <HeaderMain>
    <Logo src={logo} alt="Logo" />
    <RightContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <HeaderFive>Admin</HeaderFive>
      </Link>
    </RightContainer>
  </HeaderMain>
);

export default Header;
