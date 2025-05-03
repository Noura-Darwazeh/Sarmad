import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

const FooterContainer = styled.div`
  max-width: 100vw;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #333;
`;
