/** @format */

import React from "react";
import { HeaderFive } from "constants/fonts";
import { Link } from "react-router-dom";
import logo from "assets/logo-small.png";
import { HeaderMain, Logo, RightContainer, HeaderInner } from "./styles";

const Header = () => (
  <HeaderMain>
    <HeaderInner>
      <Logo src={logo} alt="Logo" />
      <RightContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderFive>Admin</HeaderFive>
        </Link>
      </RightContainer>
    </HeaderInner>
  </HeaderMain>
);

export default Header;
