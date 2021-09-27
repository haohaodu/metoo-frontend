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
  ProductContainer,
} from "./styles";
import { HeaderFive, SubtitleOne, BodyOne } from "constants/fonts";
import { white, black } from "constants/colors";

const TableSection = ({
  name,
  id,
  stock,
  price,
  quantity,
  addOneStock,
  minusOneStock,
}) => {
  return (
    quantity > 0 && (
      <div>
        <TableContainer>
          <TableWhiteDiv color={black} />
          <TableRow>
            <DescriptionColumn>
              <HeaderFive>{name}</HeaderFive>
              <BodyOne>Product Code: {id}</BodyOne>
            </DescriptionColumn>
            <ProductRowDiv>
              <QuantityContainer>
                <AddIcon onClick={addOneStock} style={{ cursor: "pointer" }} />
                {quantity}
                <RemoveIcon
                  onClick={minusOneStock}
                  style={{ cursor: "pointer" }}
                />
              </QuantityContainer>
            </ProductRowDiv>
            <ProductContainer>
              <SubtitleOne>${price}.00</SubtitleOne>
            </ProductContainer>
          </TableRow>
          <TableWhiteDiv color={white} />
        </TableContainer>
      </div>
    )
  );
};

export default TableSection;
