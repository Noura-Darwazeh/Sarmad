import React from "react";
import styled from "styled-components";
import { CartItemCard } from "../components/CartItemCard";
import { SyrianMaleImg, FightingGirlImg } from "../assets";
import { useNavigate } from "react-router-dom";
export const CartPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Column topPadding="30px" width="25.7vw">
        <h2 style={{ marginBottom: "32px", marginInline: "24px" }}>
          ملخص الطلب
        </h2>
        <SummaryItemContainer hasBorder={true}>
          <p>٦٠,٠٠$</p>
          <p>المجموع الفرعي</p>
        </SummaryItemContainer>
        <SummaryItemContainer hasBorder={true}>
          <p>٢,٠٠$</p>
          <p>الضريبة</p>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <p>٦٢,٠٠$ </p>
          <p style={{ fontWeight: "bold" }}>المجموع</p>
        </SummaryItemContainer>
        <button style={{ marginTop: "12px" }} onClick={() => navigate("/pay")}>
          المتابعة إلى الدفع
        </button>
      </Column>
      <Column topPadding="50px" width="47vw">
        <h1 style={{ marginBottom: "35px", marginInline: "25px" }}>
          سلة التسوق
        </h1>
        <CartItemCard
          title={"شخصية الرجل السوري"}
          image={SyrianMaleImg}
          width="30px"
          height="75px"
        />
        <CartItemCard
          title={"شخصية البنت المحاربة"}
          image={FightingGirlImg}
          width="auto"
          height="80px"
        />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  gap: 38px;
  display: flex;
  padding: 80px 10vw;
  justify-content: center;
  h1 {
    font-size: 60px;
    font-weight: 700;
  }
  h2 {
    font-size: 34px;
    font-weight: 700;
  }
  p {
    direct: rtl;
    font-size: 24px;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;
const Column = styled.div`
  width: ${(props) => props.width};
  padding-top: ${(props) => props.topPadding};
  height: calc(827px - ${(props) => props.topPadding}) !important;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.5);
  button {
    height: 64px;
    width: 20.6vw;
    border-radius: 10px;
    margin-inline: auto;
  }
`;
const SummaryItemContainer = styled.div`
  display: flex;
  padding: 20px 24px;
  width: calc(100% - 48px);
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.hasBorder ? " 1px solid #8a008a" : "none"};
`;
