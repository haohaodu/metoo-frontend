/** @format */

import React from "react";
import Rating from "@mui/material/Rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

import { HeaderFive, HeaderThree } from "constants/fonts";
import {
  DetailsMain,
  DetailsContainer,
  LeftColumn,
  RightColumn,
  Section,
  Row,
} from "./styles";

const ProductDetail = () => {
  return (
    <DetailsMain>
      <DetailsContainer>
        <LeftColumn>
          <ArrowBackIcon fontSize={"large"} style={{ marginTop: 15 }} />
        </LeftColumn>
        <RightColumn>
          <Section>
            <HeaderThree>Product Name</HeaderThree>
            <Row>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              (29)
            </Row>
          </Section>

          <Section>
            <HeaderThree>Details</HeaderThree>
            <div>
              <HeaderFive>Id: 1</HeaderFive>
              <HeaderFive>Length: l cm </HeaderFive>
              <HeaderFive>Width: w cm </HeaderFive>
              <HeaderFive>Height: h cm </HeaderFive>
              <HeaderFive>Price: 29.99</HeaderFive>
              <HeaderFive>Stock: 1</HeaderFive>
            </div>
            <Button
              variant="contained"
              onClick={() => console.log("show more")}
            >
              See Reviews
            </Button>
          </Section>
        </RightColumn>
      </DetailsContainer>
    </DetailsMain>
  );
};

export default ProductDetail;
