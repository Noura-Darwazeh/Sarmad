import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return <Nav>{/* Add your navbar content here */}</Nav>;
};

const Nav = styled.nav`
  max-width: 100vw;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #333;
`;
