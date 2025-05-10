import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = ({ pages }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const currentIndex = pages.findIndex((path) => currentPath.includes(path));

  const handleClick = (index) => {
    navigate(`/${pages[index]}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      {pages.map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#9474d9",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
