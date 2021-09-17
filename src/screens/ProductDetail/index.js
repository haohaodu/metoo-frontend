/** @format */

import React, { useEffect, useState } from "react";
import store from "store";
import Rating from "@mui/material/Rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import ReviewModal from "components/ReviewModal";

import { HeaderFive, HeaderThree } from "constants/fonts";
import {
  DetailsMain,
  DetailsContainer,
  LeftColumn,
  RightColumn,
  Section,
  Row,
  BorderedSection,
} from "./styles";

const exampleProduct = {
  name: "John Doe",
  id: 1,
  price: 29.99,
  width: 1,
  length: 1,
  height: 1,
  stock: 1,
  reviews: [],
};

const ProductDetail = () => {
  const [product, setProduct] = useState(exampleProduct);
  const [rating, setRating] = useState(2.5);
  const [showReviews, setShowReviews] = useState(false);
  const { name, id, price, width, length, height, stock, reviews } = product;
  const history = useHistory();

  useEffect(() => {
    let tempRating = 0;
    reviews.map(({ rating }) => (tempRating += rating));
    setRating(() => tempRating / reviews.length);

    if (store.get("currProduct")) setProduct(store.get("currProduct"));
  }, [reviews.length]);

  return (
    <DetailsMain>
      <DetailsContainer>
        <LeftColumn>
          <ArrowBackIcon
            onClick={() => history.goBack()}
            fontSize={"large"}
            style={{ marginTop: 15, cursor: `pointer` }}
          />
        </LeftColumn>
        <RightColumn>
          <Section>
            <HeaderThree>{name}</HeaderThree>
            <Row>
              <Rating
                defaultValue={rating}
                precision={0.1}
                name="read-only"
                readOnly
              />
              ({reviews.length} ratings)
            </Row>
            <HeaderFive>Product ID #: {id}</HeaderFive>
          </Section>

          <Section>
            <HeaderThree>Details</HeaderThree>
            <div>
              <HeaderFive>Price: ${price}</HeaderFive>
              <HeaderFive>Only {stock} left in stock.</HeaderFive>
              <HeaderFive>
                Dimensions (length x width x height): {length} cm x {width} cm x{" "}
                {height} cm
              </HeaderFive>
            </div>
          </Section>

          <Row>
            <Button
              variant="contained"
              onClick={() => setShowReviews(!showReviews)}
            >
              {!showReviews ? "Show Reviews" : "Hide Reviews"}
            </Button>
            <Button
              variant="contained"
              onClick={() => setShowReviews(!showReviews)}
            >
              Leave a Review
            </Button>
          </Row>
          <ReviewModal name={name} />
          <BorderedSection>
            {showReviews &&
              reviews.length !== 0 &&
              reviews.map(({ rating, index }) => (
                <HeaderFive key={index}>
                  Annon rated Product Name {rating} out of 10 stars
                </HeaderFive>
              ))}
          </BorderedSection>
        </RightColumn>
      </DetailsContainer>
    </DetailsMain>
  );
};

export default ProductDetail;
