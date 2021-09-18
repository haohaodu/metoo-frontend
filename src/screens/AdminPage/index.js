/** @format */

import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

import { HeaderThree } from "constants/fonts";
import { DetailsMain, DetailsContainer, Row } from "../ProductDetail/styles";
import { Section, RightColumn } from "./styles";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const history = useHistory();

  return (
    <DetailsMain>
      <DetailsContainer>
        <RightColumn style={{ paddingTop: ".5em" }}>
          <Section>
            <Row>
              <ArrowBackIcon
                onClick={() => history.goBack()}
                fontSize={"large"}
              />
              <HeaderThree>Admin - Create Product</HeaderThree>
            </Row>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="secondary"
            />
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              color="secondary"
            />
            <Row>
              <TextField
                label="Length"
                variant="outlined"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                color="secondary"
              />
              <TextField
                label="Width"
                variant="outlined"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                color="secondary"
              />
              <TextField
                label="Height"
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                color="secondary"
              />
            </Row>
            <TextField
              fullWidth
              label="Stock"
              variant="outlined"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              color="secondary"
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => console.log("Create")}
            >
              Create
            </Button>
          </Section>
        </RightColumn>
      </DetailsContainer>
    </DetailsMain>
  );
};

export default AdminPage;
