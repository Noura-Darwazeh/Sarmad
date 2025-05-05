import React from "react";
import styled from "styled-components";
import { CheckIconImg } from "../assets";

export const MadeByUs = () => {
  return (
    <Container>
      <Title>كل الأصول صنعت بواسطتنا</Title>
      <img src={CheckIconImg} />
    </Container>
  );
};

const Container = styled.div`
  gap: 7px;
  padding: 19px 0 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #bf77bf;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
`;
