/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const LandingMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {
  const [queryText, setQueryText] = useState("");

  return (
    <LandingMain>
      <div>Landing Page</div>
      <TextField
        label="Search"
        variant="outlined"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
    </LandingMain>
  );
};

export default LandingPage;
