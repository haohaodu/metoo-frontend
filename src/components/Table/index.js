/** @format */

import React from "react";
import store from "store";

import { TableSectionWrapper } from "./styles";
import TableHeader from "./TableHeader";
import TableSection from "./TableSection";

const Table = ({ cart, setCart }) => {
  const addOneStock = (index) => {
    let cartCopy = [...cart];
    cartCopy[index].quantity += 1;
    store.set("cart", cartCopy);
    setCart(cartCopy);
  };

  const minusOneStock = (index) => {
    let cartCopy = [...cart];
    cartCopy[index].quantity -= 1;
    store.set("cart", cartCopy);
    setCart(cartCopy);
  };

  return (
    <div>
      <TableHeader
        titleOne="Description"
        titleTwo="Quantity"
        titleThree="Remove"
        titleFour="Price"
      />
      <TableSectionWrapper>
        {cart.map((product, index) => {
          const { name, _id, stock, quantity, price } = product;
          return (
            <TableSection
              key={index}
              name={name}
              id={_id}
              stock={stock}
              quantity={quantity}
              price={price}
              addOneStock={() => addOneStock(index)}
              minusOneStock={() => minusOneStock(index)}
            />
          );
        })}
      </TableSectionWrapper>
    </div>
  );
};

export default Table;
