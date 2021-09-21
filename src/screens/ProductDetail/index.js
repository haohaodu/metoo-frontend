/** @format */

import React, { useEffect, useState } from "react";
import store from "store";
import Rating from "@mui/material/Rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";

import SnackBar from "components/SnackBar";
import ReviewModal from "components/ReviewModal";
import Slide from "@mui/material/Slide";
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

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const ProductDetail = () => {
  const [product, setProduct] = useState(exampleProduct);
  const [rating, setRating] = useState(2.5);
  const [showReviews, setShowReviews] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [reviewRating, setReviewRating] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const { name, id, price, width, length, height, stock, reviews } = product;
  const history = useHistory();

  useEffect(() => {
    let tempRating = 0;
    if (product.reviews.length !== 0) {
      reviews.map(({ rating }) => (tempRating += rating));
      setRating(() => tempRating / reviews.length);
    }

    if (store.get("currProduct")) setProduct(store.get("currProduct"));
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    setTransition(() => TransitionDown);
    setOpenSnackBar(true);
  };

  const submitReview = async () => {
    await axios
      .post("/review", {
        productId: product.id,
        rating: reviewRating,
      })
      .then(({ data: { message } }) => console.log("Success! ", message))
      .catch((e) => console.log("error params: ", e.message.params));
    handleClose();
  };

  return (
    <DetailsMain>
      <DetailsContainer>
        <LeftColumn></LeftColumn>
        <RightColumn>
          <Section>
            <Row>
              <ArrowBackIcon
                onClick={() => history.goBack()}
                fontSize={"large"}
                style={{ cursor: `pointer` }}
              />
              <HeaderThree>{name}</HeaderThree>
            </Row>
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
            <Button variant="contained" onClick={() => setOpenModal(true)}>
              Leave a Review
            </Button>
          </Row>

          <BorderedSection>
            {showReviews &&
              reviews.length !== 0 &&
              reviews.map(({ id, rating }) => (
                <HeaderFive key={id}>
                  Annon rated Product Name {rating * 2} out of 10 stars
                </HeaderFive>
              ))}
          </BorderedSection>
        </RightColumn>
      </DetailsContainer>
      {openModal && (
        <ReviewModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          name={name}
          rating={reviewRating}
          setRating={setReviewRating}
          handleSubmit={submitReview}
        />
      )}

      <SnackBar
        success="Review successfully posted 🥳"
        error="Mandatory information not filled out."
        severity={"success"}
        handleClose={() => setOpenSnackBar(false)}
        open={openSnackBar}
        transition={transition}
      />
    </DetailsMain>
  );
};

export default ProductDetail;
