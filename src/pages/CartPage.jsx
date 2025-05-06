import React from "react";
import styled from "styled-components";
import { CartItemCard, GlassDiv } from "../components";
import { SyrianMaleImg, FightingGirlImg } from "../assets";
import { useNavigate } from "react-router-dom";
export const CartPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <GlassDiv topPadding="30px" width="25.7vw" height="827px">
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
      </GlassDiv>
      <GlassDiv topPadding="50px" width="47vw" height="827px">
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
      </GlassDiv>
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

const SummaryItemContainer = styled.div`
  display: flex;
  padding: 20px 24px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.hasBorder ? " 1px solid #8a008a" : "none"};
`;
