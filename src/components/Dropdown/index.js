/** @format */

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({ value, handleChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select value={value} label="Age" onChange={handleChange}>
        <MenuItem value={10}>all</MenuItem>
        <MenuItem value={20}>in stock</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
