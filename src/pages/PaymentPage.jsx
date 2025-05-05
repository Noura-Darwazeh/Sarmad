import React from "react";
import styled from "styled-components";
import { PaymentFrameImg, CartItemsImg } from "../assets";

export const PaymentPage = () => {
  return (
    <Container>
      <h1>إتمام الشراء</h1>
      <DetailsContainer>
        <FormContainer>
          <div style={{ gridArea: "firstName" }}>
            <p>الاسم الأول</p>
            <input type="text" placeholder="قيمة" />
          </div>
          <div style={{ gridArea: "lastName" }}>
            <p>الاسم الأخير</p>
            <input type="text" placeholder="قيمة" />
          </div>
          <div style={{ gridArea: "email" }}>
            <p>البريد الإلكتروني</p>
            <input type="email" placeholder="قيمة" />
          </div>
          <div style={{ gridArea: "mobile" }}>
            <p>رقم الهاتف</p>
            <input type="tel" placeholder="قيمة" />
          </div>
        </FormContainer>
        <h2>كيف تود الدفع؟</h2>
        <img src={PaymentFrameImg} alt="payment" />
        <button>إرسال</button>
        <SummaryContainer>
          <h2>سلة التسوق</h2>
          <span>٢ عناصر</span>
          <img src={CartItemsImg} alt="cart items" />
          <div>
            <h2>$٦٢,٠٠</h2>
            <span>الإجمالي :</span>
          </div>
        </SummaryContainer>
      </DetailsContainer>
    </Container>
  );
};

const Container = styled.div`
  gap: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    padding-bottom: 5px;
    width: 58vw;
    text-align: center;
    font-size: 60px;
    border-bottom: 1px solid rgb(255, 255, 255);
  }
`;

const DetailsContainer = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 390px;
  padding: 95px 70px 45px 70px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(70px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(166, 112, 255, 0.7) 0%,
      rgba(166, 112, 255, 0) 54%,
      rgba(166, 112, 255, 0.7) 100%
    );
    pointer-events: none;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
  }
  img {
    width: 100%;
    margin-top: 8px;
  }
  button {
    width: 308px;
    height: 64px;
    margin-top: -48px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px 82px;
  margin-bottom: 75px;
  grid-template-areas:
    "lastName firstName"
    "email mobile";
  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
  input {
    text-align: right;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: transparent;
    font-size: 14px;
    color: white;
    font-family: "Almarai", sans-serif;
    outline: none;
    &::placeholder {
      width: 100%;
      color: #b3b3b3;
      text-align: right;
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 52px;
  padding: 21px 27px 0 27px;
  border-radius: 8px;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #5a40ad;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  h2 {
    font-weight: 700;
    margin-bottom: 14px;
  }
  span {
    direction: rtl;
    font-size: 15px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    margin-bottom: 14px;
  }
  img {
    width: 183px;
    padding: 2px 0;
  }
  div {
    gap: 10px;
    padding: 7px;
    display: flex;
    width: 100%;
    border-top: 5px solid rgb(255, 255, 255);
    align-items: center;
  }
`;
