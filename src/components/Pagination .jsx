import React, { useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100px;
  direction: rtl;
`;

const PageButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #9474d9; // بنفسجي فاتح
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background-color: #7c3aed;
  `}
`;

const Pagination = ({ setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => {
            setCurrentPage(i + 1);
            setPage(i + 1);
          }}
        >
          {i + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
