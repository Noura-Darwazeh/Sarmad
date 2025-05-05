import React from "react";
import { FavGrid, MadeByUs } from "../components";
import styled from "styled-components";

export const FavPage = () => {
  return (
    <Container>
      <MadeByUs />
      <h2>الأصول المحفوظة</h2>
      <GridContainer>
        <FavGrid title="الشغل الخاص بك" />
        <FavGrid title={"المفضلات"} isFav={true} />
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h2 {
    padding: 30px 173px;
    font-size: 60px;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  padding: 0 178px 120px 0;
  justify-content: flex-end;
`;
