/** @format */

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { DetailsMain } from "../ProductDetail/styles";
import { HeaderTwo, HeaderFive, SubtitleOne, BodyOne } from "constants/fonts";
import {
  HeaderRow,
  TableRow,
  TableHeaderDiv,
  TableSection,
  TableWhiteDiv,
  CartContainer,
  HeaderSection,
  DescriptionColumn,
  DescriptionCol,
  ProductRowDiv,
  QuantityContainer,
} from "./styles";
import Table from "components/Table";
import { white, black } from "constants/colors";

const CartPage = () => {
  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Cart</HeaderTwo>
        </HeaderRow>
        {/* Table Top Row */}
        <Table />
        <TableSection>
          <TableWhiteDiv color={black} />
          <TableRow>
            <DescriptionColumn>
              <HeaderFive>Streamline Leggings</HeaderFive>
              <BodyOne>Product Code: 1234567890</BodyOne>
            </DescriptionColumn>
            <ProductRowDiv>
              <QuantityContainer>
                <AddIcon /> 1 <RemoveIcon />
              </QuantityContainer>
              <SubtitleOne>X</SubtitleOne>
            </ProductRowDiv>
            <SubtitleOne>$55.00</SubtitleOne>
          </TableRow>
          <TableWhiteDiv color={white} />
        </TableSection>
        <TableSection>
          <TableWhiteDiv color={black} />
          <TableRow>
            <DescriptionColumn>
              <HeaderFive>Streamline Leggings</HeaderFive>
              <BodyOne>Product Code: 1234567890</BodyOne>
            </DescriptionColumn>
            <ProductRowDiv>
              <QuantityContainer>
                <AddIcon /> 1 <RemoveIcon />
              </QuantityContainer>
              <SubtitleOne>X</SubtitleOne>
            </ProductRowDiv>
            <SubtitleOne>$55.00</SubtitleOne>
          </TableRow>
          <TableWhiteDiv color={white} />
        </TableSection>
      </CartContainer>
    </DetailsMain>
  );
};

export default CartPage;
