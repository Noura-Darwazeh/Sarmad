import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../components";

export const MainLayout = ({ PageToView }) => {
  return (
    <Container>
      <Navbar />
      <PageToView />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;
