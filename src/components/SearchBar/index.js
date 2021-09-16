/** @format */

import React from "react";
import { TextField, Button } from "@mui/material";
import { SearchContainer } from "./styles";

const SearchBar = ({ queryText, setQueryText, handleClick }) => {
  return (
    <SearchContainer>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
        color="secondary"
      />
      <Button
        style={{ padding: ".75em" }}
        variant="contained"
        color="primary"
        onClick={() => handleClick()}
      >
        Search
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;
