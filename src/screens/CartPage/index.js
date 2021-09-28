/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

import store from "store";

import { DetailsMain } from "../ProductPage/ProductDetail/styles";
import { HeaderTwo } from "constants/fonts";
import { HeaderRow, CartContainer, ButtonWrapper } from "./styles";
import Table from "components/Table";

const CartPage = () => {
  const [cart, setCart] = useState(store.get("cart"));
  const [submitted, setSubmitted] = useState(false);

  const handleOrder = async () => {
    console.log("cart: ", cart);
    if (cart.length === 0) return;
    await axios
      .post("/orders", {
        name: "HaoHao",
        products: cart,
      })
      .then((data) => {
        console.log("success! ", data);
        store.set("cart", []);
        setSubmitted(!submitted);
        setCart([]);
      })
      .catch((e) => console.log("error params: ", e));
  };

  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Cart</HeaderTwo>
        </HeaderRow>
        {/* Table Top Row */}
        <Table cart={cart} setCart={setCart} type={"product"} />

        <ButtonWrapper>
          {submitted ? (
            <h4>Thank you for buying with Metoo!</h4>
          ) : (
            <Button onClick={handleOrder}>Checkout</Button>
          )}
        </ButtonWrapper>
      </CartContainer>
    </DetailsMain>
  );
};

export default CartPage;
