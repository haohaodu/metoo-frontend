/** @format */

import React, { useState } from "react";
import store from "store";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { ProductMain, QueryTypes, SearchContainer } from "./styles";
import SearchBar from "components/SearchBar";
import Dropdown from "components/Dropdown";

const ProductPage = () => {
  const [queryText, setQueryText] = useState(store.get("query"));
  const [type, setType] = useState(10);

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleClick = () => {
    console.log("query text: ", queryText);
  };

  return (
    <ProductMain>
      <SearchContainer>
        <SearchBar
          queryText={queryText}
          setQueryText={setQueryText}
          handleClick={handleClick}
        />
        <QueryTypes>
          <Dropdown value={type} handleChange={handleChangeType} />
        </QueryTypes>
      </SearchContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Product Name" subheader="Product ID 1" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Price: $10.00 <br />
            Dimensions: 3cm by 3cm by 3cm
            <br />
            Stock: 1 <br />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button>View</Button>
        </CardActions>
      </Card>
    </ProductMain>
  );
};

export default ProductPage;
