/** @format */

import React, { useState } from "react";
import store from "store";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { ProductMain, QueryTypes, SearchContainer } from "./styles";
import SearchBar from "components/SearchBar";
import Dropdown from "components/Dropdown";
import ProductCard from "components/ProductCard";

const ProductPage = () => {
  const [queryText, setQueryText] = useState(store.get("query"));
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("all");
  const history = useHistory();

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleClick = (newUrl, productId) => {
    store.set(
      "currProduct",
      products.find(({ id }) => productId === id)
    );
    history.push(newUrl);
  };

  const handleSearch = () => {
    const nameStr = queryText ? `name=` + queryText + `&` : ``;
    const typeStr = type === `instock` ? `instock=true` : ``;
    const queryUrl = `products?` + nameStr + typeStr;
    axios
      .get(`http://localhost:5000/` + queryUrl)
      .then(({ data: { data } }) => setProducts(data))
      .catch((e) => {
        console.log("error: ", e);
        setProducts([]);
      });
  };

  return (
    <ProductMain>
      <SearchContainer>
        <SearchBar
          queryText={queryText}
          setQueryText={setQueryText}
          handleClick={handleSearch}
        />
        <QueryTypes>
          <Dropdown value={type} handleChange={handleChangeType} />
        </QueryTypes>
        {products &&
          products.length !== 0 &&
          products.map(({ name, id, price, width, length, height, stock }) => (
            <ProductCard
              key={id}
              name={name}
              id={id}
              price={price}
              width={width}
              length={length}
              height={height}
              stock={stock}
              handleClick={handleClick}
            />
          ))}
      </SearchContainer>
    </ProductMain>
  );
};

export default ProductPage;
