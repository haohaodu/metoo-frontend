/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import store from "store";

import { HeaderTwo } from "constants/fonts";
import { HeaderText, Logo, HeaderWrapper, LandingMain } from "./styles";
import LogoLarge from "assets/logo-large.png";
import SearchBar from "components/SearchBar";

const LandingPage = () => {
  const [queryText, setQueryText] = useState("");
  const history = useHistory();

  const handleClick = () => {
    store.set("query", queryText);
    history.push("/products");
  };

  return (
    <LandingMain>
      <HeaderWrapper>
        <HeaderText>
          <Logo src={LogoLarge} alt="logo" />
          <HeaderTwo>Metoo</HeaderTwo>
        </HeaderText>
        <SearchBar
          queryText={queryText}
          setQueryText={setQueryText}
          handleClick={handleClick}
        />
      </HeaderWrapper>
    </LandingMain>
  );
};

export default LandingPage;
