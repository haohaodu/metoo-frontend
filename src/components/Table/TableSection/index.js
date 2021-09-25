/** @format */

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  TableRow,
  TableContainer,
  TableWhiteDiv,
  DescriptionColumn,
  ProductRowDiv,
  QuantityContainer,
} from "./styles";
import { HeaderFive, SubtitleOne, BodyOne } from "constants/fonts";
import { white, black } from "constants/colors";

const TableSection = ({ title, id, quantity, price }) => {
  return (
    <div>
      <TableContainer>
        <TableWhiteDiv color={black} />
        <TableRow>
          <DescriptionColumn>
            <HeaderFive>{title}</HeaderFive>
            <BodyOne>Product Code: {id}</BodyOne>
          </DescriptionColumn>
          <ProductRowDiv>
            <QuantityContainer>
              <AddIcon /> {quantity} <RemoveIcon />
            </QuantityContainer>
            <SubtitleOne>X</SubtitleOne>
          </ProductRowDiv>
          <SubtitleOne>${price}.00</SubtitleOne>
        </TableRow>
        <TableWhiteDiv color={white} />
      </TableContainer>
    </div>
  );
};

export default TableSection;
