import React from "react";
import styled from "styled-components";
import { CartItemFrameImg, xIconImg } from "../assets";
export const CartItemCard = ({ image, title, width, height }) => {
  return (
    <Container>
      <DetailsContainer>
        <p style={{ marginTop: "50px" }}>{title}</p>
        <div>
          <img src={xIconImg} alt="remove" />
          <p>٣٠,٠٠$ </p>
        </div>
      </DetailsContainer>
      <ImageContainer>
        <img
          src={CartItemFrameImg}
          style={{
            gridArea: "image",
            width: "135px",
            height: "125px",
            objectFit: "cover",
          }}
        />
        <img
          src={image}
          style={{
            gridArea: "image",
            width: width,
            height: height,
            objectFit: "cover",
          }}
        />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  gap: 12px;
  display: flex;
  height: 145px;
  width: calc(100% - 16px);
  margin-inline: 8px;
  margin-bottom: 24px;
  padding-inline: 19px;
  border-bottom: 1px solid #8a008a;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div {
    gap: 20px;
    display: flex;
    margin-top: auto;
    margin-bottom: 14px;
    align-items: center;
    img {
      cursor: pointer;
      width: 39px;
      height: 31px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 19px;
  img:first-child {
    position: relative;
    z-index: 1;
  }

  img:last-child {
    position: absolute;
    z-index: 2;
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;
