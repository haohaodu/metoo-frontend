/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import store from "store";

import { DetailsMain } from "../../ProductPage/ProductDetail/styles";
import { HeaderTwo } from "constants/fonts";
import { HeaderRow, CartContainer } from "./styles";

const OrderDetails = () => {
  const [products, setProducts] = useState([]);
  const cart = useState(store.get("curr_order"));
  const [quantityList, setQuantityList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let promises = [];

      // get all product values
      cart[0].map(({ _id, quantity }) => {
        promises.push(axios.get(`/products/${_id}`));
        setQuantityList([...quantityList, quantity]);
        return true;
      });
      await Promise.all(promises).then((data) => {
        setProducts(data);
      });

      // get all quantity values
      let quantityCopy = [...quantityList];
      cart[0].map(({ quantity }) => quantityCopy.push(quantity));

      setQuantityList(quantityCopy);
    };
    getProducts();
  }, []);

  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Single Order</HeaderTwo>
        </HeaderRow>
        {products.map((data, index) => {
          const {
            data: {
              data: { _id, price, stock },
            },
          } = data;
          return (
            <div key={_id} style={{ margin: ".75em" }}>
              <div>Product ID: {_id}</div>
              <div>Quantity: {quantityList[index]}</div>
              <div>Price: {price}</div>
              <div>Stock: {stock}</div>
            </div>
          );
        })}
      </CartContainer>
    </DetailsMain>
  );
};

export default OrderDetails;
