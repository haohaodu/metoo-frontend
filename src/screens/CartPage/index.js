/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

import store from "store";

import { DetailsMain } from "../ProductDetail/styles";
import { HeaderTwo } from "constants/fonts";
import { HeaderRow, CartContainer, ButtonWrapper } from "./styles";
import Table from "components/Table";

const CartPage = () => {
  const [cart, setCart] = useState(store.get("cart"));

  const handleOrder = async () => {
    console.log("cart: ", cart);
    await axios
      .post("/orders", {
        name: "HaoHao",
        products: cart,
      })
      .then((data) => console.log("success! ", data))
      .catch((e) => {
        console.log("error params: ", e);
        console.log(e.message);
        console.log(e.errors);
        console.log(e.message.params);
      });
  };

  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Cart</HeaderTwo>
        </HeaderRow>
        {/* Table Top Row */}
        <Table cart={cart} setCart={setCart} />

        <ButtonWrapper>
          <Button onClick={handleOrder}>Checkout</Button>
        </ButtonWrapper>
      </CartContainer>
    </DetailsMain>
  );
};

export default CartPage;
